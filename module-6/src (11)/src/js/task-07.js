const fontSizeConrol = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

console.log(fontSizeConrol);
console.log(spanText);


fontSizeConrol.addEventListener('input', onChangeFontsizeSpanText);

function onChangeFontsizeSpanText(e) {

    spanText.style.fontSize = `${e.target.value}px`;
    console.log(e.target.value);

   /*  if(e.currentTarget.value) {
        spanText.style.fontSize = `${e.currentTarget.value}px`;
    } */
}



