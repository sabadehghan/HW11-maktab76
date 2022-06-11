let imgs = [
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",
];

let container = document.getElementById("imageContainer");

for (let i = 0, j = imgs.length; i < j; i++) {
  let img = document.getElementById("image1");
  img.src = imgs[0]; 
  let img2 = document.getElementById('image2');
  img2.src = imgs[1]
  let img3 = document.getElementById('image3');
  img3.src = imgs[2]
  let img4 = document.getElementById('image4');
  img4.src = imgs[3]
  let img5 = document.getElementById('image5');
  img5.src = imgs[4]
  let img6 = document.getElementById('image6');
  img6.src = imgs[5]
  let img7 = document.getElementById('image7');
  img7.src = imgs[6]
 
}

// another solution

// let container = document.getElementById("imageContainer");
// for (let i = 0, j = imgs.length; i < j; i++) {
//         let img = document.getElementsByTagName('img');
//         img.src = imgs[i]; 
//              container.appendChild(img);
// }

