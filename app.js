import { getInfo } from 'KMP_template_shared-shared';

const kmpMessageEl = document.getElementById('kmp_message');
const statusEl = document.getElementById('status');

try {
  statusEl.textContent = 'Loading KMP module…';
  const message = getInfo();
  kmpMessageEl.textContent = message;
  statusEl.textContent = 'Loaded successfully';
} catch (error) {
  kmpMessageEl.textContent = 'Error loading KMP message';
  statusEl.textContent = `Error: ${error?.message ?? error}`;
  statusEl.style.color = '#ff6b6b';
}
