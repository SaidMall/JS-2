
const goods = [ 
  {
      pic: 'img/product-foto1.png',
      title: 'Shirt', 
      discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
      price: '$12.00',
      id: 34535345
  },

  {
      pic: 'img/product-foto7.png',
      title: 'Socks', 
      discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
      price: '$9.00' ,
      id: 4654654654
  },

  {
      pic: 'img/product-foto3.png',
      title: 'Jacket', 
      discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
      price: '$11.00' ,
      id: 76878676
  },

  {
      pic: 'img/product-foto4.png',
      title: 'Shoes', 
      discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
      price: '$23.00',
      id: 345345345 
  }, 
  {
    pic: 'img/product-foto6.png',
    title: 'Socks', 
    discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
    price: '$9.00' ,
    id: 343352288
  },
  {
    pic: 'img/product-foto2.png',
    title: 'Shoes', 
    discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
    price: '$23.00',
    id: 345345345 
}
  
]


class GoodsItem {
    constructor(pic, title, discr, price, id) {
        this.pic = pic;
        this.title = title;
        this.discr = discr;
        this.price = price;
        this.id = id;
    }
    render() {
      return `<div id=${this.id} class="product">
                  <img src=${this.pic} alt="product-foto" class="image-product">
                  <a href="product.html" class="overlay-img" style="width: 360px; height: 420px;"></a>
                  <button class="overlay-btn"><span>Add to Cart</span></button>
                  <h2>${this.title}</h2>
                  <p>${this.discr}</p>
                  <span>${this.price}</span>
              </div>`;
    }
} 

class GoodsList {
  constructor() {
    this.goods = goods;
  }
  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(
        good.pic,
        good.title,
        good.discr,
        good.price,
        good.id
      );
      listHtml += goodItem.render();
    });
    document.querySelector(".product-cards").innerHTML = listHtml;
  }
}

const init = () => {
  const list = new GoodsList();
  list.render();

  const CartAddButton = document.querySelectorAll(".overlay-btn");
  CartAddButton.forEach( (btnAdd) => {
    btnAdd.addEventListener('click', () => {
      console.log('hello')
    });
  });
 
};
 
window.onload = init;