import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { formatNumber, formatRupiah, formatDateIndo, getMonthName, getMasaTanamFullLabel } from '../../utils/formatters';
import {
  Calendar,
  TrendingUp,
  ShoppingBag,
  Boxes,
  Users,
  History,
  Wheat,
  Search,
  Sprout,
  Clock,
  Sparkles
} from 'lucide-react';

export const ProgramPage = () => {
  const {
    selectedPeriod,
    setSelectedPeriod,
    getSummaryForPeriod
  } = useApp();

  const [activeTab, setActiveTab] = useState('panen'); // 'panen' or 'penjualan'
  const [searchTerm, setSearchTerm] = useState('');
  const [filterKomoditas, setFilterKomoditas] = useState('Semua');
  const [filterPengelolaan, setFilterPengelolaan] = useState('Semua');
  const [filterMT, setFilterMT] = useState('Semua');

  const {
    periodHarvests,
    periodSales,
    totalPanen,
    totalJual,
    totalNilaiJual,
    stokAkhir,
    petaniAktif,
    panenOrganik,
    panenNonOrganik,
    panenKonversi
  } = getSummaryForPeriod(selectedPeriod.month, selectedPeriod.year);

  // Month and Year options
  const months = [
    { value: '01', name: 'Januari' },
    { value: '02', name: 'Februari' },
    { value: '03', name: 'Maret' },
    { value: '04', name: 'April' },
    { value: '05', name: 'Mei' },
    { value: '06', name: 'Juni' },
    { value: '07', name: 'Juli' },
    { value: '08', name: 'Agustus' },
    { value: '09', name: 'September' },
    { value: '10', name: 'Oktober' },
    { value: '11', name: 'November' },
    { value: '12', name: 'Desember' }
  ];

  const years = ['2026', '2025'];

  // Archive Quick Links
  const quickArchives = [
    { label: 'Oktober 2026 (MT 01)', month: '10', year: '2026' },
    { label: 'September 2026 (MT 03)', month: '09', year: '2026' },
    { label: 'Agustus 2026 (MT 03)', month: '08', year: '2026' },
    { label: 'Mei 2026 (MT 02)', month: '05', year: '2026' }
  ];

  const handleArchiveClick = (month, year) => {
    setSelectedPeriod({ month, year });
  };

  // Filtered harvest data
  const filteredHarvests = periodHarvests.filter(item => {
    const matchesSearch =
      item.petaniNama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.komoditas.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.catatan && item.catatan.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesKomoditas = filterKomoditas === 'Semua' || item.komoditas === filterKomoditas;
    const matchesPengelolaan = filterPengelolaan === 'Semua' || item.pengelolaan === filterPengelolaan;
    const matchesMT = filterMT === 'Semua' || item.masaTanam === filterMT;

    return matchesSearch && matchesKomoditas && matchesPengelolaan && matchesMT;
  });

  // Filtered sales data
  const filteredSales = periodSales.filter(item => {
    const matchesSearch =
      item.pembeli.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.komoditas.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesKomoditas = filterKomoditas === 'Semua' || item.komoditas === filterKomoditas;

    return matchesSearch && matchesKomoditas;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-manrope">

      {/* Header & Page Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#dbf0e3] text-[#1c4234] px-4 py-1.5 rounded-full text-xs font-poppins font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#1c4234]" />
          Transparansi Hasil Tani Desa Dawuhan
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c4234] tracking-tight">
              Program: Hasil Panen & Penjualan
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl font-manrope">
              Laporan berkala hasil panen gabah & palawija, status budidaya (Organik, Konversi, Non-Organik), dan 3 siklus Masa Tanam lumbung kelompok tani.
            </p>
          </div>

          {/* FILTER PERIODE (Dropdown Bulan & Tahun) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-2 shrink-0">
            <div className="text-xs font-poppins font-bold uppercase text-[#1c4234] flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#2d6a4f]" />
              Pilih Periode Laporan:
            </div>

            <div className="flex items-center gap-2">
              {/* Dropdown Bulan */}
              <select
                value={selectedPeriod.month}
                onChange={(e) => setSelectedPeriod(prev => ({ ...prev, month: e.target.value }))}
                className="bg-gray-50 border border-gray-300 text-[#1c4234] font-poppins font-bold text-xs sm:text-sm rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-[#1c4234] focus:outline-hidden cursor-pointer"
              >
                {months.map(m => (
                  <option key={m.value} value={m.value}>
                    Bulan {m.name}
                  </option>
                ))}
              </select>

              {/* Dropdown Tahun */}
              <select
                value={selectedPeriod.year}
                onChange={(e) => setSelectedPeriod(prev => ({ ...prev, year: e.target.value }))}
                className="bg-gray-50 border border-gray-300 text-[#1c4234] font-poppins font-bold text-xs sm:text-sm rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-[#1c4234] focus:outline-hidden cursor-pointer"
              >
                {years.map(y => (
                  <option key={y} value={y}>
                    Tahun {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ARSIP BULAN SEBELUMNYA & MASA TANAM */}
      <div className="bg-[#f0fdf4] p-4 sm:p-5 rounded-2xl border border-[#dbf0e3] space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-poppins font-bold uppercase tracking-wider text-[#1c4234] flex items-center gap-1.5 shrink-0">
            <History className="w-4 h-4 text-[#2d6a4f]" />
            Akses Cepat Arsip Historis:
          </span>

          <div className="flex flex-wrap gap-2">
            {quickArchives.map((archive) => {
              const isSelected = selectedPeriod.month === archive.month && selectedPeriod.year === archive.year;
              return (
                <button
                  key={`${archive.month}-${archive.year}`}
                  onClick={() => handleArchiveClick(archive.month, archive.year)}
                  className={`text-xs font-poppins font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${isSelected
                      ? 'bg-[#1c4234] text-white shadow-sm'
                      : 'bg-white text-[#1c4234] hover:bg-[#dbf0e3] border border-[#dbf0e3]'
                    }`}
                >
                  {archive.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Info 3 Masa Tanam Banner */}
        <div className="pt-2 border-t border-[#dbf0e3]/80 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-manrope text-gray-700">
          <div className="bg-white/70 p-2.5 rounded-xl border border-[#dbf0e3] flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
            <div>
              <span className="font-poppins font-bold text-emerald-900 block text-[11px]">MT 01 (Okt - Jan)</span>
              <span className="text-gray-500 text-[10px]">Musim Rendeng (Padi Organik Utama)</span>
            </div>
          </div>
          <div className="bg-white/70 p-2.5 rounded-xl border border-[#dbf0e3] flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-700 shrink-0" />
            <div>
              <span className="font-poppins font-bold text-amber-900 block text-[11px]">MT 02 (Feb - Mei)</span>
              <span className="text-gray-500 text-[10px]">Musim Gadu (Padi & Palawija)</span>
            </div>
          </div>
          <div className="bg-white/70 p-2.5 rounded-xl border border-[#dbf0e3] flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-700 shrink-0" />
            <div>
              <span className="font-poppins font-bold text-teal-900 block text-[11px]">MT 03 (Juni - Sept)</span>
              <span className="text-gray-500 text-[10px]">Musim Kemarau (Kedelai, Kacang Hijau & Jagung)</span>
            </div>
          </div>
        </div>
      </div>

      {/* RINGKASAN KHUSUS BULAN TERPILIH (4 Kartu Ringkasan) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1c4234] flex items-center gap-2">
            <span>Ringkasan Periode:</span>
            <span className="italic text-[#c9a96e]">
              {getMonthName(selectedPeriod.month)} {selectedPeriod.year}
            </span>
          </h2>
          <span className="text-xs text-gray-500 font-medium font-manrope">
            Diperbarui secara reaktif
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Card 1: Total Panen */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs relative overflow-hidden group hover:border-[#1c4234] transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-poppins font-bold text-gray-500 uppercase tracking-wider">Total Panen</span>
              <div className="w-10 h-10 rounded-xl bg-[#dbf0e3] text-[#1c4234] flex items-center justify-center">
                <Wheat className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-[#1c4234] tracking-tight">
                {formatNumber(totalPanen)} <span className="text-xs font-medium text-gray-500">kg</span>
              </div>
              <p className="text-xs text-[#2d6a4f] mt-1 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                {periodHarvests.length} transaksi panen masuk
              </p>
            </div>
          </div>

          {/* Card 2: Total Jual */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs relative overflow-hidden group hover:border-[#c9a96e] transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-poppins font-bold text-gray-500 uppercase tracking-wider">Total Terdistribusi</span>
              <div className="w-10 h-10 rounded-xl bg-[#f5ece0] text-[#c9a96e] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-amber-900 tracking-tight">
                {formatNumber(totalJual)} <span className="text-xs font-medium text-gray-500">kg</span>
              </div>
              <p className="text-xs text-[#c9a96e] mt-1 font-semibold">
                Senilai {formatRupiah(totalNilaiJual)}
              </p>
            </div>
          </div>

          {/* Card 3: Stok Akhir Lumbung */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs relative overflow-hidden group hover:border-[#2d6a4f] transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-poppins font-bold text-gray-500 uppercase tracking-wider">Stok Akhir Lumbung</span>
              <div className="w-10 h-10 rounded-xl bg-[#dbf0e3] text-[#1c4234] flex items-center justify-center">
                <Boxes className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-[#1c4234] tracking-tight">
                {formatNumber(stokAkhir)} <span className="text-xs font-medium text-gray-500">kg</span>
              </div>
              <p className="text-xs text-gray-500 mt-1 font-semibold">
                Tersimpan di gudang kelompok
              </p>
            </div>
          </div>

          {/* Card 4: Petani Aktif */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs relative overflow-hidden group hover:border-blue-600 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-poppins font-bold text-gray-500 uppercase tracking-wider">Petani Aktif</span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-blue-900 tracking-tight">
                {petaniAktif} <span className="text-xs font-medium text-gray-500">orang</span>
              </div>
              <p className="text-xs text-blue-600 mt-1 font-semibold">
                Menyetorkan hasil panen
              </p>
            </div>
          </div>

        </div>

        {/* Ringkasan Pengelolaan Tani Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs font-manrope">
          <div className="flex items-center gap-2 font-poppins font-bold text-[#1c4234]">
            <Sprout className="w-4 h-4 text-[#2d6a4f]" />
            <span>Rekap Budidaya Periode Ini:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Organik Bersertifikat: <strong>{formatNumber(panenOrganik)} kg</strong>
            </span>
            <span className="text-amber-800 font-semibold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Masa Konversi: <strong>{formatNumber(panenKonversi)} kg</strong>
            </span>
            <span className="text-sky-800 font-semibold bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Non-Organik: <strong>{formatNumber(panenNonOrganik)} kg</strong>
            </span>
          </div>
        </div>
      </div>

      {/* TABS: TABEL DETAIL PANEN vs PENJUALAN */}
      <div className="space-y-6">

        {/* Switcher & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

          {/* Tab Switcher */}
          <div className="bg-gray-100 p-1 rounded-full inline-flex border border-gray-200 self-start">
            <button
              onClick={() => setActiveTab('panen')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-poppins font-semibold text-xs sm:text-sm transition-all cursor-pointer ${activeTab === 'panen'
                  ? 'bg-[#1c4234] text-white shadow-xs'
                  : 'text-gray-700 hover:text-[#1c4234]'
                }`}
            >
              <Wheat className="w-4 h-4" />
              <span>Detail Hasil Panen ({periodHarvests.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('penjualan')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-poppins font-semibold text-xs sm:text-sm transition-all cursor-pointer ${activeTab === 'penjualan'
                  ? 'bg-[#1c4234] text-white shadow-xs'
                  : 'text-gray-700 hover:text-[#1c4234]'
                }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Detail Distribusi & Penjualan ({periodSales.length})</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari petani, komoditas..."
                className="pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-manrope focus:ring-2 focus:ring-[#1c4234] focus:outline-hidden"
              />
            </div>

            {/* Filter Komoditas */}
            <select
              value={filterKomoditas}
              onChange={(e) => setFilterKomoditas(e.target.value)}
              className="bg-white border border-gray-200 text-xs font-poppins font-semibold text-[#1c4234] rounded-xl px-3 py-2 focus:ring-2 focus:ring-[#1c4234] focus:outline-hidden cursor-pointer"
            >
              <option value="Semua">Semua Komoditas</option>
              <option value="Padi">Padi</option>
              <option value="Jagung">Jagung</option>
              <option value="Kedelai">Kedelai</option>
              <option value="Kacang Hijau">Kacang Hijau</option>
            </select>

            {activeTab === 'panen' && (
              <>
                {/* Filter Pengelolaan */}
                <select
                  value={filterPengelolaan}
                  onChange={(e) => setFilterPengelolaan(e.target.value)}
                  className="bg-white border border-gray-200 text-xs font-poppins font-semibold text-[#1c4234] rounded-xl px-3 py-2 focus:ring-2 focus:ring-[#1c4234] focus:outline-hidden cursor-pointer"
                >
                  <option value="Semua">Semua Pengelolaan</option>
                  <option value="Organik">Organik</option>
                  <option value="Konversi">Konversi</option>
                  <option value="Non-Organik">Non-Organik</option>
                </select>

                {/* Filter Masa Tanam */}
                <select
                  value={filterMT}
                  onChange={(e) => setFilterMT(e.target.value)}
                  className="bg-white border border-gray-200 text-xs font-poppins font-semibold text-[#1c4234] rounded-xl px-3 py-2 focus:ring-2 focus:ring-[#1c4234] focus:outline-hidden cursor-pointer"
                >
                  <option value="Semua">Semua MT</option>
                  <option value="MT 01">MT 01 (Okt-Jan)</option>
                  <option value="MT 02">MT 02 (Feb-Mei)</option>
                  <option value="MT 03">MT 03 (Juni-Sept)</option>
                </select>
              </>
            )}
          </div>
        </div>

        {/* TABEL DETAIL HASIL PANEN */}
        {activeTab === 'panen' && (
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-manrope">
                <thead>
                  <tr className="bg-[#1c4234] text-white text-xs font-poppins font-bold uppercase">
                    <th className="py-4 px-4 sm:px-6">No</th>
                    <th className="py-4 px-4">Tanggal Panen</th>
                    <th className="py-4 px-4">Nama Petani</th>
                    <th className="py-4 px-4">Komoditas</th>
                    <th className="py-4 px-4 text-center">Pengelolaan</th>
                    <th className="py-4 px-4 text-center">Masa Tanam</th>
                    <th className="py-4 px-4 text-right">Jumlah (Kg)</th>
                    <th className="py-4 px-4">Catatan Lahan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredHarvests.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="py-12 text-center text-gray-500 font-medium">
                        Tidak ada data panen pada periode {getMonthName(selectedPeriod.month)} {selectedPeriod.year} yang sesuai filter.
                      </td>
                    </tr>
                  ) : (
                    filteredHarvests.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-gray-900">
                          {index + 1}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap text-gray-700">
                          {formatDateIndo(item.tanggal)}
                        </td>
                        <td className="py-3.5 px-4 font-poppins font-semibold text-[#1c4234]">
                          {item.petaniNama}
                        </td>
                        <td className="py-3.5 px-4 font-poppins font-bold text-gray-800">
                          {item.komoditas}
                        </td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          {item.pengelolaan === 'Organik' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-poppins font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                              <Sprout className="w-3 h-3 text-emerald-700" />
                              Organik
                            </span>
                          )}
                          {item.pengelolaan === 'Konversi' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-poppins font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                              Konversi
                            </span>
                          )}
                          {item.pengelolaan === 'Non-Organik' && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-poppins font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                              Non-Organik
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 text-[11px] font-poppins font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                            <Clock className="w-3 h-3 text-gray-500" />
                            {item.masaTanam || 'MT 01'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right font-poppins font-bold text-[#1c4234]">
                          {formatNumber(item.jumlahKg)} kg
                        </td>
                        <td className="py-3.5 px-4 text-gray-600 max-w-xs truncate" title={item.catatan}>
                          {item.catatan || '-'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TABEL DETAIL PENJUALAN / DISTRIBUSI */}
        {activeTab === 'penjualan' && (
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-manrope">
                <thead>
                  <tr className="bg-[#1c4234] text-white text-xs font-poppins font-bold uppercase">
                    <th className="py-4 px-4 sm:px-6">No</th>
                    <th className="py-4 px-4">Tanggal Distribusi</th>
                    <th className="py-4 px-4">Komoditas</th>
                    <th className="py-4 px-4">Pembeli / Kemitraan</th>
                    <th className="py-4 px-4 text-right">Volume (Kg)</th>
                    <th className="py-4 px-4 text-right">Harga Satuan</th>
                    <th className="py-4 px-4 text-right">Total Transaksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredSales.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="py-12 text-center text-gray-500 font-medium">
                        Tidak ada transaksi distribusi/penjualan pada bulan {getMonthName(selectedPeriod.month)} {selectedPeriod.year}.
                      </td>
                    </tr>
                  ) : (
                    filteredSales.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-gray-900">
                          {index + 1}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap text-gray-700">
                          {formatDateIndo(item.tanggal)}
                        </td>
                        <td className="py-3.5 px-4 font-poppins font-bold text-gray-800">
                          {item.komoditas}
                        </td>
                        <td className="py-3.5 px-4 text-gray-700 font-medium">
                          {item.pembeli}
                        </td>
                        <td className="py-3.5 px-4 text-right font-bold text-rose-700">
                          {formatNumber(item.jumlahKg)} kg
                        </td>
                        <td className="py-3.5 px-4 text-right text-gray-600">
                          {formatRupiah(item.hargaPerKg)}
                        </td>
                        <td className="py-3.5 px-4 text-right font-poppins font-bold text-[#1c4234]">
                          {formatRupiah(item.totalNilai)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
