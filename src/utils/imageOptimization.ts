// Image optimization utilities

export interface ImageSizes {
  mobile: { width: number; height: number };
  tablet: { width: number; height: number };
  desktop: { width: number; height: number };
  large: { width: number; height: number };
}

export const defaultImageSizes: ImageSizes = {
  mobile: { width: 768, height: 432 },
  tablet: { width: 1024, height: 576 },
  desktop: { width: 1920, height: 1080 },
  large: { width: 2560, height: 1440 }
};

// Check browser support for modern image formats
export const checkImageFormatSupport = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;

  const supportsWebP = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  const supportsAVIF = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;

  return {
    webp: supportsWebP,
    avif: supportsAVIF
  };
};

// Generate responsive srcSet for different formats
export const generateSrcSet = (baseUrl: string, sizes: ImageSizes, format: 'jpg' | 'webp' | 'avif') => {
  const extension = format === 'jpg' ? '.jpg' : `.${format}`;
  
  return [
    `${baseUrl}_${sizes.mobile.width}x${sizes.mobile.height}${extension} ${sizes.mobile.width}w`,
    `${baseUrl}_${sizes.tablet.width}x${sizes.tablet.height}${extension} ${sizes.tablet.width}w`,
    `${baseUrl}_${sizes.desktop.width}x${sizes.desktop.height}${extension} ${sizes.desktop.width}w`,
    `${baseUrl}_${sizes.large.width}x${sizes.large.height}${extension} ${sizes.large.width}w`
  ].join(', ');
};

// Standard sizes attribute for responsive images
export const defaultSizes = "(max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1920px) 1920px, 2560px";

// Preload critical images
export const preloadImage = (src: string, format?: 'webp' | 'avif') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  if (format) {
    link.type = `image/${format}`;
  }
  document.head.appendChild(link);
};

// Calculate optimal image quality based on connection speed
export const getOptimalQuality = (): number => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 60; // Lower quality for slow connections
    } else if (connection.effectiveType === '3g') {
      return 75;
    }
  }
  return 85; // Default high quality
};