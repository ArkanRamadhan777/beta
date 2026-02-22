import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const HomePage = () => {
  // Sample data for previews
  const recentEvents = [
    {
      id: 1,
      title: 'Pelatihan Kepemimpinan 2026',
      date: '15 Maret 2026',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      description: 'Workshop intensif untuk mengembangkan kemampuan kepemimpinan anggota.'
    },
    {
      id: 2,
      title: 'Lomba Kreativitas Antar Kelas',
      date: '22 Maret 2026',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      description: 'Kompetisi seni dan kreativitas untuk menggali potensi siswa.'
    },
    {
      id: 3,
      title: 'Bakti Sosial Sekolah',
      date: '10 April 2026',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      description: 'Kegiatan sosial bersama masyarakat sekitar sekolah.'
    }
  ];

  const galleryPreview = [
    { id: 1, url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', alt: 'Kegiatan 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', alt: 'Kegiatan 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', alt: 'Kegiatan 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', alt: 'Kegiatan 4' }
  ];

  return (
    <>
      <SEO 
        title="Beranda"
        description="Platform Organisasi Modern untuk Indonesia. Transformasi lembaga dengan teknologi terkini."
        keywords="BETA, organisasi, manajemen, platform modern"
      />
      
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section - Asymmetric */}
      <section className="py-24 px-6 sm:px-8 bg-gradient-to-br from-accent-soft/20 to-accent-purple/10 w-full max-w-full overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side - Content */}
            <div className="lg:col-span-7">
              <div className="inline-block mb-4">
                <span className="bg-accent-purple/20 text-accent-purple px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Tentang BETA
                </span>
              </div>
              <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl mb-6 text-editorial">
                <span className="text-gray-900 block">Platform</span>
                <span className="text-gradient block">Digital Modern</span>
              </h2>
              <p className="text-gray-700 text-xl md:text-2xl font-medium leading-relaxed mb-8">
                Untuk organisasi siswa yang terstruktur dan penuh kreativitas
              </p>
              
              <Link 
                to="/organization"
                className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-4 border-gray-900"
              >
                Lihat Struktur Organisasi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Right side - Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] border-4 border-gray-900 shadow-xl hover:scale-105 transition-transform duration-300 rotate-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-outfit font-black text-2xl text-gray-900">Visi Kami</h3>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Menjadi platform terdepan yang memberdayakan organisasi siswa di seluruh Indonesia
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent-purple to-accent-primary p-8 rounded-[2.5rem] shadow-2xl text-white hover:scale-105 transition-transform duration-300 -rotate-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-outfit font-black text-2xl">Misi Kami</h3>
                </div>
                <ul className="space-y-2 font-medium">
                  <li>✓ Tools manajemen mudah</li>
                  <li>✓ Koordinasi digital efektif</li>
                  <li>✓ Transparansi penuh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Preview - Editorial Style */}
      <section className="py-24 px-6 sm:px-8 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block mb-4">
                <span className="bg-accent-primary text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Event Terbaru
                </span>
              </div>
              <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl text-editorial">
                <span className="text-gray-900 block">Kegiatan</span>
                <span className="text-gradient block">Organisasi</span>
              </h2>
              <p className="text-gray-600 text-xl font-medium mt-4">
                Jangan lewatkan event seru kami!
              </p>
            </div>
            <Link 
              to="/events"
              className="inline-flex items-center gap-2 bg-accent-soft text-gray-900 font-bold px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 border-4 border-gray-900"
            >
              Lihat Semua Event
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentEvents.map((event, index) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className={`group ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-300`}
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden border-4 border-gray-900 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <h3 className="font-outfit font-black text-xl mb-2 text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview - Playful Grid */}
      <section className="py-24 px-6 sm:px-8 bg-gradient-to-br from-accent-purple/10 to-accent-primary/10 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-accent-soft text-gray-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide border-2 border-gray-900">
                Galeri Foto
              </span>
            </div>
            <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl mb-6 text-editorial">
              <span className="text-gray-900 block">Momen</span>
              <span className="text-gradient block">Berharga</span>
            </h2>
            <p className="text-gray-700 text-xl font-semibold max-w-2xl mx-auto">
              Dokumentasi kegiatan organisasi sekolah kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map((image, index) => (
              <div 
                key={image.id}
                className={`aspect-square group relative overflow-hidden cursor-pointer ${
                  index % 2 === 0 ? 'rounded-[2.5rem]' : 'rounded-3xl'
                } border-4 border-gray-900 hover:scale-105 hover:rotate-2 transition-all duration-300 shadow-xl`}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-10 py-5 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-4 border-gray-900"
            >
              Lihat Semua Galeri
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Bold & Playful */}
      <section className="py-24 px-6 sm:px-8 bg-white w-full max-w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-soft/30 to-accent-purple/20"></div>
        <div className="absolute top-10 left-10 w-48 h-48 bg-accent-primary/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-purple/20 bg-blob"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-accent-primary to-accent-purple p-12 md:p-16 rounded-[3rem] border-4 border-gray-900 shadow-2xl text-white">
            <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-editorial">
              Siap Bergabung<br />dengan BETA?
            </h2>
            <p className="text-white/90 text-xl font-semibold mb-10 max-w-2xl mx-auto">
              Transformasikan organisasi sekolah Anda dengan platform modern yang dirancang untuk efisiensi dan kolaborasi! 🚀
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-accent-primary font-bold px-10 py-5 rounded-2xl hover:scale-110 hover:shadow-2xl transition-all duration-300 border-4 border-white text-lg"
              >
                Hubungi Kami Sekarang
              </Link>
              <Link 
                to="/events"
                className="bg-transparent border-4 border-white text-white font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-accent-primary transition-all duration-300 text-lg"
              >
                Lihat Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
