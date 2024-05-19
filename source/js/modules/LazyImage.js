class LazyImage {
    constructor() {
        this.imgTargets = document.querySelectorAll('img[data-src]');
        this.imgObserver = new IntersectionObserver(this.loadImg, {
            root: null,
            threshold: 0,
            rootMargin: '20px',
        });
    }
    // 2. init
    init(){
        this.imgTargets.forEach(img => this.imgObserver.observe(img));
    }
    loadImg = function (entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', function () {
            entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
    };
}
export default LazyImage