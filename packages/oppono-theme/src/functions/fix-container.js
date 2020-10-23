export function fixContainer() {
  if (window.innerWidth > 1920) {
    document.documentElement.style.fontSize = `${1920/1440*10}px`;
  }
  else if (window.innerWidth >= 991) {
    document.documentElement.style.fontSize = `${10 * window.innerWidth / 1440}px`;
  }
  else {
    document.documentElement.style.fontSize = `${10}px`;
  }
}