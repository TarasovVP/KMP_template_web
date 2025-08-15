const kmpMessageEl = document.getElementById('kmp_message');
const statusEl = document.getElementById('status');

async function loadKmpMessage() {
  try {
    statusEl.textContent = "Loading KMP module...";
    
    const kmpModule = window.shared.com.tarasovvp.kmptemplate;
    const message = kmpModule.getInfo();
    
    kmpMessageEl.textContent = message;
    statusEl.textContent = "Loaded successfully";
  } catch (error) {
    kmpMessageEl.textContent = "Error loading KMP message";
    statusEl.textContent = `Error: ${error.message || error}`;
    statusEl.style.color = "#ff6b6b";
  }
}

document.addEventListener('DOMContentLoaded', loadKmpMessage);