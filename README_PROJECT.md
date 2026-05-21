# ISO 27001:2022 SOP Management Website

Website interaktif untuk mengelola Standard Operating Procedures (SOP) terkait ISO 27001:2022 - standar internasional untuk Sistem Manajemen Keamanan Informasi (ISMS).

## 🎯 Deskripsi Project

Website ini menyediakan platform terpusat untuk mengorganisir, mencari, dan menampilkan 10 SOP komprehensif yang mencakup seluruh aspek keamanan informasi sesuai dengan persyaratan ISO 27001:2022. Dirancang dengan antarmuka yang intuitif dan responsif untuk memudahkan akses informasi keamanan informasi.

## ✨ Fitur Utama

- **Dashboard Statistik** - Visualisasi real-time status kepatuhan SOP dengan metrik kelengkapan
- **Navigasi Sidebar** - Kategori SOP yang terorganisir dalam 6 kategori utama
- **Pencarian & Filter** - Search real-time dan filter berdasarkan status kepatuhan
- **Detail Modal Interaktif** - Tampilan lengkap setiap SOP dengan bagian-bagian yang dapat dikembangkan
- **Desain Responsif** - Optimal di desktop, tablet, dan mobile
- **Professional UI** - Palet warna slate blue dan emerald green dengan typography yang konsisten

## 📋 Daftar SOP

1. **Kebijakan Keamanan Informasi** - Kerangka kerja dan prinsip dasar ISMS
2. **Penilaian dan Penanganan Risiko** - Metodologi identifikasi dan mitigasi risiko
3. **Kontrol Akses dan Manajemen Identitas** - Pengelolaan akses pengguna dan autentikasi
4. **Manajemen Insiden Keamanan** - Prosedur respons dan pemulihan insiden
5. **Kesadaran dan Pelatihan Keamanan** - Program edukasi dan awareness karyawan
6. **Keamanan Operasional dan Backup** - Strategi backup dan disaster recovery
7. **Klasifikasi dan Penanganan Data** - Sistem klasifikasi informasi
8. **Keamanan Fisik dan Lingkungan** - Perlindungan aset fisik organisasi
9. **Keamanan Pemasok dan Pihak Ketiga** - Manajemen risiko dari vendor eksternal
10. **Continuity Planning dan Disaster Recovery** - Perencanaan kesinambungan bisnis

## 🛠️ Stack Teknologi

- **Frontend Framework:** React 19 dengan TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Routing:** Wouter (lightweight client-side router)
- **Icons:** Lucide React
- **Markdown Rendering:** Streamdown
- **Package Manager:** pnpm

## 📁 Struktur Project

```
iso27001-sops/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── SOPCard.tsx
│   │   │   ├── SOPDetail.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── data/            # Data files
│   │   │   └── sops.ts      # SOP data structure
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── server/                  # Server placeholder
├── shared/                  # Shared types
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json              # Vercel configuration
└── README_PROJECT.md        # File ini
```

## 🚀 Cara Menjalankan Lokal

### Prasyarat

- Node.js 18+ dan npm/pnpm
- Git

### Instalasi

```bash
# Clone repository
git clone https://github.com/USERNAME/iso27001-sops.git
cd iso27001-sops

# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
```

Website akan accessible di `http://localhost:3000`

## 🏗️ Build untuk Production

```bash
# Build project
pnpm build

# Preview production build
pnpm preview
```

Output akan ada di folder `dist/`

## 📤 Deployment

### Deploy ke Vercel

1. Push repository ke GitHub
2. Buka https://vercel.com
3. Import repository `iso27001-sops`
4. Vercel akan otomatis mendeteksi Vite dan melakukan build
5. Website akan live di `https://iso27001-sops.vercel.app`

Lihat `DEPLOYMENT_GUIDE.md` untuk instruksi lengkap.

## 🎨 Desain & Warna

- **Primary Color:** #1e293b (Slate 800)
- **Success Color:** #10b981 (Emerald 600)
- **Warning Color:** #f59e0b (Amber 500)
- **Background:** #ffffff (White)
- **Text:** #0f172a (Slate 950)

### Typography

- **Headings:** Poppins (600-700 weight)
- **Body:** Inter (400-500 weight)

## 📱 Responsivitas

Website dioptimalkan untuk:
- Desktop (1024px+)
- Tablet (640px - 1023px)
- Mobile (< 640px)

## 🔍 Fitur Pencarian

- Search real-time di semua field (title, description)
- Filter berdasarkan kategori SOP
- Filter berdasarkan status kepatuhan (Sesuai, Perlu Ditinjau, Tidak Sesuai)
- Kombinasi filter untuk hasil yang lebih spesifik

## 📊 Statistik

Website menampilkan statistik real-time:
- Jumlah SOP yang Sesuai
- Jumlah SOP yang Perlu Ditinjau
- Jumlah SOP yang Tidak Sesuai
- Rata-rata Kelengkapan SOP

## 🔐 Keamanan

- Semua data disimpan di frontend (tidak ada backend)
- Tidak ada data sensitif yang ditransmisikan
- HTTPS enforced di production

## 📝 Lisensi

Project ini dibuat untuk keperluan tugas akhir/presentasi akademik.

## 👨‍💼 Author

Dibuat dengan Manus AI Assistant

## 📞 Support

Untuk pertanyaan atau masalah:
- Lihat `DEPLOYMENT_GUIDE.md` untuk panduan deployment
- Check dokumentasi Vercel: https://vercel.com/docs
- Check dokumentasi Vite: https://vitejs.dev

---

**Versi:** 1.0  
**Last Updated:** 2026-05-20  
**Status:** Ready for Production ✅
