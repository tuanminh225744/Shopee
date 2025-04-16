const addModal = document.getElementById("addModal");
const addFormContent = document.getElementById("addFormContent");
const addModalTitle = document.getElementById("addModalTitle");
let currentAddMode = ""; // 'product' hoặc 'customer' hoặc 'order'

// Hàm xác thực form thêm sản phẩm
function validateProductForm() {
    const name = document.getElementById("newProductName");
    const price = document.getElementById("newProductPrice");
    const img = document.getElementById("newProductImage");
    let result = true;

    // Xóa thông báo lỗi cũ
    name.nextElementSibling.innerText = "";
    price.nextElementSibling.innerText = "";
    img.nextElementSibling.innerText = "";

    // Kiểm tra tên sản phẩm
    if (name.value.trim() === "") {
        name.nextElementSibling.innerText = "Tên sản phẩm không được để trống";
        result = false;
    }

    // Kiểm tra giá sản phẩm
    if (price.value.trim() === "") {
        price.nextElementSibling.innerText = "Giá sản phẩm không hợp lệ";
        result = false;
    }

    // Kiểm tra link hình ảnh
    if (img.value.trim() === "") {
        img.nextElementSibling.innerText = "Link hình ảnh không được để trống";
        result = false;
    } 

    return result;
}

// Hàm xác thực form thêm khách hàng
function validateCustomerForm() {

    const name = document.getElementById("newCustomerName");
    const email = document.getElementById("newCustomerEmail");
    const phone = document.getElementById("newCustomerPhone");
    let result = true;

    // Xóa thông báo lỗi cũ
    name.nextElementSibling.innerText = "";
    email.nextElementSibling.innerText = "";
    phone.nextElementSibling.innerText = "";

    // Kiểm tra tên khách hàng
    if (name.value.trim() === "") {
        name.nextElementSibling.innerText = "Tên khách hàng không được để trống";
        result = false;
    }
    
    // Kiểm tra email
    if (email.value.trim() === "") {
        email.nextElementSibling.innerText = "Email không được để trống";
        result = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
        email.nextElementSibling.innerText = "Email không hợp lệ";
        result = false;
    }

    // Kiểm tra số điện thoại
    if (phone.value.trim() === "") {
        phone.nextElementSibling.innerText = "Số điện thoại không được để trống";
        result = false;
    } else if (!/^\d+$/.test(phone.value.trim())) {
        phone.nextElementSibling.innerText = "Số điện thoại không hợp lệ";
        result = false;
    }

    return result;
}

// Hàm xác thực form thêm đơn hàng
function validateOrderForm() {
    const customer = document.getElementById("newOrderCustomer");
    const date = document.getElementById("newOrderDate");
    const total = document.getElementById("newOrderTotal");
    const status = document.getElementById("newOrderStatus");

    let result = true;

    customer.nextElementSibling.innerText = "";
    date.nextElementSibling.innerText = "";
    total.nextElementSibling.innerText = "";
    status.nextElementSibling.innerText = "";

    if (customer.value.trim() === "") {
        customer.nextElementSibling.innerText = "Tên khách hàng không được để trống";
        result = false;
    }

    if (!date.value) {
        date.nextElementSibling.innerText = "Ngày đặt không được để trống";
        result = false;
    }

    if (total.value.trim() === "" ) {
        total.nextElementSibling.innerText = "Tổng tiền không hợp lệ";
        result = false;
    }

    return result;
}


// Mở modal thêm sản phẩm
document.getElementById("addProductBtn").addEventListener("click", () => {
    currentAddMode = "product";
    addModalTitle.textContent = "Thêm sản phẩm";
    addFormContent.innerHTML = `
        <input type="text" id="newProductName" class="auth-form__input" placeholder="Tên sản phẩm">
        <span class="error-message"></span>
        <input type="text" id="newProductPrice" class="auth-form__input" placeholder="Giá sản phẩm">
        <span class="error-message"></span>
        <input type="text" id="newProductImage" class="auth-form__input" placeholder="Link hình ảnh">
        <span class="error-message"></span>
    `;
    addModal.style.display = "flex";
    document.querySelector(".add-form").classList.remove("hidden");
});

