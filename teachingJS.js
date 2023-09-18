// Podmienky If a Else

// var d, hodiny, minuty, cas, sprava;

// d = new Date();
// hodiny = d.getHours();
// minuty = d.getMinutes();

// if(hodiny < 10){
//     hodiny = "0" + hodiny;
// }else{
//     hodiny = hodiny.toString();
// }

// if(minuty <10){
//     minuty = "0" + minuty;
// }else{
//     minuty = minuty.toString();
// }

// cas = Number(hodiny+minuty);

// if(cas >= 0000 && cas < 1200){
//     sprava = "Dobré ráno";
// }else if (cas >= 1200 && cas < 1700){
//     sprava = "Dobrý deň";
// }else if (cas >= 1700 && cas < 2100){
//     sprava = "Dobrý večer";
// }else if( cas >= 2100 && cas <= 2359){
//     sprava = "Dobrú noc";
// }

// alert(sprava);



//MODIFIKAČNÉ METODY ↓↓↓

//Pop()
//Odstraňuje posledný prvok z poľa, pričom ho vráti  // TO PISE KNIHA
// Odstáni posledný prvok z poľa ale vráti tie zvyšné.

// var task = [
//     "zaplať",
//     "napisať",
//     "isť von"
// ];
// task.pop();
// console.log(task);


//Push()
//pridávamae prvok na koniec poľa a potom vráti je novú dĺžku s pridaným prvkom.

// var task = [
//     "zaplať",
//     "napisať",
//     "isť von"
// ];
// task.push("a domov");
// console.log(task);


//Reverse()
//vráti opačné poradie prvkov v poli
// var task = [
//     "zaplať",
//     "napisať",
//     "von chod"
// ]
// task.reverse();
// console.log(task);


//Shift()
//odstráni prvý prvok z poľa.

// var task = [
//     "von",
//     "teraz",
//     "okamžite"
// ];
// task.shift();
// console.log(task);


//Sort()
// slúži k usporiadaniu prvkov v poli v zostupnom poradi. 
// či už čísla alebo textové polia, buď podla 1-99 alebo a-z

// var task = [
//     "zaplať",
//     "auto",
//     "ešte dnes"
// ];
// task.sort();
// console.log(task);


//Splice()
//môžeme kompletne rozpitvať pole a to tak, že do neho môžeme súčasne pridávať / odoberať prvky

// var task = [
//     "zaplať",
//     "napíš",
//     "ísť von"
// ];
// task.splice(1,2, "ovládnuť svet", "a ešte tento?");
// console.log(task);




// PRISTUPOVE METODY ↓↓↓


//Concat()
// je možné spájať dve alebo viacero polí do jedného, vráti nám nové slúčené pole a predošlého sa nedotkne.

// var pole1, pole2, pole3;
// pole1 = ["zaplať učet ty debil"];
// pole2 = ["napísať nový román"];
// pole3 = ["isť na prechýdzku"];
// pole4 = pole1.concat(pole2, pole3);
// console.log(pole4);



//Unshift()
// metodá, ktorou pridávame jeden alebo viacero prvkov na začiatok poľa a vráti nám novú dľžku poľa.

//Join()
//Spojuje prvky poľa do textového reťazca.

// var ulohy, pocet;
// ulohy = [    
//     "Zaplatit splatku za telefon",
//     "Zaplatiť VUB",
//     "Spárovať si karty",
// ];
// pocet = ulohy.unshift("Povysávať", "toto tak isto nie");
// alert("Musim splniť " + pocet + " úloh :" + ulohy.join(" , "));




// Slice()
// kopiruje vybranú časť pola a vratí ju ako kopiu
// var task , tasks
// tasks = [
//     "Zaplatit splatku za telefon",
//     "Zaplatiť VUB",
//     "Spárovať si karty",
//     1,
//     3,
//     12,
//     20
// ];
// tasks.slice(2,1, "nie prosim", "a čo teraz");
// console.log(tasks);
// task = tasks.slice(1,3);
// alert("Upomienka! Nezabudni: " + task)

//Slice uloha č.2
// var ulohy, todo, klud, ostatne
// ulohy = [    
//     "Zaplatit splatku za telefon",
//     "Zaplatiť VUB",
//     "Spárovať si karty",
//     [
//         "povysavaj pls",
//         "umy sa"
//     ]
// ];
// todo = ulohy.slice(0);
// console.log(todo);
// klud = ulohy.slice(-1);
// console.log(klud);
// ostatne = ulohy.slice(0,1);
// console.log(ostatne);



