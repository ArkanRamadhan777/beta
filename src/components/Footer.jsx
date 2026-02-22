import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigasi: [
      { label: 'Beranda', path: '/' },
      { label: 'Event', path: '/events' },
      { label: 'Struktur Organisasi', path: '/organization' },
      { label: 'Galeri', path: '/gallery' },
      { label: 'Kontak', path: '/contact' },
    ],
    sosialMedia: [
      { label: 'Instagram', url: 'https://instagram.com/ganexa.team' },
      { label: 'TikTok', url: 'https://tiktok.com/@ganexa.team' },
      { label: 'Email', url: 'mailto:ganexa.team@gmail.com' },
    ],
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-outfit font-bold text-3xl text-gradient inline-block mb-4">
              BETA
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Platform Organisasi Sekolah Modern untuk Indonesia. Transformasi pendidikan dengan teknologi terkini.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-outfit font-semibold text-gray-200 mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {footerLinks.navigasi.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-outfit font-semibold text-gray-200 mb-4">Ikuti Kami</h3>
            <ul className="space-y-2">
              {footerLinks.sosialMedia.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} BETA. Platform Organisasi Modern. Made by <span className="text-cyan-400">ganexa</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
