const profileHeaderName = document.querySelector('.profile-header h2');
const profileHeaderText = document.querySelector('.profile-header p');
const formContainer = document.querySelector('.form-container');

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

function validateEmailForm() {
    const newEmailInput = document.querySelector('#newEmail');
    let isValid = true;

    clearError(newEmailInput);

    const newEmail = newEmailInput.value.trim();

    if (!newEmail) {
        showError(newEmailInput, 'Email mới không được để trống');
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(newEmail)) {
        showError(newEmailInput, 'Email không hợp lệ');
        isValid = false;
    }

    return isValid;
}

function handleChangeEmail() {
    profileHeaderName.innerText = 'Đổi email';
    profileHeaderText.innerText = 'Vui lòng nhập email mới để cập nhật thông tin tài khoản.';

    formContainer.innerHTML = `
    <div class="form-group">
        <label for="newEmail">Email mới</label>
        <input type="email" id="newEmail" placeholder="Nhập email mới" required>
        <span class="error-message"></span>
    </div>
    <div class="form-group form-group--button">
        <button id="changeEmailBtn" class="btn btn-primary">Đổi email</button>
    </div>
    `;

    const changeEmailBtn = document.querySelector('#changeEmailBtn');
    changeEmailBtn.onclick = () => {
        if (validateEmailForm()) {
            const newEmail = document.querySelector('#newEmail').value.trim();
            console.log('Đổi email thành công:', newEmail);
            alert('Đổi email thành công!');
        } else {
            alert('Vui lòng kiểm tra lại thông tin nhập vào!');
        }
    };
}

export { handleChangeEmail };
