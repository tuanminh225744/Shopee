function openMain() {
    document.querySelector(".order-page-container").classList.add("hidden");
    document.querySelector(".profile-content").classList.add("hidden");
    document.querySelector(".category").classList.remove("hidden");
    document.querySelector(".product").classList.remove("hidden");
    document.querySelector(".sidebar").classList.add("hidden");
}

document.querySelector('.header__logo').addEventListener('click', function() {
    openMain();
});

export {
    openMain
}