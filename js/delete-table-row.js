// Lắng nghe sự kiện click trên toàn bộ trang
document.addEventListener("click", function(event) {
    // Kiểm tra nếu nút được click có class là nút Xóa
    if (event.target.classList.contains("admin__content-table-btn") && event.target.textContent === "Xóa") {
        const isConfirmed = confirm("Bạn có chắc chắn muốn xóa mục này?");
        if (isConfirmed) {
            const row = event.target.closest("tr"); // Tìm dòng chứa nút
            if (row) {
                row.remove(); // Xóa dòng
            }
        }
    }
});