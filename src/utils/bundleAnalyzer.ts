// Bundle analysis utility
// Run with: npm run build && npm run analyze

export const analyzeBundleSize = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    console.log('Performance Metrics:');
    console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart, 'ms');
    console.log('Load Complete:', navigation.loadEventEnd - navigation.loadEventStart, 'ms');
    console.log('Total Page Load:', navigation.loadEventEnd - navigation.fetchStart, 'ms');
    
    // Log resource sizes
    const resources = performance.getEntriesByType('resource');
    const jsResources = resources.filter(r => r.name.includes('.js'));
    const cssResources = resources.filter(r => r.name.includes('.css'));
    
    console.log('JavaScript files:', jsResources.length);
    console.log('CSS files:', cssResources.length);
    
    jsResources.forEach(resource => {
      console.log(`JS: ${resource.name.split('/').pop()} - ${Math.round(resource.transferSize / 1024)}KB`);
    });
  }
};

// Call this in development to monitor bundle sizes
if (import.meta.env.DEV) {
  window.addEventListener('load', analyzeBundleSize);
}