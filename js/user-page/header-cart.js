function updateHeaderCart() {
    const cartItems = document.querySelectorAll('.cart__item');
    const headerCartList = document.querySelector('.header__cart-list-items');
    const headerCartCount = document.querySelector('.header__cart-cotice');

    // Xóa toàn bộ nội dung cũ
    headerCartList.innerHTML = '';

    let count = 0;

    cartItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox) {
            const imgSrc = item.querySelector('.cart__image').src;
            const title = item.querySelector('.cart__title').innerText;
            const price = item.querySelector('.cart__price-current').innerText;
            const quantity = item.querySelector('.cart__input').value;
            const variant = item.querySelector('.cart__variant').innerText;

            // Tạo HTML cho header cart item
            const cartHTML = `
                <li class="header__cart-item">
                    <div class="header__cart-img-wrap">
                        <img src="${imgSrc}" alt="" class="header__cart-img">
                    </div>
                    <div class="header__cart-item-info">
                        <div class="header__cart-item-head">
                            <h5 class="header__cart-item-name">${title}</h5>
                            <div class="header__cart-item-price-wrap">
                                <span class="header__cart-item-price">${price}</span>
                                <span class="header__cart-item-muntiply">x</span>
                                <span class="header__cart-item-quanlity">${quantity}</span>
                            </div>
                        </div>
                        <div class="header__cart-item-body">
                            <span class="header__cart-item-description">${variant}</span>
                        </div>
                    </div>
                </li>
            `;

            headerCartList.insertAdjacentHTML('beforeend', cartHTML);
            count++;
        }
    });

    // Cập nhật số lượng
    headerCartCount.innerText = count;

    // Ẩn/hiện ảnh "giỏ hàng trống"
    document.querySelector('.header__cart-no-cart-img').style.display = count > 0 ? 'none' : 'block';
    document.querySelector('.cart-list--no-cart-msg').style.display = count > 0 ? 'none' : 'block';
    document.querySelector('.header__cart-heading').style.display = count > 0 ? 'block' : 'none';
    document.querySelector('.header__cart-view-cart').style.display = count > 0 ? 'unset' : 'none';
}

// Chạy hàm khi trang tải
document.addEventListener('DOMContentLoaded', () => {
    updateHeaderCart();
});

// Checkbox thay đổi
document.querySelectorAll('.cart__checkbox input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateHeaderCart);
});

// Nút tăng/giảm số lượng
document.querySelectorAll('.cart__btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(updateHeaderCart, 50); // đợi giá trị input thay đổi
    });
});

// Input số lượng thay đổi thủ công
document.querySelectorAll('.cart__input').forEach(input => {
    input.addEventListener('input', updateHeaderCart);
});

// Nút xóa
document.querySelectorAll('.cart__action a').forEach(deleteBtn => {
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cartItem = deleteBtn.closest('.cart__item');
        cartItem.remove();
        updateHeaderCart();
    });
});