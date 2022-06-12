## REACT JS
- Single-Page-Applications (SPAs)
- Jadi kek ditampilannya kyk banyak page, padahal sebenernya satu page. Jadi pagenya dah diload smeua dulu.
- Ketika usernya mau gonta-ganti page jadinya seems smooth.
- React.js alternatives: 
    - Angular JS (Lebih banyak feature dari React dan menggunakan TypeScript. Paling lengkap fiturnya, tapi kalo untuk project kecil, terlalu overkill) 
    - Vue JS (Kyk gabungan React dan Angular)


var =

## SEBISA MUNGKIN PAKE INI AJA
let = variable beneran (scopenya sesuai)
const = constant value

## Buat latian JS
jsbin.com


- Biasain pakai arrow function

const myFunc = () => {



}


Kalo class kita inherit dari class lain, dan dua duanya ada constructor; Maka kita harus kasih `super()` pada constructor child classnya agar dia execute constructor parentnya dahulu.


Variable itu primitive, misal

let asd = 1
let dsa = asd

maka akan dibuat copy dari variale asd dan jadi variable dsa

kalo object dia akan mereference pake pointer, ex:
```js
const person = {
  name:'max'
}

const secondPerson = person;

person.name = "toto"

console.log(secondPerson)
```

secondPerson akan membuat pointer ke object person. Jadinya kalau kita ubah propertynya si person, dan kita print secondPerson, akan tetap berubah jadi toto, karena secondPerson cuma ngepoint ke person.

makannya kalau mau copy object, pake spread aja

```js
const person = {
  name:'max'
}

const secondPerson = {
    ...person
};

person.name = "toto"

console.log(secondPerson) # akan tetap jadi 'max'
```

React Components
- React is all about "Components"
- Because all user interfaces in the end are made up of components


How is a Component Built?
- HTML CSS JS
- React = Gabungan semua HTML CSS dan JS
- React allows you to create re-usable and reactive components consisting of HTML and JS (and CSS) >> Declarative Approach >> Define the desired target state(s) and let React figure out the actual JavaSCript DOM instructions.


npx create-react-app [project_name]
npm start

>> React Itu JS tapi kenapa naro syntax-syntax aneh kyk import, dan nulis html segala?
- Karena sebelum dilempar ke browser akan ditransform dulu ke bentuk yang bisa dimengerti browser




