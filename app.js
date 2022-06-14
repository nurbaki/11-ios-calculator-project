const display2 = document.querySelector(".previous-display");
const display1 = document.querySelector(".current-display");

let rakamlar = "0";
let sayi1;
let sayi2;
let sonuc;
let islem;
let nokta = true; // rakam dizisi icinde nokta isareti olup olmadiginin kkontrolü icin
console.log(sonuc);

// rakamlar string seklinde her bir tusa bastikca olusuyor

document.querySelector(".number-1").onclick = ()=>{
    if (rakamlar == "0") { // ekranda 01  gibi bir yazi cikmamasi icin, rakamdan once 0 olmasin 
        rakamlar = "1";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "1"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-2").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "2";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "2"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-3").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "3";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "3"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-4").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "4";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "4"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-5").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "5";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "5"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-6").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "6";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "6"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-7").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "7";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "7"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-8").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "8";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "8"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-9").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "9";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "9"
    display1.innerHTML = rakamlar;}
}
document.querySelector(".number-0").onclick = ()=>{
    if (rakamlar == "0") {
        rakamlar = "0";
        display1.innerHTML = rakamlar;   
    }else {
    rakamlar += "0"
    display1.innerHTML = rakamlar;}
}


// Nokta koyma
document.querySelector(".decimal").onclick = ()=>{

    if (rakamlar == null || rakamlar == "0") {
        rakamlar = "0." // ekran bosken noktaya basilirsa =
        nokta = false;
        display1.innerHTML = rakamlar;
        
    } else {
        nokta = true; // nokta ya her basista tum diziyi kontrol et,daha once nokta varsa bir daha ekleme
        for (const key in rakamlar) {
            if (rakamlar[key] == ".") {
                nokta = false;
            }
        }
        if (nokta){ // hicbir problem yoksa rakamlar dizisine nokta isareti
           rakamlar += "."
           nokta = false;
           display1.innerHTML = rakamlar; 
        }
    }
}


// AC tusu, temizleme
document.querySelector(".ac").onclick = ()=>{
    sayi1 = null;
    sayi2 = null;
    islem = "";
    sonuc = null;
    nokta = true;
    console.log(sonuc);
    rakamlar = "0";
    display2.innerHTML = "";
    display1.innerHTML = "0";
}

// Yüzde isareti

document.querySelector(".percent").onclick = ()=>{
    let asilislem = islem;
    islem = "%";
    hesapla();
    islem = asilislem;
}

// - / + isareti

document.querySelector(".pm").onclick = ()=>{
    rakamlar = +(rakamlar) * (-1);
    display1.innerHTML = rakamlar;
}



// Toplama

document.querySelector(".addition").onclick = ()=>{
    if (sonuc == null) {
        if (sayi1 == null) {
            islem = "+";
            sayi1 = +(rakamlar);
            display2.innerHTML = sayi1 + "+";
            rakamlar = "0"; 
        } else {
            sayi2 = +(rakamlar);
            hesapla();
            // burda sayi1= sonuc artik,
            display2.innerHTML = sayi1 + "+";
            islem = "+";
            rakamlar = "0";
            sonuc = null;             
        }   
    } else {
        islem = "+";
        display2.innerHTML = sayi1 + "+";
        rakamlar = "0";
        sonuc = null;
    }
}

// cikarma
document.querySelector(".subtraction").onclick = ()=>{
    if (sonuc == null) {
        if (sayi1 == null) {
            islem = "-";
            sayi1 = +(rakamlar);
            display2.innerHTML = sayi1 + "-";
            rakamlar = "0"; 
        } else {
            sayi2 = +(rakamlar);
            hesapla();
            // burda sayi1= sonuc artik,
            display2.innerHTML = sayi1 + "-";
            islem = "-";
            rakamlar = "0";
            sonuc = null;             
        }   
    } else {
        islem = "-";
        display2.innerHTML = sayi1 + "-";
        rakamlar = "0";
        sonuc = null;
    }
}

// carpma

document.querySelector(".multiplication").onclick = ()=>{
    if (sonuc == null) {
        if (sayi1 == null) {
            islem = "*";
            sayi1 = +(rakamlar);
            display2.innerHTML = sayi1 + "*";
            rakamlar = "0"; 
        } else {
            sayi2 = +(rakamlar);
            hesapla();
            // burda sayi1= sonuc artik,
            display2.innerHTML = sayi1 + "*";
            islem = "*";
            rakamlar = "0";
            sonuc = null;             
        }   
    } else {
        islem = "*";
        display2.innerHTML = sayi1 + "*";
        rakamlar = "0";
        sonuc = null;
    }
}

//bolme

document.querySelector(".division").onclick = ()=>{
    if (sonuc == null) {
        if (sayi1 == null) {
            islem = "/";
            sayi1 = +(rakamlar);
            display2.innerHTML = sayi1 + "/";
            rakamlar = "0"; 
        } else {
            sayi2 = +(rakamlar);
            hesapla();
            // burda sayi1= sonuc artik,
            display2.innerHTML = sayi1 + "/";
            islem = "/";
            rakamlar = "0";
            sonuc = null;            
        }   
    } else {
        islem = "/";
        display2.innerHTML = sayi1 + "/";
        rakamlar = "0";
        sonuc = null;
    }
}




document.querySelector(".equal").onclick = ()=>{

    sayi2 = +(rakamlar);
    display2.innerHTML = sayi1.toString() + islem + sayi2.toString() + "=";
    hesapla();
}




const hesapla = () => {

    switch (islem) {
        case "+":
            sonuc = sayi1 + sayi2;
            display1.innerHTML = sonuc;
            sayi1 = sonuc;         
            break;

        case "-":
            sonuc = sayi1 - sayi2;
            display1.innerHTML = sonuc;
            sayi1 = sonuc;
            break;

        case "*":
            sonuc = sayi1 * sayi2;
            display1.innerHTML = sonuc;
            sayi1 = sonuc;
            break;

        case "/":
            sonuc = sayi1 / sayi2;
            display1.innerHTML = sonuc;
            sayi1 = sonuc;
            break;

        case "%":
            rakamlar = rakamlar / 100;
            display1.innerHTML = rakamlar;
            break;
    
        default:
            break;
    }

}

