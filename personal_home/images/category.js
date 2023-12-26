var moreButton = document.getElementById("more");
var category = document.querySelector(".category");

category.style.display = "none"; // 초기에는 숨김 처리

moreButton.addEventListener("click", function () {
    if (category.style.display === "none") {
        category.style.display = "block"; // 보여주기
        setTimeout(function () {
            category.style.maxHeight = category.scrollHeight + "px"; // 천천히 슬라이드되며 나타나기
        }, 100);
    } else {
        category.style.maxHeight = "0px"; // 천천히 닫히며 숨기기
        setTimeout(function () {
            category.style.display = "none";
        }, 500);
    }
});