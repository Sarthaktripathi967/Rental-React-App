// utils/searchItems.js
const searchItems = () => {
    const itemSearch = document.getElementById("itemSearch").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;
    const locationFilter = document.getElementById("locationFilter").value;
  
    const items = [
      { name: "Item 1", category: "Category 1", location: "Location 1" },
      { name: "Item 2", category: "Category 2", location: "Location 2" },
      { name: "Item 3", category: "Category 1", location: "Location 1" },
    ];
  
    const filteredItems = items.filter((item) =>
      (!itemSearch || item.name.toLowerCase().includes(itemSearch)) &&
      (!categoryFilter || item.category === categoryFilter) &&
      (!locationFilter || item.location === locationFilter)
    );
  
    alert("Filtered Items: " + filteredItems.map((i) => i.name).join(", "));
  };
  
  export default searchItems;
  