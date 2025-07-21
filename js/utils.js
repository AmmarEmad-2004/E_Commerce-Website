export function navigate() {
  const origin = window.location.origin;
  console.log(origin);
  if (origin === 'https://ammaremad-2004.github.io') {
    location.href = origin + '/E_Commerce-Website/index.html';
  } else {
    location.href = origin + '/index.html';
  }
}