function compareProducts() {
  const input = document.getElementById("searchInput").value;

  if (input.trim() !== "") {
    document.getElementById("comparisonResult").classList.remove("hidden");
  } else {
    alert("Please enter a product to compare.");
  }
}
