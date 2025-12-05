import React from 'react';

const Tips = () => {
  // Data dummy untuk tips (nanti bisa diambil dari database/API)
  const tipsData = [
    {
      title: "Minum Air Putih",
      desc: "Pastikan minum minimal 8 gelas sehari untuk menjaga hidrasi tubuh.",
      color: "bg-blue-500"
    },
    {
      title: "Kurangi Gula",
      desc: "Batasi konsumsi minuman manis kemasan untuk mencegah diabetes.",
      color: "bg-pink-500"
    },
    {
      title: "Jalan Kaki Pagi",
      desc: "Sinar matahari pagi mengandung vitamin D yang baik untuk tulang.",
      color: "bg-orange-500"
    },
    {
      title: "Perbanyak Sayur",
      desc: "Serat dalam sayuran membantu pencernaan dan menurunkan kolesterol.",
      color: "bg-green-500"
    },
    {
      title: "Detox Digital",
      desc: "Kurangi screen time sebelum tidur agar kualitas tidur lebih baik.",
      color: "bg-indigo-500"
    },
    {
      title: "Cek Kesehatan Rutin",
      desc: "Lakukan medical check-up setidaknya setahun sekali.",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      
      {/* (PENTING: Tidak ada <Navbar /> di sini lagi) */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tips Sehat Harian
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Perubahan kecil yang memberikan dampak besar bagi tubuh Anda.
          </p>
        </div>

        {/* Grid Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tipsData.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className={`h-2 w-full ${tip.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full ${tip.color} bg-opacity-10 flex items-center justify-center mr-3`}>
                    <span className={`text-xl font-bold ${tip.color.replace('bg-', 'text-')}`}>
                      # {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Tips;