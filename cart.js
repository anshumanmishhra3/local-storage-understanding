const cartContainer = document.querySelector('.cart-container');

const localStorageItems = JSON.parse(localStorage.getItem('cartItems')) || [];

console.log(localStorageItems); 


if (localStorageItems.length === 0) {
    alert("Cart is Empty");
    cartContainer.innerHTML = '<p class="text-center text-gray-700 text-xl">Your cart is empty.</p>';
} else {
    const productsHTML = localStorageItems.map((item) => {
        const img = item.productImg || 'https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/placeholder.jpg';
        const title = item.productId ? `Product ID: ${item.productId}` : 'No ID';
        const price = item.productPrice || 'No price';

        return `
            <div class="flex flex-row gap-10 border-4 bg-red-400 h-[370px] w-[890px] justify-center items-center">
                <img class="h-20" src="${img}" alt="${title}">
                <p>${title}</p>
                <p>₹${price}</p>
            </div>
        `;
    }).join(''); 
    cartContainer.innerHTML = productsHTML;
}
