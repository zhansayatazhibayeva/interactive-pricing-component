const slider= document.getElementById('pricing-slider');

slider.addEventListener('input',function(){
    const value = this.value;
    this.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${value}%, #e0e8ff ${value}%)`;
})

