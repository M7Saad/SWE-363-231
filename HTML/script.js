randomImgs = [
  {
    src: "https://picsum.photos/seed/5/320/200",
    title: "Random image!",
    alt: "Random image ",
    width: 320,
    height: 200,
  },
  {
    src: "https://picsum.photos/seed/6/320/200",
    title: "Random image!",
    alt: "Random image ",
    width: 320,
    height: 200,
  },
  {
    src: "https://picsum.photos/seed/7/320/200",
    title: "Random image!",
    alt: "Random image ",
    width: 320,
    height: 200,
  },
  {
    src: "https://picsum.photos/seed/8/320/200",
    title: "Random image!",
    alt: "Random image ",
    width: 320,
    height: 200,
  },
];

//add random images to the page
for (let i = 0; i < randomImgs.length; i++) {
  let img = document.createElement("img");
  img.src = randomImgs[i].src;
  img.title = randomImgs[i].title;
  img.alt = randomImgs[i].alt;
  img.width = randomImgs[i].width;
  img.height = randomImgs[i].height;
  document.querySelector("#imgs").appendChild(img);

  console.log("Image added:", img);
} 
