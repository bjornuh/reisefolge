import React, { Suspense } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import ErrorBoundary from './ErrorBoundary';
import SmoothScroll from './SmoothScroll';
import BackToTop from './BackToTop';
import LoadingSpinner from './LoadingSpinner';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import CookieBanner from './CookieBanner';

// Lazy load components that are below the fold
const AboutBook = React.lazy(() => import('./AboutBook'));
const MeetGustav = React.lazy(() => import('./MeetGustav'));
const Characters = React.lazy(() => import('./Characters'));

const Themes = React.lazy(() => import('./Themes'));
const TargetAudience = React.lazy(() => import('./TargetAudience'));
const Testimonials = React.lazy(() => import('./Testimonials'));
const AuthorSection = React.lazy(() => import('./AuthorSection'));
const PurchaseSection = React.lazy(() => import('./PurchaseSection'));
const Footer = React.lazy(() => import('./Footer'));

// Enhanced loading component for better UX
const SectionSkeleton = () => (
  <div className="animate-pulse py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-8 bg-gray-200 rounded-lg mb-4 w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded-lg mb-8 w-2/3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-32 bg-gray-200 rounded-lg"></div>
        <div className="h-32 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  </div>
);

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <ErrorBoundary>
      <SmoothScroll>
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
          <Navigation />
          <HeroSection />
          
          <Suspense fallback={<SectionSkeleton />}>
            <AboutBook />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <MeetGustav />
          </Suspense>

          
          <Suspense fallback={<SectionSkeleton />}>
            <Characters />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Themes />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Testimonials />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <TargetAudience />
          </Suspense>


          
          <Suspense fallback={<SectionSkeleton />}>
            <AuthorSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <PurchaseSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <Footer />
          </Suspense>
          
          <BackToTop />
          <CookieBanner />
        </div>
      </SmoothScroll>
    </ErrorBoundary>
  );
};

export default AppLayout;
