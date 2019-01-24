
   
   let btnDate = document.getElementById('btnPizza')


   btnPizza.addEventListener('click',randomPizza)

   let favoritePizza = ['Kebab Pizza', 'vesuvio', 'Taco pizza', 'Margherita', 'Funghi', 'Capricciosa', 'Hawaii','Napolitana'];

   function randomPizza(){
     document.getElementById('pizza').innerHTML = favoritePizza[Math.floor(Math.random() * favoritePizza.length)];
   }
