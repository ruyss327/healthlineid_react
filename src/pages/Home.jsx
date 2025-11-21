import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero title="Selamat Datang di HealthLineID" subtitle="Sumber informasi terpercaya tentang kesehatan dan gaya hidup sehat." />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
