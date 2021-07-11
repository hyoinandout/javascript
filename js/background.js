const imgs = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const chosenimg = imgs[Math.floor(Math.random()*imgs.length)];

// const bg = document.createElement("img");
// bg.src = `img/${chosenimg}`;

// document.body.appendChild(bg);

document.body.style.background = `url(img/${chosenimg}`;
document.body.style.backgroundSize="cover";
document.body.style.backgroundPosition="center";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundAttachment="fixed";