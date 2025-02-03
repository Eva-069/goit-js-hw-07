const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

/* const list = document.querySelector('.gallery');
images.forEach((image) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', image.url);
  img.setAttribute('alt', image.alt);
  img.classList.add('image');
  li.append(img);
  list.append(li);
}) */

const gallery = document.querySelector(".gallery");

gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
gallery.style.gap = "15px";
gallery.style.listStyle = "none";
gallery.style.padding = "0";
gallery.style.margin = "0";

gallery.insertAdjacentHTML(
  "beforeend",
  images
    .map(
      ({ url, alt }) =>
        `<li style="display: flex; justify-content: center; align-items: center;">
           <img src="${url}" alt="${alt}" style="width: 300px; height: 200px; object-fit: cover; border-radius: 8px;">
         </li>`
    )
    .join("")
);