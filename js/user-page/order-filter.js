const tabs = document.querySelectorAll(".order-tabs__item");
const orders = document.querySelectorAll(".order-card");

// Đếm số lượng đơn hàng cho mỗi tab
function updateOrderCounts() {
    tabs.forEach(tab => {
      const tabStatus = tab.dataset.status;
      const countSpan = tab.querySelector(".order-tabs__count");
  
      let count = 0;
      orders.forEach(order => {
        const orderStatus = order.dataset.status;
        if (tabStatus === "TAT_CA" || orderStatus === tabStatus) {
          count++;
        }
      });
  
      if (countSpan) {
        if (count > 0) {
          countSpan.textContent = `${count}`;
          countSpan.style.display = "inline";
        } else {
          countSpan.textContent = "";
          countSpan.style.display = "none";
        }
      }
    });
  }

// Xử lý khi click tab
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("order-tabs__item--active"));
    tab.classList.add("order-tabs__item--active");

    const status = tab.dataset.status;

    orders.forEach(order => {
      const orderStatus = order.dataset.status;
      if (status === "TAT_CA" || status === orderStatus) {
        order.style.display = "block";
      } else {
        order.style.display = "none";
      }
    });
  });
});

// Gọi hàm khi load
updateOrderCounts();