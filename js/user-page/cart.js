document.addEventListener("DOMContentLoaded", function () {
    const checkboxAll = document.querySelector(".cart__checkbox-all");
    const itemCheckboxes = document.querySelectorAll(".cart__item input[type='checkbox']");
    const quantityInputs = document.querySelectorAll(".cart__input");
    const btnMinus = document.querySelectorAll(".cart__btn:first-child");
    const btnPlus = document.querySelectorAll(".cart__btn:last-child");
    const totalPriceEl = document.querySelector(".cart__total-price");
    const totalText = document.querySelector(".cart__total-price--text");
    const deleteButtons = document.querySelectorAll(".cart__action a");
    const cartItems = document.querySelectorAll(".cart__item");
    const cartDelete = document.querySelector(".cart__delete");
  
    // Chọn tất cả
    checkboxAll.addEventListener("change", () => {
      itemCheckboxes.forEach(checkbox => {
        checkbox.checked = checkboxAll.checked;
      });
      updateTotal();
    });
  
    // Khi click checkbox từng sản phẩm
    itemCheckboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        checkboxAll.checked = [...itemCheckboxes].every(cb => cb.checked);
        updateTotal();
      });
    });
  
    // Tăng / Giảm số lượng
    btnMinus.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let input = quantityInputs[index];
        let value = Math.max(1, parseInt(input.value) - 1);
        input.value = value;
        updateItemTotal(index);
        updateTotal();
      });
    });
  
    btnPlus.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let input = quantityInputs[index];
        input.value = parseInt(input.value) + 1;
        updateItemTotal(index);
        updateTotal();
      });
    });

    // Khi thay đổi số lượng sản phẩm
    quantityInputs.forEach((input, index) => {
      input.addEventListener("change", () => {
        let value = Math.max(1, parseInt(input.value));
        input.value = value;
        updateItemTotal(index);
        updateTotal();
      });
    });
  
    // Tính tổng từng sản phẩm
    function updateItemTotal(index) {
      const item = cartItems[index];
      const quantity = parseInt(quantityInputs[index].value);
      const priceText = item.querySelector(".cart__price-current").innerText.replace(/[₫.]/g, "");
      const price = parseInt(priceText);
      const totalEl = item.querySelector(".cart__total");
      totalEl.innerText = `₫${(price * quantity).toLocaleString()}`;
    }
  
    // Tính tổng cộng
    function updateTotal() {
      let total = 0;
      let selectedCount = 0;
      cartItems.forEach((item, index) => {
        const isChecked = item.querySelector("input[type='checkbox']").checked;
        if (isChecked) {
          const quantity = parseInt(quantityInputs[index].value);
          const priceText = item.querySelector(".cart__price-current").innerText.replace(/[₫.]/g, "");
          const price = parseInt(priceText);
          total += price * quantity;
          selectedCount++;
        }
      });
      totalPriceEl.innerText = `₫${total.toLocaleString()}`;
      totalText.innerText = `Tổng cộng (${selectedCount} sản phẩm):`;
    }
  
    // Xóa sản phẩm
    deleteButtons.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        cartItems[index].remove();
        updateTotal();
      });
    });

    // Xóa sản phẩm đã chọn
    cartDelete.addEventListener("click", function () {
        const selectedItems = document.querySelectorAll(".cart__item .cart__checkbox input:checked");
    
        selectedItems.forEach(checkbox => {
            const cartItem = checkbox.closest(".cart__item");
            if (cartItem) {
                cartItem.remove();
            }
        });
        updateTotal(); // Cập nhật lại tổng sau khi xóa
        updateCart(); // Cập nhật lại giỏ hàng và header sau khi xóa
    });

    // Mở cart khi click vào icon giỏ hàng hoặc ấn vào xem giỏ hàng
    const cartIcon = document.querySelector(".header__cart");
    const cart = document.querySelector(".cart");
    const productSection = document.querySelector(".product-section");
    const viewCart = document.querySelector(".header__cart-view-cart");

    cartIcon.addEventListener("click", function () {
      if (cart.classList.contains("hidden")) {
        cart.classList.remove("hidden");
        productSection.classList.add("hidden");
      }
      else {
        cart.classList.add("hidden");
        productSection.classList.remove("hidden");
      }
    });

    viewCart.addEventListener("click", function () {
        cart.classList.remove("hidden");
        productSection.classList.add("hidden");
    });

    // Đóng cart khi click vào logo
    const logo = document.querySelector(".header__logo");
    logo.addEventListener("click", function () {
        cart.classList.add("hidden");
        productSection.classList.remove("hidden");
    });
    



  
    // Khởi tạo tổng
    updateTotal();
  });