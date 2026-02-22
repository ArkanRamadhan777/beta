import SEO from '../components/SEO';

const OrganizationPage = () => {
  // Organization structure data
  const leadership = [
    {
      name: 'Ahmad Fauzi',
      position: 'Ketua OSIS',
      image: 'https://ui-avatars.com/api/?name=Ahmad+Fauzi&size=200&background=22d3ee&color=fff&bold=true',
      description: 'Memimpin dan mengkoordinir seluruh kegiatan OSIS'
    },
    {
      name: 'Siti Nurhaliza',
      position: 'Wakil Ketua OSIS',
      image: 'https://ui-avatars.com/api/?name=Siti+Nurhaliza&size=200&background=3b82f6&color=fff&bold=true',
      description: 'Mendampingi Ketua dalam menjalankan organisasi'
    },
    {
      name: 'Budi Santoso',
      position: 'Sekretaris',
      image: 'https://ui-avatars.com/api/?name=Budi+Santoso&size=200&background=8b5cf6&color=fff&bold=true',
      description: 'Mengelola administrasi dan dokumentasi'
    },
    {
      name: 'Dewi Lestari',
      position: 'Bendahara',
      image: 'https://ui-avatars.com/api/?name=Dewi+Lestari&size=200&background=ec4899&color=fff&bold=true',
      description: 'Mengelola keuangan organisasi'
    }
  ];

  const divisions = [
    {
      name: 'Divisi Keagamaan',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      members: ['Koordinator: Fatimah Az-Zahra', 'Anggota: 8 orang'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Divisi Pendidikan',
      icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      members: ['Koordinator: Rudi Hartono', 'Anggota: 10 orang'],
      color: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Divisi Seni & Budaya',
      icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
      members: ['Koordinator: Indah Permatasari', 'Anggota: 12 orang'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Divisi Olahraga',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      members: ['Koordinator: Andi Wijaya', 'Anggota: 15 orang'],
      color: 'from-green-400 to-cyan-500'
    },
    {
      name: 'Divisi Publikasi & Dokumentasi',
      icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
      members: ['Koordinator: Maya Sari', 'Anggota: 8 orang'],
      color: 'from-pink-400 to-red-500'
    },
    {
      name: 'Divisi Kewirausahaan',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      members: ['Koordinator: Dimas Prasetyo', 'Anggota: 6 orang'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Divisi Sosial & Lingkungan',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      members: ['Koordinator: Lina Marlina', 'Anggota: 9 orang'],
      color: 'from-green-400 to-teal-500'
    },
    {
      name: 'Divisi Humas',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      members: ['Koordinator: Rizki Ramadhan', 'Anggota: 7 orang'],
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  const advisors = [
    {
      name: 'Drs. Bambang Suryanto, M.Pd',
      position: 'Pembina OSIS',
      role: 'Guru BK'
    },
    {
      name: 'Sri Wahyuni, S.Pd',
      position: 'Wakil Pembina',
      role: 'Guru PKn'
    }
  ];

  return (
    <>
      <SEO 
        title="Struktur Organisasi"
        description="Struktur organisasi OSIS dan pembagian divisi sekolah. Kenali pengurus dan divisi yang ada."
        keywords="struktur OSIS, pengurus OSIS, divisi OSIS, organisasi sekolah"
      />

      <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 bg-neutral-cream w-full max-w-full overflow-hidden relative">
        {/* Playful background decorations */}
        <div className="absolute top-24 left-10 w-72 h-72 bg-accent-purple/20 rounded-full"></div>
        <div className="absolute top-[500px] right-12 w-64 h-64 bg-accent-soft/30 bg-blob"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-accent-primary/20 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Header - Editorial */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-accent-purple to-accent-primary text-white px-5 py-2 rounded-full text-sm font-black uppercase tracking-wide">
                Tim Kita
              </span>
            </div>
            <h1 className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl mb-6 text-editorial">
              <span className="text-gray-900 block">Struktur</span>
              <span className="text-gradient block">Organisasi</span>
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl font-bold max-w-3xl mx-auto">
              Kenali pengurus dan struktur organisasi sekolah kami 🎓
            </p>
          </div>

          {/* Pembina Section */}
          <div className="mb-20">
            <h2 className="font-outfit font-black text-4xl md:text-5xl text-gray-900 mb-10 text-center">Pembina OSIS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-[2.5rem] p-8 border-4 border-gray-900 text-center shadow-xl hover:scale-105 transition-all duration-300 ${
                    index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
                  }`}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-accent-soft to-accent-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-outfit font-black text-2xl text-gray-900 mb-3">{advisor.name}</h3>
                  <p className="text-accent-primary font-black text-lg mb-2">{advisor.position}</p>
                  <p className="text-gray-600 font-bold">{advisor.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-20">
            <h2 className="font-outfit font-black text-4xl md:text-5xl text-gray-900 mb-10 text-center">Pengurus Inti</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div 
                  key={index}
                  className={`bg-white ${
                    index % 3 === 0 ? 'rounded-[3rem]' : 'rounded-3xl'
                  } overflow-hidden border-4 border-gray-900 hover:scale-105 transition-all duration-300 group shadow-xl ${
                    index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
                  }`}
                >
                  {/* Avatar */}
                  <div className="aspect-square bg-gradient-to-br from-accent-soft/50 to-accent-primary/50 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-outfit font-black text-xl text-gray-900 mb-3">{leader.name}</h3>
                    <p className="text-accent-purple font-black text-base mb-3">{leader.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Playful Divider */}
          <div className="relative h-20 mb-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="absolute bg-accent-primary w-12 h-12 rounded-2xl border-4 border-gray-900 rotate-45"></div>
            </div>
          </div>

          {/* Divisions Section */}
          <div>
            <h2 className="font-outfit font-black text-4xl md:text-5xl text-gray-900 mb-10 text-center">Divisi Organisasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {divisions.map((division, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-[2.5rem] p-8 border-4 border-gray-900 hover:scale-105 transition-all duration-300 group shadow-xl ${
                    index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${division.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-gray-900`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={division.icon} />
                      </svg>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-outfit font-black text-2xl text-gray-900 mb-4 leading-tight">
                        {division.name}
                      </h3>
                      <div className="space-y-3">
                        {division.members.map((member, idx) => (
                          <p key={idx} className="text-gray-700 font-bold flex items-center gap-3">
                            <svg className="w-5 h-5 text-accent-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {member}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 bg-gradient-to-br from-accent-primary via-accent-purple to-accent-primary p-12 md:p-16 rounded-[3rem] border-4 border-gray-900 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="relative">
              <h2 className="font-outfit font-black text-4xl md:text-5xl mb-6 text-white">
                Tertarik Bergabung?
              </h2>
              <p className="text-white/90 text-xl font-bold mb-10 max-w-2xl mx-auto">
                Kami selalu terbuka untuk anggota baru yang ingin berkontribusi dalam organisasi sekolah 🚀
              </p>
              <a 
                href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20bergabung%20dengan%20OSIS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-accent-primary font-black text-lg px-10 py-5 rounded-2xl hover:scale-110 transition-all duration-300 border-4 border-gray-900 shadow-2xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationPage;
