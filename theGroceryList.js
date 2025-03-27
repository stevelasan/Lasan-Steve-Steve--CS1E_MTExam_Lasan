function createGroceryList() {
    const createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();
    
    if (createList === 'y') {
        const numberOfItems = parseInt(prompt("How many items do you want to add?"));
        let groceryList = [];

        for (let i = 0; i < numberOfItems; i++) {
            const item = prompt("Enter item ${i + 1}:");
            groceryList.push(item);
        }

        const groceryListSort = [...groceryList].sort();
        const groceryListReverse = [...groceryList].reverse();

        alert("Grocery List: " + groceryList.join(", "));
        alert("Sorted Grocery List: " + groceryListSort.join(", "));
        alert("Reversed Grocery List: " + groceryListReverse.join(", "));
    } else {
        alert("No grocery list created.");
    }
}

createGroceryList();
