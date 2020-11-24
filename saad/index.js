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
for (let i = 0; i < books.length; i++) {
  var bookList = document.querySelector(".book-list");

  let colSm = document.createElement("div");
  colSm.classList = "col-sm-12 col-md-6 col-xl-3 d-flex justify-content-center";

  let cardOne = document.createElement("div");
  cardOne.classList = "card one";
  cardOne.setAttribute("style", "width: 15rem; height: 400px");
  let wrapper_cardOne = colSm.appendChild(cardOne);
  let image_1 = document.createElement("img");
  image_1.classList = "card-img-top";
  image_1.setAttribute("style", "height:220px;  border: 2px solid black");
  image_1.src = books[i].img;
  wrapper_cardOne.appendChild(image_1);

  /////////
  let cardBody = document.createElement("div");
  cardBody.classList = "card-body";
  let wrapper_cardBody = wrapper_cardOne.appendChild(cardBody);

  let cardTitle = document.createElement("h5");
  cardTitle.classList = "card-title";
  cardTitle.textContent = books[i].title;
  wrapper_cardBody.appendChild(cardTitle);

  let cardTexte = document.createElement("p");
  cardTexte.classList = "card-text";
  cardTexte.textContent = books[i].author;

  wrapper_cardBody.appendChild(cardTexte);
  ///////

  ///
  let cardFooter = document.createElement("div");
  cardTexte.classList = "card-footer";

  let wrapper_cardFooter = wrapper_cardOne.appendChild(cardFooter);
  let linkA = document.createElement("a");
  if (books[i].alreadyRead == false) {
    linkA.classList = "btn btn-secondary float-right";
    linkA.textContent = "To read";
  }
  if (books[i].alreadyRead == true) {
    linkA.classList = "btn btn-success float-right";
    linkA.textContent = "Read";
  }
  wrapper_cardFooter.appendChild(linkA);
  bookList.appendChild(colSm);
  ////
}

// function image() {
//   for (let i = 0; i < books.length; i++) {
//     var main_parent = document.querySelector(".book-list");
//     var container_row = document.createElement("div");
//     container_row.classList = "container row"; // <div class = "container row"></div>
//     var wrapper_container_row = main_parent.appendChild(container_row);

//     // line 23-26

//     var col_sm = document.createElement("div");
//     col_sm.classList = "col-sm";
//     var wrapper_col_sm = wrapper_container_row.appendChild(col_sum);
//     /* var parent_container = x.appendChild(y);  */

//     //till line 27
//     var card = document.createElement("div");
//     card.classList = "card";
//     card.setAttribute("style", "width:15rem");
//     var wrapper_card = wrapper_col_sm.appendChild(card);

//     /* var parent_col_sm = parent_container.appendChild(z);  */
//     /*  z.appendChild(t);
//     y.appendChild(z);
//     x.appendChild(y);  */

//     var image_1 = document.createElement("img");
//     image_1.src = books[i].img;
//     /* console.log(image_1.src); */
//     image_1.classList = "card-img-top";
//     /* z.appendChild(image_1);  */
//     wrapper_card.appendChild(image_1);
//     /* var parent_img = parent_col_sm.appendChild(image_1); */

//     // till 28
//     var card_body = document.createElement("div");
//     card_body.classList = "card-body";

//     /* var parent_card_body = parent_img.appendChild(t); */

//     var h5 = document.createElement("h5");
//     h5.classList = "card-title";
//     /* t.appendChild(p);  */
//     h5.textContent = books[i].title;

//     var card_text = document.createElement("p");
//     card_text.classList = "card-text";
//     card_text.textContent = books[i].author;
//     /* t.appendChild(o);  */

//     var read_no_read = document.createElement("a");
//     read_no_read.href = "#";

//     if (books[i].alreadyRead == false) {
//       read_no_read.classList = "btn btn-success";
//       read_no_read.textContent = "Read";
//     } else {
//       read_no_read.classList = "btn btn-secondary";
//       read_no_read.textContent = "To read";
//     }
//     /* t.appendChild(e); */
//     /* main_parent.appendChild(parent_card_body); */
//     /* main_parent.appendChild(x);
//      */
//   }
// }

// image();
