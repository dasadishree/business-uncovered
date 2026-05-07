import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Chronicles from './components/Chronicles';
import Future from './components/Future';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Blog/>
      <Chronicles/>
      <Future />
      <Footer />
    </main>
  );
}