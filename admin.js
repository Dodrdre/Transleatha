// Approve Customs Document
function approveDocument(docId) {
  const statusElement = document.getElementById(`status-${docId}`);
  statusElement.innerText = "Approved";
  statusElement.classList.remove('status-pending');
  statusElement.classList.add('status-approved');
  alert(`Document ${docId} approved successfully!`);
}

// Add New Product to Marketplace Preview
function addNewProduct() {
  const productName = document.getElementById('newProductName').value.trim();
  const productPrice = document.getElementById('newProductPrice').value.trim();
  const productCountry = document.getElementById('newProductCountry').value.trim();
  const marketplace = document.getElementById('marketplaceProducts');

  if (productName !== "" && productPrice !== "" && productCountry !== "") {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="images/default_product.jpg" alt="${productName}" class="product-image">
      <h3>${productName}</h3>
      <p>Origin: ${productCountry}</p>
      <p>Price: ${productPrice}</p>
      <button class="button">Request Custom Quote</button>
    `;

    marketplace.appendChild(productCard);

    alert(`${productName} added to marketplace preview!`);

    // Reset form
    document.getElementById('newProductName').value = "";
    document.getElementById('newProductPrice').value = "";
    document.getElementById('newProductCountry').value = "";
  } else {
    alert("Please fill all product fields before adding!");
  }
}
