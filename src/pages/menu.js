

  export const menuContent = {
  title: "Our Menu",
  description: "Indulge in our delicious selection of handcrafted pizzas and Italian specialties.",
  categories: [
    {
      name: "Pizzas",
      items: [
        { name: "Margherita", description: "Classic tomato sauce, fresh mozzarella, basil", price: "$12" },
        { name: "Pepperoni Passion", description: "Tomato sauce, mozzarella, spicy pepperoni", price: "$14" },
        { name: "Veggie Supreme", description: "Tomato sauce, mozzarella, bell peppers, onions, mushrooms, olives", price: "$15" },
        { name: "Quattro Formaggi", description: "White sauce, mozzarella, gorgonzola, parmesan, ricotta", price: "$16" }
      ]
    },
    {
      name: "Pasta",
      items: [
        { name: "Spaghetti Carbonara", description: "Creamy egg sauce, pancetta, parmesan", price: "$13" },
        { name: "Penne Arrabbiata", description: "Spicy tomato sauce, garlic, parsley", price: "$12" }
      ]
    },
    {
      name: "Salads",
      items: [
        { name: "Caesar Salad", description: "Romaine lettuce, croutons, parmesan, Caesar dressing", price: "$8" },
        { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, basil, balsamic glaze", price: "$9" }
      ]
    },
    {
      name: "Drinks",
      items: [
        { name: "Soft Drinks", description: "Cola, Lemon-Lime Soda, Orange Soda", price: "$2" },
        { name: "Italian Soda", description: "Various flavors", price: "$3" },
        { name: "House Wine", description: "Red or White, glass", price: "$6" }
      ]
    }
  ]
};

export function loadMenuContent(containerId = 'content') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }
  
    let html = `<h1>${menuContent.title}</h1>`;
    html += `<p>${menuContent.description}</p>`;
  
    menuContent.categories.forEach(category => {
      html += `<h2>${category.name}</h2>`;
      html += '<ul>';
      category.items.forEach(item => {
        html += `<li>
          <strong>${item.name}</strong> - ${item.description} <span class="price">${item.price}</span>
        </li>`;
      });
      html += '</ul>';
    });
  
    container.innerHTML = html;
  }
