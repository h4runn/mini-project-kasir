import { useState } from "react";
import MenuCard from "./MenuCard";
// 1. Data Statis Daftar Menu
const daftarMenu = [
  { id: 1, nama: "Nasi Goreng", harga: 15000, emoji: "🍛" },
  { id: 2, nama: "Mie Ayam", harga: 13000, emoji: "🍜" },
  { id: 3, nama: "Es Teh Manis", harga: 5000, emoji: "🍹" },
  { id: 4, nama: "Cilok Kuah", harga: 8000, emoji: "🍲" },
];
function App() {
  // 2. Menyiapkan State (Ingatan Komponen)
  const [pesanan, setPesanan] = useState([]); // Ingatan array pesanan
  const [totalHarga, setTotalHarga] = useState(0); // Ingatan total tagihan

  // 3. Fungsi yang akan dititipkan ke MenuCard (Walkie-Talkie)

  const handleTambahPesanan = (namaMenu, hargaMenu) => {
    setPesanan([...pesanan, namaMenu]); // Menambah pesanan baru tanpa merusak array lama
    setTotalHarga(totalHarga + hargaMenu); // Menambah nominal ke total
  };
  // 4. Tampilan Aplikasi
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* --- AREA KIRI: DAFTAR MENU --- */}
      <div style={{ flex: 1 }}>
        <h2>Menu Kantin 🍽️</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* Mapping data array menjadi banyak komponen MenuCard */}
          {daftarMenu.map((menu) => (
            <MenuCard
              key={menu.id}
              menu={menu}
              onTambah={handleTambahPesanan}
            />
          ))}
        </div>
      </div>

      {/* --- AREA KANAN: KERANJANG PESANAN --- */}
      <div
        style={{
          width: "300px",
          borderLeft: "2px solid #eee",
          paddingLeft: "30px",
        }}
      >
        <h2>Keranjang �</h2>

        {/* Conditional Rendering: Jika kosong, tampilkan
pesan. Jika isi, tampilkan list */}
        {pesanan.length === 0 ? (
          <p style={{ color: "gray", fontStyle: "italic" }}>
            Keranjang masih kosong, ayo jajan!
          </p>
        ) : (
          <ul>
            {pesanan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <hr style={{ margin: "20px 0" }} />

        <h3 style={{ color: "#d35400" }}>
          Total Bayar: Rp
          {totalHarga}
        </h3>
      </div>
    </div>
  );
}
export default App;
