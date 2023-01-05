//deklaracja typów dla zmiennych
let age: number = 29
age = 30

//przy deklaracji stałej aby przypomnieć sobie jej wartość wystarczy zapisać jej nazwę i najechać na nią kursorem(zjedź do ostatniego wiersza)
const year = 2022

let ageAsString: String = 'dwadzieścia dziewięć'
ageAsString = "trzydzieści"
ageAsString=`${age}`

console.log(ageAsString)

//deklaracja typów dla funkcji
const add = (v1: number, v2: number) => v1 + v2

console.log(add(10, 50))

//deklaracja inputów i ich wartości w funkcjach
const firstInput: HTMLInputElement = document.querySelector('#firstInput')
const secondInput: HTMLInputElement = document.querySelector('#secondInput')
const addButton: HTMLButtonElement = document.querySelector('button')

const add2 = (v1: number, v2: number) => v1 + v2

addButton.addEventListener('click', () => {
    const sum = add2(Number(firstInput.value), Number(secondInput.value));
    console.log(sum)
})

//typy inferece
let age2 = 29; //typescript jest w stanie samemu określić typ zadeklarowanej zmiennej
age2 = 30
//age2 = "trzydzieści" - błąd

let age3 //automatycznie nadany typ to any
age3 = 30
age3 = "trzydzieści"

//union type 
let test: string | number | boolean;

test = "test";
test = 21;
test = true;

//typy boolean
const buttonElement: HTMLButtonElement = document.querySelector('#BUY');

const calculatePrice = (originalPrice: number, hasDiscount: boolean ) => {
    return hasDiscount ? originalPrice*0.8 : originalPrice;
}

buttonElement.addEventListener("click", () => {
    const originalPrice: number = 50;
    const hasDiscount: boolean = new URLSearchParams(window.location.search).get("discount") === "true"
    console.log(calculatePrice(originalPrice, hasDiscount))
})

//array(tablice)








































year //wystarczy najechać kursorem aby poznać wartość