import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

const EventDetailPage = () => {
  const { id } = useParams();

  // Sample events data (in real app, this would come from API/state management)
  const eventsData = {
    1: {
      title: 'Pelatihan Kepemimpinan Siswa 2026',
      date: '15 Maret 2026',
      time: '08:00 - 15:00',
      location: 'Aula Sekolah',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
      description: 'Workshop intensif untuk mengembangkan kemampuan kepemimpinan anggota OSIS dan meningkatkan soft skills siswa dalam menghadapi tantangan organisasi.',
      fullDescription: `Workshop Pelatihan Kepemimpinan Siswa 2026 adalah program intensif yang dirancang khusus untuk mengembangkan kemampuan kepemimpinan anggota OSIS dan pengurus organisasi sekolah lainnya.

Dalam workshop ini, peserta akan mendapatkan pelatihan komprehensif mengenai:
• Dasar-dasar kepemimpinan dan team building
• Komunikasi efektif dalam organisasi
• Problem solving dan decision making
• Time management dan prioritas
• Public speaking dan presentasi

Workshop akan dipandu oleh fasilitator berpengalaman dan menggunakan metode pembelajaran interaktif, games, dan studi kasus nyata.`,
      organizer: 'OSIS SMA Negeri 1',
      contact: 'osis@smkn1.sch.id',
      whatsapp: '628123456789',
      requirements: [
        'Anggota OSIS atau pengurus organisasi sekolah',
        'Membawa alat tulis',
        'Menggunakan seragam sekolah',
        'Membawa bekal makan siang'
      ],
      rundown: [
        { time: '08:00 - 08:30', activity: 'Registrasi Peserta' },
        { time: '08:30 - 09:00', activity: 'Pembukaan & Ice Breaking' },
        { time: '09:00 - 10:30', activity: 'Sesi 1: Dasar Kepemimpinan' },
        { time: '10:30 - 10:45', activity: 'Break' },
        { time: '10:45 - 12:15', activity: 'Sesi 2: Team Building' },
        { time: '12:15 - 13:00', activity: 'Ishoma' },
        { time: '13:00 - 14:30', activity: 'Sesi 3: Problem Solving' },
        { time: '14:30 - 15:00', activity: 'Penutupan & Foto Bersama' }
      ]
    },
    2: {
      title: 'Lomba Kreativitas Antar Kelas',
      date: '22 Maret 2026',
      time: '09:00 - 14:00',
      location: 'Lapangan Sekolah',
      category: 'Kompetisi',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
      description: 'Kompetisi seni dan kreativitas untuk menggali potensi siswa dalam berbagai bidang seperti seni, musik, dan desain.',
      fullDescription: `Lomba Kreativitas Antar Kelas adalah ajang kompetisi tahunan yang bertujuan untuk menggali dan mengapresiasi bakat seni dan kreativitas siswa.

Kategori Lomba:
• Desain Poster
• Mural & Wall Art
• Video Kreatif
• Pertunjukan Musik
• Tari Kreasi

Setiap kelas dapat mengirimkan maksimal 2 tim untuk setiap kategori. Pemenang akan mendapatkan piala bergilir dan hadiah menarik!`,
      organizer: 'Divisi Seni & Budaya OSIS',
      contact: 'seni@smkn1.sch.id',
      whatsapp: '628123456789',
      requirements: [
        'Mendaftar melalui wali kelas',
        'Maksimal 5 anggota per tim',
        'Membawa peralatan sendiri',
        'Karya harus original'
      ],
      rundown: [
        { time: '09:00 - 09:30', activity: 'Registrasi & Briefing' },
        { time: '09:30 - 12:00', activity: 'Kompetisi Berlangsung' },
        { time: '12:00 - 13:00', activity: 'Istirahat & Penilaian Juri' },
        { time: '13:00 - 14:00', activity: 'Pengumuman & Penyerahan Hadiah' }
      ]
    },
    3: {
      title: 'Bakti Sosial Sekolah',
      date: '10 April 2026',
      time: '07:00 - 12:00',
      location: 'Desa Sekitar',
      category: 'Sosial',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80',
      description: 'Kegiatan sosial bersama masyarakat sekitar sekolah untuk membangun kepedulian sosial siswa.',
      fullDescription: `Program Bakti Sosial Sekolah adalah kegiatan tahunan yang bertujuan untuk membangun kepedulian sosial siswa terhadap masyarakat sekitar.

Kegiatan yang akan dilakukan:
• Pembagian sembako untuk warga kurang mampu
• Pembersihan lingkungan desa
• Mengajar anak-anak di rumah belajar
• Renovasi ringan fasilitas umum
• Pemeriksaan kesehatan gratis

Mari bersama-sama berbagi kebahagiaan dengan masyarakat!`,
      organizer: 'MPK & OSIS',
      contact: 'mpk@smkn1.sch.id',
      whatsapp: '628123456789',
      requirements: [
        'Menggunakan seragam lapangan',
        'Membawa peralatan kerja (sapu, cangkul, dll)',
        'Membawa bekal makan',
        'Berkumpul pukul 06:45 WIB'
      ],
      rundown: [
        { time: '07:00 - 07:30', activity: 'Berangkat ke Lokasi' },
        { time: '07:30 - 08:00', activity: 'Pembukaan & Doa' },
        { time: '08:00 - 10:00', activity: 'Pelaksanaan Kegiatan' },
        { time: '10:00 - 10:30', activity: 'Istirahat' },
        { time: '10:30 - 11:30', activity: 'Lanjutan Kegiatan' },
        { time: '11:30 - 12:00', activity: 'Penutupan & Kembali ke Sekolah' }
      ]
    },
    4: {
      title: 'Rapat Koordinasi OSIS',
      date: '5 Maret 2026',
      time: '14:00 - 16:00',
      location: 'Ruang OSIS',
      category: 'Rapat',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80',
      description: 'Koordinasi bulanan pengurus OSIS untuk evaluasi program dan perencanaan kegiatan bulan depan.',
      fullDescription: `Rapat Koordinasi OSIS merupakan agenda rutin bulanan untuk evaluasi program yang telah berjalan dan perencanaan kegiatan bulan berikutnya.

Agenda Rapat:
• Laporan pelaksanaan program bulan lalu
• Evaluasi kendala dan solusi
• Perencanaan program bulan depan
• Pembahasan anggaran
• Koordinasi antar divisi

Seluruh pengurus OSIS wajib hadir tepat waktu.`,
      organizer: 'Ketua OSIS',
      contact: 'ketua.osis@smkn1.sch.id',
      whatsapp: '628123456789',
      requirements: [
        'Wajib hadir bagi seluruh pengurus',
        'Membawa laptop/tablet',
        'Membawa proposal program (jika ada)',
        'Berpakaian rapi'
      ],
      rundown: [
        { time: '14:00 - 14:15', activity: 'Pembukaan' },
        { time: '14:15 - 14:45', activity: 'Evaluasi Program' },
        { time: '14:45 - 15:30', activity: 'Perencanaan Program Baru' },
        { time: '15:30 - 15:50', activity: 'Diskusi & Tanya Jawab' },
        { time: '15:50 - 16:00', activity: 'Penutupan' }
      ]
    },
    5: {
      title: 'Pentas Seni Sekolah',
      date: '20 April 2026',
      time: '18:00 - 21:00',
      location: 'Gedung Serbaguna',
      category: 'Hiburan',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
      description: 'Malam pentas seni menampilkan berbagai talenta siswa dalam bidang musik, tari, dan drama.',
      fullDescription: `Pentas Seni Sekolah adalah malam apresiasi seni yang menampilkan berbagai bakat dan talenta siswa dari berbagai bidang seni.

Penampilan yang akan ditampilkan:
• Band sekolah
• Vocal group & paduan suara
• Tari tradisional dan modern
• Drama & teater
• Stand up comedy
• Fashion show

Acara terbuka untuk umum. Jangan lewatkan malam yang penuh dengan bakat dan kreativitas!`,
      organizer: 'Divisi Seni OSIS',
      contact: 'seni@smkn1.sch.id',
      whatsapp: '628123456789',
      requirements: [
        'Tiket gratis (bisa diambil di sekretariat)',
        'Berpakaian sopan',
        'Datang sebelum acara dimulai',
        'Menjaga ketertiban selama acara'
      ],
      rundown: [
        { time: '18:00 - 18:30', activity: 'Pembukaan & Sambutan' },
        { time: '18:30 - 19:15', activity: 'Penampilan Segmen 1' },
        { time: '19:15 - 19:30', activity: 'Break' },
        { time: '19:30 - 20:30', activity: 'Penampilan Segmen 2' },
        { time: '20:30 - 21:00', activity: 'Penutupan & Foto Bersama' }
      ]
    },
    6: {
      title: 'Seminar Motivasi',
      date: '28 April 2026',
      time: '09:00 - 12:00',
      location: 'Aula Sekolah',
      category: 'Seminar',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80',
      description: 'Seminar motivasi menghadirkan pembicara inspiratif untuk memotivasi siswa meraih prestasi.',
      fullDescription: `Seminar Motivasi 2026 menghadirkan pembicara inspiratif untuk memberikan motivasi dan inspirasi kepada siswa dalam meraih cita-cita dan prestasi.

Tema: "Berani Bermimpi, Berani Berkarya"

Pembicara:
• Motivator nasional berpengalaman
• Alumni sukses sekolah
• Praktisi industri

Seminar ini bertujuan untuk membangkitkan semangat siswa dalam menghadapi tantangan dan meraih kesuksesan di masa depan.`,
      organizer: 'BK & OSIS',
      contact: 'bk@smkn1.sch.id',
      whatsapp: '628123456789',
      requirements: [
        'Membawa alat tulis',
        'Menggunakan seragam sekolah',
        'Wajib hadir bagi kelas 10-11',
        'Menjaga ketenangan saat seminar'
      ],
      rundown: [
        { time: '09:00 - 09:30', activity: 'Registrasi & Pembukaan' },
        { time: '09:30 - 10:30', activity: 'Sesi 1: Pembicara Utama' },
        { time: '10:30 - 10:45', activity: 'Break' },
        { time: '10:45 - 11:45', activity: 'Sesi 2: Talkshow Alumni' },
        { time: '11:45 - 12:00', activity: 'Tanya Jawab & Penutupan' }
      ]
    }
  };

  const event = eventsData[id];

  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-6 sm:px-8 bg-neutral-cream w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-outfit font-black text-5xl text-gray-900 mb-4">Event Tidak Ditemukan 😕</h1>
          <Link to="/events" className="text-gradient font-bold text-xl hover:underline">
            Kembali ke Daftar Event
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Workshop': 'text-accent-primary bg-accent-primary/20 border-accent-primary',
      'Kompetisi': 'text-accent-purple bg-accent-purple/20 border-accent-purple',
      'Sosial': 'text-green-600 bg-green-100 border-green-600',
      'Rapat': 'text-blue-600 bg-blue-100 border-blue-600',
      'Hiburan': 'text-pink-600 bg-pink-100 border-pink-600',
      'Seminar': 'text-accent-soft bg-accent-soft/30 border-accent-soft'
    };
    return colors[category] || 'text-gray-700 bg-gray-200 border-gray-700';
  };

  return (
    <>
      <SEO 
        title={event.title}
        description={event.description}
        keywords={`${event.title}, ${event.category}, event sekolah, kegiatan OSIS`}
      />

      <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 bg-neutral-cream w-full max-w-full overflow-hidden relative">
        {/* Playful background */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-soft/30 rounded-full"></div>
        <div className="absolute bottom-40 left-16 w-56 h-56 bg-accent-purple/20 bg-blob"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back Button */}
          <Link 
            to="/events"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-accent-primary transition-colors duration-300 mb-8 font-bold text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Event
          </Link>

          {/* Event Image */}
          <div className="aspect-video bg-gradient-to-br from-accent-soft/50 to-accent-primary/50 rounded-[3rem] overflow-hidden mb-10 relative border-4 border-gray-900 shadow-2xl">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-6 right-6 px-5 py-3 rounded-2xl border-2 text-base font-black ${getCategoryColor(event.category)}`}>
              {event.category}
            </div>
          </div>

          {/* Event Header */}
          <div className="mb-12">
            <h1 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl mb-10 text-gray-900 leading-tight">
              {event.title}
            </h1>

            {/* Event Meta Info - Playful Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 text-gray-900 bg-white rounded-[2rem] p-6 border-4 border-gray-900 shadow-xl">
                <div className="w-14 h-14 bg-accent-primary rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold uppercase tracking-wide">Tanggal</p>
                  <p className="font-black text-xl">{event.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-900 bg-white rounded-[2rem] p-6 border-4 border-gray-900 shadow-xl">
                <div className="w-14 h-14 bg-accent-purple rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold uppercase tracking-wide">Waktu</p>
                  <p className="font-black text-xl">{event.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-900 bg-white rounded-[2rem] p-6 border-4 border-gray-900 shadow-xl">
                <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center text-gray-900 flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold uppercase tracking-wide">Lokasi</p>
                  <p className="font-black text-xl">{event.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-900 bg-white rounded-[2rem] p-6 border-4 border-gray-900 shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-primary to-accent-purple rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold uppercase tracking-wide">Penyelenggara</p>
                  <p className="font-black text-xl">{event.organizer}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <div className="bg-white rounded-[3rem] p-10 mb-10 border-4 border-gray-900 shadow-xl">
            <h2 className="font-outfit font-black text-3xl md:text-4xl mb-6 text-gray-900">Deskripsi</h2>
            <div className="text-gray-700 text-lg font-medium leading-relaxed whitespace-pre-line">
              {event.fullDescription}
            </div>
          </div>

          {/* Rundown */}
          {event.rundown && (
            <div className="bg-accent-soft/20 rounded-[2.5rem] p-10 mb-10 border-4 border-gray-900 shadow-xl">
              <h2 className="font-outfit font-black text-3xl md:text-4xl mb-8 text-gray-900">Rundown Acara</h2>
              <div className="space-y-5">
                {event.rundown.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-32 flex-shrink-0 text-accent-primary font-black text-lg">
                      {item.time}
                    </div>
                    <div className="flex-1 text-gray-900 font-bold text-lg">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Requirements */}
          {event.requirements && (
            <div className="bg-accent-purple/10 rounded-[2.5rem] p-10 mb-10 border-4 border-gray-900 shadow-xl">
              <h2 className="font-outfit font-black text-3xl md:text-4xl mb-8 text-gray-900">Persyaratan</h2>
              <ul className="space-y-4">
                {event.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-900">
                    <svg className="w-7 h-7 text-accent-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-bold text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-accent-primary via-accent-purple to-accent-primary rounded-[3rem] p-10 border-4 border-gray-900 shadow-2xl">
            <h2 className="font-outfit font-black text-3xl md:text-4xl mb-8 text-white">Hubungi Kami</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a 
                href={`mailto:${event.contact}`}
                className="flex items-center justify-center gap-3 bg-white text-accent-primary font-black text-lg px-8 py-5 rounded-2xl hover:scale-110 transition-all duration-300 border-4 border-gray-900 shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              
              <a 
                href={`https://wa.me/${event.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-green-600 font-black text-lg px-8 py-5 rounded-2xl hover:scale-110 transition-all duration-300 border-4 border-gray-900 shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailPage;
