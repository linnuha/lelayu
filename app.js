// Ganti dengan project URL & anon key kamu
const SUPABASE_URL = "https://eltuoqlqsvtvcwhpkbbz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdHVvcWxxc3Z0dmN3aHBrYmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NjE0MjUsImV4cCI6MjA2ODEzNzQyNX0.eHMoIeeihLuoKKST5K04FaPEguRdas5L2BsEV2ek3w0";
// Ganti dengan anon key kamu
// const SUPABASE_ANON_KEY = "PASTE_ANON_KEY_KAMU_DISINI";

// Inisialisasi client (pakai global `supabase` dari CDN, bukan supabasejs)
const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadPosts() {
  const { data, error } = await client
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Fetch error:", error);
    return;
  }

  console.log("Posts:", data);
  const container = document.getElementById("posts");
  container.innerHTML = data.map(p => `
    <div class="card p-3 mb-3 shadow-sm">
      <h5>${p.title}</h5>
      <p>${p.content ?? ""}</p>
      <small class="text-muted">${new Date(p.created_at).toLocaleString()}</small>
    </div>
  `).join("");
}

loadPosts();
