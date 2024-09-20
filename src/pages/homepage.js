// pizzaContent.js

const pizzaContent = {
    text: `
      <h2>We have the best pizza!</h2>
      <p>Here you can find our menu</p>
      <ul>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Salad</li>
        <li>Drinks</li>
      </ul>
    `,
    image: {
      src: "https://via.placeholder.com/400x300",
      alt: "pizza"
    }
  };
  
  export function loadPizzaContent(containerId = 'content') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }
  
    // Create and append text content
    const textDiv = document.createElement('div');
    textDiv.className = 'text';
    textDiv.innerHTML = pizzaContent.text;
    container.appendChild(textDiv);
  
    // Create and append image
    const imageDiv = document.createElement('div');
    imageDiv.className = 'image';
    const img = document.createElement('img');
    img.id = 'pizza';
    img.src = pizzaContent.image.src;
    img.alt = pizzaContent.image.alt;
    imageDiv.appendChild(img);
    container.appendChild(imageDiv);
  }