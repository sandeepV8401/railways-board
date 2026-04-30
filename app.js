function refresh() {  
  const now = new Date();  
  document.getElementById("last-updated").textContent =  
    "Last refreshed at: " + now.toLocaleTimeString("en-IN");  
}  
