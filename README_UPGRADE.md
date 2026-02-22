# BETA - Platform Organisasi Sekolah Modern

Website multi-page organisasi sekolah yang modern dan responsif, di-upgrade dari single-page landing page menjadi website lengkap dengan berbagai halaman.

## 🚀 Upgrade Summary

Website telah berhasil di-upgrade dari **Paket BASIC** (single-page) menjadi **Paket STANDARD** (multi-page) dengan mempertahankan design, warna, dan identitas visual yang sudah ada.

## 📋 Struktur Website

### Halaman-halaman:

1. **Home (/)** 
   - Hero section dengan CTA
   - Preview tentang organisasi (Visi & Misi)
   - Preview kegiatan terbaru (3 event teratas)
   - Preview galeri (4 foto)
   - Call-to-action untuk bergabung

2. **Event / Kegiatan (/events)**
   - List semua event dengan card layout
   - Filter kegiatan mendatang dan selesai
   - Kategori event (Workshop, Kompetisi, Sosial, dll)
   - Link ke detail setiap event

3. **Detail Event (/events/:id)**
   - Informasi lengkap event
   - Rundown kegiatan
   - Persyaratan peserta
   - Kontak penyelenggara
   - Tombol WhatsApp & Email

4. **Struktur Organisasi (/organization)**
   - Profil pembina OSIS
   - Pengurus inti (Ketua, Wakil, Sekretaris, Bendahara)
   - 8 Divisi organisasi dengan koordinator
   - CTA untuk bergabung

5. **Galeri (/gallery)**
   - Grid responsif dengan 12+ foto
   - Filter kategori (Semua, Event, Kegiatan, Fasilitas)
   - Modal preview dengan navigasi next/prev
   - Deskripsi setiap foto

6. **Kontak (/contact)**
   - Info kontak lengkap (Email, Telepon, Alamat, Jam Operasional)
   - Tombol aksi cepat (Email & WhatsApp)
   - Embed Google Maps
   - Social media links (WhatsApp, Instagram, TikTok, YouTube)
   - FAQ section

## 🎨 Design & Visual Identity

