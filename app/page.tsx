import Hero from './components/landing/Hero';
import Promise from './components/landing/Promise';
import Offerings from './components/landing/Offerings';
import Community from './components/landing/Community';
import Newsletter from './components/landing/Newsletter';
import CallToAction from './components/landing/CallToAction';

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pb-20">
      <Hero />
      <Promise />
      <Offerings />
      <Community />
      <Newsletter />
      <CallToAction />
    </main>
  );
}
