
/* 
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
//Sprendimo eiga: konvertavimas formulemis nusistacius kursa/atsitiktinio skaiciaus generavimas (euru suma)/ atsitiktinio skaiciaus (euru suma) ispausdinimas konvertuojat ji i USD

function keitimasValiutos(amount, fromCurrency, toCurrency) { 
  const exchangeRate = kursas(fromCurrency, toCurrency); 
  const convertedAmount = exchangeRate * amount; 
  return convertedAmount;
} 
function kursas(fromCurrency, toCurrency) { 
  const exchangeRates = { 
    Euras:   1.00, 
    Doleris: 1.067,
  }; 
  return exchangeRates[toCurrency] / exchangeRates[fromCurrency]; 
} 
const min = 1;
const max = 1000;
const amount = Math.floor(Math.random() * (max - min + 1)) + min; 

const fromCurrency = "Euras"; 
const toCurrency = "Doleris"; 
const convertedAmount = keitimasValiutos(amount, fromCurrency, toCurrency); 
// Ispausdinimas EUR i USD  konvertavimas be  apvalinimo po kablelio :
console.log(`Atsitiktinis skaicius tarp ${min} ir ${max} yra ${amount}(t.y.euru suma)`, 'o si suma', amount,'EUR','=', convertedAmount ,'USD');


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
//Sprendimo eiga: konvertavimas formulemis nusistacius kursa/atsitiktinio skaiciaus generavimas/ atsitiktinio skaiciaus (doleriu suma) ispausdinimas konvertuojat ji i EUR 

function keitimasValiutos1(amount1, fromCurrency1, toCurrency1) { 
  const exchangeRate1 = kursas1(fromCurrency1, toCurrency1); 
  const convertedAmount1 = exchangeRate1 * amount1; 
  return convertedAmount1;
} 
function kursas1(fromCurrency1, toCurrency1) { 
  const exchangeRates1 = { 
    Doleris1: 1.00,
    Euras1: 0.9333, 
  }; 
  return exchangeRates1[toCurrency1] / exchangeRates1[fromCurrency1]; 
} 
const min1 = 1;
const max1 = 1000;
const amount1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1; 

const fromCurrency1 = "Doleris1"; 
const toCurrency1 = "Euras1"; 

// Atsakymas USD i EUR  konvertavimas be  apvalinimo po kablelio :
const convertedAmount1 = keitimasValiutos1(amount1, fromCurrency1, toCurrency1); 
console.log(`Atsitiktinis skaicius tarp ${min1} ir ${max1} yra ${amount1}(t.y.euru suma)`, 'o si suma', amount1,'USD','=', convertedAmount1 ,'EUR');

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.
*/

function BmiIndeksas (svoris, ugis) {
    let bmi = svoris/ (ugis ** 2)
  
    if (bmi <= 18) {
  
      return "Nepakankamas svoris";
    } else if (bmi <= 25) {
  
      return "Normalalus svoris"
    
    } else if (bmi <= 30) {
  
      return "Virsvoris"
    } else if (bmi > 30) {
      return "Nutukes"
    }
  }
  console.log(BmiIndeksas(73, 1.75))

