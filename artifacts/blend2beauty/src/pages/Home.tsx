import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import VideoSection from '@/components/VideoSection';
import WhySection from '@/components/WhySection';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <VideoSection />
        <WhySection />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
