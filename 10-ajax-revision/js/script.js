document.addEventListener("DOMContentLoaded", function () {
    async function loadData() {
        const response = await axios.get("../data/inventory.json");
        const output = document.querySelector("#output");
        response.data.forEach(function (product) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${product.id}</td>
                <td>${product.sku}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.model}</td>
                <td>${product.category}</td>
            
            `
            output.appendChild(tr);
        })

    }
    loadData();

})