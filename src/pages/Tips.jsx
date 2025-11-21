import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import TipCard from '../components/TipCard';
import './Tips.css';

const Tips = () => {
  const tips = [
    {
      title: "Cara Mengatasi Stres Ringan",
      desc: "Stres adalah hal yang wajar, tetapi jika dibiarkan bisa memengaruhi kesehatan mental dan fisikmu.",
      details: (
        <ul>
          <li>Luangkan waktu untuk bersantai dan lakukan hal yang kamu sukai.</li>
          <li>Cobalah teknik pernapasan atau meditasi untuk menenangkan pikiran.</li>
          <li>Kurangi konsumsi kafein dan tidur cukup setiap malam.</li>
          <li>Berbagi cerita dengan teman atau keluarga untuk meringankan beban pikiran.</li>
        </ul>
      )
    },
    {
      title: "Cara Menjaga Daya Tahan Tubuh Saat Musim Hujan",
      desc: "Musim hujan seringkali membuat tubuh lebih rentan terhadap penyakit seperti flu dan batuk.",
      details: (
        <ul>
          <li>Konsumsi makanan bergizi seperti sayur, buah, dan protein tanpa lemak.</li>
          <li>Perbanyak minum air putih agar tubuh tidak dehidrasi.</li>
          <li>Gunakan pakaian hangat dan hindari kehujanan secara langsung.</li>
          <li>Istirahat cukup dan olahraga ringan untuk menjaga kebugaran.</li>
        </ul>
      )
    },
    {
      title: "Cara Menjaga Kesehatan Mata Saat Menatap Layar HP",
      desc: "Terlalu lama menatap layar HP dapat menyebabkan mata lelah, kering, dan pandangan kabur.",
      details: (
        <ul>
          <li>Gunakan aturan 20-20-20: setiap 20 menit lihat objek sejauh 20 kaki selama 20 detik.</li>
          <li>Atur kecerahan layar sesuai pencahayaan ruangan.</li>
          <li>Gunakan mode malam atau filter cahaya biru di HP kamu.</li>
          <li>Perbanyak konsumsi makanan kaya vitamin A, seperti wortel dan ikan.</li>
        </ul>
      )
    }
  ];

  return (
    <>
      <Navbar />
      <Hero title="Tips Kesehatan" subtitle="Jaga tubuh dan pikiranmu dengan langkah-langkah sederhana setiap hari 💪" />
      <section className="tips-container">
        {tips.map((tip, index) => (
          <TipCard key={index} title={tip.title} desc={tip.desc} details={tip.details} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Tips;
