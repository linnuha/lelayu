function tambahForm() {
  var formContainer = document.getElementById('lelayuFormContainer');
  
  var newForm = document.createElement('div');
  newForm.classList.add('lelayu-entry');
  newForm.innerHTML = `
    <form class="lelayuForm">
      <div class="form-group">
        <label for="namaAlmarhum">Nama Almarhum/Almarhumah:</label>
        <input type="text" class="form-control namaAlmarhum" required>
      </div>
      <div class="form-group">
        <label for="tanggalWafat">Tanggal Wafat:</label>
        <input type="date" class="form-control tanggalWafat" required>
      </div>
      <div class="form-group">
        <label for="tempatDimakamkan">Tempat Dimakamkan:</label>
        <input type="text" class="form-control tempatDimakamkan" required>
      </div>
    </form>
  `;
  
  formContainer.appendChild(newForm);
}

function exportToDocx() {
  var entries = document.querySelectorAll('.lelayu-entry');
  var lelayuContent = 'Pawartos Lelayu\n\n';

  entries.forEach(function(entry, index) {
    var namaAlmarhum = entry.querySelector('.namaAlmarhum').value;
    var tanggalWafat = entry.querySelector('.tanggalWafat').value;
    var tempatDimakamkan = entry.querySelector('.tempatDimakamkan').value;

    if (namaAlmarhum && tanggalWafat && tempatDimakamkan) {
      lelayuContent += `Data ${index + 1}:\n`;
      lelayuContent += `Nama Almarhum/Almarhumah: ${namaAlmarhum}\n`;
      lelayuContent += `Tanggal Wafat: ${tanggalWafat}\n`;
      lelayuContent += `Tempat Dimakamkan: ${tempatDimakamkan}\n\n`;
    }
  });

  var blob = new Blob([lelayuContent], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "pawartos-lelayu.docx";
  link.click();
}
