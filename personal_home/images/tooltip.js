function createTooltip(element, tooltipText) {
    var tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = tooltipText;
    element.appendChild(tooltip);

    element.addEventListener("mouseover", function () {
        tooltip.style.opacity = "1";
    });

    element.addEventListener("mouseout", function () {
        tooltip.style.opacity = "0";
    });
}

var home = document.getElementById("home");
createTooltip(home, "홈");

var left = document.getElementById("left");
createTooltip(left, "이전");

var right = document.getElementById("right");
createTooltip(right, "다음");

var more = document.getElementById("more");
createTooltip(more, "카테고리");

var more = document.getElementById("youtube");
createTooltip(youtube, "youtube");

