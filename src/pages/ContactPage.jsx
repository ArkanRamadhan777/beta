import SEO from '../components/SEO';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      label: 'Email',
      value: 'ganexa.team@gmail.com',
      link: 'mailto:ganexa.team@gmail.com',
      color: 'from-accent-primary to-accent-purple'
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      label: 'Telepon',
      value: '087760769086',
      link: 'tel:+6287760769086',
      color: 'from-green-400 to-cyan-500'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      label: 'Alamat',
      value: 'Jl. Pendidikan No. 123, Jakarta Selatan',
      link: 'https://maps.google.com/?q=SMA+Negeri+1+Jakarta',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      label: 'Jam Operasional',
      value: 'Senin - Jumat: 07:00 - 16:00',
      link: null,
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const socialMedia = [
    {
      name: 'WhatsApp',
      icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
      url: 'https://wa.me/6287760769086',
      bgColor: 'bg-green-500'
    },
    {
      name: 'Instagram',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      url: 'https://instagram.com/ganexa.team',
      bgColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500'
    },
    {
      name: 'TikTok',
      icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z',
      url: 'https://tiktok.com/@ganexa.team',
      bgColor: 'bg-gray-900'
    },
    {
      name: 'YouTube',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      url: 'https://youtube.com/@betaschool',
      bgColor: 'bg-red-600'
    }
  ];

  const faqs = [
    {
      question: 'Bagaimana cara mendaftar sebagai anggota?',
      answer: 'Anda dapat mendaftar melalui koordinator atau langsung ke sekretariat. Periode pendaftaran biasanya dibuka di awal semester.'
    },
    {
      question: 'Apakah ada biaya untuk bergabung?',
      answer: 'Tidak ada biaya pendaftaran untuk menjadi anggota. Semua kegiatan organisasi dibiayai oleh manajemen.'
    },
    {
      question: 'Kapan rapat rutin dilaksanakan?',
      answer: 'Rapat rutin dilaksanakan setiap minggu pertama setiap bulan, pada hari Sabtu pukul 14:00 - 16:00 WIB.'
    }
  ];

  return (
    <>
      <SEO 
        title="Kontak"
        description="Hubungi kami untuk informasi lebih lanjut tentang organisasi. Kami siap membantu Anda."
        keywords="kontak organisasi, hubungi kami, alamat, email organisasi"
      />

      <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 bg-neutral-cream w-full max-w-full overflow-hidden relative">
        {/* Playful background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-soft/30 bg-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-purple/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Header - Editorial Style */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-accent-primary text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Mari Terhubung
              </span>
            </div>
            <h1 className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl mb-6 text-editorial">
              <span className="text-gray-900 block">Hubungi</span>
              <span className="text-gradient block">Kami</span>
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
              Siap mentransformasi organisasi sekolah Anda? Mari mulai percakapan! ✨
            </p>
          </div>

          {/* Contact Info Cards - Playful Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-[2.5rem] border-4 border-gray-900 shadow-xl hover:scale-110 transition-all duration-300 group ${
                  index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={info.icon} />
                  </svg>
                </div>
                <h3 className="font-outfit font-black text-xl text-gray-900 mb-2">{info.label}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-700 font-semibold hover:text-accent-primary transition-colors duration-300 break-words"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-semibold">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Main Contact Section - Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Actions */}
            <div>
              <h2 className="font-outfit font-black text-4xl md:text-5xl text-gray-900 mb-8">
                <span className="relative inline-block">
                  Hubungi Langsung
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-accent-soft/50 -z-10"></span>
                </span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <a 
                  href="mailto:ganexa.team@gmail.com"
                  className="flex items-center justify-center gap-3 bg-accent-primary text-white font-bold px-8 py-6 rounded-[2rem] hover:scale-105 hover:shadow-2xl hover:rotate-1 transition-all duration-300 border-4 border-gray-900 text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kirim Email
                </a>
                
                <a 
                  href="https://wa.me/6287760769086?text=Halo,%20saya%20ingin%20bertanya%20tentang%20BETA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-accent-soft text-gray-900 font-bold px-8 py-6 rounded-[2rem] border-4 border-gray-900 hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-all duration-300 text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat WhatsApp
                </a>
              </div>

              {/* Response Time Badge */}
              <div className="bg-gradient-to-br from-accent-purple to-accent-primary p-6 rounded-3xl text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-wide">Waktu Respons</p>
                    <p className="text-2xl font-black">Maksimal 24 Jam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-[3rem] overflow-hidden border-4 border-gray-900 shadow-2xl">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890123!2d106.8270348!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnNDcuMSJTIDEwNsKwNDknMzcuMyJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="font-outfit font-black text-3xl text-gray-900 mb-3">Kunjungi Kami</h3>
                <p className="text-gray-700 font-semibold leading-relaxed mb-4">
                  Jl. Pendidikan No. 123, Jakarta Selatan, DKI Jakarta 12345
                </p>
                <a 
                  href="https://maps.google.com/?q=SMA+Negeri+1+Jakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-primary font-bold hover:scale-105 transition-all duration-300"
                >
                  Buka di Google Maps
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mb-20">
            <h2 className="font-outfit font-black text-4xl md:text-5xl text-gray-900 mb-10 text-center">
              Ikuti Media <span className="text-gradient">Sosial Kami</span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} text-white px-8 py-6 rounded-3xl font-bold flex items-center gap-3 transition-all duration-300 hover:scale-110 shadow-xl border-4 border-gray-900 ${
                    index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
                  }`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="bg-accent-purple/20 text-accent-purple px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  FAQ
                </span>
              </div>
              <h2 className="font-outfit font-black text-4xl md:text-5xl text-gray-900">Pertanyaan Umum</h2>
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className={`bg-white p-8 rounded-3xl border-4 border-gray-900 shadow-xl hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } hover:rotate-0`}>
                  <h3 className="font-outfit font-black text-xl text-accent-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
