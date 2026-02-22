import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
  const location = useLocation();
  
  const defaultTitle = 'BETA - Platform Organisasi Sekolah Modern';
  const defaultDescription = 'Transformasi lembaga pendidikan Anda dengan teknologi terkini yang dirancang untuk efisiensi, kolaborasi, dan pertumbuhan.';
  
  const finalTitle = title ? `${title} | BETA` : defaultTitle;
  const finalDescription = description || defaultDescription;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = finalDescription;
    
    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
  }, [finalTitle, finalDescription, keywords, location]);

  return null;
};

export default SEO;
