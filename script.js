// Updated items array with ED costs for revenue calculation
const items = [
    { name: "Vegan Deep Fried Bird Leg", value: 50, chance: 3, ed: 2000000 },
    { name: "Delicious Gingerbread Bird Cookie", value: 50, chance: 3, ed: 2000000 },
    { name: "Nani's Valentine's Day Chocolate", value: 50, chance: 3, ed: 2000000 },
    { name: "Nani's Special Valentine's Day Chocolate", value: 50, chance: 3, ed: 2000000 },
    { name: "Astroberry Cheesecake", value: 50, chance: 3, ed: 2000000 },
    { name: "Astroberry Parfait", value: 50, chance: 3, ed: 2000000 },
    { name: "Complete Recovery Potion", value: 50, chance: 4.75962, ed: 150000 },
    { name: "Quantum Tiramisu", value: 50, chance: 3, ed: 2000000 },
    { name: "Quantum Latte", value: 50, chance: 3, ed: 2000000 },
    { name: "Soft Ice Cream", value: 50, chance: 3, ed: 2000000 },
    { name: "hmemborgar", value: 50, chance: 3, ed: 2000000 },
    { name: "Exotic Bubble Tea", value: 50, chance: 3, ed: 2000000 },
    { name: "Hermit Cr... Avocado Sushi", value: 50, chance: 3, ed: 2000000 },
    { name: "Baal Mithai", value: 50, chance: 3, ed: 2000000 },
    { name: "Hallowed Lollipop", value: 50, chance: 3, ed: 2000000 },
    { name: "Bloody Pumpkin Pie", value: 50, chance: 2.5, ed: 2000000 },
    { name: "Raider's Brain", value: 50, chance: 3, ed: 2000000 },
    { name: "Wedding Cake (25)", value: 25, chance: 3, ed: 0 },
    { name: "Wedding Cake (50)", value: 50, chance: 1.75, ed: 0 },
    { name: "Wedding Cake (75)", value: 75, chance: 0.9, ed: 0 },
    { name: "Fighter Potion (10)", value: 10, chance: 2.5, ed: 1750000 },
    { name: "Fighter Potion (25)", value: 25, chance: 1.25, ed: 4375000 },
    { name: "Fighter Potion (50)", value: 50, chance: 0.75, ed: 8750000 },
    { name: "Giant Stone Apple (25)", value: 25, chance: 2.5, ed: 4375000 },
    { name: "Giant Stone Apple (50)", value: 50, chance: 1.25, ed: 8750000 },
    { name: "Giant Stone Apple (75)", value: 75, chance: 0.75, ed: 13125000 },
    { name: "Special Elrios Pass Potion (25)", value: 25, chance: 2.5, ed: 0 },
    { name: "Special Elrios Pass Potion (50)", value: 50, chance: 1.35, ed: 0 },
    { name: "Special Elrios Pass Potion (75)", value: 75, chance: 0.85, ed: 0 },
    { name: "El's Essence", value: 250, chance: 3, ed: 1250000 },
    { name: "El Resonance Potion (x500 Concentrate) (5)", value: 5, chance: 3.5, ed: 0 },
    { name: "El Resonance Potion (x500 Concentrate) (10)", value: 10, chance: 3, ed: 0 },
    { name: "El Resonance Potion (x500 Concentrate) (15)", value: 15, chance: 2.5, ed: 0 },
    { name: "Elite Growth Elixir (200%) (5)", value: 5, chance: 2, ed: 0 },
    { name: "Tenebrous Aura (100)", value: 100, chance: 2, ed: 2800000 },
    { name: "Tenebrous Aura (200)", value: 200, chance: 1, ed: 5600000 },
    { name: "Tenebrous Aura (300)", value: 300, chance: 0.5, ed: 8400000 },
    { name: "Imprint Swap Stone", value: 0, chance: 0.1, ed: 270000000 },
    { name: "Master Class Change Package", value: 0, chance: 0.01, ed: 1008000000 },
    { name: "Giant Ventus' Wings (Elixir) (10)", value: 10, chance: 2, ed: 0 },
    { name: "Heavenly Dessert Party (10)", value: 10, chance: 2, ed: 0 },
    { name: "Code of Honor", value: 0, chance: 0.2, ed: 1000000 },
    { name: "Mark of Alliance", value: 0, chance: 0.2, ed: 150000000 },
    { name: "Baryon's Fur Ornament", value: 0, chance: 0.2, ed: 150000000 },
    { name: "Engine Cooling System", value: 0, chance: 0.2, ed: 150000000 },
    { name: "Varnimyr Region Accessory Select Cube", value: 0, chance: 0.1, ed: 20000000 },
    { name: "Pruinaum Region Accessory Select Cube", value: 0, chance: 0.1, ed: 150000000 },
    { name: "Abyss Support Selection Cube", value: 0, chance: 0.07, ed: 0 },
    { name: "Guild Banner Point", value: 0, chance: 1, ed: 0 },
    { name: "Guild Honor Point Scroll", value: 0, chance: 0.2, ed: 0 },
    { name: "Mysterious Pet Fruit (5)", value: 5, chance: 2, ed: 0 },
    { name: "Mysterious Pet Fruit (7)", value: 7, chance: 1.2, ed: 0 },
    { name: "Mysterious Pet Fruit (10)", value: 10, chance: 0.9699697, ed: 0 },
    { name: "Tenebrous Effect Select Ticket", value: 0, chance: 0.1, ed: 0 },
    { name: "Cosmic Rift Dust (1000)", value: 1000, chance: 0.1, ed: 100000000 },
    { name: "Cosmic Rift Dust (2000)", value: 2000, chance: 0.07, ed: 200000000 },
    { name: "Cosmic Rift Dust (3000)", value: 3000, chance: 0.021, ed: 300000000 },
    { name: "Cosmic Rift Dust (5000)", value: 5000, chance: 0.007, ed: 500000000 },
    { name: "Golden Fishing Rod", value: 0, chance: 0.01, ed: 150000000 },
    { name: "Attack of Steel Machines", value: 0, chance: 0.0002, ed: 8000000000 },
    { name: "Natural Flow", value: 0, chance: 0.0002, ed: 10000000000 },
    { name: "Freed Shadow", value: 0, chance: 0.002, ed: 2500000000 },
    { name: "The Setting Sun", value: 0, chance: 0.006, ed: 1000000000 },
    { name: "Sealer of Plegas", value: 0, chance: 0.002, ed: 6500000000 },
    { name: "Tenebrous Reforge Amulet Lv.18", value: 0, chance: 0.02, ed: 3000000000 },
    { name: "Tenebrous Reforge Amulet Lv.21", value: 0, chance: 0.00002, ed: 3600000000 },
    { name: "Elrios Pass Magic Amulet Lv.11", value: 0, chance: 0.0000001, ed: 1900000000 },
    { name: "Elrios Pass Magic Amulet Lv.12", value: 0, chance: 0.000000001, ed: 50000000000 }
];

