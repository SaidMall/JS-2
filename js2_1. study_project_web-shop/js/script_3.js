const goods = [{
    pic: 'img/product-foto1.png',
    title: 'Shirt',
    discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.',
    price: '$12.00',
    color: ["red", "blue", "yellow"],
    size: ["S", "M", "L", "XL"],
    id: 34535345
  },

  {
    pic: 'img/product-foto7.png',
    title: 'Socks',
    discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.',
    price: '$9.00',
    color: ["red", "blue", "yellow"],
    size: ["S", "M", "L", "XL"],
    id: 4654654654
  },

  {
    pic: 'img/product-foto3.png',
    title: 'Jacket',
    discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.',
    price: '$11.00',
    color: ["red", "blue", "yellow"],
    size: ["S", "M", "L", "XL"],
    id: 76878676
  },

  {
    pic: 'img/product-foto4.png',
    title: 'Shoes',
    discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.',
    price: '$23.00',
    color: ["red", "blue", "yellow"],
    size: ["S", "M", "L", "XL"],
    id: 345345345
  },
  {
    pic: 'img/product-foto6.png',
    title: 'Socks',
    discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.',
    price: '$9.00',
    color: ["red", "blue", "yellow"],
    size: ["S", "M", "L", "XL"],
    id: 343352288
  },
  {
    pic: 'img/product-foto2.png',
    title: 'Shoes',
    discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.',
    price: '$23.00',
    color: ["red", "blue", "yellow"],
    size: ["S", "M", "L", "XL"],
    id: 345345345
  }

];


class GoodsItem {
  constructor(pic, title, discr, price, color, size, id) {
    this.pic = pic;
    this.title = title;
    this.discr = discr;
    this.price = price;
    this.color = color;
    this.size = size;
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
    this.filterGoods = [];
  }
  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(
        good.pic,
        good.title,
        good.discr,
        good.price,
        good.color,
        good.size,
        good.id
      );
      listHtml += goodItem.render();
    });
    document.querySelector(".product-cards").innerHTML = listHtml;
  }
}

class BasketGoodsItem {
  constructor(pic, title, discr, price, color, size, id) {
    this.pic = pic;
    this.title = title;
    this.discr = discr;
    this.price = price;
    this.color = color;
    this.size = size;
    this.id = id;
  }
  render() {
    return `<div id=${this.id} class="cart_number">
      <img src=${this.pic} alt="product-foto" class="image-product">
      <h2>${this.title}</h2>
      <a href="#"><svg width="18" height="18" viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
          </svg></a>
          <ul>
              <li class="cart-price">Price: ${this.price}</li>
              <li class="cart-price">Color: ${this.color}</li>
              <li class="cart-price">Size: ${this.size}</li>
              <li class="cart-price">Quantity: "??"</li>
          </ul>
        </div>`;
  }
}

class BasketGoodsList {
  constructor() {
    this.goods = goods;
  }
  render() {
    let BasketListHtml = "";
    this.goods.forEach((good) => {
      const BasketItem = new BasketGoodsItem(
        good.pic,
        good.title,
        good.discr,
        good.price,
        good.color,
        good.size,
        good.id
      );
      BasketListHtml += BasketItem.render();
    });
    document.querySelector(".cart_products").innerHTML = BasketListHtml;
  }
}

const init = () => {
  const list = new GoodsList();
  list.render();

  const CartAddButton = document.querySelectorAll(".overlay-btn");
  CartAddButton.forEach((btnAdd) => {
    btnAdd.addEventListener('click', () => {
      console.log("addCart");
    });
  });


  //показывает & скрывает список меню
  const listMenu = document.querySelector(".menu_btn");
  listMenu.onclick = () => {
    let showMenu = document.querySelector(".menu_list"); 
    showMenu.style.display = "block";

    let closeMenu = document.querySelector(".menu_list_close_btn"); 
    closeMenu.onclick = () => {
      showMenu.style.display = "";
    }
    
  };
  //------//



};

window.onload = init;