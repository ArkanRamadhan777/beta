const Programs = () => {
  const featuredProgram = {
    title: "Penjadwalan Cerdas",
    description: "Revolusikan manajemen jadwal sekolah Anda dengan penjadwalan berbasis AI yang secara otomatis menangani konflik, mengoptimalkan alokasi sumber daya, dan beradaptasi dengan kebutuhan yang berubah secara real-time.",
    features: ["Resolusi Konflik AI", "Optimasi Sumber Daya", "Update Real-time", "Dukungan Multi-kampus"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  };

  const programs = [
    {
      title: "Manajemen Acara",
      description: "Perencanaan dan koordinasi yang mulus untuk semua acara dan kegiatan sekolah.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    },
    {
      title: "Arsip Digital",
      description: "Penyimpanan aman dan akses instan ke semua dokumen dan catatan penting.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="programs" className="py-24 px-6 sm:px-8 bg-gradient-to-br from-accent-purple/10 to-accent-primary/10 w-full max-w-full overflow-hidden relative">
      {/* Playful background shapes */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent-soft/20 bg-blob"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent-purple/10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial heading - right aligned this time */}
        <div className="mb-16 text-right">
          <div className="inline-block mb-4">
            <span className="bg-accent-primary text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Program Unggulan
            </span>
          </div>
          <h2 className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl mb-4 text-editorial">
            <span className="text-gray-900 block">Solusi</span>
            <span className="text-gradient block">Komprehensif</span>
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl font-medium max-w-2xl ml-auto">
            Dirancang untuk meningkatkan setiap aspek manajemen organisasi sekolah
          </p>
        </div>
        
        {/* Asymmetric card layout - zigzag style */}
        <div className="space-y-12">
          {/* Featured large card - full width with offset */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 md:p-10 rounded-[3rem] border-4 border-gray-900 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-purple rounded-2xl flex items-center justify-center text-white shadow-lg">
                    {featuredProgram.icon}
                  </div>
                  <h3 className="font-outfit font-black text-3xl md:text-4xl text-gray-900">
                    {featuredProgram.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                  {featuredProgram.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {featuredProgram.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-accent-soft/30 px-4 py-3 rounded-2xl border-2 border-gray-900">
                      <svg className="w-5 h-5 text-accent-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-bold text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-gray-900 shadow-2xl rotate-editorial hover:rotate-0 transition-transform duration-300">
                <img 
                  src={featuredProgram.image} 
                  alt={featuredProgram.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-purple rounded-full -z-10"></div>
            </div>
          </div>
          
          {/* Two smaller cards - different sizes and styles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {programs.map((program, index) => (
              <div 
                key={index}
                className={`${index === 0 ? 'md:col-span-2' : 'md:col-span-1'} group`}
              >
                <div className={`${index === 0 ? 'bg-accent-purple text-white' : 'bg-accent-soft'} p-8 rounded-[3rem] border-4 border-gray-900 shadow-xl hover:scale-105 transition-all duration-300 h-full ${index === 1 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}>
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6 border-4 border-gray-900">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${index === 0 ? 'bg-white/20 text-white' : 'bg-accent-primary text-white'} p-3 rounded-xl`}>
                      {program.icon}
                    </div>
                    <h3 className={`font-outfit font-black text-2xl ${index === 0 ? 'text-white' : 'text-gray-900'}`}>
                      {program.title}
                    </h3>
                  </div>
                  <p className={`${index === 0 ? 'text-white/90' : 'text-gray-800'} text-lg leading-relaxed font-medium`}>
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bold CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gray-900 text-white font-bold px-12 py-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg border-4 border-gray-900 hover:bg-accent-primary">
            Jelajahi Semua Program →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
