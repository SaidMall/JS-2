
/* class GoodsItem {
    constructor(pic, title, price, id) {
        this.pic = pic;
        this.title = title;
        this.discr = discr;
        this.price = price;
        this.id = id;
    }
    render() {
        return `<div class="product">
                    <img src=${pic} alt="product-foto" class="image-product">
                    <a href="#" class="overlay-img" style="width: 360px; height: 420px;"></a>
                    <button href="#" class="overlay-btn"><span>Add to Cart</span></button>
                    <h2>${title}</h2>
                    <p>${discr}</p>
                    <span>${price}</span>
                </div>`
    }
} */







const goods = [ 
    {
        pic: 'img/product-foto1.png',
        title: 'Shirt', 
        discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
        price: '$12.00' 
    },

    {
        pic: 'img/product-foto7.png',
        title: 'Socks', 
        discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
        price: '$9.00' 
    },

    {
        pic: 'img/product-foto3.png',
        title: 'Jacket', 
        discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
        price: '$11.00' 
    },

    {
        pic: 'img/product-foto4.png',
        title: 'Shoes', 
        discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
        price: '$23.00' 
    }
    
]

const renderGoodsItem = (pic, title, discr, price) => {
    return `<div class="product">
                <img src=${pic} alt="product-foto" class="image-product">
                <a href="#" class="overlay-img" style="width: 360px; height: 420px;"></a>
                <button id="#" class="overlay-btn"><span>Add to Cart</span></button>
                <h2>${title}</h2>
                <p>${discr}</p>
                <span>${price}</span>
            </div>`
}

const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.pic, item.title, item.discr, item.price))

    document.querySelector('.product-cards').innerHTML = goodsList

}

const init = () => {
    renderGoodsList(goods)
}

window.onload = init