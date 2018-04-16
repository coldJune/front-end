document.addEventListener('DOMContentLoaded',function(){
    function a(event) {
        event.stopPropagation();
        document.querySelector('body').classList.toggle('OffCanvas-Active');
    }
    function b() {
        document.querySelector('body').classList.remove('OffCanvas-Active');
    }
    document.querySelector('.off-canvas-launcher').addEventListener('click',a);
    document.querySelector('.main-content').addEventListener('click',b);
    
    function debounce(fn,delay) {
        var timer = null;
        return function () {
            var context = this,args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context,args);
            },delay);
        };
    }
    var debouncedA = debounce(function () {
        document.querySelector('body').classList.remove('OffCanvas-Active');
    },250);
    window.onresize=debouncedA;
})