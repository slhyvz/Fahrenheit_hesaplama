
console.log(fahrenheit);
var fahrenheit = (celcius * 1.8) + 32;


function hesapla() {
    var celcius =
        document.getElementById("birinci_deger").value;


      var  fahrenheit = (9/5 * celcius) + 32;


    var celcius = Number(celcius);
    var fahrenheit = Number(fahrenheit);
    var sonuc = fahrenheit;
    document.getElementById("Alan").innerHTML = sonuc;




}