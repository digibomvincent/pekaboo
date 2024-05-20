/* 改成react */
/* function laugh() {
    var face1_box = document.getElementById("face1_box");
    face1_box.classList.add("hide");
} */
var iframe = document.getElementById('nav');
iframe.onload = function () {
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var cartIcon = iframeDocument.getElementById('cartIcon');
    cartIcon.addEventListener('click', function () {
        window.toggleCart();
    });
};
