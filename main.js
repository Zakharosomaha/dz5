const title = document.querySelector('.title')
// console.log(title);

const  h1 = document.createElement('h1')
//console.log(h1);

h1.textContent = 'Our Products'
document.body.prepend(h1)

let base = [
    {id:1, img:'./image/image 1.png'  , title: 'Syltherine', subtitle: 'Stylish cafe chair'},
    {id:2, img: './image/image 2.png' , title: 'Leviosa', subtitle: 'Stylish cafe chair'},
    {id:3, img: './image/image 3.png' , title: 'Lolito', subtitle: 'Luxury big sofa'},
    {id:4, img: './image/image 4.png' , title: 'Respira', subtitle: 'Minimalist fan'},
    {id:5, img: './image/image 5.png' , title: 'Grifo', subtitle: 'Night lamp'},
    {id:6, img: './image/image 6.png' , title: 'Muggo', subtitle: 'Small mug'},
    {id:7, img: './image/image 7.png' , title: 'Pingky', subtitle: 'Cute bed set'},
    {id:8, img: './image/image 8.png' , title: 'Potty', subtitle: 'Minimalist flower pot'},
]

let row = document.querySelector('.row')

const addCardsInRow = () => {
    base.forEach((item) => {
        row.innerHTML += 
        `<div class = 'card' id = '${item.id}'>
        <img class = 'card__img' src ='./${item.img}' alt = '${item.subtitle}'/>     
        <div class="text__all">
        <h2 class = 'card__title'> ${item.title}</h2>
        <p class = 'card__subtitle'> ${item.subtitle}</p>
        </div>
        <button class="btn">delete</button>
        </div>`
    })
}


addCardsInRow()


const btn = document.querySelectorAll('.btn')

function removeItem(e) {
   const remove = e.currentTarget;
   remove.parentElement.remove();
}
btn.forEach(button => {
    button.addEventListener('click' , removeItem )})





