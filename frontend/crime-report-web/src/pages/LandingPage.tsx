import { Hero } from '../components/home/Hero';
import { ActionSection } from '../components/home/ActionSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { TrustSection } from '../components/home/TrustSection';

export default function LandingPage() {
  return (
    <div className="max-w-container-max mx-auto w-full">
      <Hero />
      <ActionSection />
      <ProcessSection />
      <TrustSection />
    </div>
  );
}
