const MenuCard = ({ menu, onTambah }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "150px",
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: "0", fontSize: "40px" }}>{menu.emoji}</h1>
      <h3 style={{ marginBottom: "5px" }}>{menu.nama}</h3>
      <p style={{ margin: "0 0 15px 0", color: "green" }}>Rp {menu.harga}</p>

      {/* Saat diklik, komponen ini memakai Walkie-Talkie
untuk melapor ke Induk */}
      <button
        style={{
          padding: "8px",
          background: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => onTambah(menu.nama, menu.harga)}
      >
        + Tambah
      </button>
    </div>
  );
};

export default MenuCard;
