function AddMinus(action) {
    const quantityElement = document.getElementById("textQuantity");
    let quantity = parseInt(quantityElement.innerText);

    if(quantity == 1 && action == 'dec'){
        alert("Add On Card")
    return;
    }
    else if(quantity == 5 && action === 'inc') {
        alert("Limit is over")
    return;        
    } else {
        
    }
    quantityElement.innerText = action == 'inc'? ++quantity : --quantity;
}
