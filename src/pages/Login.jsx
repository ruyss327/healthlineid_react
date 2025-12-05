import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // State untuk mengatur apakah sedang mode Login atau Daftar
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex bg-gray-50">
      
      {/* BAGIAN KIRI: Formulir */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          
          {/* Header Formulir */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              {isLogin ? 'Selamat Datang Kembali' : 'Buat Akun Baru'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isLogin 
                ? 'Masuk untuk mengakses tips kesehatan personal Anda.' 
                : 'Bergabunglah bersama ribuan pengguna hidup sehat lainnya.'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            
            {/* Input Nama (Hanya muncul saat Daftar) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Contoh: Budi Santoso"
                />
              </div>
            )}

            {/* Input Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="nama@email.com"
              />
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Lupa Password (Hanya saat Login) */}
            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Lupa password?
                </a>
              </div>
            )}

            {/* Tombol Aksi */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:-translate-y-0.5"
            >
              {isLogin ? 'Masuk Sekarang' : 'Daftar Gratis'}
            </button>
          </form>

          {/* Switch Login/Register */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'} 
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="ml-2 font-bold text-blue-600 hover:text-blue-500"
              >
                {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* BAGIAN KANAN: Gambar / Dekorasi (Hidden di Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 opacity-90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Health Lifestyle" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-white px-10 text-center max-w-lg">
          <h2 className="text-4xl font-bold mb-6">"Kesehatan adalah investasi terbaik untuk masa depan Anda."</h2>
          <p className="text-blue-100 text-lg">Bergabunglah dengan HealthLine.id dan mulai perjalanan hidup sehat Anda hari ini.</p>
        </div>
      </div>

    </div>
  );
};

export default Login;