let totalBoxesOpened = 0;
let totalEdCost = 0;
let itemCounts = {};
let totalRevenue = 0; // Initialize the total revenue variable

const itemSelect = document.getElementById("item-select");
items.forEach(item => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    itemSelect.appendChild(option);
});

function loadImage(itemName) {
    const loadImagesChecked = document.getElementById('load-images').checked;
    if (!loadImagesChecked) return ''; 

    let fileName = `${itemName}.png`;
    if (itemName === "Elite Growth Elixir (200%) (5)") {
        fileName = "elite_growth_elixir_200_5.png";
    }

    return `images/${fileName}`;
}

function openBox() {
    totalBoxesOpened++;
    totalEdCost += 4400000;
    const selectedItem = selectRandomItem();
    totalRevenue += selectedItem.ed; // Add the ED cost of the selected item to total revenue
    updateUI([selectedItem]);
}

function openBox25() {
    totalBoxesOpened += 25;
    totalEdCost += 4400000 * 25;
    const results = Array.from({ length: 25 }, selectRandomItem);
    results.forEach(item => totalRevenue += item.ed); // Add the ED cost of each item to total revenue
    updateUI(results);
}

function selectRandomItem() {
    const totalWeight = items.reduce((sum, item) => sum + item.chance, 0);
    const randomWeight = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (let item of items) {
        cumulativeWeight += item.chance;
        if (randomWeight <= cumulativeWeight) {
            return item;
        }
    }
}

