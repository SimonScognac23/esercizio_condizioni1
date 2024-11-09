
let v = 30
if (v < 18) {
    console.log("insufficiente");

} else if (v >= 18 && v < 21) {    // se il voto è compreso tra 18 e 21 mi stampi suff.  
    console.log("sufficiente");

} else if (v >= 21 && v < 24) {
    console.log("buono");

} else if (v >= 24 && v < 27) {
    console.log("distinto");

} else if (v >= 27 && v <= 29) {

    console.log("ottimo");
} else if (v === 30) {

    console.log("eccellente");
} else {
    console.log("Voto non valido");
}



let s = 4;
switch (true) {
    case (s < 18):
        console.log("insufficiente");
        break;

    case (s >= 18 && s < 21):
        console.log("sufficiente");
        break;

    case (s >= 21 && s < 24):
        console.log("buono");
        break;

    case (s >= 24 && s < 27):
        console.log("distinto");
        break;

    case (s >= 27 && s <= 29):
        console.log("ottimo");
        break;

    case (s === 30):
        console.log("eccellente");
        break;
    default:                          // default : se non entra nei casi sopra stampi  " voto non valido"
        console.log("Voto non valido");
}

