import Hero from './(home)/components/Hero';
import Promise from './(home)/components/Promise';
import Offerings from './(home)/components/Offerings';
import Community from './(home)/components/Community';
import Newsletter from './(home)/components/Newsletter';
import CallToAction from './(home)/components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Promise />
      <Offerings />
      <Community />
      <Newsletter />
      <CallToAction />
    </>
  );
}
