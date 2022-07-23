const visibleCart = document.getElementById('cart');
const tableListCart = document.getElementById('tableList');
const totalSumm = document.getElementById('totalSum');
const btnCheckout = document.getElementById('placeOrder');
const cartList = document.querySelector('.cartList');
const btnOrder = document.getElementById('ordersBut');
const myOrderBox = document.querySelector('.myOrdersBox');
const myOrderUl = document.querySelector('.myOrders');
const pDate = document.getElementById("date");
const theadVisible = document.getElementById('theadHidden');
const addOrderView = document.getElementById('prodOrders');

const cart = new Map();

let orders = [];

function main(){
    const prods = products.map((prod) => {
        return new Product(prod.id, prod.name, prod.price);
    });
    creationProdTable(prods);

    const os = JSON.parse(localStorage.getItem('orders'));
    if(os){
        orders = os;
    }
}

// creating a price list using the information received from the (back.js)
function creationProdTable(prods){
    const tbody = document.getElementById('products');
    prods.forEach((prod) => {
        tbody.insertAdjacentHTML("beforeend",
            `<tr class="tr" data-product-id="${prod.id}">
                <td>${prod.name}</td>
                <td>$ <span class="prodPriceNum">${prod.price}</span></td>
                <td><button class="but" onclick="addToCart(event)">Buy</button></td>
             </tr>`);
    });
}

// click ADD-TO-CART
function addToCart(event){
    const trStore = event.currentTarget.parentNode.parentNode;
    const idProd = trStore.getAttribute('data-product-id');
    const prodName = trStore.children[0].innerText;
    const prodPrice = trStore.querySelector('.prodPriceNum').innerText;
    let qtt = cart.get(idProd);
    if(!qtt){
        visibleCart.style.visibility = 'visible';
        tableListCart.insertAdjacentHTML("beforeend",
        `<tr class="tr" data-product-id="${idProd}">
            <td>${prodName}</td>
            <td>$ <span class="prodPriceNum">${prodPrice}</span></td>
            <td><button disabled class="butMinus" onclick="onBtnMinusClick(event)">&#45</button></td>
            <td><span class="quantity">1</span></td>
            <td><button class="butPlus" onclick="ClickPlusBtn(event)">&#10010</button></td>
            <td><button class="butDelete" onclick="clickDeleteBtn(event)">&#10060</button></td>
         </tr>`);
        cart.set(idProd, 1);
        setTotalSum();
    }else{
        qtt = qtt + 1
        cart.set(idProd, qtt);
        const trProd = tableListCart.querySelector(`[data-product-id="${idProd}"]`);
        const qttProd = trProd.querySelector('.quantity');
        const priceProd = trProd.querySelector('.prodPriceNum');
        const btnMin = trProd.querySelector('.butMinus')
        const price = getProdById(idProd).price;
        qttProd.innerText = qtt;
        priceProd.innerText = price * qtt;
        setTotalSum();
        if(qtt > 1){
            btnMin.disabled = false;
        }
    }
}

// click MINUS-BATTON in cart
function onBtnMinusClick(event){
    const btn = event.currentTarget;
    const trProd = btn.parentNode.parentNode; 
    const idProd = trProd.getAttribute('data-product-id');
    const qttProd = trProd.querySelector('.quantity');
    const priceProd = trProd.querySelector('.prodPriceNum');
    let qtt = cart.get(idProd);
    qtt = qtt - 1
    cart.set(idProd, qtt);
    qttProd.innerText = qtt;
    const price = getProdById(idProd).price;
    priceProd.innerText = price * qtt;
    setTotalSum();
    if(qtt === 1){
        btn.disabled = true;
    }
}

