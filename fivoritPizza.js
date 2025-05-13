const pizza = [
  { name: "Narek", favoritePizza: ["Pepperoni", "BBQ Chicken"] },
  { name: "Anna", favoritePizza: ["Margherita"] },
  { name: "David", favoritePizza: ["Four Cheese", "Hawaiian", "Meat Lovers"] },
  { name: "Lilit", favoritePizza: ["Hawaiian", "Vegetarian"] },
  { name: "Arman", favoritePizza: ["BBQ Chicken"] },
  { name: "Sona", favoritePizza: ["Vegetarian", "Margherita"] },
  { name: "Tigran", favoritePizza: ["Meat Lovers", "Pepperoni"] }
];


const pizzas = pizza.reduce((accum, current) => {
  return [...accum, ...current.favoritePizza];
}, []);
console.log(pizzas)
