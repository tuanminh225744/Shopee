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

function validatePhoneForm() {
    const newPhoneInput = document.querySelector('#newPhone');
    let isValid = true;

    clearError(newPhoneInput);

    const newPhone = newPhoneInput.value.trim();

    if (!newPhone) {
        showError(newPhoneInput, 'Số điện thoại mới không được để trống');
        isValid = false;
    } else if (!/^\d{10,11}$/.test(newPhone)) {
        showError(newPhoneInput, 'Số điện thoại không hợp lệ');
        isValid = false;
    }

    return isValid;
}

function handleChangePhoneNumber() {
    profileHeaderName.innerText = 'Đổi số điện thoại';
    profileHeaderText.innerText = 'Vui lòng nhập số điện thoại mới để cập nhật thông tin tài khoản.';

    formContainer.innerHTML = `
    <div class="form-group">
        <label for="newPhone">Số điện thoại mới</label>
        <input type="text" id="newPhone" placeholder="Nhập số điện thoại mới" required>
        <span class="error-message"></span>
    </div>
    <div class="form-group form-group--button">
        <button id="changePhoneBtn" class="btn btn-primary">Đổi số điện thoại</button>
    </div>
    `;

    const changePhoneBtn = document.querySelector('#changePhoneBtn');
    changePhoneBtn.onclick = () => {
        if (validatePhoneForm()) {
            const newPhone = document.querySelector('#newPhone').value.trim();
            console.log('Đổi số điện thoại thành công:', newPhone);
            alert('Đổi số điện thoại thành công!');
        } else {
            alert('Vui lòng kiểm tra lại thông tin nhập vào!');
        }
    };
}

export { handleChangePhoneNumber };
