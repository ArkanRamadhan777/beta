import { useState } from 'react';
import SEO from '../components/SEO';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Gallery images data
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      title: 'Ruang Kelas Modern',
      category: 'fasilitas',
      description: 'Ruang kelas yang dilengkapi dengan fasilitas modern untuk mendukung pembelajaran'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
      title: 'Kegiatan Belajar',
      category: 'kegiatan',
      description: 'Siswa sedang belajar bersama dalam suasana yang kondusif'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      title: 'Kampus Sekolah',
      category: 'fasilitas',
      description: 'Lingkungan sekolah yang asri dan nyaman'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      title: 'Perpustakaan',
      category: 'fasilitas',
      description: 'Perpustakaan dengan koleksi buku yang lengkap'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      title: 'Diskusi Kelompok',
      category: 'kegiatan',
      description: 'Siswa berdiskusi untuk menyelesaikan project bersama'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      title: 'Kegiatan Outdoor',
      category: 'kegiatan',
      description: 'Kegiatan pembelajaran di luar ruangan'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      title: 'Workshop Siswa',
      category: 'event',
      description: 'Workshop pengembangan skill untuk siswa'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80',
      title: 'Rapat OSIS',
      category: 'event',
      description: 'Rapat koordinasi pengurus OSIS'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      title: 'Seminar Motivasi',
      category: 'event',
      description: 'Seminar motivasi untuk meningkatkan prestasi siswa'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      title: 'Pentas Seni',
      category: 'event',
      description: 'Penampilan seni dari siswa-siswi berbakat'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      title: 'Bakti Sosial',
      category: 'event',
      description: 'Kegiatan bakti sosial ke masyarakat sekitar'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
      title: 'Kegiatan Olahraga',
      category: 'kegiatan',
      description: 'Siswa melakukan aktivitas olahraga bersama'
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua Foto', count: images.length },
    { id: 'event', label: 'Event', count: images.filter(img => img.category === 'event').length },
    { id: 'kegiatan', label: 'Kegiatan', count: images.filter(img => img.category === 'kegiatan').length },
    { id: 'fasilitas', label: 'Fasilitas', count: images.filter(img => img.category === 'fasilitas').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      <SEO 
        title="Galeri"
        description="Galeri foto kegiatan, event, dan fasilitas organisasi sekolah. Lihat dokumentasi berbagai momen berharga."
        keywords="galeri sekolah, foto kegiatan OSIS, dokumentasi event sekolah, fasilitas sekolah"
      />

      <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 bg-neutral-cream w-full max-w-full overflow-hidden relative">
        {/* Playful background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-soft/30 bg-blob"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent-purple/20 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Header - Editorial */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-accent-purple/20 text-accent-purple px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Dokumentasi
              </span>
            </div>
            <h1 className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl mb-6 text-editorial">
              <span className="text-gray-900 block">Galeri</span>
              <span className="text-gradient block">Kegiatan</span>
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
              Dokumentasi berbagai kegiatan dan momen berharga organisasi sekolah 📸
            </p>
          </div>

          {/* Category Filter - Playful Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-3xl font-bold transition-all duration-300 border-4 border-gray-900 ${
                  selectedCategory === category.id
                    ? 'bg-accent-primary text-white shadow-xl scale-110'
                    : 'bg-white text-gray-700 hover:scale-105 hover:shadow-lg'
                }`}
              >
                {category.label}
                <span className={`ml-2 px-3 py-1 rounded-full text-xs font-black ${
                  selectedCategory === category.id
                    ? 'bg-white/30'
                    : 'bg-accent-soft border-2 border-gray-900'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery Grid - Playful Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                onClick={() => openModal(image)}
                className={`group relative aspect-square overflow-hidden cursor-pointer ${
                  index % 3 === 0 ? 'rounded-[3rem]' : 'rounded-3xl'
                } border-4 border-gray-900 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
                } bg-white`}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-outfit font-black text-xl text-white mb-2">{image.title}</h3>
                    <p className="text-white/90 font-medium text-sm line-clamp-2">{image.description}</p>
                  </div>
                </div>
                {/* Zoom Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent-primary rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-24">
              <div className="w-32 h-32 bg-accent-soft/30 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border-4 border-gray-900 rotate-6">
                <svg className="w-14 h-14 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700 text-2xl font-bold">Tidak ada foto dalam kategori ini 😢</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal - Playful Style */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-gray-900/97 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 w-16 h-16 bg-accent-primary rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-10 border-4 border-white shadow-2xl"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent-primary hover:scale-110 transition-all duration-300 z-10 border-4 border-accent-primary shadow-2xl"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent-primary hover:scale-110 transition-all duration-300 z-10 border-4 border-accent-primary shadow-2xl"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Modal Content */}
          <div 
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="aspect-video bg-white rounded-[3rem] overflow-hidden mb-8 border-4 border-gray-900 shadow-2xl">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Image Info */}
            <div className="bg-white rounded-[2.5rem] p-8 border-4 border-gray-900 shadow-2xl">
              <h2 className="font-outfit font-black text-3xl text-gray-900 mb-3">
                {selectedImage.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
