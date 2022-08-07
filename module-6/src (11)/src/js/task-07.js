const fontSizeControl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');


fontSizeControl.addEventListener('input', onSizeControlInput);

function onSizeControlInput(evt) {
    if(evt.currentTarget.value) {
        textEl.style.fontSize = `${evt.currentTarget.value}px`;
        console.log(evt.currentTarget.value);
    }
}




