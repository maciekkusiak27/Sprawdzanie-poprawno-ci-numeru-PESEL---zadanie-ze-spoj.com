let input = document.querySelector(".input")
let icon = document.querySelector(".icon")
let button = document.querySelector(".button")

console.log(`Aby sprawdzić czy dany PESEL jest prawidłowy należy wykonać następujące działania:

Pierwszą cyfrę mnożymy przez 1,
drugą cyfrę mnożymy przez 3,
trzecią cyfrę mnożymy przez 7,
czwarta cyfrę mnożymy przez 9,
piątą cyfrę mnożymy przez 1,
szóstą cyfrę mnożymy przez 3,
siódmą cyfrę mnożymy przez 7,
ósmą cyfrę mnożymy przez 9,
dziewiątą cyfrę mnożymy przez 1,
dziesiątą cyfrę mnożymy przez 3,
jedenastą cyfrę mnożymy przez 1.`)

let pesel = [];

button.addEventListener("click", function(){
    let x = input.value; 

    let warunek = x.charAt(0)*1 + x.charAt(1)*3 + x.charAt(2)*7 + x.charAt(3)*9 + x.charAt(4)*1 + x.charAt(5)*3 + x.charAt(6)*7 + x.charAt(7)*9 + x.charAt(8)*1 + x.charAt(9)*3 + x.charAt(10)*1;
    // console.log(warunek)
    
    if(x.length === 11){
        if(warunek % 10 ===0){
            console.log(`ostatnia cyfra sumy to ${warunek % 10}, więc podany PESEL jest prawidłowy`);
        console.log('dodano nowy pesel');
       
       
        icon.innerHTML += 'podany PESEL jest prawidłowy';
    }
}else{
    console.log(`pesel ma 11 cyfr, a nie ${x.length}`)
}
})