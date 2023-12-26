    document.addEventListener("DOMContentLoaded", function () {
        // 초기 위치 설정
        updateCategoryPosition();

        // 창 크기 변경 또는 다른 이벤트가 발생했을 때 위치 업데이트
        window.addEventListener("resize", updateCategoryPosition);
    });

    function updateCategoryPosition() {
        // .category 요소와 .content 요소 가져오기
        const category = document.querySelector(".category");
        const content = document.querySelector(".content");

        // .category의 left 속성 설정
        category.style.left = `${content.offsetWidth + parseInt(getComputedStyle(content).marginLeft)}px`;
    }
