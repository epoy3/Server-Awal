// Menjalankan skrip setelah seluruh DOM (HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

  // === BANK GAMBAR ===
  // PERHATIAN: Link i.ibb.co.com Anda rusak/salah domain.
  // Saya ganti dengan placeholder. Ganti dengan URL gambar Anda yang valid.
  const imageUrls = [
    "https://placehold.co/800x400/8C1C1E/white?text=Gambar+Kampus+1",
    "https://placehold.co/800x400/A32629/white?text=Gambar+Kampus+2",
    "https://placehold.co/800x400/2c0e0e/white?text=Gambar+Kampus+3",
    "https://placehold.co/800x400/8C1C1E/white?text=Gambar+Kampus+4",
    "https://placehold.co/800x400/A32629/white?text=Gambar+Kampus+5",
    "https://placehold.co/800x400/2c0e0e/white?text=Gambar+Kampus+6",
    // Ini adalah perbaikan sintaks: Koma yang hilang telah ditambahkan di bawah
    "https://placehold.co/800x400/8C1C1E/white?text=Gambar+Kampus+7"
  ];

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }
  
  // === KONTEN DINAMIS ===
  // Menggunakan 'IMAGE_PLACEHOLDER' agar bisa diganti setiap kali konten dimuat
  const pageContent = {
    'profil': `
      <section class="hero-banner" aria-labelledby="hero-title" style="margin-bottom: 30px;">
        <div style="flex: 1;">
            <h1 id="hero-title"><i class="fas fa-star" style="color: var(--univrab-yellow-accent); margin-right: 10px;"></i> Kedokteran Raih Akreditasi UNGGUL</h1>
            <p>Universitas Abdurrab Gelar Doa Bersama dan Syukuran atas pencapaian Akreditasi UNGGUL untuk Program Studi Pendidikan Dokter.</p>
        </div>
        <div class="hero-banner-info">
            <div class="status">UNGGUL</div><br>
            <small>09 JUNI 2025</small>
        </div>
      </section>
      
      <h2><i class="fas fa-history"></i> Sejarah & Visi Misi Universitas Abdurrab</h2>
      <div class="clearfix">
        <div class="content-image-wrapper image-float-left">
          <img src="IMAGE_PLACEHOLDER" alt="Gedung Rektorat Abdurrab" class="content-image">
        </div>
        <h3>Sejarah Singkat</h3>
        <p>Universitas Abdurrab (UNIVRAB) berkedudukan di Jl. Riau Ujung No. 73 Pekanbaru. Cikal-bakalnya dimulai dari Chest Clinic pada tahun 1979 yang kemudian berkembang menjadi Rumah Sakit Prof. Dr. H. Tabrani Rab.</p>
        <p>Pada tahun 1983 lahir Yayasan Abdurrab Pekanbaru... (dst)</p>
        <a href="https://univrab.ac.id/profil/" class="cta-button" style="background: var(--univrab-blue); margin-top: 10px; margin-bottom: 20px; font-size: 0.9rem; text-transform: none;"><i class="fas fa-arrow-right"></i> Baca Profil Lengkap</a>
      </div>
      <div style="margin-top: 30px;" class="clearfix">
        <h3><i class="fas fa-eye"></i> Visi Universitas (2045)</h3>
        <blockquote style="font-size: 1.1rem; font-style: italic; border-left: 5px solid var(--univrab-red); padding-left: 15px; background: #fff0f0; padding: 15px; border-radius: 4px;">
          "Menjadi Universitas Professional berlandaskan Nilai-Nilai Rabbani, Amanah, dan Beradab (RAB) Menuju Kelas International pada Tahun 2045."
        </blockquote>
        <h3><i class="fas fa-list-ul"></i> Misi Utama</h3>
        <ul>
          <li>Melaksanakan Catur Dharma Perguruan Tinggi (Pendidikan, Penelitian, Pengabdian, dan Nilai-nilai RAB).</li>
          <li>Melaksanakan pendidikan untuk memajukan IPTEKS dengan nilai-nilai RAB.</li>
          <li>Melaksanakan penelitian yang kreatif, inovatif, dan berorientasi produk untuk kesejahteraan ummat.</li>
          <li>Melaksanakan pengabdian masyarakat dari hasil-hasil penelitian.</li>
        </ul>
      </div>
      <section class="statistic-grid" aria-label="Statistik Universitas Abdurrab" style="margin-top: 40px;">
        <h2 style="color: var(--univrab-text-accent); border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0; width: 100%; grid-column: 1 / -1; font-size: 1.8rem;"><i class="fas fa-chart-bar"></i> Data Statistik Kampus</h2>
        <div class="stat-block"><div class="icon"><i class="fas fa-user-graduate"></i></div><div class="number">3107</div><div class="label">Mahasiswa Aktif</div></div>
        <div class="stat-block"><div class="icon"><i class="fas fa-graduation-cap"></i></div><div class="number">8255</div><div class="label">Alumni Sukses</div></div>
        <div class="stat-block"><div class="icon"><i class="fas fa-building"></i></div><div class="number">4</div><div class="label">Fakultas Terbaik</div></div>
        <div class="stat-block"><div class="icon"><i class="fas fa-laptop-code"></i></div><div class="number">15</div><div class="label">Program Studi</div></div>
      </section>
    `,
    'penerimaan': `
      <h2><i class="fas fa-bullhorn"></i> Penerimaan Mahasiswa Baru</h2>
      <p style="font-size: 1.1rem; font-weight: 500;">Assalamu’alaikum Wr Wb. Segera bergabung dengan Universitas Abdurrab. Kuota di beberapa Program Studi Unggulan (terutama Kedokteran) sangat terbatas.</p>
      <div style="display: flex; gap: 20px; margin-bottom: 30px; flex-wrap: wrap; margin-top: 20px;">
        <a href="https://admisi.univrab.ac.id" target="_blank" class="cta-button" style="background: var(--univrab-red); flex: 1; min-width: 250px; justify-content: center;"><i class="fas fa-arrow-alt-circle-right"></i> Daftar Online Sekarang</a>
        <a href="tel:08116900026" class="cta-button" style="background: var(--univrab-green); flex: 1; min-width: 250px; justify-content: center;"><i class="fab fa-whatsapp"></i> Hubungi Panitia (WA)</a>
      </div>
      <div class="content-image-wrapper" style="margin-top: 30px;">
        <img src="IMAGE_PLACEHOLDER" alt="Poster Pendaftaran Mahasiswa Baru" class="content-image">
      </div>
      <div class="pmb-info-grid">
        <div class="info-card">
          <h3><i class="fas fa-file-alt"></i> <span>Dokumen PMB</span></h3>
          <ul>
            <li><a href="https.../view?usp=sharing" target="_blank"><i class="fas fa-file-pdf"></i> Form Pernyataan Maba</a></li>
            <li><a href="https://admisi.univrab.ac.id/biaya/perkuliahan" target="_blank"><i class="fas fa-wallet"></i> Rincian Biaya Kuliah 2026/2027</a></li>
            <li><a href="https.../view?usp=sharing" target="_blank"><i class="fas fa-stream"></i> Alur Pendaftaran</a></li>
          </ul>
        </div>
        <div class="info-card">
          <h3><i class="fas fa-graduation-cap"></i> <span>Fakultas Pilihan</span></h3>
          <ul style="list-style: none; padding-left: 0;">
            <li style="font-weight: 700; color: var(--univrab-text-accent); margin-bottom: 8px;"><i class="fas fa-heartbeat"></i> FAKULTAS KEDOKTERAN</li>
            <li style="font-weight: 700; color: var(--univrab-text-accent); margin-bottom: 8px;"><i class="fas fa-pills"></i> FARMASI & KESEHATAN</li>
            <li style="font-weight: 700; color: var(--univrab-text-accent); margin-bottom: 8px;"><i class="fas fa-cog"></i> FAKULTAS TEKNIK</li>
            <li style="font-weight: 700; color: var(--univrab-text-accent); margin-bottom: 8px;"><i class="fas fa-brain"></i> FAKULTAS PSIKOSOSPOL</li>
          </ul>
        </div>
      </div>
    `,
    'perkuliahan': `
      <h2><i class="fas fa-graduation-cap"></i> Program Studi dan Informasi Akademik</h2>
      <div style="margin-bottom: 20px;">
        <a href="#siakad" data-page="siakad" class="cta-button" style="background: var(--univrab-blue); margin-right: 10px; padding: 10px 20px; text-transform: none;"><i class="fas fa-tachometer-alt"></i> Akses SIAKAD</a>
        <a href="#spada" data-page="spada" class="cta-button" style="background: var(--univrab-green); padding: 10px 20px; text-transform: none;"><i class="fas fa-chalkboard"></i> Akses SPADA</a>
      </div>
      <p>Universitas Abdurrab memiliki 4 Fakultas dengan 15 Program Studi pilihan yang telah terakreditasi UNGGUL dan BAIK SEKALI oleh LAM-PTKes dan BAN-PT.</p>
      
      <div class="content-image-wrapper image-float-right">
        <img src="IMAGE_PLACEHOLDER" alt="Suasana Perkuliahan" class="content-image">
      </div>
      
      <h3><i class="fas fa-heartbeat"></i> Fakultas Kedokteran (FK)</h3>
      <ul>
        <li>Pendidikan Dokter (S1) - <strong>Akreditasi UNGGUL</strong></li>
        <li>Profesi Dokter (Profesi) - <strong>Akreditasi UNGGUL</strong></li>
      </ul>
      
      <h3><i class="fas fa-pills"></i> Fakultas Farmasi & Kesehatan (FarKes)</h3>
      <ul>
        <li>Farmasi (S1)</li>
        <li>Kebidanan (S1)</li>
        <li>Profesi Bidan (Profesi)</li>
        <li>Administrasi Rumah Sakit (S1)</li>
      </ul>
      
      <h3><i class="fas fa-brain"></i> Fakultas Psikologi & Sosial Politik (PsikoSospol)</h3>
      <ul>
        <li>Psikologi (S1)</li>
        <li>Hubungan Internasional (S1)</li>
        <li>Ilmu Pemerintahan (S1)</li>
      </ul>

      <h3><i class="fas fa-cog"></i> Fakultas Teknik (FT)</h3>
      <ul>
        <li>Teknik Informatika (S1)</li>
        <li>Teknik Sipil (S1)</li>
        <li>Teknik Mesin (S1)</li>
      </ul>
    `,
    'siakad': `
      <section class="system-block" aria-labelledby="siakad-title">
        <h2 id="siakad-title"><i class="fas fa-user-shield"></i> SIAKAD - Sistem Informasi Akademik</h2>
        <p>SIAKAD (Sistem Informasi Akademik) adalah portal terintegrasi untuk mahasiswa dan dosen Universitas Abdurrab. Mahasiswa dapat mengelola Kartu Rencana Studi (KRS), melihat hasil studi (KHS), dan mengakses informasi akademik penting lainnya.</p>
        <a href="https://siakad.univrab.ac.id/login" target="_blank" class="cta-button"><i class="fas fa-sign-in-alt"></i> Login ke SIAKAD</a>
      </section>
    `,
    'spada': `
      <section class="system-block spada-block" aria-labelledby="spada-title">
        <h2 id="spada-title"><i class="fas fa-laptop-house"></i> SPADA - Sistem Pembelajaran Daring</h2>
        <p>SPADA (Sistem Pembelajaran Daring) adalah platform e-learning resmi Universitas Abdurrab. SPADA digunakan untuk mendukung proses belajar mengajar secara online, penyampaian materi, tugas, dan kuis interaktif.</p>
        <a href="https://spada.univrab.ac.id/" target="_blank" class="cta-button"><i class="fas fa-sign-in-alt"></i> Akses Portal SPADA</a>
      </section>
    `,
    'portal_dokumen': `
      <h2><i class="fas fa-folder-open"></i> Portal & Dokumen</h2>
      <p>Temukan dokumen penting, panduan akademik, dan tautan portal terkait Universitas Abdurrab.</p>
      <div class="pmb-info-grid">
        <div class="info-card">
          <h3><i class="fas fa-link"></i> <span>Portal Internal</span></h3>
          <ul>
            <li><a href="https://siakad.univrab.ac.id" target="_blank"><i class="fas fa-user-graduate"></i> SIAKAD Mahasiswa</a></li>
            <li><a href="https://spada.univrab.ac.id" target="_blank"><i class="fas fa-laptop"></i> SPADA E-Learning</a></li>
            <li><a href="https://kemahasiswaan.univrab.ac.id" target="_blank"><i class="fas fa-users"></i> Portal Kemahasiswaan</a></li>
          </ul>
        </div>
        <div class="info-card">
          <h3><i class="fas fa-book"></i> <span>Penelitian</span></h3>
          <ul>
            <li><a href="https://jurnal.univrab.ac.id" target="_blank"><i class="fas fa-journal-whills"></i> OJS Jurnal UNIVRAB</a></li>
            <li><a href="https://lppm.univrab.ac.id" target="_blank"><i class="fas fa-flask"></i> LPPM UNIVRAB</a></li>
            <li><a href="https://repository.univrab.ac.id" target="_blank"><i class="fas fa-archive"></i> Repositori Institusi</a></li>
          </ul>
        </div>
      </div>
    `
  };
  
  // === LOGIKA NAVIGASI SPA ===
  
  const mainContent = document.getElementById('main-content');
  const navLinksContainer = document.querySelector('.nav-links');
  const footerLinks = document.querySelectorAll('.footer-column a[data-page]');

  // Fungsi untuk memuat konten
  function loadContent(pageId) {
    // Tampilkan spinner saat memuat
    mainContent.innerHTML = `
      <div class="loading">
        <div class="spinner" role="status">
          <span class="sr-only">Memuat konten...</span>
        </div>
        Memuat...
      </div>`;

    // Ambil konten, fallback ke 'profil' jika tidak ada
    let content = pageContent[pageId] || pageContent['profil'];
    
    // Ganti semua placeholder gambar dengan gambar acak baru
    // Menggunakan RegExp /g (global) untuk mengganti semua instance
    content = content.replace(/IMAGE_PLACEHOLDER/g, getRandomImage());
    
    // Set timeout singkat untuk mensimulasikan pemuatan dan agar spinner terlihat
    setTimeout(() => {
      mainContent.innerHTML = content;
      setActiveLink(pageId || 'profil');
      window.scrollTo(0, 0); // Gulir ke atas halaman
    }, 250); // 0.25 detik
  }

  // Fungsi untuk menyorot link navigasi yang aktif
  function setActiveLink(pageId) {
    const allLinks = document.querySelectorAll('.nav-links a[data-page]');
    allLinks.forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Fungsi untuk menangani klik pada navigasi (header & footer)
  function handleNavClick(event, container) {
    const clickedLink = event.target.closest('a');
    
    // Jika bukan link atau tidak punya data-page (link eksternal), biarkan
    if (!clickedLink || !clickedLink.dataset.page) {
      return;
    }
    
    // Jika link internal, cegah perilaku default
    event.preventDefault();
    const pageId = clickedLink.dataset.page;
    
    // Perbarui hash di URL, yang akan memicu 'hashchange'
    window.location.hash = pageId;
  }
  
  // Fungsi yang dipanggil saat hash URL berubah (atau saat awal dimuat)
  function handleHashChange() {
    const pageId = window.location.hash.substring(1); // Hapus '#'
    loadContent(pageId || 'profil'); // Muat 'profil' jika hash kosong
  }

  // ===INISIALISASI ===

  // 1. Set tahun di footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // 2. Tambahkan event listener untuk klik di navigasi header
  navLinksContainer.addEventListener('click', (e) => handleNavClick(e, navLinksContainer));
  
  // 3. Tambahkan event listener untuk klik di link footer
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => handleNavClick(e, link.closest('.footer-column')));
  });
  
  // 4. Tambahkan event listener untuk perubahan hash (navigasi back/forward)
  window.addEventListener('hashchange', handleHashChange);
  
  // 5. Muat konten awal berdasarkan hash URL saat halaman dibuka
  handleHashChange(); 

});
