let root = document.documentElement;

export function changeColor(params) {
    root.style.setProperty('--main-bg-color',  params);
    localStorage.setItem('main-color', params);
}

export function getColor() {
   let color = localStorage.getItem('main-color');
   root.style.setProperty('--main-bg-color',  color);
}