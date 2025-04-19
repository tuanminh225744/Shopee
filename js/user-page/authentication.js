// xác thực đăng ký
var userName = document.querySelector("#register-user-name");
var userEmail = document.querySelector("#register-user-email");
var userPassword = document.querySelector("#register-user-password");
var userConfirmPassword = document.querySelector("#register-user-confirm-password");

function validateFormRegister(){
    // Hàm kiểm tra tính hợp lệ của form đăng ký
    // Trả về true nếu form hợp lệ, false nếu không hợp lệ
    let result = true;


    // Xóa thông báo lỗi cũ
    document.querySelectorAll(".error-message").forEach(el => el.innerText = "");

    // Kiểm tra tên
    if (userName.value.trim() === "") {
        userName.nextElementSibling.innerText = "Tên không được để trống";
        result = false;
    }

    // Kiểm tra email
    if (userEmail.value.trim() === "") {
        userEmail.nextElementSibling.innerText = "Email không được để trống";
        result = false;
    } else if (!/^\S+@\S+\.\S+$/.test(userEmail.value.trim())) {
        userEmail.nextElementSibling.innerText = "Email không hợp lệ";
        result = false;
    }

    // Kiểm tra mật khẩu
    if (userPassword.value === "") {
        userPassword.nextElementSibling.innerText = "Mật khẩu không được để trống";
        result = false;
    } else if (userPassword.value.length < 6) {
        userPassword.nextElementSibling.innerText = "Mật khẩu phải có ít nhất 6 ký tự";
        result = false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (userConfirmPassword.value === "") {
        userConfirmPassword.nextElementSibling.innerText = "Vui lòng xác nhận mật khẩu";
        result = false;
    } else if (userPassword.value !== userConfirmPassword.value) {
        userConfirmPassword.nextElementSibling.innerText = "Mật khẩu xác nhận không khớp";
        result = false;
    }

    return result;
}

document.querySelector(".register-btn").addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của nút
    if (validateFormRegister()) {
        alert("Đăng ký thành công!");
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        // Thực hiện hành động đăng ký ở đây (gửi dữ liệu đến server, v.v.)
    }
});


// xác thực đăng nhập
var userLoginEmail = document.querySelector("#login-user-email");
var userLoginPassword = document.querySelector("#login-user-password");


function validateFormLogin() {
    let result = true;  

    // Xóa thông báo lỗi cũ
    userLoginEmail.nextElementSibling.innerText = "";
    userLoginPassword.nextElementSibling.innerText = "";

    // Kiểm tra email
    if (userLoginEmail.value.trim() === "") {
        userLoginEmail.nextElementSibling.innerText = "Email không được để trống";
        result = false;
    } else if (!/^\S+@\S+\.\S+$/.test(userLoginEmail.value.trim())) {
        userLoginEmail.nextElementSibling.innerText = "Email không hợp lệ";
        result = false;
    }

    // Kiểm tra mật khẩu
    if (userLoginPassword.value === "") {
        userLoginPassword.nextElementSibling.innerText = "Mật khẩu không được để trống";
        result = false;
    }

    return result;
}

// Gán sự kiện cho nút đăng nhập
document.querySelector(".login-btn").addEventListener("click", function (e) {
    e.preventDefault();
    if (validateFormLogin()) {
        loginBtn.classList.add("hidden");
        registerBtn.classList.add("hidden");
        document.querySelector(".navbar-user").classList.remove("hidden");
        modalForm.classList.add("hidden");
        loginForm.classList.add("hidden");
        registerForm.classList.add("hidden");
        // Thực hiện hành động đăng nhập ở đây (gửi dữ liệu đến server, v.v.)
    }
});

// Tự động nhấn nút đăng nhập khi trang được tải
// document.getElementById("login-btn").click();


// Chuyển đổi giữa form đăng ký và đăng nhập
// Khi người dùng nhấn vào nút chuyển đổi giữa đăng ký và đăng nhập
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const switchBtns = document.querySelectorAll(".auth-form__switch-btn");

switchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Nếu đang hiển thị form đăng ký => chuyển sang đăng nhập
        if (!registerForm.classList.contains("hidden")) {
            registerForm.classList.add("hidden");
            loginForm.classList.remove("hidden");
        } 
        // Nếu đang hiển thị form đăng nhập => chuyển sang đăng ký
        else {
            loginForm.classList.add("hidden");
            registerForm.classList.remove("hidden");
        }
    });
});





// Khi người dùng nhấn vào nút "Quên mật khẩu?"
const forgotForm = document.querySelector(".forgot-password-form");
const forgotBtn = document.querySelector(".auth-form__forgot");
const backToLoginBtn = document.querySelector(".back-to-login");
const checkEmailFrom = document.querySelector(".check-email-notification-form");
const checkEmailBtn = document.querySelector(".next-check-email-notification-btn");
const backToLoginBtn2 = document.querySelector(".back-to-login-form");

// Khi ấn "Quên mật khẩu"
forgotBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.add("hidden");
    forgotForm.classList.remove("hidden");
});

// Khi ấn "TRỞ LẠI"
backToLoginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    forgotForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Khi ấn "ĐĂNG NHẬP"
backToLoginBtn2.addEventListener("click", function (e) {
    e.preventDefault();
    checkEmailFrom.classList.add("hidden");
    loginForm.classList.remove("hidden");
});


// Xác thực quên mật khẩu
var userForgotEmail = document.querySelector("#forgot-user-email");


function validateFormForgot() {
    let result = true;  

    // Xóa thông báo lỗi cũ
    userForgotEmail.nextElementSibling.innerText = "";

    // Kiểm tra email
    if (userForgotEmail.value.trim() === "") {
        userForgotEmail.nextElementSibling.innerText = "Email không được để trống";
        result = false;
    } else if (!/^\S+@\S+\.\S+$/.test(userForgotEmail.value.trim())) {
        userForgotEmail.nextElementSibling.innerText = "Email không hợp lệ";
        result = false;
    }

    return result;
}

// Gán sự kiện cho nút "TIẾP THEO"
checkEmailBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateFormForgot()) {
        forgotForm.classList.add("hidden");
        checkEmailFrom.classList.remove("hidden");
    }
});


// Gán sự kiện cho nút "TRỞ LẠI"
// Trở về main 
const returnMainBtns = document.querySelectorAll(".return-main-btn");
const modalForm = document.querySelector(".modal");
returnMainBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        modalForm.classList.add("hidden");
    });
});


// Khi ấn "ĐĂNG NHẬP" ở navbar
const loginBtn = document.querySelector("#navbar__login-btn");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modalForm.classList.remove("hidden");
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    forgotForm.classList.add("hidden");
    checkEmailFrom.classList.add("hidden");
});


// Khi ấn "ĐĂNG KÝ" ở navbar
const registerBtn = document.querySelector("#navbar__register-btn");

registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modalForm.classList.remove("hidden");
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    forgotForm.classList.add("hidden");
    checkEmailFrom.classList.add("hidden");
});