### Warna Utama (Dipertahankan):
- **Primary**: Gradient cyan-400 to blue-500 (#22d3ee → #3b82f6)
- **Background**: Slate-900 & Slate-800 (#0f172a, #1e293b)
- **Text**: Gray-200 to Gray-400
- **Accent**: Cyan-400 untuk highlights

### Typography:
- **Heading**: Outfit (Bold 600-700)
- **Body**: Inter (Regular 400-500)

### Komponen Design:
- Cards dengan border hover effect
- Gradient buttons dengan shadow effect
- Smooth transitions (300ms duration)
- Hover scale transformations
- Glass-morphism effects

## 🛠 Tech Stack

- **Framework**: React 19.2.0
- **Routing**: React Router DOM 7.x
- **Styling**: Tailwind CSS 3.4.19
- **Build Tool**: Vite 7.3.1
- **Linting**: ESLint 9

## 📁 Struktur Project

```
beta/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx (Updated - dengan routing)
│   │   ├── Footer.jsx (New - footer dengan navigasi)
│   │   ├── SEO.jsx (New - SEO meta tags)
│   │   ├── Hero.jsx (Existing - hero section)
│   │   ├── About.jsx (Existing - untuk referensi)
│   │   ├── Programs.jsx (Existing - untuk referensi)
│   │   ├── Gallery.jsx (Existing - untuk referensi)
│   │   └── Contact.jsx (Existing - untuk referensi)
│   │
│   ├── pages/
│   │   ├── HomePage.jsx (New - halaman utama dengan previews)
│   │   ├── EventsPage.jsx (New - list event)
│   │   ├── EventDetailPage.jsx (New - detail event)
│   │   ├── OrganizationPage.jsx (New - struktur organisasi)
│   │   ├── GalleryPage.jsx (New - galeri dengan modal)
│   │   └── ContactPage.jsx (New - kontak lengkap)
│   │
│   ├── App.jsx (Updated - routing configuration)
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── index.html (Updated - SEO meta tags)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Fitur Utama

### 1. Routing & Navigation
- ✅ Multi-page dengan React Router
- ✅ Navbar responsif dengan active state
- ✅ Footer dengan navigasi lengkap
- ✅ Smooth page transitions

### 2. SEO Optimization
- ✅ Dynamic meta tags per halaman
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ Alt text untuk semua gambar
- ✅ Open Graph meta tags

### 3. Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px)
- ✅ Touch-friendly buttons & links
- ✅ Optimized images

### 4. Interactive Features
- ✅ Modal gallery dengan keyboard navigation
- ✅ Category filter di galeri
- ✅ Hover effects & animations
- ✅ Smooth scrolling (dimana berlaku)

### 5. Contact Integration
- ✅ WhatsApp click-to-chat
- ✅ Email mailto links
- ✅ Google Maps embed
- ✅ Social media links

## 🚦 Cara Menjalankan

### Development Mode:
```bash
cd beta
npm install
npm run dev
```

Buka browser: `http://localhost:5173`

### Production Build:
```bash
npm run build
npm run preview
```

## 📝 Kustomisasi Konten

### 1. Mengubah Data Event:
Edit file `src/pages/EventsPage.jsx` dan `src/pages/EventDetailPage.jsx`

### 2. Mengubah Struktur Organisasi:
Edit file `src/pages/OrganizationPage.jsx`, ubah array `leadership` dan `divisions`

### 3. Mengubah Galeri:
Edit file `src/pages/GalleryPage.jsx`, ubah array `images`

### 4. Mengubah Kontak:
Edit file `src/pages/ContactPage.jsx`, ubah:
- `contactInfo` - Info kontak
- `socialMedia` - Link social media
- `faqs` - Pertanyaan umum

### 5. Mengubah Warna/Brand:
Edit `tailwind.config.js` dan update warna di class CSS

## 🔧 Komponen Reusable

### SEO Component
```jsx
<SEO 
  title="Judul Halaman"
  description="Deskripsi halaman"
  keywords="keyword1, keyword2, keyword3"
/>
```

### Gradient Text Class
```jsx
className="text-gradient"
```

### Card Hover Effect
```jsx
className="hover:border-cyan-400/50 transition-all duration-300 group"
```

## 📱 Social Media

Ubah link social media di:
1. `src/components/Footer.jsx`
2. `src/pages/ContactPage.jsx`

## 🗺️ Google Maps

Untuk update lokasi map, ganti iframe src di `src/pages/ContactPage.jsx`:
1. Buka Google Maps
2. Cari lokasi sekolah
3. Klik "Share" → "Embed a map"
4. Copy iframe code
5. Paste ke ContactPage.jsx

## ⚡ Performance Tips

1. **Lazy Loading**: Gambar dimuat secara lazy (built-in browser)
2. **Code Splitting**: React Router automatically splits code per route
3. **Optimized Images**: Gunakan format WebP untuk performa lebih baik
4. **Minification**: Vite otomatis minify di production build

## 🐛 Troubleshooting

### Port sudah digunakan:
```bash
npm run dev -- --port 3000
```

### Error routing:
Pastikan menggunakan `BrowserRouter` dan paths dimulai dengan `/`

### Gambar tidak muncul:
1. Cek URL gambar valid
2. Atau simpan gambar di folder `public/` dan referensi dengan `/namafile.jpg`

## 📄 License

© 2026 BETA - Platform Organisasi Sekolah Modern

## 👥 Credits

- **Design System**: Tailwind CSS
- **Icons**: Heroicons (via inline SVG)
- **Images**: Unsplash (sample images)
- **Fonts**: Google Fonts (Outfit & Inter)

## 🎓 Catatan Penting

1. **Jangan ubah** struktur folder `src/components` dan `src/pages` tanpa update import di `App.jsx`
2. **Backup** sebelum melakukan perubahan besar
3. **Test** di berbagai device setelah update
4. **Commit** perubahan secara berkala

## 🔄 Maintenance

### Regular Updates:
1. Update konten event secara berkala
2. Tambahkan foto baru ke galeri
3. Update struktur organisasi setiap periode baru
4. Review dan update FAQ

### Technical Updates:
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Atau update ke latest version
npm install package@latest
```

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Email: contact@beta.school
- WhatsApp: +62 812-3456-7890

---

**Happy Coding! 🚀**
