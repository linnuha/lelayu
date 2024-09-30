// script.js
function exportToPDF() {
    var namaAlmarhum = document.getElementById("namaAlmarhum").value;
    var yuswo = document.getElementById("yuswo").value;
    var pidalem = document.getElementById("pidalem").value;
    var tanggalWafat = document.getElementById("tanggalWafat").value;
    var waktuWafat = document.getElementById("waktuWafat").value;
    var lokasiWafat = document.getElementById("lokasiWafat").value;
    var lokasiPemakaman = document.getElementById("lokasiPemakaman").value;
    var ahliWaris = document.getElementById("ahliWaris").value.split(',');

    var { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    // Base64 image string for logo (replace this with your own Base64 string)
    var logo = 'data:image/png;base64,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';

    // Add Logo Image to PDF (position it to the left)
    doc.addImage(logo, 'PNG', 10, 10, 30, 30); // x, y, width, height

    // Format Header
    doc.setFontSize(16);
    doc.text("KARANG TARUNA", 50, 20);  // Adjust text position to the right
    doc.text("RUKUN AGAWE SANTOSA (RAS)", 50, 30);
    doc.setFontSize(12);
    doc.text("Jl. Parangtritis Km 6,5 Ngijo Dk. Demangan Bangunharjo Sewon Bantul", 50, 40);

    // Format Pawartos Lelayu
    doc.setFontSize(16);
    doc.text("PAWARTOS LELAYU", 10, 60);

    doc.setFontSize(12);
    doc.text("Katur panjenenganipun: " + namaAlmarhum
