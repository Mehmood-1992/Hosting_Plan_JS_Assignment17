function HostingPlan(name, price, features, support) {
  this.name = name;
  this.price = price;
  this.features = features;
  this.support = support;
}

// Creating Hosting Plans
const basicPlan = new HostingPlan(
  "Basic",
  "$5/month",
  ["10GB Storage", "100GB Bandwidth", "1 Domain"],
  "Email Support"
);

const proPlan = new HostingPlan(
  "Pro",
  "$15/month",
  ["50GB Storage", "500GB Bandwidth", "5 Domains"],
  "Email + Phone Support"
);

const businessPlan = new HostingPlan(
  "Business",
  "$25/month",
  ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"],
  "24/7 Support"
);

const plans = [basicPlan, proPlan, businessPlan];

// Rendering Hosting Plans
const plansContainer = document.getElementById("plans-container");

plans.forEach(plan => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${plan.name} Plan</h2>
    <p><strong>Price:</strong> ${plan.price}</p>
    <p><strong>Features:</strong> ${plan.features.join(", ")}</p>
    <p><strong>Support:</strong> ${plan.support}</p>
    <button onclick="buyPlan('${plan.name}', '${plan.price}')">Buy Now</button>
  `;

  plansContainer.appendChild(card);
});

// Handling Buy Now Button Clicks
function buyPlan(name, price) {
  alert(`You have selected the ${name} Plan for ${price}.`);
}