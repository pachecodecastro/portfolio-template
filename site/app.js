import { formatEuro } from './lib/format.js';

const form = document.getElementById('demo');
const input = document.getElementById('amount');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.valueAsNumber;
  result.textContent = Number.isFinite(value) ? formatEuro(value) : 'Enter a number first.';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {
    // Offline support is optional. The page still works without it.
  });
}
