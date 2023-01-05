//deklaracja typów dla zmiennych
let age = 29;
age = 30;
//przy deklaracji stałej aby przypomnieć sobie jej wartość wystarczy zapisać jej nazwę i najechać na nią kursorem(zjedź do ostatniego wiersza)
const year = 2022;
let ageAsString = 'dwadzieścia dziewięć';
ageAsString = "trzydzieści";
ageAsString = `${age}`;
console.log(ageAsString);
//deklaracja typów dla funkcji
const add = (v1, v2) => v1 + v2;
console.log(add(10, 50));
//deklaracja inputów i ich wartości w funkcjach
const firstInput = document.querySelector('#firstInput');
const secondInput = document.querySelector('#secondInput');
const addButton = document.querySelector('button');
const add2 = (v1, v2) => v1 + v2;
addButton.addEventListener('click', () => {
    const sum = add2(Number(firstInput.value), Number(secondInput.value));
    console.log(sum);
});
//typy inferece
let age2 = 29; //typescript jest w stanie samemu określić typ zadeklarowanej zmiennej
age2 = 30;
//age2 = "trzydzieści" - błąd
let age3; //automatycznie nadany typ to any
age3 = 30;
age3 = "trzydzieści";
//union type 
let test;
test = "test";
test = 21;
test = true;
//typy boolean
const buttonElement = document.querySelector('#BUY');
const calculatePrice = (originalPrice, hasDiscount) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
};
buttonElement.addEventListener("click", () => {
    const originalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(calculatePrice(originalPrice, hasDiscount));
});
year; //wystarczy najechać kursorem aby poznać wartość
