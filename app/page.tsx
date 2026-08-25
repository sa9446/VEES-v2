import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Flavors from '@/components/Flavors';
import Comparison from '@/components/Comparison';
import Calculator from '@/components/Calculator';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Buy from '@/components/Buy';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Flavors />
      <Comparison />
      <Calculator />
      <Reviews />
      <FAQ />
      <Buy />
      <Footer />
    </main>
  );
}
