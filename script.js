document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    let hexaDecimal = document.getElementById('hexaDecimal');
    let box = document.getElementById('box');
    let values = Array.from(document.getElementsByTagName('input'))
    .map(e => Number(e.value));
    let result= '';
    let check =(x) => x.length>1 ? x : 0+x;
        values.forEach(e => {
            let x = e<0 ? 0 : e;
            if(x === 0 || e>255){ 
                result += check(x === 0 ? '00': (255).toString(16));
            } else {
                result += check(x.toString(16))
            }
        })
    hexaDecimal.textContent = `Hexadecimal : #${result}`;
    box.style.backgroundColor = `#${result}`
})
