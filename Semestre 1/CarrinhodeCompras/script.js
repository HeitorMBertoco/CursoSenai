let cart = [];
let discountPercentage = 0;

function addItemToCart(name, price, quantityInputId) {
    let quantityInput = document.getElementById(quantityInputId);
    let quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        alert('Por favor, insira uma quantidade válida maior que 0.');
        return;
    }

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: name, unitPrice: price, quantity: quantity });
    }

    updateCartDisplay();
    quantityInput.value = 0; // Reset quantity input after adding to cart
}

function updateCartDisplay() {
    let cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Limpar itens atuais

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="color: white;">Seu carrinho está vazio.</p>';
        calculateTotals();
        return;
    }

    let table = document.createElement('table');
    table.className = 'table table-dark table-striped'; // Adicionado classes Bootstrap para estilização
    table.style.color = 'white';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Item</th>
                <th>Preço Unitário</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody id="cart-table-body">
        </tbody>
    `;
    cartItemsDiv.appendChild(table);

    let tbody = document.getElementById('cart-table-body');
    cart.forEach(item => {
        let subtotal = item.unitPrice * item.quantity;
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>R$ ${item.unitPrice.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>R$ ${subtotal.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });

    calculateTotals();
}

function calculateTotals() {
    let totalBruto = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    let discountAmount = totalBruto * (discountPercentage / 100);
    let totalCompra = totalBruto - discountAmount;

    document.getElementById('total-bruto').innerText = `R$ ${totalBruto.toFixed(2)}`;
    document.getElementById('valor-desconto').innerText = `R$ ${discountAmount.toFixed(2)}`;
    document.getElementById('total-compra').innerText = `R$ ${totalCompra.toFixed(2)}`;
}

function applyDiscount() {
    let discountInput = document.getElementById('desconto');
    let newDiscount = parseFloat(discountInput.value);

    if (isNaN(newDiscount) || newDiscount < 0 || newDiscount > 100) {
        alert('Por favor, insira uma porcentagem de desconto válida entre 0 e 100.');
        discountInput.value = discountPercentage;
        return;
    }
    discountPercentage = newDiscount;
    calculateTotals();
}

// Exibição inicial quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});