
    // <div class="product">
    //     <img src="img/product-foto1.png" alt="product-foto" class="image-product">
    //     <a href="#" class="overlay-img" style="width: 360px; height: 420px;"></a>
    //     <button href="#" class="overlay-btn">
    //         <span>Add to Cart</span></button>
    //     <h2>ellery x m'o capsule</h2>
    //     <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery
    //         teams
    //         up with Moda Operandi.</p>
    //     <span>$52.00</span>
    // </div>


const goods = [ 
    {
       
        title: 'Shirt', 
        discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
        price: '$12.00' 
    },

    {
        title: 'Socks', 
        discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
        price: '$9.00' 
    },

    {
        title: 'Jacket', 
        discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
        price: '$11.00' 
    },

    {
        title: 'Shoes', 
        discr: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with    Moda Operandi.', 
        price: '$23.00' 
    }
    
]

const renderGoodsItem = (title, discr, price) => {
    return `<div class="product">
                <h2>${title}</h2>
                <p>${discr}</p>
                <span>${price}</span>
            </div>`
}

const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.discr, item.price))

    document.querySelector('.product-cards').innerHTML = goodsList

}

const init = () => {
    renderGoodsList(goods)
}

window.onload = init