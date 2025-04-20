import * as changeEmail from './change-email.js';
import * as changePhoneNumber from './change-phone-number.js';
import * as changePassword from './change-password.js';

const modal = document.querySelector('.modal');
const passwordConfirmForm = document.querySelector('#passwordConfirmForm');
const changeEmailBtn = document.querySelector('#change-email-btn');
const changePhoneNumberBtn = document.querySelector('#change-phone-number-btn');
const changePasswordBtn = document.querySelector('#change-password-btn');
const passwordConfirm = document.querySelector('#passwordConfirmInput');

var typeOfChange = null; // Biến toàn cục để xác định loại thay đổi (email, số điện thoại, mật khẩu)
// Biến để lưu trữ các nút xác nhận

function openCheckPasswordForm() {
    modal.classList.remove('hidden');
    passwordConfirmForm.classList.remove('hidden');

    // Gắn sự kiện cho nút đóng
    const closeModalBtn = document.getElementById('closeModalBtn');
    closeModalBtn.onclick = () => {
        modal.classList.add('hidden');
        passwordConfirmForm.classList.add('hidden');
    };

    // Gắn sự kiện cho nút xác nhận
    const confirmBtn = document.getElementById('confirmPasswordBtn');
    confirmBtn.onclick = () => {
        const passwordInput = passwordConfirm.value.trim();
        if (passwordInput) {
            // Xử lý xác nhận mật khẩu ở đây
            passwordConfirm.nextElementSibling.innerText = "";
            console.log('Mật khẩu xác nhận:', passwordInput);
            modal.classList.add('hidden');
            passwordConfirmForm.classList.add('hidden');
            if (typeOfChange === 'email') {
                changeEmail.handleChangeEmail(); // Hiển thị giao diện đổi email
            }
            else if (typeOfChange === 'phone') {
                changePhoneNumber.handleChangePhoneNumber(); // Hiển thị giao diện đổi số điện thoại
            } else if (typeOfChange === 'password') {
                changePassword.handleChangePassword(); // Sử dụng trực tiếp từ window.changePassword
            }
        } else {
            passwordConfirm.nextElementSibling.innerText = "Mật khẩu không được để trống";
        }
    };

    // Bấm ra ngoài modal để đóng
    document.querySelector('.modal__overlay').onclick = () => {
        modal.classList.add('hidden');
        passwordConfirmForm.classList.add('hidden');
    };
}

// Sự kiện đổi địa chỉ email
changeEmailBtn.addEventListener('click', function() {
    openCheckPasswordForm();
    typeOfChange = 'email'; // Đặt biến toàn cục để xác định loại thay đổi
});

// Sự kiện đổi số điện thoại
changePhoneNumberBtn.addEventListener('click', function() {
    openCheckPasswordForm();
    typeOfChange = 'phone'; // Đặt biến toàn cục để xác định loại thay đổi
});

// Sự kiện đổi mật khẩu
changePasswordBtn.addEventListener('click', function() {
    openCheckPasswordForm();
    typeOfChange = 'password'; // Đặt biến toàn cục để xác định loại thay đổi
});

export {
    openCheckPasswordForm
};
