<!-- form signup -->
<form id="signup-form">
  <input type="email" id="signup-email" placeholder="Email" required>
  <input type="password" id="signup-password" placeholder="Password" required>
  <button type="submit">Daftar</button>
</form>

<script type="module">
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

  const supabase = createClient("https://eltuoqlqsvtvcwhpkbbz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdHVvcWxxc3Z0dmN3aHBrYmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NjE0MjUsImV4cCI6MjA2ODEzNzQyNX0.eHMoIeeihLuoKKST5K04FaPEguRdas5L2BsEV2ek3w0");

  document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Gagal daftar: " + error.message);
    } else {
      alert("Pendaftaran berhasil! Silakan cek email (jika confirm aktif).");
      console.log(data);
    }
  });
</script>
