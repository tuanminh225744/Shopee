document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".category-item-link");
    const contentHeading = document.querySelector(".admin__content-heading");
    const contentTable = document.querySelector(".admin__content-table");
    const contentSearchInput = document.querySelector(".admin__content-search-input");

    // Nội dung bảng tương ứng
    const contentData = {
        "Quản lý sản phẩm": `
            <table class="admin__content-table-list" id="productTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Hình ảnh</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Dữ liệu sản phẩm -->
                    <tr>
                        <td>1</td>
                        <td>Áo dài tay</td>
                        <td>100.000đ</td>
                        <td><img src="./assets/img/anh-san-pham/san-pham-1.jpg" class="admin__content-table-img"></td>
                        <td>
                            <button class="admin__content-table-btn">Sửa</button>
                            <button class="admin__content-table-btn">Xóa</button>
                        </td>
                    </tr>
                    <!-- ... thêm sản phẩm khác nếu cần -->
                </tbody>
            </table>
        `,
        "Quản lý đơn hàng": `
            <table class="admin__content-table-list" id="orderTable">
                <thead>
                    <tr>
                        <th>Mã đơn</th>
                        <th>Khách hàng</th>
                        <th>Ngày đặt</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DH001</td>
                        <td>Nguyễn Văn A</td>
                        <td>01/04/2025</td>
                        <td>500.000đ</td>
                        <td>Đang xử lý</td>
                    </tr>
                    <tr>
                        <td>DH002</td>
                        <td>Trần Thị B</td>
                        <td>02/04/2025</td>
                        <td>800.000đ</td>
                        <td>Đã giao</td>
                    </tr>
                </tbody>
            </table>
        `,
        "Quản lý khách hàng": `
            <table class="admin__content-table-list" id="customerTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên khách hàng</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>KH001</td>
                        <td>Nguyễn Văn A</td>
                        <td>a@gmail.com</td>
                        <td>0901234567</td>
                        <td>
                            <button class="admin__content-table-btn">Sửa</button>
                            <button class="admin__content-table-btn">Xóa</button>
                        </td>
                    </tr>
                    <tr>
                        <td>KH002</td>
                        <td>Trần Thị B</td>
                        <td>b@gmail.com</td>
                        <td>0912345678</td>
                        <td>
                            <button class="admin__content-table-btn">Sửa</button>
                            <button class="admin__content-table-btn">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        `
    };

    // Xử lý click menu
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Cập nhật class active
            document.querySelectorAll(".category-item").forEach(item => item.classList.remove("category-item--active"));
            link.parentElement.classList.add("category-item--active");

            const selected = link.textContent.trim();

            // Cập nhật tiêu đề và bảng nội dung
            contentHeading.textContent = selected;
            contentTable.innerHTML = contentData[selected] || "<p>Chức năng đang được cập nhật...</p>";

            if (selected === "Quản lý sản phẩm") {
                document.querySelector("#addProductBtn").classList.remove("hidden");
                document.querySelector("#addCustomerBtn").classList.add("hidden");
                document.querySelector("#addOrderBtn").classList.add("hidden");
                document.querySelector("#admin__table").classList.remove("hidden-important");
                document.querySelector("#admin__content-statistics").classList.add("hidden-important"); 
                contentSearchInput.placeholder= "Tìm kiếm sản phẩm...";
            } else if (selected === "Quản lý khách hàng") {
                document.querySelector("#addProductBtn").classList.add("hidden");
                document.querySelector("#addCustomerBtn").classList.remove("hidden");
                document.querySelector("#addOrderBtn").classList.add("hidden");
                document.querySelector("#admin__table").classList.remove("hidden-important");
                document.querySelector("#admin__content-statistics").classList.add("hidden-important");
                contentSearchInput.placeholder= "Tìm kiếm khách hàng...";
            } else if (selected === "Quản lý đơn hàng") {
                document.querySelector("#addProductBtn").classList.add("hidden");
                document.querySelector("#addCustomerBtn").classList.add("hidden");
                document.querySelector("#addOrderBtn").classList.remove("hidden");
                document.querySelector("#admin__table").classList.remove("hidden-important");
                document.querySelector("#admin__content-statistics").classList.add("hidden-important");
                contentSearchInput.placeholder= "Tìm kiếm đơn hàng...";
            }else {
                document.querySelector("#addProductBtn").classList.add("hidden");
                document.querySelector("#addCustomerBtn").classList.add("hidden");
                document.querySelector("#addOrderBtn").classList.add("hidden");
                document.querySelector("#admin__table").classList.add("hidden-important");
                document.querySelector("#admin__content-statistics").classList.remove("hidden-important");
                contentSearchInput.placeholder= "Tìm kiếm...";
            }
        });
    });

    // Cài đặt mặc định hiển thị bảng "Quản lý sản phẩm" khi load trang
    const defaultMenu = menuLinks[0]; // phần tử đầu tiên là "Quản lý sản phẩm"
    defaultMenu.click();
});