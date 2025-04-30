const sidebarBtns = document.querySelectorAll('.sidebar-btn');
const profileHeaderName = document.querySelector('.profile-header h2');
const profileHeaderText = document.querySelector('.profile-header p');
const formContainer = document.querySelector('.form-container');

function openUserProfile() {
    document.querySelector('.product-section').classList.add('hidden');
    document.querySelector('.cart').classList.add('hidden');
    document.querySelector('.user-section').classList.remove('hidden');
    document.querySelector('.order-page-container').classList.add('hidden');
    document.querySelector('.profile-content').classList.remove('hidden');
    document.querySelector('.sidebar').classList.remove('hidden');

    // Set active class for sidebar
    sidebarBtns.forEach((btn) => {
        btn.classList.remove('sidebar-btn-active');
    });
    document.getElementById("my-account-btn").classList.add('sidebar-btn-active');

    // Set header name and text
    profileHeaderName.innerText = 'Hồ Sơ Của Tôi';
    profileHeaderText.innerText = 'Quản lý thông tin hồ sơ để bảo mật tài khoản';

    formContainer.innerHTML = `
    <div class="form-left">
        <div class="form-group">
            <label>Tên</label>
            <input type="text" value="Tuấn Minh" placeholder="Nhập tên của bạn" />
        </div>
        <div class="form-group">
            <label>Địa chỉ</label>
            <input type="text" value="KTX Bách Khoa" placeholder="Nhập địa chỉ của bạn" />
        </div>
        <div class="form-group">
            <label>Email</label>
            <span>tu**********@gmail.com <button class="btn change-profile-btn" id="change-email-btn">Thay Đổi</button></span>
        </div>
        <div class="form-group">
            <label>Số điện thoại</label>
            <span>********26 <button class="btn change-profile-btn" id="change-phone-number-btn">Thay Đổi</button></span>
        </div>
        <div class="form-group">
            <label>Giới tính</label>
            <div>
                <input type="radio" name="gender" checked> 
                <p>Nam</p>
            </div>
            <div>
                <input type="radio" name="gender" checked> 
                <p>Nữ</p>
            </div>
        </div>
        <div class="form-group">
            <button class="save-btn btn btn-primary">Lưu</button>
        </div>
    </div>

    <div class="form-right">
        <img src="assets/img/anh_user/user.jpg" alt="Avatar" class="avatar">
        <button class="choose-btn">Chọn Ảnh</button>
        <p>Dung lượng file tối đa 1 MB<br>Định dạng: .JPEG, .PNG</p>
    </div>
    `;
}

// Gắn sự kiện cho nút "Tài Khoản Của Tôi"
document.getElementById("my-account-btn").addEventListener("click", openUserProfile);

export {
    openUserProfile
};