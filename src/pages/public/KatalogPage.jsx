import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { formatRupiah, formatNumber } from '../../utils/formatters';
import { 
  ShoppingBag, 
  MessageSquare, 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  Scale, 
  Sparkles,
  PhoneCall,
  Info,
  Sprout
} from 'lucide-react';

export const KatalogPage = () => {
  const { products, desaInfo } = useApp();
  const [selectedFilter, setSelectedFilter] = useState('Semua');

  const filteredProducts = selectedFilter === 'Semua'
    ? products
    : products.filter(p => p.kategori === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-manrope">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#dbf0e3] text-[#1c4234] px-4 py-1.5 rounded-full text-xs font-poppins font-bold uppercase tracking-wider">
          <ShoppingBag className="w-3.5 h-3.5 text-[#1c4234]" />
          Katalog Pangan Petani Desa Dawuhan
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c4234]">
          Katalog Hasil Panen Petani
        </h1>
        
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-manrope">
          Dapatkan beras organik pulen bersertifikat, jagung pipil kering berkualitas, kedelai kuning Anjasmoro, dan kacang hijau unggul langsung dari lumbung Poktan Marsudi Among Tani dengan timbangan presisi dan harga yang adil.
        </p>

        {/* Orbitani Pill Filter Switcher (4 Komoditas) */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {['Semua', 'Padi', 'Jagung', 'Kedelai', 'Kacang Hijau'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-poppins font-semibold transition-all cursor-pointer ${
                selectedFilter === category
                  ? 'bg-[#1c4234] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trust Badges in Orbitani Light Green Tints */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#f0fdf4] p-5 rounded-2xl border border-[#dbf0e3]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1c4234] text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#95d5b2]" />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-[#1c4234] text-sm">100% Panen Petani Dawuhan</h4>
            <p className="text-xs text-gray-600 font-manrope">Beras organik bersertifikat & bebas kimia sintetis</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#c9a96e] text-white flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-[#1c4234] text-sm">Timbangan Digital Tera</h4>
            <p className="text-xs text-gray-600 font-manrope">Akurat terverifikasi lumbung kelompok</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2d6a4f] text-white flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-[#95d5b2]" />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-[#1c4234] text-sm">Siap Kirim Partai / Eceran</h4>
            <p className="text-xs text-gray-600 font-manrope">Armada pikap & ekspedisi ke seluruh wilayah</p>
          </div>
        </div>
      </div>

      {/* Product Grid (4 Commodities) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((prod) => {
          // Format strict WA link requested by user:
          // https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20[NAMA_PRODUK]
          const waUrl = `https://wa.me/${desaInfo.kontakWA}?text=Halo%20Admin,%20saya%20mau%20pesan%20${encodeURIComponent(prod.nama)}`;

          return (
            <div 
              key={prod.id} 
              className="bg-white rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#1c4234]"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={prod.gambar}
                    alt={prod.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1c4234]/90 backdrop-blur-xs text-white text-[11px] font-poppins font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {prod.kategori}
                  </div>
                  
                  {/* Stock Pill Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs text-xs font-poppins font-bold text-[#1c4234] border border-[#dbf0e3]">
                    Stok: {formatNumber(prod.stok)} {prod.satuan}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#1c4234] line-clamp-2 min-h-14">
                      {prod.nama}
                    </h3>
                    <p className="text-xs text-gray-600 font-manrope mt-2 line-clamp-3 leading-relaxed">
                      {prod.deskripsi}
                    </p>
                  </div>

                  {/* Highlights / Keunggulan */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-poppins font-bold uppercase tracking-wider text-gray-400 block">
                      Keunggulan Produk:
                    </span>
                    <ul className="space-y-1">
                      {prod.keunggulan.map((keunggulan, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-700 font-manrope">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2d6a4f] shrink-0" />
                          <span>{keunggulan}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Kemasan Tersedia */}
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-poppins font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                      Pilihan Kemasan:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.kemasanTersedia.map((kemasan, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          {kemasan}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="p-6 pt-0 space-y-4">
                <div className="pt-3 border-t border-gray-100 flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 font-medium block">Harga Satuan Lumbung</span>
                    <div className="text-2xl font-poppins font-bold text-[#1c4234]">
                      {formatRupiah(prod.harga)}
                      <span className="text-xs font-normal text-gray-500"> / {prod.satuan}</span>
                    </div>
                  </div>
                </div>

                {/* Big Button: Pesan via WA */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#1c4234] hover:bg-[#0a1f14] active:scale-98 text-white font-poppins font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer text-center"
                >
                  <MessageSquare className="w-4 h-4 text-[#95d5b2] group-hover:scale-110 transition-transform" />
                  <span>Pesan via WA</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Public Purchasing Notice */}
      <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-sm text-amber-900">
              Pemberitahuan Pembelian Publik
            </h4>
            <p className="text-xs text-amber-800/90 font-manrope mt-0.5">
              Untuk menjaga privasi dan ketertiban tata kelola hasil panen, pembelian dilakukan langsung melalui narahubung resmi WhatsApp Kelompok Tani tanpa perlu membuat akun/login.
            </p>
          </div>
        </div>

        <a
          href={`https://wa.me/${desaInfo.kontakWA}?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20pemesanan%20hasil%20panen%20Desa%20Dawuhan`}
          target="_blank"
          rel="noreferrer"
          className="bg-amber-600 hover:bg-amber-700 text-white font-poppins font-semibold text-xs px-5 py-2.5 rounded-full transition-all shrink-0 cursor-pointer"
        >
          Konsultasi Admin WA
        </a>
      </div>

    </div>
  );
};
