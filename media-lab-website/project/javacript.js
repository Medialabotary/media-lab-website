document.addEventListener("DOMContentLoaded", function() {
    // Hiệu ứng xuất hiện hình ảnh sản phẩm chính
    const featuredImage = document.querySelector(".featured img");
    setTimeout(() => {
        featuredImage.style.opacity = "1";
        featuredImage.style.transform = "translateY(0)";
    }, 300);
    
    // Hiệu ứng khi click vào nút "Chi tiết"
    document.querySelector(".featured button").addEventListener("click", function() {
        alert("Xem chi tiết sản phẩm!");
    });

    // Hiệu ứng cho sản phẩm khi hover
    const products = document.querySelectorAll(".product-item");
    products.forEach(product => {
        product.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });

        product.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});