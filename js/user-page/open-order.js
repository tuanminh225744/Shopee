function openOrder() {
    document.querySelector(".order-page-container").classList.remove("hidden");
    document.querySelector(".profile-content").classList.add("hidden");
    document.querySelector(".category").classList.add("hidden");
    document.querySelector(".product").classList.add("hidden");
    document.querySelector(".sidebar").classList.remove("hidden");
    const sidebarBtns = document.querySelectorAll(".sidebar-btn");
    sidebarBtns.forEach((btn) => {
        btn.classList.remove('sidebar-btn-active');
    });
    document.getElementById("order-btn").classList.add('sidebar-btn-active');
}

document.getElementById("order-btn").addEventListener("click", openOrder);

export {
    openOrder
}