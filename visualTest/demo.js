

function udskriv(fornavn, efternavn, fodselsdag){
//  console.log(fornavn + efternavn + fodselsdag);
}
udskriv("Alexander ", "Lundegaard Jensen ", "1999");

// function add(tal1, tal2){
//     console.log(tal1 + tal2);
// }
// add

var result = 0;

function add(tal){
    result += tal;
}

function sub(tal){
    result -= tal;
}
add(8);
add(5);
sub(5);

console.log(result);

var sayHeyAnonym = function (value) {
    console.log(value); // Udskriver "test af anonym function"
}

sayHeyAnonym('test af anonym funktion');