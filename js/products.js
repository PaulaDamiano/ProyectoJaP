let currentProductsArray = [];

function showProductsList() {
    document.getElementById("category-name").innerHTML = currentProductsArray.catName;
    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductsArray.products.length; i++) {
        let product = currentProductsArray.products[i]; {

            htmlContentToAppend += `
            <div  class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost} </h4>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
        }
        document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL + "101.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            currentProductsArray = resultObj.data
            showProductsList()
        }
    });
});