//ToString() 
//Vráti textovú reprezentáciu prvkov poľa, ak pole obsahuje len textové reťazce metoda ToString ich len zreťazi do zoznamu a oddelí čiarkami
// var pole = ["týchto", 7, " slov", " sú", " slabé", [ 1, 2, 3], {"foo":"bar"}];
// console.log(pole.toString());



//LastIndexOf() / IndexOf()
// funguje rovnako ako IndexOf(), IndexOf() len začína od začiatku a LastIndexOf() od konca
// Hľadá prvý výskyt daného prvku v poli a vracia jeho indexové číslo 

// var abeceda
// abeceda = ["a", "b", "c", "d"]
// alert ("Písmeno 'C' sa nachádza na pozícií: " + abeceda.lastIndexOf())


// ITERAČNÉ METODY ↓↓↓ 
//( Iteračná metóda alebo metóda postupných aproximácií alebo metóda postupnej aproximácie je postup v matematike, pri ktorom sa opakovane používa nejaká operácia/funkcia s cieľom postupne sa priblížiť ku konečnému výsledku ).


// //ForEach() 
// prechádza každú hodnotu

// var pole, i, num, sum;
// pole = [4, 8, 15, 16, 23, 42];
// sum = 0;
// for ( i = 0; i < pole.length; i = i + 1){
//     num = pole[i];
//     sum = sum + num;
// }
// console.log("Súčet je : " + sum);

// jednoduchší zápis
// var pole, sum;
// pole = [4, 8, 15, 16, 23, 42];
// sum = 0;
// pole.forEach(function(cislo){
//     sum = sum + cislo;
// });
// console.log("Súčet je : " + sum);



// //Map() 
// vracia pole, ktoré obsahuje hodnoty, ktoré vratime pomocou funkcie spatného volania.

// var pole = [1,2,3,4,5];
// var umocnene;
// umocnene = pole.map(function(num){
//     return (num * num);
// });
// alert(umocnene);



// //Every() 
// ktorá je pre každy prvok z pola spustí jej pridanú hodnotu spatného volania, metoda Every() vracia hodnotu True ak sú všetký hodnoti v poli platné, inak vráti hodnotu false.

// var pole, isValid;
// pole = [1,2,3,4,5,11];
// isValid = pole.every(function(num){
//     return (num <10);
// });
// console.log(isValid);




// Some() 
//keď chceme zistiť či asppň jedna hodnota z pola splňa podmienku 

// var pole, isValid
// pole = [1,2,3,4,5];
// isValid = pole.some(function(num){
//     return(num < 2);
// });
// console.log(isValid);



//Filter()
// všetky prvky z pola, ktoré spĺňaju podmienku vráti v novo vytvorenom poli

// var pole, filtro
// pole = [1,2,3,4,5,6,7,8,9];
// filtro = pole.filter(function(num){
//     return ( num < 5);
// });
// console.log(filtro);



//Reduce() alebo ReduceRight()
// metoda Reduce(), prechádza dané pole v cykli a predáva funkcii return() ako argumenty predošlú hodnotu a teda hodnotu prvého prvku a  aktuálnu hodnotu ako hodnotu druhého prvku.Teda v príklade nižšie zoberie ako predošlu hodnutu "1" a aktuálnu "2" a tie zráta. náskledne je jeho predošlá hodnota 3 a aktuálna 3 a tak dalej.1+2
//ReduceRight() robí to isté len od konca.

// var pole, sum
// pole = [1,2,3,4,5];

// sum = pole.reduce(function(previous, actual){
//     return (previous + actual);
// });
// console.log(sum);



// ↓↓↓ OBJEKTY ↓↓↓ //

// var cislaLoterie, profil

// // príklad poľa ↓
// cislaLoterie = [4,8,15,16,23,42];

// príklad objektu ↓, tento sa viac hodí do vytvárania profilov,
// kde je systém dvojíc, KĽÚČ/HODNOTA. 
// { } zložené zátvorky pre objekt a : pre udanie hodnoty.
// profil = {
//     //kľúč  :  "hodnota";
//     firstName : "hugo",
//     lastName : "reyes",
//     Flight : "Oceanic 568",
//     car : "Porsche 911 Turbo S"
// };
// console.log(profil);

// Dva rôzne zápisy a to :

//zátvorkový zápis
//do hranatých zátvoriek, môžeme zapisovať aj názvy premenných, pri bodkovom nie
//podporuje taktiež textové reťazce, ktoré obsahujú medzery a iné zvláštne znaky
// var obj = {};

// obj["firstName"] = "jakup";
// obj["lastName"] = "Porsche";

// // bodkový zápis 
// // jednoduchší ako zátvorkový 
// var obj = {};

// obj.firstName = "Iakup";
// obj.lastName = "Porsche";
// alert ("ahoj, volám sa " + obj.firstName + " " + obj.lastName + ".");