4./*Parašykite programą, kuri iš duoto žmogaus amžiaus metais
//pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
//Sprendimas: amziaus metai paversti i dienas:
function convertToDays(ageInYears) {
  var ageInDays = ageInYears * 365;
  return ageInDays;
}
var result = convertToDays(x);
console.log(result); 
//Atsakymas: istacius i '(x)' amziaus metu skaiciu gaunam dienas.

//Sprendimas amziaus metus paversti i valandas:
function convertToHours(ageInYears) {
  var ageInAnHour = ageInYears * 8760;
  return ageInAnHour;
}
var result = convertToHours(x);
console.log(result); 
//Atsakymas: istacius '(x)' amziaus metu skaiciu gaunam valandas.

//Sprendimas amziaus metus paversti i minutes:
function convertToMinute(ageInYears) {
  var ageInMinute= ageInYears * 525600;
  return ageInMinute;
}
var result = convertToMinute(x);
console.log(result); 
//Atsakymas: istacius '(x)' amziaus metu skaiciu gaunam minutes.

//Sprendimas amziaus metus paversti i sekundes:
function convertToSeconds(ageInYears) {
  var ageInSeconds = ageInYears * 3153600;
  return ageInSeconds;
}
var result = convertToSeconds(x);
console.log(result); 
//Atsakymas: istacius '(x)' amziaus metu skaiciu gaunam sekundes.

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

//Sprendimas:

let farenheitas1 = x; //istatyti reiksme
let celsius1 = (farenheitas1 - 32) * 5/9; 

console. log('Jei farenheitas yra', farenheitas1, 'tai celsius yra', celsius1);

let celsius2 = x; //istatyti reiksme
let farenheitas2 = (celsius2 * 9/5) + 32; 

console. log('Jei celsiu yra', celsius2, 'tai farenheitas yra', farenheitas2);

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
//Sprendimas:

output = ''

a = ('1'); 
b = ('2');
c = ('3');
d = ('4');
e = ('5');
f = ('6');
g = ('7');
h = ('7');
j = ('9');
i = ('10');

output = (output + '' + a)+(output + '-' + b)+(output + '-' + c)+(output + '-' + d)+(output + '-' + e)+(output + '-' + f)+(output + '-' + g)+(output + '-' + h)+(output + '-' + j)+(output + '-' + i);

console.log(output);

//Kitas variantas panaikinus su splice '0'

let x = 10;

let stringOfNumbers = [...Array(x+1).keys()].splice(1).join('-');
console.log(stringOfNumbers);

//Atsakymas abiem atvejais: 1-2-3-4-5-6-7-7-9-10

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

//Sprendimas: priskiriant skirtingas reiksmes

for(let i = 0; i <= 1; i++) { 
    console.log("*".repeat(i));
   } 
for(let i = 2; i <= 2; i++) {
      console.log("*".repeat(i));
     } 
for(let i = 3; i <= 3; i++) {
      console.log("*".repeat(i));
     }
for(let i = 4; i <= 4; i++) {
      console.log("*".repeat(i));
     } 
for(let i = 5; i <= 5; i++) {
      console.log("*".repeat(i));
     } 
  
//Atsakymai abiem variantais: 

// *
// **
// ***
// ****
// *****

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

//Sprendimas:

let siandienDiena = new Date();
let kaleduMetai = siandienDiena.getFullYear();

if (siandienDiena.getMonth() == 11 && siandienDiena.getDate() > 25) {
  kaleduMetai = kaleduMetai + 1;
}

let kaleduData = new Date(kaleduMetai, 11, 25);
let dienaMilisekundemis = 1000 * 60 * 60 * 24;

let priminimoDienos = Math.ceil(
  (kaleduData.getTime() - siandienDiena.getTime()) / (dienaMilisekundemis)
);
console.log("Iki Kaledu liko:", priminimoDienos, 'diena')

//Atsakymas : isveda kiek liko dienu nuo siuo metu esamos datos 

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

//Sprendimas (nesupratau uzduoties. Uzduotis apjungti 'masyva' ar "masyvus'. Uzduotyje yra 'masyva'):
let vardai = ['Tomas','Dainius','Paulius','Jonas'];

console.log(vardai.join("-"));
console.log(vardai.join("+"));

//Atsakymas :
//Tomas-Dainius-Paulius-Jonas
//Tomas+Dainius+Paulius+Jonas

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
//Sprendimas: 
function generuotiSlaptazodi() {
  var slaptazodis = '';
  var simboliai = '0231456978' + 'jklmnopqrabcdefghistuvwxyz' + 'VWXYZEFGHIJKLMNOABCDPQRSTU'+ '+_`|%!@^&(}#$){[]:;?*<,./-=';
  for (var i = 1; i <= 12; i++) {
    var atsitiktinis = Math.floor(Math.random() * simboliai.length + 1);
    slaptazodis += simboliai.charAt(atsitiktinis)
  }
  return slaptazodis;
}
console.log(generuotiSlaptazodi())