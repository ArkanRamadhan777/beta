import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const EventsPage = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Pelatihan Kepemimpinan Siswa 2026',
      date: '15 Maret 2026',
      time: '08:00 - 15:00',
      location: 'Aula Sekolah',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      description: 'Workshop intensif untuk mengembangkan kemampuan kepemimpinan anggota OSIS dan meningkatkan soft skills siswa.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Lomba Kreativitas Antar Kelas',
      date: '22 Maret 2026',
      time: '09:00 - 14:00',
      location: 'Lapangan Sekolah',
      category: 'Kompetisi',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      description: 'Kompetisi seni dan kreativitas untuk menggali potensi siswa dalam berbagai bidang seperti seni, musik, dan desain.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Bakti Sosial Sekolah',
      date: '10 April 2026',
      time: '07:00 - 12:00',
      location: 'Desa Sekitar',
      category: 'Sosial',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      description: 'Kegiatan sosial bersama masyarakat sekitar sekolah untuk membangun kepedulian sosial siswa.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Rapat Koordinasi OSIS',
      date: '5 Maret 2026',
      time: '14:00 - 16:00',
      location: 'Ruang OSIS',
      category: 'Rapat',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
      description: 'Koordinasi bulanan pengurus OSIS untuk evaluasi program dan perencanaan kegiatan bulan depan.',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Pentas Seni Sekolah',
      date: '20 April 2026',
      time: '18:00 - 21:00',
      location: 'Gedung Serbaguna',
      category: 'Hiburan',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      description: 'Malam pentas seni menampilkan berbagai talenta siswa dalam bidang musik, tari, dan drama.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Seminar Motivasi',
      date: '28 April 2026',
      time: '09:00 - 12:00',
      location: 'Aula Sekolah',
      category: 'Seminar',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      description: 'Seminar motivasi menghadirkan pembicara inspiratif untuk memotivasi siswa meraih prestasi.',
      status: 'upcoming'
    }
  ];

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

  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const completedEvents = events.filter(e => e.status === 'completed');

  return (
    <>
      <SEO 
        title="Event & Kegiatan"
        description="Daftar event dan kegiatan organisasi sekolah. Bergabunglah dengan berbagai kegiatan menarik dan bermanfaat."
        keywords="event sekolah, kegiatan OSIS, lomba sekolah, workshop siswa"
      />

      <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 bg-neutral-cream w-full max-w-full overflow-hidden relative">
        {/* Playful background decorations */}
        <div className="absolute top-32 right-12 w-72 h-72 bg-accent-primary/20 rounded-full"></div>
        <div className="absolute top-96 left-8 w-56 h-56 bg-accent-purple/20 bg-blob"></div>
        <div className="absolute bottom-32 right-24 w-64 h-64 bg-accent-soft/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Header - Editorial */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-accent-primary to-accent-purple text-white px-5 py-2 rounded-full text-sm font-black uppercase tracking-wide">
                Agenda
              </span>
            </div>
            <h1 className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl mb-6 text-editorial">
              <span className="text-gray-900 block">Event &</span>
              <span className="text-gradient block">Kegiatan</span>
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl font-bold max-w-3xl mx-auto">
              Ikuti berbagai kegiatan dan event menarik dari organisasi sekolah 🎉
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10 flex-wrap">
              <h2 className="font-outfit font-black text-4xl md:text-5xl text-gray-900">Kegiatan Mendatang</h2>
              <span className="px-5 py-2 bg-accent-primary text-white rounded-2xl text-base font-black border-2 border-gray-900 rotate-2">
                {upcomingEvents.length} Event
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className={`bg-white ${
                    index % 3 === 0 ? 'rounded-[3rem]' : 'rounded-3xl'
                  } overflow-hidden border-4 border-gray-900 hover:scale-105 transition-all duration-300 group shadow-xl hover:shadow-2xl ${
                    index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
                  }`}
                >
                  {/* Event Image */}
                  <div className="aspect-video bg-gradient-to-br from-accent-soft/50 to-accent-primary/50 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-2xl border-2 text-sm font-black ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 font-bold">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-5 h-5 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                    </div>
                    
                    <h3 className="font-outfit font-black text-2xl mb-3 text-gray-900 leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 text-base leading-relaxed mb-5 line-clamp-2 font-medium">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-600 font-bold">
                      <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Completed Events */}
          {completedEvents.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-10 flex-wrap">
                <h2 className="font-outfit font-black text-4xl md:text-5xl text-gray-900">Kegiatan Terlaksana</h2>
                <span className="px-5 py-2 bg-gray-300 text-gray-700 rounded-2xl text-base font-black border-2 border-gray-900 -rotate-2">
                  {completedEvents.length} Event
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedEvents.map((event, index) => (
                  <Link
                    key={event.id}
                    to={`/events/${event.id}`}
                    className={`bg-white/70 ${
                      index % 3 === 0 ? 'rounded-[3rem]' : 'rounded-3xl'
                    } overflow-hidden border-4 border-gray-300 hover:border-gray-900 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl opacity-90 hover:opacity-100`}
                  >
                    {/* Event Image */}
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-500 grayscale group-hover:grayscale-0"
                      />
                      <div className={`absolute top-4 right-4 px-4 py-2 rounded-2xl border-2 text-sm font-black bg-white/90 ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </div>
                    </div>

                    {/* Event Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 font-bold">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Selesai - {event.date}
                      </div>
                      
                      <h3 className="font-outfit font-black text-2xl mb-3 text-gray-700 leading-tight">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 text-base leading-relaxed line-clamp-2 font-medium">
                        {event.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
