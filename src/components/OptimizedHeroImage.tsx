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
        <div
          className="absolute inset-0 animate-pulse"
          style={{ background: 'linear-gradient(to bottom right, #1e293b, #0f172a)' }}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
          />
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
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      />
    </div>
  );
};

export default OptimizedHeroImage;
