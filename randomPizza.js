
let favoritePizza = ['Kebab Pizza', 'vesuvio', 'Taco pizza', 'Margherita', 'Funghi', 'Capricciosa', 'Hawaii', 'Napolitana'];



function randomDinner(){
    // console.log(Math.floor(Math.random() * favoriteDish.length));
    return favoritePizza[Math.floor(Math.random() * favoriteDish.length)]; 
}
