// Mountain interface
interface Mountain {
    name: string;
    height: number;
}

// Empty array to store mountains
let mountains: Mountain[] = [];

// Mountain objects for the mountain array
mountains.push({ name: "Kilimanjaro", height: 19341 });
mountains.push({ name: "Everest", height: 29029 });
mountains.push({ name: "Denali", height: 20310 });

// Function to find tallest mountain
function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallestName = "";
    let tallestHeight = 0;

    // Iterate through each mountain object
    for (let i = 0; i < mountains.length; i++) {
        // Check if the current mountain is taller than the previous tallest mountain
        if (mountains[i].height > tallestHeight) {
            // Update the tallest mountain's name and height
            tallestName = mountains[i].name;
            tallestHeight = mountains[i].height;
        }
    }

    // Return the name of the tallest mountain
    return tallestName;
}

// Define the 'Product' interface
interface Product {
    name: string;
    price: number;
}

// Create an empty array to store products
let products: Product[] = [];

// Add product objects to the 'products' array
products.push({ name: "Toothbrush", price: 0.99 });
products.push({ name: "Keyboard", price: 149.99 });
products.push({ name: "Monitor", price: 249.99 });

// Function to calculate the average price of products
function calcAverageProductPrice(products: Product[]): number {
    let i = 0;
    let total = 0;

    // Iterate through each product object
    products.forEach((value: Product) => {
        // Add the price of each product to the total
        i++;
        total += value.price;
    });

    // Calculate and return the average price
    return total / i;
}

// Define the 'InventoryItem' interface
interface InventoryItem {
    product: Product;
    quantity: number;
}

// Create an array of inventory items
let inventory: InventoryItem[] = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];

// Function to calculate the total value of the inventory
function calcInventoryValue(items: InventoryItem[]): number {
    let total = 0;

    // Iterate through each inventory item
    items.forEach((value: InventoryItem) => {
        // Calculate the value of each item by multiplying the price by the quantity
        total += value.product.price * value.quantity;
    });

    // Return the total inventory value
    return total;
}

// Print the name of the tallest mountain
console.log(findNameOfTallestMountain(mountains));

// Print the average price of the products
console.log(calcAverageProductPrice(products));

// Print the total value of the inventory
console.log(calcInventoryValue(inventory));
