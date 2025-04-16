// Hàm kiểm tra form sửa sản phẩm
function validateEditForm() {
    const editProductName = document.getElementById("editProductName");
    const editProductPrice = document.getElementById("editProductPrice");

    let result = true;

    // Xóa thông báo lỗi cũ
    editProductName.nextElementSibling.innerText = "";
    editProductPrice.nextElementSibling.innerText = "";

    // Kiểm tra tên sản phẩm
    if (editProductName.value.trim() === "") {
        editProductName.nextElementSibling.innerText = "Tên sản phẩm không được để trống";
        result = false;
    }

    // Kiểm tra giá sản phẩm
    if (editProductPrice.value.trim() === "" ) {
        editProductPrice.nextElementSibling.innerText = "Giá sản phẩm không hợp lệ";
        result = false;
    }

    return result;
}



let editingRow = null; // Biến lưu dòng đang sửa

// Khi click "Sửa"
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("admin__content-table-btn") && e.target.textContent.trim() === "Sửa") {
        const row = e.target.closest("tr");
        editingRow = row; // Lưu dòng đang sửa

        const name = row.children[1].textContent;
        const price = row.children[2].textContent;

        document.getElementById("editProductName").value = name;
        document.getElementById("editProductPrice").value = price;

        document.getElementById("editModal").style.display = "flex";
        document.querySelector(".edit-form").classList.remove("hidden");
    }
});

// Khi click "Lưu"
document.getElementById("saveEditBtn").addEventListener("click", () => {
    if (editingRow && validateEditForm()) {
        // Lấy giá trị từ form sửa
        const newName = document.getElementById("editProductName").value;
        const newPrice = document.getElementById("editProductPrice").value;

        // Cập nhật vào dòng đang sửa
        editingRow.children[1].textContent = newName;
        editingRow.children[2].textContent = newPrice;

        // Đóng modal
        document.getElementById("editModal").style.display = "none";
        document.querySelector(".edit-form").classList.add("hidden");

        // Reset dòng sửa
        editingRow = null;
    }
});

// Đóng modal
document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("editModal").style.display = "none";
    document.querySelector(".edit-form").classList.add("hidden");
});

// Click ngoài overlay cũng đóng
document.querySelector("#editModal .modal__overlay").addEventListener("click", () => {
    document.getElementById("editModal").style.display = "none";
    document.querySelector(".edit-form").classList.add("hidden");
});
