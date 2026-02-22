const About = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 bg-white w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Heading - left aligned */}
        <div className="mb-20 max-w-4xl">
          <div className="inline-block mb-4">
            <span className="bg-accent-purple/20 text-accent-purple px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Tentang Kami
            </span>
          </div>
          <h2 className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl mb-6 text-editorial">
            <span className="text-gray-900 block">Organisasi</span>
            <span className="text-gradient block">Masa Depan</span>
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
            Platform digital untuk organisasi siswa yang modern, terstruktur, dan penuh kreativitas
          </p>
        </div>
        
        {/* Zig-zag Vision & Mission Layout */}
        <div className="space-y-16 mb-20">
          {/* Visi - Left aligned with playful shape */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="bg-accent-soft/30 p-10 md:p-12 rounded-[3rem] border-4 border-gray-900 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/20 bg-blob"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="font-outfit font-black text-4xl md:text-5xl text-gray-900">Visi</h3>
                  </div>
                  <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
                    Menjadi platform terdepan yang memberdayakan organisasi siswa di seluruh Indonesia untuk berkembang, berkolaborasi, dan menciptakan dampak positif di lingkungan sekolah.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-accent-purple/30 bg-blob"></div>
            </div>
          </div>
          
          {/* Misi - Right aligned with different style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-accent-primary/30 rounded-[4rem]"></div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-accent-purple to-accent-primary p-10 md:p-12 rounded-[3rem] shadow-2xl text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-outfit font-black text-4xl md:text-5xl">Misi</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-lg md:text-xl font-medium">
                    <svg className="w-7 h-7 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Menyediakan tools manajemen organisasi yang mudah digunakan</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg md:text-xl font-medium">
                    <svg className="w-7 h-7 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Memfasilitasi koordinasi antar anggota secara digital</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg md:text-xl font-medium">
                    <svg className="w-7 h-7 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mendukung transparansi dan akuntabilitas organisasi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Organizations - Playful card layout */}
        <div className="text-center mb-10">
          <h3 className="font-outfit font-black text-4xl md:text-5xl text-gray-900 mb-3">
            Cocok Untuk <span className="text-gradient">Semua Organisasi</span>
          </h3>
          <p className="text-gray-600 text-lg md:text-xl font-medium">Bergabunglah dengan gerakan organisasi digital</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: 'Klub', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'bg-accent-primary' },
            { name: 'Pramuka', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', color: 'bg-accent-purple' },
            { name: 'Grup Seni', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9', color: 'bg-accent-soft' },
            { name: 'Komunitas', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'bg-accent-primary' }
          ].map((org, index) => (
            <div 
              key={index} 
              className={`${org.color} ${index % 2 === 0 ? 'rotate-editorial' : '-rotate-1'} hover:rotate-0 p-8 md:p-10 rounded-3xl border-4 border-gray-900 hover:scale-105 transition-all duration-300 group text-center shadow-xl`}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-gray-900 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={org.icon} />
                </svg>
              </div>
              <h4 className="font-outfit font-black text-xl md:text-2xl text-gray-900">{org.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
