import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InstructorSection from '@/components/InstructorSection';
import StudentWorksSection from '@/components/StudentWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <HeroSection />
    <AboutSection />
    <InstructorSection />
    <StudentWorksSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
