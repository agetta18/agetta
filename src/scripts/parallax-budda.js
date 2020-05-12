function parallax(event) {
 
    this.querySelectorAll('.parallax__layer-budda').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX * speed / 50}px)`;
       
    });
}

document.addEventListener('mousemove', parallax);