// Mở modal thêm khách hàng
document.getElementById("addCustomerBtn").addEventListener("click", () => {
    currentAddMode = "customer";
    addModalTitle.textContent = "Thêm khách hàng";
    addFormContent.innerHTML = `
        <input type="text" id="newCustomerName" class="auth-form__input" placeholder="Tên khách hàng">
        <span class="error-message"></span>
        <input type="email" id="newCustomerEmail" class="auth-form__input" placeholder="Email">
        <span class="error-message"></span>
        <input type="text" id="newCustomerPhone" class="auth-form__input" placeholder="Số điện thoại">
        <span class="error-message"></span>
    `;
    addModal.style.display = "flex";
    document.querySelector(".add-form").classList.remove("hidden");
});

// Mở modal thêm đơn hàng
document.getElementById("addOrderBtn").addEventListener("click", () => {
    currentAddMode = "order";
    addModalTitle.textContent = "Thêm đơn hàng";
    addFormContent.innerHTML = `
        <input type="text" id="newOrderCustomer" class="auth-form__input" placeholder="Tên khách hàng">
        <span class="error-message"></span>
        <input type="date" id="newOrderDate" class="auth-form__input">
        <span class="error-message"></span>
        <input type="text" id="newOrderTotal" class="auth-form__input" placeholder="Tổng tiền">
        <span class="error-message"></span>
        <select id="newOrderStatus" class="auth-form__input">
            <option value="Đang xử lý">Đang xử lý</option>
            <option value="Đã giao">Đã giao</option>
        </select>
        <span class="error-message"></span>
    `;
    addModal.style.display = "flex";
    document.querySelector(".add-form").classList.remove("hidden");
});

// Hủy
document.getElementById("cancelAddBtn").addEventListener("click", () => {
    addModal.style.display = "none";
    document.querySelector(".add-form").classList.add("hidden");
});

// Click ngoài overlay cũng đóng
document.querySelector("#addModal .modal__overlay").addEventListener("click", () => {
    document.getElementById("addModal").style.display = "none";
    document.querySelector(".add-form").classList.add("hidden");
});

// Xác nhận thêm
document.getElementById("confirmAddBtn").addEventListener("click", () => {
    if (currentAddMode === "product"  && validateProductForm()) {
        const name = document.getElementById("newProductName").value;
        const price = document.getElementById("newProductPrice").value;
        const formattedPrice = Number(price).toLocaleString('vi-VN'); // Định dạng giá tiền
        const img = document.getElementById("newProductImage").value;

        const table = document.querySelector("#productTable tbody");
        const newRow = `
            <tr>
                <td>--</td>
                <td>${name}</td>
                <td>${formattedPrice}</td>
                <td><img src="${img}" class="admin__content-table-img"></td>
                <td>
                    <button class="admin__content-table-btn">Sửa</button>
                    <button class="admin__content-table-btn">Xóa</button>
                </td>
            </tr>
        `;
        table.insertAdjacentHTML("beforeend", newRow);

    } else if (currentAddMode === "customer" && validateCustomerForm()) {
        const name = document.getElementById("newCustomerName").value;
        const email = document.getElementById("newCustomerEmail").value;
        const phone = document.getElementById("newCustomerPhone").value;

        const customerTable = document.querySelector("#customerTable tbody");
        const newRow = `
            <tr>
                <td>--</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>
                    <button class="admin__content-table-btn">Sửa</button>
                    <button class="admin__content-table-btn">Xóa</button>
                </td>
            </tr>
        `;
        customerTable.insertAdjacentHTML("beforeend", newRow);

    } else if (currentAddMode === "order" && validateOrderForm()) {
        const customer = document.getElementById("newOrderCustomer").value;
        const rawDate = document.getElementById("newOrderDate").value;
        const dateParts = rawDate.split("-");
        const date = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // Chuyển sang dd/mm/yyyy
        const total = document.getElementById("newOrderTotal").value;
        const formattedTotal = Number(total).toLocaleString('vi-VN');   
        const status = document.getElementById("newOrderStatus").value;
    
        const orderTable = document.querySelector("#orderTable tbody");
        const newRow = `
            <tr>
                <td>--</td>
                <td>${customer}</td>
                <td>${date}</td>
                <td>${formattedTotal}đ</td>
                <td>${status}</td>
            </tr>
        `;
        orderTable.insertAdjacentHTML("beforeend", newRow);
    }

    // Ẩn modal
    let isValid = false;

    if (currentAddMode === "product") {
        isValid = validateProductForm();
    } else if (currentAddMode === "customer") {
        isValid = validateCustomerForm();
    } else if (currentAddMode === "order") {
        isValid = validateOrderForm();
    }

    if (isValid) {
        addModal.style.display = "none";
        document.querySelector(".add-form").classList.add("hidden");
    }
});