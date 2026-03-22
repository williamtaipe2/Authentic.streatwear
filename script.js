const botones = document.querySelectorAll('.btn');

botones.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        window.open("https://wa.me/51999999999?text=Hola%20quiero%20comprar%20un%20polo%20de%20Authentic%20Streetwear");
    });
});