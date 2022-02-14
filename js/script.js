    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close')

        for (let i=0; i<999; i++) {
            task(i);
         }
           
         function task(i) {
           setTimeout(function() {
            popup.style.display = "block";
           }, 3000 * i);
         }

    close.addEventListener('click', () => {
    popup.style.display = "none";})
