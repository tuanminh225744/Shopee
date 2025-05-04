// Chọn tất cả các phần tử cần thiết từ DOM
const title = document.querySelector('.product__title').innerText;
const rating = document.querySelector('.product__stars').innerText;
const sold = document.querySelector('.product__sold').innerText;
const currentPrice = document.querySelector('.product__price-current').innerText;
const oldPrice = document.querySelector('.product__price-old').innerText;
const discount = document.querySelector('.product__price-sale').innerText;

console.log({ title, rating, sold, currentPrice, oldPrice, discount });


// Lắng nghe sự kiện click cho các nút màu và size
// và cập nhật trạng thái của chúng
const colorButtons = document.querySelectorAll('.product__option--color .product__option-btn');

colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        colorButtons.forEach(b => b.classList.remove('product__option-btn--active'));
        btn.classList.add('product__option-btn--active');
        console.log('Đã chọn màu:', btn.innerText);
    });
});

const sizeButtons = document.querySelectorAll('.product__option--size .product__option-btn');

sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('product__option-btn--active'));
        btn.classList.add('product__option-btn--active');
        console.log('Đã chọn size:', btn.innerText);
    });
});


// Lắng nghe sự kiện click cho các nút tăng/giảm số lượng
// và cập nhật giá trị của input số lượng
const quantityInput = document.querySelector('.product__quantity-input');
const quantityBtns = document.querySelectorAll('.product__quantity-btn');

quantityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let current = parseInt(quantityInput.value) || 1;
        if (btn.innerText === '+') {
            quantityInput.value = current + 1;
        } else if (btn.innerText === '-') {
            quantityInput.value = Math.max(1, current - 1); // không để số lượng < 1
        }
        console.log('Số lượng hiện tại:', quantityInput.value);
    });
});


// Lắng nghe sự kiện click cho các nút thêm vào giỏ hàng và mua ngay
// và hiển thị thông báo tương ứng
document.querySelector('.product__btn--cart').addEventListener('click', () => {
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
});

document.querySelector('.product__btn--buy').addEventListener('click', () => {
    alert('Bạn đang tiến hành mua ngay sản phẩm!');
});