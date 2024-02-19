const ataqueGolpe = function(){
    return "atacando con golpe";
}

const ataqueRayo = function(){
    return "atacando con rayo";
}

const ataqueFuego = function(){
    return "atacando con fuego";
}

const ataqueHielo = function(){
    return "atacando con hielo";
}

const atacar = function(ataque){
    return function(personaje){
        return `${ataque()} a ${personaje}`;
    };
};

console.log(atacar(ataqueGolpe)("Personaje 1"));
console.log(atacar(ataqueRayo)("Personaje 2"));
console.log(atacar(ataqueFuego)("Personaje 3"));
console.log(atacar(ataqueHielo)("Personaje 4"));


