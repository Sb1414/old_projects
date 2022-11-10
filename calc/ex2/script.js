let a = '';
let b = '';
let sign ='';
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

const out = document.querySelector('#result');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.C').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('C')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if(digit.includes(key)) {
        if (b === '' && sign === '') {
            a+=key;
            
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
        
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    if (key === '=') {
        if (b === '') {
            b = a;
        }
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = "Error";
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}

// $(document).ready(function(){
//     $('#one').click(function(){
//         document.calc.result.value += 1;
//     });
//     $('#two').click(function(){
//         document.calc.result.value += 2;
//     });
//     $('#three').click(function(){
//         document.calc.result.value += 3;
//     });
//     $('#four').click(function(){
//         document.calc.result.value += 4;
//     });
//     $('#five').click(function(){
//         document.calc.result.value += 5;
//     });
//     $('#six').click(function(){
//         document.calc.result.value += 6;
//     });
//     $('#seven').click(function(){
//         document.calc.result.value += 7;
//     });
//     $('#eight').click(function(){
//         document.calc.result.value += 8;
//     });
//     $('#nine').click(function(){
//         document.calc.result.value += 9;
//     });
//     $('#ziro').click(function(){
//         document.calc.result.value += 0;
//     });
//     $('#point').click(function(){
//         document.calc.result.value += '.';
//     });
//     $('#plus').click(function(){
//         document.calc.result.value += '+';
//     });
//     $('#minus').click(function(){
//         document.calc.result.value += '-';
//     });
//     $('#mult').click(function(){
//         document.calc.result.value += '*';
//     });
//     $('#div').click(function(){
//         document.calc.result.value += '/';
//     });
//     $('#C').click(function(){
//         document.calc.result.value = "";
//     });
//     $('#equally').click(function(){
//         if (result.value == "") {
//             alert("ничего не введено!");
//         } else {
//             document.calc.result.value = eval(document.calc.result.value);
//         }
        
//     });
// })