function updateUI(items) {
    const itemContainer = document.getElementById("item-container");
    const historyLog = document.getElementById("historyLog");
    itemContainer.innerHTML = "";

    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const itemImage = document.createElement("img");
        const imagePath = loadImage(item.name);
        if (imagePath) {
            itemImage.src = imagePath;
            itemImage.alt = item.name;
        }

        const itemName = document.createElement("p");
        itemName.textContent = item.name;
        itemName.classList.add("small-item-name");

        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemName);
        itemContainer.appendChild(itemDiv);

        if (!itemCounts[item.name]) itemCounts[item.name] = 0;
        itemCounts[item.name]++;
    });

    const sortedItems = Object.entries(itemCounts)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

    historyLog.value = "";
    sortedItems.forEach(itemName => {
        historyLog.value += `${itemName} - Rolls: ${itemCounts[itemName]}\n`;
    });

    // Update the ED cost and total revenue in the UI
    document.getElementById("total-ed-cost").textContent = `Total ED Cost: ${totalEdCost.toLocaleString()}`;
    document.getElementById("total-boxes").textContent = `Boxes Opened: ${totalBoxesOpened.toLocaleString()}`;
    document.getElementById("total-revenue").textContent = `Total Revenue: ${totalRevenue.toLocaleString()}`;

    // Calculate profit or loss
const profitLoss = totalRevenue - totalEdCost;
const profitLossElement = document.getElementById("profit-loss");

// Format profit or loss with commas
let formattedProfitLoss = profitLoss.toLocaleString();

// Set the text and color for profit/loss
if (profitLoss >= 0) {
    profitLossElement.textContent = `Profit/Loss: +${formattedProfitLoss}`;
    profitLossElement.style.color = 'green'; // Profit is green
} else {
    profitLossElement.textContent = `Profit/Loss: ${formattedProfitLoss}`;  // No need for another negative sign
    profitLossElement.style.color = 'red'; // Loss is red
    }
}

let rollingInterval;
let displayBoxesOpened = 0; // Separate counter for display

function startRollingForItem() {
    const targetItemName = document.getElementById("item-select").value;
    
    // Reset counters for each new session
    totalBoxesOpened = 0;
    displayBoxesOpened = 0; // Reset display counter
    totalEdCost = 0;
    totalRevenue = 0;
    itemCounts = {};

    // Smoothly update the displayed count
    const displayInterval = setInterval(() => {
        if (displayBoxesOpened < totalBoxesOpened) {
            displayBoxesOpened += Math.min(100000, totalBoxesOpened - displayBoxesOpened); // Adjust increment as needed
            document.getElementById("total-boxes").textContent = `Boxes Opened: ${displayBoxesOpened.toLocaleString()}`;
        }
    }, 50); // Update every 50 milliseconds

    rollingInterval = setInterval(() => {
        const batchSize = 10000000; // Roll 10 million items at a time
        const rolledItems = Array.from({ length: batchSize }, selectRandomItem);
        
        totalBoxesOpened += batchSize;
        totalEdCost += 4400000 * batchSize;

        rolledItems.forEach(item => totalRevenue += item.ed);

        // Check if target item is rolled
        if (rolledItems.some(item => item.name === targetItemName)) {
            clearInterval(rollingInterval);
            clearInterval(displayInterval);
            updateUI([rolledItems.find(item => item.name === targetItemName)]);
            alert(`Target item "${targetItemName}" found after ${totalBoxesOpened.toLocaleString()} boxes!`);
        }

        // Update the live counters
        document.getElementById("total-ed-cost").textContent = `Total ED Cost: ${totalEdCost.toLocaleString()}`;
        document.getElementById("total-revenue").textContent = `Total Revenue: ${totalRevenue.toLocaleString()}`;

        // Calculate and display profit/loss
        const profitLoss = totalRevenue - totalEdCost;
        const profitLossElement = document.getElementById("profit-loss");
        let formattedProfitLoss = profitLoss.toLocaleString();

        if (profitLoss >= 0) {
            profitLossElement.textContent = `Profit/Loss: +${formattedProfitLoss}`;
            profitLossElement.style.color = 'green';
        } else {
            profitLossElement.textContent = `Profit/Loss: ${formattedProfitLoss}`;
            profitLossElement.style.color = 'red';
        }
    }, 1); // Background rolling every millisecond
}
