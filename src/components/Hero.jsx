const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 w-full max-w-full bg-neutral-cream">
      {/* Playful decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-soft/30 bg-blob"></div>
      <div className="absolute bottom-32 left-10 w-48 h-48 bg-accent-purple/20 bg-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-primary/20 rounded-full"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Editorial asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main headline - spans more columns */}
          <div className="lg:col-span-8 space-y-8">
            {/* Eyebrow text */}
            <div className="inline-block">
              <span className="bg-accent-primary text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
                Platform Organisasi Sekolah
              </span>
            </div>
            
            {/* Oversized editorial headline */}
            <h1 className="font-outfit text-editorial">
              <span className="block text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-2">
                BETA
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-gray-900">untuk </span>
                <span className="text-gradient">Generasi</span>
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                <span className="relative inline-block">
                  Kreatif
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-accent-soft/50 -z-10"></span>
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl font-medium">
              Transformasi organisasi siswa dengan platform digital yang dirancang khusus untuk sekolah Indonesia
            </p>
            
            {/* Bold CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-accent-primary text-white font-bold px-10 py-5 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-accent-primary/30 transition-all duration-300 text-lg">
                Mulai Sekarang →
              </button>
              <button className="border-4 border-gray-900 text-gray-900 font-bold px-10 py-5 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 text-lg">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
          
          {/* Side accent column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Stats/highlights with playful design */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-gray-900 rotate-editorial hover:rotate-0 transition-transform duration-300">
              <div className="text-5xl font-black text-accent-primary mb-2">1000+</div>
              <div className="text-gray-700 font-semibold">Siswa Aktif</div>
            </div>
            
            <div className="bg-accent-purple text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black mb-2">24/7</div>
              <div className="font-semibold">Akses Platform</div>
            </div>
            
            <div className="bg-accent-soft p-6 rounded-3xl shadow-lg border-4 border-gray-900 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-gray-900 mb-2">50+</div>
              <div className="text-gray-900 font-semibold">Sekolah Terdaftar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
