// alert()


const recargarBtn = document.getElementById("recargarBtn");

recargarBtn.addEventListener("click", function() {

    location.reload();
});

const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaIronman = 100;
let energiaThanos = 100;

let round = 0;

while((energiaIronman>0) && (energiaThanos>0)){
    round = round + 1;

    console.log('--------Round: '+ round + '----------') 

let golpeIronman = Math.ceil(Math.random()*(MAX_POWER - MIN_POWER)+ MIN_POWER)
let golpeThanos = Math.ceil(Math.random()*(MAX_POWER - MIN_POWER)+ MIN_POWER)

console.log("Ironman golpea con fuerza de " + golpeIronman);

console.log("Thanos golpea con fuerza de " + golpeThanos);

if(golpeIronman === golpeThanos){
    console.log("siga siga");
    
}else if(golpeThanos > golpeIronman){
    // energiaIronman = energiaIronman - golpeThanos
    energiaIronman -= golpeThanos
    document.write("<img src='img/thanosgolpeaaironman.jpg' width= '60%' height= ''/>")
}else {
    // energiaThanos = energiaThanos - golpeIronman
    energiaThanos -= golpeIronman;
    document.write("<img src='img/ironmangolpeaathanos.jpg'  width= '60%'/>")
}


console.log("La energia de Ironman es " + energiaIronman)
console.log("La energia de Thanos es " + energiaThanos)
}

console.log("---------GANADOR---------");

if(energiaIronman>0){
    console.log("Team Ironman WON!!")
    document.write("<img src='img/ironmanmatathanos.jpg'  width= '100%'/>")
}else {
    console.log("Gano Thanos :(")
    document.write("<img src='img/thanoswon.jpg'  width= '100%'/>")
}


// console.log(parseInt(Math.random(*30)))
// console.log((Math.random()*30).toFixed(0))
// console.log(Math.round(Math.random()*30))
// console.log(Math.round(1.5))
// console.log(Math.ceil(1.5))
