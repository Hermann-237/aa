const search = document.getElementById("search-books");
const bookList = document.getElementById("book-list");

console.log(search, bookList);

const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

function sort() {
  let sortAutor = [];
  for (let i = 0; i < books.length; i++) {
    sortAutor.push(books[i].author);
  }
  return sortAutor;
}
let sortarr = sort();
let sortReverse = [];
for (let i = 0; i < sortarr.length; i++) {
  let a = sortarr[i].split(" ").reverse().join(", ");
  sortReverse.push(a);
}

for (let i = 0; i < books.length; i++) {
  books[i].author = sortReverse[i];
}
books.sort(function (a, b) {
  if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
  if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
});
console.log(books);

function setAllInnerHtml() {
  let bookList = document.querySelector(".book-list");

  for (let i = 0; i < books.length; i++) {
    let a = document.createElement("div");
  }
}
setAllInnerHtml();

let allImages = document.querySelectorAll("img");
allImages.forEach((el) => {
  el.style.height = "220px";
  el.style.border = "2px solid black";
});
let card = document.querySelectorAll(".card");
card.forEach((el) => {
  el.style.marginBottom = "30px";
});
function linkImages() {
  let arrLinkImages = [];
  for (let i = 0; i < books.length; i++) {
    arrLinkImages.push(books[i].img);
  }
  return arrLinkImages;
}
let imageArr = linkImages();
function setImages() {
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].src = imageArr[i];
  }
}
setImages();
console.log(books);

let row = document.getElementsByTagName("ul");
for (let i = 0; i < books.length; i++) {
  let firstList = document.createElement("li");
  firstList.classList.add(
    "col-sm-12 col-md-6 col-xl-3 d-flex justify-content-center"
  );
  let divCardOne = document.createElement("div");
  divCardOne.classList.add("card one");
}
// provide the card-title

/* let cardTitle = document.getElementsByClassName("card-title");
  
  function title() {
    let arrTitle = [];
    for (let i = 0; i < books.length; i++) {
      arrTitle.push(books[i].title);
    }
    return arrTitle;
  }
  let textTitle = title();
  
  function setTitle() {
    for (let i = 0; i < cardTitle.length; i++) {
      cardTitle[i].textContent = textTitle[i];
    }
  }
  setTitle();
  
  // provide the card-text
  let cardText = document.getElementsByClassName("card-text");
  
  function autor() {
    let arrAutor = [];
    for (let i = 0; i < books.length; i++) {
      arrAutor.push(books[i].author);
    }
    return arrAutor;
  }
  let autorName = autor();
  function setAutorName() {
    for (let i = 0; i < cardText.length; i++) {
      cardText[i].textContent = autorName[i]; //////////////////////////////////
    }
  }
  setAutorName();
  
  // provide the buttons
  
  let button = document.getElementsByTagName("a");
  function alreadyRead() {
    let arrReadOrNot = [];
    for (let i = 0; i < books.length; i++) {
      arrReadOrNot.push(books[i].alreadyRead);
    }
    return arrReadOrNot;
  }
  let isReadOrNot = alreadyRead();
  
  function readValue() {
    for (let i = 0; i < button.length; i++) {
      if (isReadOrNot[i] == true) {
        button[i].textContent = "To read";
        button[i].setAttribute("class", "btn btn-secondary float-right");
      }
      if (isReadOrNot[i] == false) {
        button[i].textContent = "Read";
        button[i].setAttribute("class", "btn btn-success float-right");
      }
    }
  }
  readValue();
   */
