import React from 'react';
import { useApp } from '../../context/AppContext';
import { formatRupiah, formatNumber } from '../../utils/formatters';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Boxes, 
  MessageSquare, 
  Sparkles,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Cpu,
  BarChart3,
  ExternalLink,
  Sprout
} from 'lucide-react';

export const HomePage = () => {
  const { products, navigateTo, desaInfo, currentStocks, harvests } = useApp();

  const totalPanenAll = harvests.reduce((acc, h) => acc + (Number(h.jumlahKg) || 0), 0);
  const totalStokAll = 
    (currentStocks.Padi || 0) + 
    (currentStocks.Jagung || 0) + 
    (currentStocks.Kedelai || 0) + 
    (currentStocks['Kacang Hijau'] || 0);

  return (
    <div className="space-y-20 pb-20 font-manrope">
      
      {/* HERO SECTION — Orbitani Split Signature Style */}
      <section className="relative overflow-hidden bg-[#0a1f14] text-white">
        
        {/* Background Image with Orbitani Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80")' }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f14] via-[#0a1f14]/90 to-[#0a1f14]/50 pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#95d5b2_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-7 text-left z-10">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold text-[#95d5b2]">
              <span className="w-2 h-2 rounded-full bg-[#95d5b2] animate-pulse"></span>
              <span>Sistem Informasi Pertanian Terpadu • Desa Dawuhan, Kec. Banyumas</span>
            </div>

            {/* Headline with Cormorant Garamond Serif */}
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08]">
              Kelompok Tani <br />
              <span className="text-[#c9a96e] italic font-serif">
                Marsudi Among Tani
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-xl font-manrope font-normal leading-relaxed">
              Platform transparansi hasil panen, pemantauan stok lumbung pangan desa, dan distribusi komoditas unggulan (Padi Organik, Jagung, Kedelai, & Kacang Hijau) binaan Kelompok Tani Marsudi Among Tani Desa Dawuhan.
            </p>

            {/* Quick Metrics in Translucent Pill Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                <div className="text-xl sm:text-2xl font-poppins font-bold text-[#c9a96e]">
                  {formatNumber(totalStokAll)} <span className="text-xs font-normal text-white/70">kg</span>
                </div>
                <div className="text-xs text-white/70 font-medium mt-1">Stok Lumbung</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                <div className="text-xl sm:text-2xl font-poppins font-bold text-[#95d5b2]">
                  148
                </div>
                <div className="text-xs text-white/70 font-medium mt-1">Anggota Terdaftar</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                <div className="text-xl sm:text-2xl font-poppins font-bold text-white">
                  20.0 <span className="text-xs font-normal text-white/70">Ha</span>
                </div>
                <div className="text-xs text-white/70 font-medium mt-1">Lahan 6 Blok Sawah</div>
              </div>
            </div>

            {/* Pill CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateTo('katalog')}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 font-poppins font-semibold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-black/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>Katalog Produk Unggulan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#95d5b2]" />
              </button>

              <button
                onClick={() => navigateTo('program')}
                className="bg-transparent hover:bg-white/10 text-white/90 border border-white/25 font-poppins font-medium px-6 py-3.5 rounded-full text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <BarChart3 className="w-4 h-4 text-[#c9a96e]" />
                <span>Rekap Panen Bulanan & MT ↗</span>
              </button>
            </div>
          </div>

          {/* Right Visual Column (Card Preview) */}
          <div className="lg:col-span-5 z-10">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#2d6a4f] via-[#c9a96e]/30 to-[#95d5b2]/40 rounded-3xl blur-xl opacity-50"></div>
              
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#0a1f14]">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
                  alt="Hamparan sawah subur Desa Dawuhan"
                  className="w-full h-80 object-cover"
                />
                
                <div className="p-6 bg-[#0a1f14]/95 text-left border-t border-white/10">
                  <div className="flex items-center justify-between text-xs font-poppins font-semibold text-[#c9a96e] mb-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Jl. Pesarehan Adipati Mrapat No 68
                    </span>
                    <span className="bg-[#1c4234] text-[#95d5b2] px-2.5 py-0.5 rounded-full text-[11px]">
                      Organik Bersertifikat
                    </span>
                  </div>
                  
                  <h3 className="font-serif font-bold text-white text-xl">
                    Lumbung Pertanian Ramah Lingkungan
                  </h3>
                  
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed font-manrope">
                    Pertanian terpadu Desa Dawuhan beririgasi 3 bendung (Gombyang, Krikil, Dukuh), bersertifikat organik dan halal, dikelola transparan demi kemakmuran petani.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: 3 PILAR KEUNGGULAN (Orbitani Card Aesthetic) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#dbf0e3] text-[#1c4234] flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-poppins font-bold text-[#1c4234] mb-2">Pencatatan Panen Cepat</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-manrope">
              Setiap setoran panen dicatat terperinci berdasarkan nama petani, komoditas, jenis pengelolaan (Organik, Non-Organik, Konversi), serta siklus Masa Tanam.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#f5ece0] text-[#c9a96e] flex items-center justify-center mb-5">
              <Boxes className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-poppins font-bold text-[#1c4234] mb-2">Manajemen Stok Lumbung</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-manrope">
              Pantau ketersediaan stok gabah padi, jagung pipil, kedelai kuning, dan kacang hijau secara real-time untuk menjaga stabilitas pangan desa.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#dbf0e3] text-[#1c4234] flex items-center justify-center mb-5">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-poppins font-bold text-[#1c4234] mb-2">Pemesanan Langsung WhatsApp</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-manrope">
              Pembeli, koperasi, dan pengrajin olahan pangan terhubung langsung dengan pengurus lumbung kelompok tani dengan harga yang adil dan transparan.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION: PRODUK UNGGULAN (Padi, Jagung, Kedelai, Kacang Hijau) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-poppins font-bold uppercase tracking-wider text-[#1c4234] bg-[#dbf0e3] px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#1c4234]" />
              Komoditas Andalan Desa Dawuhan
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c4234]">
              Produk Unggulan Kelompok Tani
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mt-1 font-manrope">
              Empat komoditas pangan bermutu tinggi yang dipanen langsung dari lahan binaan Kelompok Tani Marsudi Among Tani.
            </p>
          </div>

          <button
            onClick={() => navigateTo('katalog')}
            className="text-xs sm:text-sm font-poppins font-semibold text-[#1c4234] hover:text-[#0a1f14] flex items-center gap-1.5 group cursor-pointer shrink-0"
          >
            <span>Lihat Semua di Katalog</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod) => {
            const waUrl = `https://wa.me/${desaInfo.kontakWA}?text=Halo%20Admin,%20saya%20mau%20pesan%20${encodeURIComponent(prod.nama)}`;

            return (
              <div 
                key={prod.id} 
                className="bg-white rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#1c4234]"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={prod.gambar}
                      alt={prod.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1c4234]/90 backdrop-blur-xs text-white text-[10px] font-poppins font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {prod.kategori}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] font-poppins font-bold text-[#1c4234] shadow-xs border border-[#dbf0e3]">
                      Stok: {formatNumber(prod.stok)} {prod.satuan}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-serif font-bold text-lg text-[#1c4234] line-clamp-2 min-h-12">
                      {prod.nama}
                    </h3>
                    <p className="text-xs text-gray-600 font-manrope line-clamp-2 leading-relaxed">
                      {prod.deskripsi}
                    </p>
                    <div className="text-xl font-poppins font-bold text-[#1c4234] pt-2 border-t border-gray-100">
                      {formatRupiah(prod.harga)}
                      <span className="text-xs font-normal text-gray-500"> / {prod.satuan}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#1c4234] hover:bg-[#0a1f14] active:scale-98 text-white font-poppins font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#95d5b2]" />
                    <span>Pesan via WA</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: POLA MASA TANAM & PRESTASI DAWUHAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#f0fdf4] to-white rounded-3xl p-8 sm:p-12 border border-[#dbf0e3] space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-poppins font-bold uppercase tracking-wider text-[#1c4234] bg-[#dbf0e3] px-3.5 py-1 rounded-full">
              Siklus Pertanian Berkelanjutan
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1c4234]">
              Pola 3 Masa Tanam (MT) Kelompok Tani
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-manrope">
              Tata kelola rotasi tanaman persawahan Desa Dawuhan untuk menjaga kesuburan tanah dan stabilitas hasil panen sepanjang tahun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#dbf0e3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif font-bold text-lg text-emerald-900">MT 01 (Okt - Jan)</h3>
              <p className="text-xs text-gray-600 font-manrope leading-relaxed">
                <strong>Musim Rendeng (Hujan):</strong> Fokus utama penanaman padi sawah organik Ciherang & Mentik Wangi memanfaatkan debit irigasi penuh.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#dbf0e3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif font-bold text-lg text-amber-900">MT 02 (Feb - Mei)</h3>
              <p className="text-xs text-gray-600 font-manrope leading-relaxed">
                <strong>Musim Gadu (Peralihan):</strong> Penanaman padi sawah lanjutan dan tanaman palawija selingan seperti jagung hibrida.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#dbf0e3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif font-bold text-lg text-teal-900">MT 03 (Juni - Sept)</h3>
              <p className="text-xs text-gray-600 font-manrope leading-relaxed">
                <strong>Musim Kemarau (Palawija):</strong> Rotasi optimal kedelai unggul Anjasmoro, kacang hijau Vima, dan jagung pipil untuk memutus siklus hama.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
