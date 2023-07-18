'use strict';
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

let arrClothes = [
    {
        name: 'dress',
        amount: 7,
        price: 2000,
        isBought: true
    },
    {
        name: 'blouse',
        amount: 5,
        price: 1000,
        isBought: true
    },
    {
        name: 'jacket',
        amount: 2,
        price: 2500,
        isBought: true
    },
    {
        name: 'hat',
        amount: 4,
        price: 700,
        isBought: false
    },
    {
        name: 'jumper',
        amount: 3,
        price: 1000,
        isBought: false
    },
];

    for (let name of arrClothes) {
        if(name.isBought === false) 
        {console.log(name); }}

    for (let name of arrClothes) {
        if(name.isBought === true) 
        {console.log(name); }}

// НЕ ВДАЛОСЯ ЗРОБИТИ (((
// let btnBought = document.querySelector('#btn_bought');
// let blockBought = document.querySelector('#bought');
// btnBought.addEventListener('click', btnBought);

// let btnIsbought = document.querySelector('#btn_isbought');
// let blockIsbought = document.querySelector('#isbought');


// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

let listProducts = ['ківі','банан', 'ананас', 'яблуко', 'апельсин', 'лимон' ];
let indexDelete = 1; // елемента, який ми хочемо видалити

// Створюємо новий масив, копіюючи всі елементи, крім того, який потрібно видалити
let newListProducts = [listProducts.slice(0, indexDelete), ...listProducts.slice(indexDelete + 1)];
console.log(newListProducts); 




let products = ['ківі','банан', 'ананас', 'яблуко', 'апельсин', 'лимон'];
let productToRemove = 'банан'; // елемент, який ми хочемо видалити зі списку
let updatedProducts = products.filter(element => element !== productToRemove);
console.log(updatedProducts); 