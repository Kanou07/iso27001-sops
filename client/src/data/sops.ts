export interface SOP {
  id: string;
  title: string;
  category: string;
  description: string;
  lastReviewed: string;
  status: 'compliant' | 'review-needed' | 'non-compliant';
  completionPercentage: number;
  content: string;
  sections: SOPSection[];
}

export interface SOPSection {
  id: string;
  title: string;
  content: string;
}

export const sopCategories = [
  { id: 'governance', name: 'Governance & Policy', icon: 'Shield' },
  { id: 'risk', name: 'Risk Management', icon: 'AlertTriangle' },
  { id: 'access', name: 'Access Control', icon: 'Lock' },
  { id: 'incident', name: 'Incident Management', icon: 'AlertCircle' },
  { id: 'awareness', name: 'Awareness & Training', icon: 'BookOpen' },
  { id: 'operations', name: 'Operations Security', icon: 'Cog' },
];

export const sops: SOP[] = [
  {
    id: 'sop-001',
    title: 'Kebijakan Keamanan Informasi',
    category: 'governance',
    description: 'Kerangka kerja dan prinsip-prinsip dasar pengelolaan keamanan informasi di organisasi',
    lastReviewed: '2026-04-15',
    status: 'compliant',
    completionPercentage: 100,
    content: `# Kebijakan Keamanan Informasi (Information Security Policy)

## 1. Tujuan

SOP ini bertujuan untuk menetapkan kerangka kerja dan prinsip-prinsip dasar dalam pengelolaan keamanan informasi di organisasi, sesuai dengan persyaratan ISO/IEC 27001:2022. Kebijakan ini memastikan perlindungan aset informasi dari segala bentuk ancaman, baik internal maupun eksternal, disengaja maupun tidak disengaja.

## 2. Ruang Lingkup

Kebijakan ini berlaku untuk seluruh karyawan, kontraktor, pihak ketiga, dan semua pihak yang memiliki akses ke aset informasi organisasi, termasuk sistem informasi, data, dan fasilitas fisik.

## 3. Definisi

- **Keamanan Informasi:** Perlindungan kerahasiaan, integritas, dan ketersediaan informasi.
- **Aset Informasi:** Segala sesuatu yang memiliki nilai bagi organisasi dan terkait dengan informasi, seperti data, sistem, perangkat lunak, perangkat keras, dan layanan.
- **ISMS (Information Security Management System):** Sistem manajemen yang didasarkan pada pendekatan risiko bisnis untuk menetapkan, menerapkan, mengoperasikan, memantau, meninjau, memelihara, dan meningkatkan keamanan informasi.

## 4. Kebijakan Umum

Organisasi berkomitmen untuk melindungi kerahasiaan informasi dari akses yang tidak sah, menjaga integritas informasi agar tetap akurat dan lengkap, memastikan ketersediaan informasi bagi pihak yang berwenang saat dibutuhkan, dan mematuhi semua persyaratan hukum, peraturan, dan kontrak yang berlaku terkait keamanan informasi.

## 5. Tanggung Jawab

- **Manajemen Puncak:** Bertanggung jawab penuh atas penetapan, implementasi, dan pemeliharaan ISMS
- **Manajer Keamanan Informasi:** Mengelola ISMS dan memantau kepatuhan
- **Seluruh Karyawan:** Memahami dan mematuhi kebijakan keamanan informasi`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Menetapkan kerangka kerja keamanan informasi sesuai ISO 27001:2022' },
      { id: 'sec-2', title: 'Ruang Lingkup', content: 'Berlaku untuk semua karyawan, kontraktor, dan pihak ketiga' },
      { id: 'sec-3', title: 'Definisi Kunci', content: 'Keamanan Informasi, Aset Informasi, ISMS' },
    ],
  },
  {
    id: 'sop-002',
    title: 'Penilaian dan Penanganan Risiko',
    category: 'risk',
    description: 'Prosedur untuk mengidentifikasi, menganalisis, dan menangani risiko keamanan informasi',
    lastReviewed: '2026-03-20',
    status: 'compliant',
    completionPercentage: 95,
    content: `# Penilaian dan Penanganan Risiko Keamanan Informasi

## 1. Tujuan

Prosedur ini bertujuan untuk menetapkan metodologi sistematis dalam mengidentifikasi, menganalisis, mengevaluasi, dan menangani risiko keamanan informasi yang dihadapi organisasi.

## 2. Ruang Lingkup

Prosedur ini berlaku untuk semua aset informasi, proses bisnis, dan sistem yang dikelola oleh organisasi.

## 3. Metodologi Penilaian Risiko

### 3.1 Identifikasi Risiko
Mengidentifikasi semua aset informasi yang relevan, mengidentifikasi ancaman potensial terhadap aset, dan mengidentifikasi kerentanan yang ada.

### 3.2 Analisis Risiko
Menentukan probabilitas terjadinya ancaman, menentukan dampak potensial jika ancaman terwujud, dan menghitung tingkat risiko.

### 3.3 Evaluasi Risiko
Membandingkan risiko yang teridentifikasi dengan kriteria penerimaan risiko dan menentukan prioritas penanganan risiko.

## 4. Penanganan Risiko

Organisasi dapat memilih salah satu dari empat strategi: Mitigasi, Penerimaan, Penghindaran, atau Transfer.`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Menetapkan metodologi penilaian risiko' },
      { id: 'sec-2', title: 'Identifikasi Risiko', content: 'Proses mengidentifikasi aset, ancaman, dan kerentanan' },
      { id: 'sec-3', title: 'Analisis Risiko', content: 'Perhitungan probabilitas dan dampak' },
    ],
  },
  {
    id: 'sop-003',
    title: 'Kontrol Akses dan Manajemen Identitas',
    category: 'access',
    description: 'Prosedur untuk mengelola akses pengguna, autentikasi, dan otorisasi',
    lastReviewed: '2026-05-01',
    status: 'review-needed',
    completionPercentage: 80,
    content: `# Kontrol Akses dan Manajemen Identitas

## 1. Tujuan

Prosedur ini bertujuan untuk memastikan bahwa hanya pengguna yang berwenang yang memiliki akses ke aset informasi dan sistem organisasi.

## 2. Prinsip Kontrol Akses

### 2.1 Principle of Least Privilege
Setiap pengguna diberikan akses minimum yang diperlukan untuk melaksanakan pekerjaan mereka.

### 2.2 Separation of Duties
Tugas-tugas kritis dipisahkan untuk mencegah penyalahgunaan.

### 2.3 Need-to-Know
Pengguna hanya memiliki akses ke informasi yang diperlukan untuk pekerjaan mereka.

## 3. Manajemen Identitas

- Pendaftaran pengguna baru dengan verifikasi identitas
- Pemberian hak akses berdasarkan peran
- Peninjauan akses berkala
- Penghapusan akses saat pengguna meninggalkan organisasi

## 4. Autentikasi

- Penggunaan kata sandi yang kuat dengan kompleksitas minimum
- Autentikasi multi-faktor untuk akses kritis
- Manajemen sesi yang aman
- Pencatatan upaya login yang gagal`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Memastikan akses hanya untuk pengguna yang berwenang' },
      { id: 'sec-2', title: 'Prinsip Kontrol', content: 'Least Privilege, Separation of Duties, Need-to-Know' },
      { id: 'sec-3', title: 'Manajemen Identitas', content: 'Pendaftaran, verifikasi, dan penghapusan akses' },
    ],
  },
  {
    id: 'sop-004',
    title: 'Manajemen Insiden Keamanan',
    category: 'incident',
    description: 'Prosedur untuk mendeteksi, melaporkan, dan merespons insiden keamanan informasi',
    lastReviewed: '2026-02-10',
    status: 'compliant',
    completionPercentage: 100,
    content: `# Manajemen Insiden Keamanan Informasi

## 1. Tujuan

Prosedur ini bertujuan untuk menetapkan proses terstruktur dalam mendeteksi, melaporkan, merespons, dan memulihkan diri dari insiden keamanan informasi.

## 2. Definisi Insiden

Insiden keamanan informasi adalah peristiwa atau rangkaian peristiwa yang tidak direncanakan atau tidak sah yang mengancam keamanan informasi atau sistem informasi.

## 3. Tahapan Manajemen Insiden

### 3.1 Deteksi dan Pelaporan
- Sistem monitoring untuk mendeteksi insiden
- Saluran pelaporan yang jelas untuk karyawan
- Dokumentasi insiden yang terdeteksi

### 3.2 Respons Awal
- Isolasi sistem yang terkena dampak
- Pengumpulan bukti
- Notifikasi kepada pihak yang relevan

### 3.3 Investigasi
- Analisis akar penyebab
- Penentuan dampak insiden
- Dokumentasi temuan

### 3.4 Pemulihan
- Pemulihan sistem ke kondisi normal
- Verifikasi bahwa sistem berfungsi dengan baik
- Komunikasi dengan pengguna

### 3.5 Pembelajaran dan Perbaikan
- Analisis insiden untuk pembelajaran
- Implementasi tindakan pencegahan
- Pembaruan prosedur jika diperlukan`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Menetapkan proses respons insiden' },
      { id: 'sec-2', title: 'Definisi Insiden', content: 'Peristiwa yang mengancam keamanan informasi' },
      { id: 'sec-3', title: 'Tahapan Respons', content: 'Deteksi, respons, investigasi, pemulihan, pembelajaran' },
    ],
  },
  {
    id: 'sop-005',
    title: 'Kesadaran dan Pelatihan Keamanan',
    category: 'awareness',
    description: 'Program untuk meningkatkan kesadaran karyawan tentang keamanan informasi',
    lastReviewed: '2026-04-05',
    status: 'compliant',
    completionPercentage: 90,
    content: `# Program Kesadaran dan Pelatihan Keamanan Informasi

## 1. Tujuan

Program ini bertujuan untuk meningkatkan kesadaran dan pengetahuan karyawan tentang pentingnya keamanan informasi dan tanggung jawab mereka dalam melindungi aset informasi organisasi.

## 2. Komponen Program

### 2.1 Pelatihan Inisial
Semua karyawan baru menerima pelatihan keamanan informasi dasar dalam 30 hari pertama.

### 2.2 Pelatihan Berkelanjutan
- Pelatihan tahunan untuk semua karyawan
- Pelatihan khusus untuk peran tertentu
- Pelatihan tentang ancaman keamanan terbaru

### 2.3 Kampanye Kesadaran
- Pengiriman pesan keamanan reguler
- Poster dan materi edukasi
- Simulasi phishing untuk meningkatkan kewaspadaan

## 3. Topik Pelatihan Kunci

- Kebijakan keamanan informasi organisasi
- Pengenalan ancaman (phishing, malware, social engineering)
- Praktik kata sandi yang aman
- Penanganan data sensitif
- Prosedur pelaporan insiden
- Kepatuhan terhadap peraturan privasi

## 4. Evaluasi Efektivitas

- Penilaian pasca-pelatihan
- Simulasi phishing
- Survei kesadaran
- Tingkat kepatuhan terhadap kebijakan`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Meningkatkan kesadaran keamanan karyawan' },
      { id: 'sec-2', title: 'Komponen Program', content: 'Pelatihan inisial, berkelanjutan, dan kampanye kesadaran' },
      { id: 'sec-3', title: 'Topik Pelatihan', content: 'Kebijakan, ancaman, kata sandi, data sensitif, pelaporan' },
    ],
  },
  {
    id: 'sop-006',
    title: 'Keamanan Operasional dan Backup',
    category: 'operations',
    description: 'Prosedur untuk memastikan keamanan operasional sistem dan perlindungan data melalui backup',
    lastReviewed: '2026-03-15',
    status: 'compliant',
    completionPercentage: 85,
    content: `# Keamanan Operasional dan Backup Data

## 1. Tujuan

Prosedur ini bertujuan untuk memastikan keamanan operasional sistem informasi dan perlindungan data melalui strategi backup dan disaster recovery yang efektif.

## 2. Keamanan Operasional

### 2.1 Manajemen Perubahan
- Semua perubahan sistem harus direncanakan dan diuji
- Dokumentasi perubahan yang jelas
- Persetujuan dari pihak yang berwenang sebelum implementasi

### 2.2 Manajemen Patch
- Identifikasi patch keamanan yang tersedia
- Pengujian patch sebelum deployment
- Penjadwalan deployment patch secara teratur

### 2.3 Monitoring dan Logging
- Pemantauan real-time terhadap sistem
- Pencatatan aktivitas sistem
- Analisis log untuk mendeteksi anomali

## 3. Strategi Backup

### 3.1 Frekuensi Backup
- Backup harian untuk data kritis
- Backup mingguan untuk data penting
- Backup bulanan untuk data arsip

### 3.2 Lokasi Penyimpanan
- Backup disimpan di lokasi yang berbeda dari sistem utama
- Enkripsi backup untuk melindungi kerahasiaan
- Kontrol akses terhadap backup

### 3.3 Pengujian Restore
- Pengujian restore backup secara berkala
- Dokumentasi hasil pengujian
- Perbaikan prosedur jika diperlukan`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Memastikan keamanan operasional dan perlindungan data' },
      { id: 'sec-2', title: 'Keamanan Operasional', content: 'Manajemen perubahan, patch, monitoring, dan logging' },
      { id: 'sec-3', title: 'Strategi Backup', content: 'Frekuensi, lokasi, enkripsi, dan pengujian restore' },
    ],
  },
  {
    id: 'sop-007',
    title: 'Klasifikasi dan Penanganan Data',
    category: 'governance',
    description: 'Prosedur untuk mengklasifikasi informasi dan menentukan tingkat perlindungan yang sesuai',
    lastReviewed: '2026-04-20',
    status: 'compliant',
    completionPercentage: 92,
    content: `# Klasifikasi dan Penanganan Data

## 1. Tujuan

Prosedur ini bertujuan untuk menetapkan sistem klasifikasi informasi yang jelas dan menentukan tingkat perlindungan yang sesuai berdasarkan sensitivitas dan nilai informasi.

## 2. Tingkat Klasifikasi

### 2.1 Publik
Informasi yang dapat dibagikan kepada publik tanpa risiko keamanan atau bisnis.

### 2.2 Internal
Informasi yang hanya untuk penggunaan internal organisasi.

### 2.3 Rahasia
Informasi sensitif yang memerlukan perlindungan khusus.

### 2.4 Sangat Rahasia
Informasi paling sensitif yang memerlukan perlindungan maksimal.

## 3. Penanganan Data

- Penyimpanan data sesuai dengan klasifikasi
- Enkripsi untuk data sensitif
- Kontrol akses berdasarkan kebutuhan
- Penghapusan data yang aman saat tidak diperlukan lagi`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Menetapkan sistem klasifikasi informasi' },
      { id: 'sec-2', title: 'Tingkat Klasifikasi', content: 'Publik, Internal, Rahasia, Sangat Rahasia' },
      { id: 'sec-3', title: 'Penanganan Data', content: 'Penyimpanan, enkripsi, kontrol akses, penghapusan' },
    ],
  },
  {
    id: 'sop-008',
    title: 'Keamanan Fisik dan Lingkungan',
    category: 'operations',
    description: 'Prosedur untuk melindungi aset fisik dan fasilitas organisasi dari akses tidak sah',
    lastReviewed: '2026-03-25',
    status: 'review-needed',
    completionPercentage: 75,
    content: `# Keamanan Fisik dan Lingkungan

## 1. Tujuan

Prosedur ini bertujuan untuk melindungi aset fisik, fasilitas, dan peralatan organisasi dari akses tidak sah, pencurian, atau kerusakan.

## 2. Perimeter Keamanan

### 2.1 Kontrol Akses
- Sistem kartu akses untuk area terbatas
- Penjaga keamanan di pintu masuk utama
- Pencatatan semua akses masuk dan keluar

### 2.2 Monitoring
- Sistem CCTV di area-area penting
- Monitoring 24/7 untuk fasilitas kritis
- Penyimpanan rekaman selama minimal 30 hari

## 3. Keamanan Ruang Server

- Akses terbatas hanya untuk personel yang berwenang
- Sistem kontrol suhu dan kelembaban
- Sistem pemadam kebakaran otomatis
- Backup power supply (UPS)

## 4. Kebijakan Clear Desk

- Tidak ada dokumen atau perangkat sensitif yang ditinggalkan di meja
- Penyimpanan aman untuk informasi sensitif
- Pembersihan ruang kerja setiap akhir hari`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Melindungi aset fisik organisasi' },
      { id: 'sec-2', title: 'Perimeter Keamanan', content: 'Kontrol akses dan monitoring' },
      { id: 'sec-3', title: 'Keamanan Ruang Server', content: 'Akses terbatas, kontrol lingkungan, backup power' },
    ],
  },
  {
    id: 'sop-009',
    title: 'Keamanan Pemasok dan Pihak Ketiga',
    category: 'governance',
    description: 'Prosedur untuk mengelola risiko keamanan dari pemasok dan pihak ketiga',
    lastReviewed: '2026-02-28',
    status: 'compliant',
    completionPercentage: 88,
    content: `# Keamanan Pemasok dan Pihak Ketiga

## 1. Tujuan

Prosedur ini bertujuan untuk memastikan bahwa pemasok dan pihak ketiga yang memiliki akses ke aset informasi organisasi mematuhi persyaratan keamanan informasi yang sama.

## 2. Penilaian Pemasok

### 2.1 Pra-Kontrak
- Evaluasi kemampuan keamanan pemasok
- Verifikasi sertifikasi keamanan
- Penilaian risiko

### 2.2 Klausul Kontrak
- Persyaratan keamanan informasi dalam kontrak
- Hak audit untuk memverifikasi kepatuhan
- Kewajiban untuk melaporkan insiden keamanan

## 3. Manajemen Akses Pemasok

- Pemberian akses terbatas sesuai kebutuhan
- Monitoring aktivitas pemasok
- Peninjauan akses secara berkala
- Penghapusan akses saat kontrak berakhir

## 4. Perjanjian Kerahasiaan

- Penandatanganan NDA (Non-Disclosure Agreement)
- Persyaratan perlindungan data pribadi
- Kewajiban untuk menjaga kerahasiaan informasi`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Mengelola risiko keamanan dari pemasok' },
      { id: 'sec-2', title: 'Penilaian Pemasok', content: 'Evaluasi pra-kontrak dan klausul kontrak' },
      { id: 'sec-3', title: 'Manajemen Akses', content: 'Pemberian, monitoring, dan penghapusan akses' },
    ],
  },
  {
    id: 'sop-010',
    title: 'Continuity Planning dan Disaster Recovery',
    category: 'operations',
    description: 'Prosedur untuk memastikan kesinambungan bisnis dan pemulihan dari bencana',
    lastReviewed: '2026-04-10',
    status: 'compliant',
    completionPercentage: 93,
    content: `# Continuity Planning dan Disaster Recovery

## 1. Tujuan

Prosedur ini bertujuan untuk memastikan bahwa organisasi dapat terus beroperasi atau dengan cepat memulihkan operasi dalam hal terjadi gangguan atau bencana.

## 2. Business Continuity Planning

### 2.1 Identifikasi Fungsi Kritis
- Identifikasi proses bisnis yang paling penting
- Penentuan RTO (Recovery Time Objective)
- Penentuan RPO (Recovery Point Objective)

### 2.2 Strategi Continuity
- Redundansi sistem
- Failover otomatis
- Lokasi backup untuk operasi

## 3. Disaster Recovery Plan

### 3.1 Persiapan
- Dokumentasi lengkap sistem dan konfigurasi
- Backup data yang teratur
- Pengujian disaster recovery secara berkala

### 3.2 Respons Bencana
- Aktivasi tim disaster recovery
- Pemulihan sistem dari backup
- Komunikasi dengan stakeholder

### 3.3 Pemulihan
- Pemulihan sistem ke kondisi normal
- Verifikasi integritas data
- Dokumentasi pembelajaran dari bencana`,
    sections: [
      { id: 'sec-1', title: 'Tujuan', content: 'Memastikan kesinambungan bisnis' },
      { id: 'sec-2', title: 'Business Continuity', content: 'Identifikasi fungsi kritis dan strategi' },
      { id: 'sec-3', title: 'Disaster Recovery', content: 'Persiapan, respons, dan pemulihan' },
    ],
  },
];
