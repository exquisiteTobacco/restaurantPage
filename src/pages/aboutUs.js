export const aboutUsContent = {
  title: "About Pizzata's Pizza",
  sections: [
    {
      heading: "Our Story",
      content: "Pizzata's Pizza was born out of a passion for authentic Italian flavors and a dream to bring the taste of Naples to our local community. Founded in 2010 by the Pizzata family, our restaurant has become a beloved fixture in the neighborhood, serving up delicious pizzas and Italian specialties for over a decade."
    },
    {
      heading: "Our Philosophy",
      content: "At Pizzata's, we believe that great food starts with great ingredients. That's why we source the freshest, highest-quality ingredients for our dishes. Our dough is made fresh daily, our tomatoes are imported from Italy, and our mozzarella is made in-house. We're committed to delivering not just a meal, but an experience that transports you straight to the streets of Naples."
    },
    {
      heading: "Our Team",
      content: "Led by head chef Maria Pizzata, our team of skilled pizzaiolos and kitchen staff work tirelessly to ensure every dish that leaves our kitchen is nothing short of perfection. From the front of house to the back, every member of our team is passionate about food and dedicated to providing you with an exceptional dining experience."
    },
    {
      heading: "Community Involvement",
      content: "We believe in giving back to the community that has supported us over the years. Pizzata's regularly participates in local events, sponsors youth sports teams, and donates to local charities. We're not just a restaurant - we're your neighbors, and we're committed to making our community a better place, one pizza at a time."
    }
  ],
  closingStatement: "We invite you to come experience the warm hospitality, inviting atmosphere, and of course, the delicious food that has made Pizzata's Pizza a local favorite. Buon appetito!"
};

export function loadAboutUsContent(containerId = 'content') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }
  
    let html = `<h1>${aboutUsContent.title}</h1>`;
    
    aboutUsContent.sections.forEach(section => {
      html += `<h2>${section.heading}</h2>`;
      html += `<p>${section.content}</p>`;
    });
  
    html += `<p><em>${aboutUsContent.closingStatement}</em></p>`;
  
    container.innerHTML = html;
  }