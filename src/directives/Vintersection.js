export default {
    mounted(el, binding){
        const observerOptions = {
            rootMargin: '0px',
            threshold: 1.0
        };

        const callback = (entries, observer) => {
            if(entries[0].isIntersecting){
                binding.value()
            }
        };

        const observer = new IntersectionObserver(callback, observerOptions);

        observer.observe(el);
    },
    name: 'intersection'
}