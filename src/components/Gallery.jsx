const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      alt: "Ruang kelas modern",
      span: "col-span-1 md:col-span-2 row-span-2" // Wide and tall
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      alt: "Siswa belajar",
      span: "col-span-1 row-span-1" // Square
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      alt: "Kampus sekolah",
      span: "col-span-1 row-span-1" // Square
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
      alt: "Lingkungan belajar",
      span: "col-span-1 row-span-1" // Square
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      alt: "Kolaborasi tim",
      span: "col-span-1 md:col-span-2 row-span-1" // Wide
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      alt: "Kehidupan kampus",
      span: "col-span-1 row-span-1" // Square
    }
  ];

  return (
    <section id="gallery" className="py-24 px-6 sm:px-8 bg-white w-full max-w-full overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-accent-primary/20 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-soft/30 bg-blob"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial heading - left aligned */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-block mb-4">
              <span className="bg-accent-soft text-gray-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide border-2 border-gray-900">
                Dokumentasi
              </span>
            </div>
            <h2 className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl mb-4 text-editorial">
              <span className="text-gray-900 block">Galeri</span>
              <span className="text-gradient block">Kegiatan</span>
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl font-medium">
              Momen yang mendefinisikan kreativitas dan semangat kami
            </p>
          </div>
          
          {/* Stats badge */}
          <div className="bg-accent-purple text-white px-8 py-4 rounded-3xl border-4 border-gray-900 shadow-lg rotate-editorial hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-2xl font-black">{images.length}</span>
              <span className="font-bold">Foto</span>
            </div>
          </div>
        </div>
        
        {/* Dynamic Masonry Grid with varied borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className={`${image.span} group relative overflow-hidden cursor-pointer ${
                index % 3 === 0 ? 'rounded-[3rem] border-4 border-gray-900' : 
                index % 3 === 1 ? 'rounded-3xl border-4 border-accent-primary' : 
                'rounded-2xl border-4 border-accent-purple'
              } bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl ${
                index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">{image.alt}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white">
                      2026
                    </span>
                  </div>
                </div>
              </div>
              {/* Fun sticker-like element */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-accent-primary text-white px-4 py-2 rounded-full text-xs font-black uppercase rotate-12 shadow-lg border-2 border-white">
                  Terbaru!
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bold CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-accent-primary to-accent-purple text-white font-bold px-12 py-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg border-4 border-gray-900">
            Lihat Semua Foto →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
