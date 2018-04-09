document.addEventListener('DOMContentLoaded',function () {
    var theBody = document.querySelector("body");
    function toggleClass() {
        theBody.classList.toggle("OffCanvas-Active");
    }

    document.querySelector(".Header").addEventListener("click",toggleClass);

    function dedounce(fn, delay) {
        var timer = null;
        return function () {
            var context = this,args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context,args);
            },delay)
        }
    }

    var dedouncedA = dedounce(function () {
        theBody.classList.remove("OffCanvas-Active");
    },250);
    window.onresize=dedouncedA;
})