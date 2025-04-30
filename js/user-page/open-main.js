function openMain() {
    document.querySelector('.product-section').classList.remove('hidden');
    document.querySelector('.cart').classList.add('hidden');
    document.querySelector('.user-section').classList.add('hidden');
    document.querySelector('.category').classList.remove('hidden');
    document.querySelector('.products').classList.remove('hidden');
}

document.querySelector('.header__logo').addEventListener('click', function() {
    openMain();
});

export {
    openMain
}