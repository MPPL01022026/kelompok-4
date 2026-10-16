(() => {
  const $ = (selector) => document.querySelector(selector);
  const galleryGrid = $("#galleryGrid");
  const galleryStatus = $("#galleryStatus");
  const adminStatus = $("#adminStatus");
  const loginForm = $("#loginForm");
  const uploadPanel = $("#uploadPanel");
  const uploadForm = $("#uploadForm");
  const config = window.BAKSO_SUPABASE_CONFIG || {};
  const configured = config.url && config.anonKey &&
    !config.url.includes("YOUR_PROJECT_ID") &&
    !config.anonKey.includes("YOUR_SUPABASE");
  const client = configured && window.supabase
    ? window.supabase.createClient(config.url, config.anonKey)
    : null;

  $("#year").textContent = new Date().getFullYear();
  const menuToggle = $("#menuToggle");
  const mainNav = $("#mainNav");

  function closeMobileNav() {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  }

  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });

  mainNav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      closeMobileNav();
      if (!target) return;
      // Pastikan klik menu benar-benar menuju bagian yang ada.
      event.preventDefault();
      history.replaceState(null, "", targetId);
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      target.focus({ preventScroll: true });
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMobileNav();
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 621px)").matches) closeMobileNav();
  });

  function setGalleryMessage(message) {
    galleryStatus.textContent = message;
  }
  function escapeText(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);
  }
  function renderGallery(items) {
    galleryGrid.replaceChildren();
    if (!items.length) {
      setGalleryMessage("Belum ada foto. Pengelola dapat masuk untuk menambahkan foto pertama.");
      return;
    }
    setGalleryMessage(`${items.length} foto ditampilkan.`);
    items.forEach(item => {
      const card = document.createElement("article");
      card.className = "gallery-card";
      const img = document.createElement("img");
      img.src = item.image_url;
      img.alt = item.title || "Foto menu Bakso Jambo";
      img.loading = "lazy";
      img.onerror = () => { img.alt = "Foto tidak dapat dimuat"; };
      const caption = document.createElement("div");
      caption.className = "gallery-caption";
      const title = document.createElement("h3");
      title.textContent = item.title || "Foto Bakso";
      const description = document.createElement("p");
      description.textContent = item.description || "";
      caption.append(title, description);
      card.append(img, caption);
      galleryGrid.append(card);
    });
  }
  async function loadGallery() {
    if (!client) {
      setGalleryMessage("Galeri belum tersambung karena konfigurasi Supabase belum diisi. Isi URL proyek dan publishable/anon key di js/supabase.js, lalu ikuti docs/project-setup.md untuk menyiapkan tabel dan Storage.");
      return;
    }
    const { data, error } = await client.from("gallery_photos")
      .select("id,title,description,image_url,created_at")
      .order("created_at", { ascending: false });
    if (error) {
      console.error(error);
      setGalleryMessage("Galeri gagal dimuat. Periksa koneksi, tabel gallery_photos, serta kebijakan akses (RLS) di Supabase.");
      return;
    }
    renderGallery(data || []);
  }
  async function updateAdminUI() {
    if (!client) return;
    const { data: { session } } = await client.auth.getSession();
    loginForm.hidden = Boolean(session);
    uploadPanel.hidden = !session;
    if (session) $("#signedInMessage").textContent = `Masuk sebagai ${session.user.email}`;
  }
  loginForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!client) {
      adminStatus.textContent = "Supabase belum dikonfigurasi. Ikuti panduan di docs/project-setup.md.";
      return;
    }
    adminStatus.textContent = "Sedang masuk…";
    const { error } = await client.auth.signInWithPassword({
      email: $("#adminEmail").value.trim(),
      password: $("#adminPassword").value
    });
    if (error) {
      adminStatus.textContent = "Gagal masuk. Periksa akun pengelola dan pengaturan Supabase Auth.";
      return;
    }
    $("#adminPassword").value = "";
    adminStatus.textContent = "Berhasil masuk.";
    await updateAdminUI();
  });
  $("#logoutButton").addEventListener("click", async () => {
    if (!client) return;
    const { error } = await client.auth.signOut();
    adminStatus.textContent = error ? "Tidak dapat keluar. Coba lagi." : "Kamu sudah keluar.";
    await updateAdminUI();
  });
  uploadForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!client) return;
    const file = $("#photoFile").files[0];
    const title = $("#photoTitle").value.trim();
    const description = $("#photoDescription").value.trim();
    if (!file) { adminStatus.textContent = "Pilih foto terlebih dahulu."; return; }
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(file.type)) { adminStatus.textContent = "Format file harus JPG, PNG, atau WebP."; return; }
    if (file.size > 5 * 1024 * 1024) { adminStatus.textContent = "Ukuran foto maksimal 5 MB."; return; }
    const { data: { session } } = await client.auth.getSession();
    if (!session) { adminStatus.textContent = "Silakan masuk sebagai pengelola terlebih dahulu."; await updateAdminUI(); return; }
    adminStatus.textContent = "Mengunggah foto…";
    const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]/g, "-");
    const path = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;
    const { error: storageError } = await client.storage.from("bakso-photos").upload(path, file, {
      cacheControl: "3600", upsert: false, contentType: file.type
    });
    if (storageError) {
      console.error(storageError);
      adminStatus.textContent = "Foto gagal diunggah. Periksa bucket dan kebijakan Storage.";
      return;
    }
    const { data: publicData } = client.storage.from("bakso-photos").getPublicUrl(path);
    const { error: insertError } = await client.from("gallery_photos").insert({
      title, description: description || null, image_url: publicData.publicUrl,
      storage_path: path, uploaded_by: session.user.id
    });
    if (insertError) {
      console.error(insertError);
      adminStatus.textContent = "Foto tersimpan di Storage, tetapi gagal dicatat di galeri. Periksa kebijakan tabel.";
      return;
    }
    uploadForm.reset();
    adminStatus.textContent = "Foto berhasil diunggah dan akan terlihat oleh semua pengunjung.";
    await loadGallery();
  });
  if (client) {
    client.auth.onAuthStateChange(() => { updateAdminUI(); });
    updateAdminUI();
  } else {
    loginForm.hidden = false;
    uploadPanel.hidden = true;
  }
  loadGallery();
})();
