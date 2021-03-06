const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galary = document.querySelector('.gallery')
let stringForHtml = ``;

let imgArray = images.forEach(image => {
  stringForHtml += `<li class="galary__list"><img src="${image.url}" alt="${image.alt}" width="300px"></li>`
  return stringForHtml;
})

galary.insertAdjacentHTML('beforeend', stringForHtml);




// const galary = document.querySelector('.gallery')
// let stringForHtml;

// let imgArray = images.forEach(image => {
//   stringForHtml += `<li class="galary__list"><img src="${image.url}" alt="${image.alt}" width="300px"></li>`
//   return stringForHtml;
// })

// galary.insertAdjacentHTML('beforeend', stringForHtml);