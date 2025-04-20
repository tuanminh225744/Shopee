const profileHeaderName = document.querySelector('.profile-header h2');
const profileHeaderText = document.querySelector('.profile-header p');
const formContainer = document.querySelector('.form-container');
const changePasswordBtn = document.querySelector('#change-password-btn');
const sidebarBtns = document.querySelectorAll('.sidebar-btn');

function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
    errorMessage.classList.add('error');
}

function clearError(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = '';
    errorMessage.classList.remove('error');
}

function validateForm() {
    const newPasswordInput = document.querySelector('#newPassword');
    const confirmPasswordInput = document.querySelector('#confirmPassword');
    let isValid = true;

    clearError(newPasswordInput);
    clearError(confirmPasswordInput);

    const newPassword = newPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!newPassword) {
        showError(newPasswordInput, 'Mật khẩu mới không được để trống');
        isValid = false;
    }

    if (!confirmPassword) {
        showError(confirmPasswordInput, 'Xác nhận mật khẩu không được để trống');
        isValid = false;
    } else if (newPassword !== confirmPassword) {
        showError(confirmPasswordInput, 'Mật khẩu xác nhận không khớp');
        isValid = false;
    }

    return isValid;
}

function handleChangePassword() {
    // Set active class for sidebar button
    sidebarBtns.forEach((btn) => {
        btn.classList.remove('sidebar-btn-active');
    });
    document.querySelector('.profile-content').classList.remove('hidden');
    document.querySelector('.order-page-container').classList.add('hidden');
    changePasswordBtn.classList.add('sidebar-btn-active');

    // Set header name and text
    profileHeaderName.innerText = 'Đổi mật khẩu';
    profileHeaderText.innerText = 'Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác.';

    formContainer.innerHTML = `
    <div class="form-group">
        <label for="newPassword">Mật khẩu mới</label>
        <input type="password" id="newPassword" placeholder="Nhập mật khẩu mới" required>
        <span class="error-message"></span>
    </div>
    
    <div class="form-group">
        <label for="confirmPassword">Xác nhận mật khẩu</label>
        <input type="password" id="confirmPassword" placeholder="Nhập lại mật khẩu mới" required>
        <span class="error-message"></span>
    </div>
    <div class="form-group form-group--button">
        <button id="saveChangePasswordBtn" class="btn btn-primary">Đổi mật khẩu</button>
    </div>
    `;

    // Gắn sự kiện cho nút sau khi DOM được cập nhật
    const saveChangePasswordBtn = document.querySelector('#saveChangePasswordBtn');
    saveChangePasswordBtn.addEventListener('click', function () {
        // Gọi hàm validateForm để kiểm tra tính hợp lệ của form
        if (validateForm()) {
            const newPassword = document.querySelector('#newPassword').value.trim();
            console.log('Đổi mật khẩu thành công:', newPassword);
            alert('Đổi mật khẩu thành công!');
        } else {
            alert('Vui lòng kiểm tra lại thông tin nhập vào!');
        }
    });
}

export {
    handleChangePassword
};







