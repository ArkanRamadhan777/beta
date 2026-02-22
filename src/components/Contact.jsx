const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 bg-gradient-to-br from-accent-purple/10 to-accent-primary/10 min-h-screen flex items-center w-full max-w-full overflow-hidden relative">
      {/* Playful background shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent-soft/30 bg-blob"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-purple/20 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Editorial heading */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-accent-primary text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Mari Terhubung
              </span>
            </div>
            <h2 className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl mb-6 text-editorial">
              <span className="text-gray-900 block">Hubungi</span>
              <span className="text-gradient block">Kami</span>
            </h2>
            <p className="text-gray-700 text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
              Siap mentransformasi organisasi sekolah? Mari mulai percakapan! ✨
            </p>
          </div>
          
          {/* Contact Cards Grid - Playful Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a 
              href="mailto:ganexa.team@gmail.com"
              className="group bg-accent-primary p-8 rounded-[2.5rem] border-4 border-gray-900 shadow-xl hover:scale-110 hover:-rotate-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-outfit font-black text-2xl text-white mb-2">Email</h3>
                  <p className="text-white/90 font-semibold text-sm">ganexa.team@gmail.com</p>
                </div>
              </div>
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/6287760769086"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent-soft p-8 rounded-[2.5rem] border-4 border-gray-900 shadow-xl hover:scale-110 hover:rotate-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-accent-soft" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-outfit font-black text-2xl text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-800 font-semibold text-sm">Chat Langsung</p>
                </div>
              </div>
            </a>
          </div>
          
          {/* Social Media - Playful Cards */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <a 
              href="https://instagram.com/ganexa.team"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-3xl border-4 border-gray-900 shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-white">
                <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-bold text-lg">Instagram</span>
              </div>
            </a>
            
            <a 
              href="https://tiktok.com/@ganexa.team"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 p-6 rounded-3xl border-4 border-gray-900 shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-white">
                <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                <span className="font-bold text-lg">TikTok</span>
              </div>
            </a>
          </div>
          
          {/* Info Cards - Playful Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border-4 border-gray-900 shadow-lg text-center rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Respons</p>
              <p className="text-2xl font-black text-gray-900">24 Jam</p>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border-4 border-gray-900 shadow-lg text-center -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Melayani</p>
              <p className="text-2xl font-black text-gray-900">Se-Indonesia</p>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border-4 border-gray-900 shadow-lg text-center rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-1">Dukungan</p>
              <p className="text-2xl font-black text-gray-900">24/7</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-20 pt-8">
          <p className="text-gray-600 font-semibold flex items-center justify-center gap-2">
            <span>© 2026 BETA</span>
            <span className="text-2xl">•</span>
            <span>Hak Cipta Dilindungi</span>
            <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
