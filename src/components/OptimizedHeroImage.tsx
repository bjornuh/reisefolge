import React, { useState } from 'react';

interface OptimizedHeroImageProps {
  className?: string;
}

const OptimizedHeroImage: React.FC<OptimizedHeroImageProps> = ({ className = '' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Base image URL (CloudFront CDN)
  const imageUrl = 'https://d64gsuwffb70l.cloudfront.net/6817c130d4a982ff397560a1_1756721899791_b6ce4821.jpg';

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}

      {/* Hero image */}
      <img
        src={imageUrl}
        alt="Bergensbanen railway through Norwegian landscape"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        loading="eager"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default OptimizedHeroImage;