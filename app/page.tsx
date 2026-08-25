import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import Comparison from '@/components/Comparison';
import UseCases from '@/components/UseCases';
import Roadmap from '@/components/Roadmap';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-dark via-brand-slate to-brand-dark">
      <Hero />
      <Calculator />
      <Comparison />
      <UseCases />
      <Roadmap />
      <Waitlist />
      <Footer />
    </main>
  );
}