// click PLUS-BATTON in cart
function ClickPlusBtn(event){
    const btn = event.currentTarget;
    const trProd = btn.parentNode.parentNode; 
    const btnMin = btn.parentNode.parentNode.querySelector('.butMinus');
    const idProd = trProd.getAttribute('data-product-id');
    const qttProd = trProd.querySelector('.quantity');
    const priceProd = trProd.querySelector('.prodPriceNum');
    let qtt = cart.get(idProd);
    qtt = qtt + 1
    cart.set(idProd, qtt);
    qttProd.innerText = qtt;
    const price = getProdById(idProd).price;
    priceProd.innerText = price * qtt;
    setTotalSum();
    if(qtt > 1){
        btnMin.disabled = false;
    }
}

// count TOTAL-SUM in cart
function setTotalSum(){
    let count = 0; 
    cart.forEach((val, key) => {
        const product = getProdById(key);
        const price = product.price;
        const result = price * val;
        count = count + result;
    })
    totalSumm.innerText = count;
}

// get PRODUCTS-ID in array(back.js)
function getProdById(id){
    return products.filter(product => product.id === id)[0];
}

// click DELETE-BATTON in cart
function clickDeleteBtn(event){
    const btn = event.currentTarget;
    const trProd = btn.parentNode.parentNode; 
    const idProd = trProd.getAttribute('data-product-id');
    const priceProd = trProd.querySelector('.prodPriceNum');
    trProd.remove();
    totalSumm.innerText = Number(totalSumm.innerText) - Number(priceProd.innerText);
    cart.delete(idProd);
}

// click CHECKOUT-BATTON in cart
function clickBtnCheckout(){
    const dateVal = new Date().toLocaleString().slice(0,-3);
    const totSumVal = totalSumm.innerText;
    const newOrder = new Order(dateVal, totSumVal, Object.fromEntries(cart));
    orders.push(newOrder);
    const json = JSON.stringify(orders);
    localStorage.setItem('orders', json);
    cart.clear();
    totalSumm.innerHTML = "0";
    tableListCart.innerHTML = "";
}

// click MY ORDERS-BATTON
function clickBtnOrders(){
    myOrderUl.innerHTML = "";
    myOrderBox.style.visibility = 'visible';
    const data = JSON.parse(localStorage.getItem('orders'));

    data.forEach((order, index) => {
        myOrderUl.insertAdjacentHTML("beforeend", `
        <li>
            <h3 class="orderName">Order ${index + 1}</h3>
            <p class="orderDate">${order.date}</p>
            <p class="orderSum">${order.totSum} $</p>
            <button class="viewMoreBut" data-order-id="${index}" onclick="clickViewMoreBtn(event)">View more</button>
            <button class="deleteOrderBut" data-order-id="${index}" onclick="deleteOrder(event)">Delete</button>
        </li>`);
    })
}

// click DELETE ORDER-BATTON
function deleteOrder(event){
    addOrderView.innerHTML = '';
    theadVisible.style.visibility = 'hidden';
    const btn = event.currentTarget;
    const idOrder = btn.getAttribute('data-order-id');
    const data = JSON.parse(localStorage.getItem('orders'));
    data.splice(idOrder, 1);
    const json = JSON.stringify(data);
    localStorage.setItem('orders', json);
    clickBtnOrders();
}

// click VIEW MORE-BATTON
function clickViewMoreBtn(event){
    addOrderView.innerHTML = '';
    theadVisible.style.visibility = 'visible';
    const btn = event.currentTarget;
    const idOrder = btn.getAttribute('data-order-id');
    const data = JSON.parse(localStorage.getItem('orders'));
    const order = data[idOrder];
    const objKeys = data[idOrder].map;

    const orderProds = Object.keys(order.map).map((key) => getProdById(key));

    orderProds.forEach((prod) => {
        Object.entries(objKeys).forEach((keys) => {
            if(prod.id === keys[0]){
                addOrderView.insertAdjacentHTML("beforeend",
                `<tr class="tr" data-product-id="${prod.id}">
                    <td>${prod.name}</td>
                    <td>$ <span class="prodPriceNum">${prod.price}</span></td>
                    <td><span class="quantity">${keys[1]}</span></td>
                 </tr>`);
            }
        });
    });
}


btnCheckout.addEventListener('click', clickBtnCheckout);
btnOrder.addEventListener('click', clickBtnOrders);

main();



