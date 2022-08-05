console.log("hello world")

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            // !!!!!!!!switch után mindig kell break mert ha nincs az alatta lévő kod ugyanugy lefut
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText= eval(display.innerText);
                }
                catch{
                    display.innerText = 'Error!';
                }
                
                break;

            default:
                display.innerText += e.target.innerText
        }

    })
})
console.log(buttons);