function exportToDocx() {
  var namaAlmarhum = document.getElementById('namaAlmarhum').value;
  var tanggalWafat = document.getElementById('tanggalWafat').value;
  var tempatDimakamkan = document.getElementById('tempatDimakamkan').value;

  if (!namaAlmarhum || !tanggalWafat || !tempatDimakamkan) {
    alert("Harap lengkapi semua kolom");
    return;
  }

  var lelayuContent = `Pawartos Lelayu\n\nNama Almarhum/Almarhumah: ${namaAlmarhum}\nTanggal Wafat: ${tanggalWafat}\nTempat Dimakamkan: ${tempatDimakamkan}`;

  var blob = new Blob([lelayuContent], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "pawartos-lelayu.docx";
  link.click();
}
