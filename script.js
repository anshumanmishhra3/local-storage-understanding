import cart from "./item.js";

const itemsContainer = document.querySelector("#items-container");

itemsContainer.innerHTML = cart
  .map(
    (item) => `
  <div class="flex flex-col shadow-md border-2 border-gray-800 rounded-md h-[250px] w-[150px] items-center justify-center pt-2 gap-4">
    <img src="${item.img}" alt="item-img" class="h-20 w-20" />
    <p class="text-black font-bold">$${item.price.toFixed(2)}</p>
    <p class="text-black text-sm">${item.title}</p>
    <button 
      class="bg-blue-500 cart-button text-white rounded-md p-2"
      data-id="${item.id}"
      data-img="${item.img}"
      data-price="${item.price}"
    >
      Add To Cart
    </button>
  </div>
`
  )
  .join("");

let button = document.querySelectorAll(".cart-button");
button.forEach((btns) => {
  btns.addEventListener("click", function () {
    const products = {
      productId: this.dataset.id,
      productImg: this.dataset.img,
      productPrice: this.dataset.price,
    };

    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    existingCart.push(products);
    localStorage.setItem("cartItems", JSON.stringify(existingCart));
  });
});

let qty = document.querySelector(".qty");
let cartArray = JSON.parse(localStorage.getItem("cartItems")) || [];

if (cartArray.length == 0) {
  qty.innerHTML = 0;
} else {
  qty.innerHTML = cartArray.length;
}
