const menuItems = [
  { name: "Coffee Latte", price: "₹120" },
  { name: "Espresso", price: "₹100" },
  { name: "Cappuccino", price: "₹110" },
  { name: "Green Tea", price: "₹90" },
  { name: "Masala Chai", price: "₹80" },
  { name: "Blueberry Muffin", price: "₹70" },
  { name: "Chocolate Croissant", price: "₹85" },
  { name: "Veg Sandwich", price: "₹95" },
  { name: "Cheese Toast", price: "₹90" },
  { name: "Cold Brew", price: "₹130" }
];

const searchBar = document.getElementById("search-bar");
const menuList = document.getElementById("menu-list");

function displayMenu(items) {
  menuList.innerHTML = "";
  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No items found.";
    menuList.appendChild(li);
    return;
  }
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.price}`;
    menuList.appendChild(li);
  });
}

// Initial display
displayMenu(menuItems);

// Filter on input
searchBar.addEventListener("input", () => {
  const query = searchBar.value.trim().toLowerCase();
  const filtered = menuItems.filter(item =>
    item.name.toLowerCase().includes(query)
  );
  displayMenu(filtered);
});