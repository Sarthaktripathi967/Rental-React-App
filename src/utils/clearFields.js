// utils/clearFields.js
const clearFields = (event) => {
    event.preventDefault();
    document.getElementById("type").value = "";
    document.getElementById("customer").value = "";
    document.getElementById("date").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("discount").value = "";
    document.getElementById("shippingMethod").value = "";
    document.getElementById("specialInstructions").value = "";
  };
  
  export default clearFields;
  