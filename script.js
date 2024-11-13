// Items list (same as before, copy the full list)
const items = [
    { name: "Vegan Deep Fried Bird Leg", value: 50, chance: 3 },
    { name: "Delicious Gingerbread Bird Cookie", value: 50, chance: 3 },
    { name: "Nani's Valentine's Day Chocolate", value: 50, chance: 3 },
    { name: "Nani's Special Valentine's Day Chocolate", value: 50, chance: 3 },
    { name: "Astroberry Cheesecake", value: 50, chance: 3 },
    { name: "Astroberry Parfait", value: 50, chance: 3 },
    { name: "Complete Recovery Potion", value: 50, chance: 4.75962 },
    { name: "Quantum Tiramisu", value: 50, chance: 3 },
    { name: "Quantum Latte", value: 50, chance: 3 },
    { name: "Soft Ice Cream", value: 50, chance: 3 },
    { name: "hmemborgar", value: 50, chance: 3 },
    { name: "Exotic Bubble Tea", value: 50, chance: 3 },
    { name: "Hermit Cr... Avocado Sushi", value: 50, chance: 3 },
    { name: "Baal Mithai", value: 50, chance: 3 },
    { name: "Hallowed Lollipop", value: 50, chance: 3 },
    { name: "Bloody Pumpkin Pie", value: 50, chance: 2.5 },
    { name: "Raider's Brain", value: 50, chance: 3 },
    { name: "Wedding Cake (25)", value: 25, chance: 3 },
    { name: "Wedding Cake (50)", value: 50, chance: 1.75 },
    { name: "Wedding Cake (75)", value: 75, chance: 0.9 },
    { name: "Fighter Potion (10)", value: 10, chance: 2.5 },
    { name: "Fighter Potion (25)", value: 25, chance: 1.25 },
    { name: "Fighter Potion (50)", value: 50, chance: 0.75 },
    { name: "Giant Stone Apple (25)", value: 25, chance: 2.5 },
    { name: "Giant Stone Apple (50)", value: 50, chance: 1.25 },
    { name: "Giant Stone Apple (75)", value: 75, chance: 0.75 },
    { name: "Special Elrios Pass Potion (25)", value: 25, chance: 2.5 },
    { name: "Special Elrios Pass Potion (50)", value: 50, chance: 1.35 },
    { name: "Special Elrios Pass Potion (75)", value: 75, chance: 0.85 },
    { name: "El's Essence", value: 250, chance: 3 },
    { name: "El Resonance Potion (x500 Concentrate) (5)", value: 5, chance: 3.5 },
    { name: "El Resonance Potion (x500 Concentrate) (10)", value: 10, chance: 3 },
    { name: "El Resonance Potion (x500 Concentrate) (15)", value: 15, chance: 2.5 },
    { name: "Elite Growth Elixir (200%) (5)", value: 5, chance: 2 },
    { name: "Tenebrous Aura (100)", value: 100, chance: 2 },
    { name: "Tenebrous Aura (200)", value: 200, chance: 1 },
    { name: "Tenebrous Aura (300)", value: 300, chance: 0.5 },
    { name: "Imprint Swap Stone", value: 0, chance: 0.1 },
    { name: "Master Class Change Package", value: 0, chance: 0.01 },
    { name: "Giant Ventus' Wings (Elixir) (10)", value: 10, chance: 2 },
    { name: "Heavenly Dessert Party (10)", value: 10, chance: 2 },
    { name: "Code of Honor", value: 0, chance: 0.2 },
    { name: "Mark of Alliance", value: 0, chance: 0.2 },
    { name: "Baryon's Fur Ornament", value: 0, chance: 0.2 },
    { name: "Engine Cooling System", value: 0, chance: 0.2 },
    { name: "Varnimyr Region Accessory Select Cube", value: 0, chance: 0.1 },
    { name: "Pruinaum Region Accessory Select Cube", value: 0, chance: 0.1 },
    { name: "Abyss Support Selection Cube", value: 0, chance: 0.07 },
    { name: "Guild Banner Point", value: 0, chance: 1 },
    { name: "Guild Honor Point Scroll", value: 0, chance: 0.2 },
    { name: "Mysterious Pet Fruit (5)", value: 5, chance: 2 },
    { name: "Mysterious Pet Fruit (7)", value: 7, chance: 1.2 },
    { name: "Mysterious Pet Fruit (10)", value: 10, chance: 0.9699697 },
    { name: "Tenebrous Effect Select Ticket", value: 0, chance: 0.1 },
    { name: "Cosmic Rift Dust (1000)", value: 1000, chance: 0.1 },
    { name: "Cosmic Rift Dust (2000)", value: 2000, chance: 0.07 },
    { name: "Cosmic Rift Dust (3000)", value: 3000, chance: 0.021 },
    { name: "Cosmic Rift Dust (5000)", value: 5000, chance: 0.007 },
    { name: "Golden Fishing Rod", value: 0, chance: 0.01 },
    { name: "Attack of Steel Machines", value: 0, chance: 0.0002 },
    { name: "Natural Flow", value: 0, chance: 0.0002 },
    { name: "Freed Shadow", value: 0, chance: 0.002 },
    { name: "The Setting Sun", value: 0, chance: 0.006 },
    { name: "Sealer of Plegas", value: 0, chance: 0.002 },
    { name: "Tenebrous Reforge Amulet Lv.18", value: 0, chance: 0.02 },
    { name: "Tenebrous Reforge Amulet Lv.21", value: 0, chance: 0.002 },
    { name: "Elrios Pass Magic Amulet Lv.11", value: 0, chance: 0.00001 },
    { name: "Elrios Pass Magic Amulet Lv.12", value: 0, chance: 0.0000001 }
];

// Track opened boxes and ED cost
let totalBoxesOpened = 0;
let totalEdCost = 0;
let itemCounts = {};

// Populate the dropdown with items
const itemSelect = document.getElementById("item-select");
items.forEach(item => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    itemSelect.appendChild(option);
});

// Load image for each item
function loadImage(itemName) {
    const loadImagesChecked = document.getElementById('load-images').checked;

    if (!loadImagesChecked) {
        return '';  // No image will be loaded
    }

    let fileName = itemName + ".png";

    // Handle exceptions for special file names
    if (itemName === "Elite Growth Elixir (200%) (5)") {
        fileName = "elite_growth_elixir_200_5.png";
    }

    return `images/${fileName}`;
}

// Open one box
function openBox() {
    totalBoxesOpened++;
    totalEdCost += 4400000;  // Each box costs 4.4 million ED

    const resultArea = document.getElementById("result-area");
    const resultHistory = document.getElementById("result-history");
    const selectedItem = itemSelect.value;

    const item = items.find(item => item.name === selectedItem);
    const probability = Math.random();
    let cumulativeChance = 0;
    let chosenItem = null;

    for (const currentItem of items) {
        cumulativeChance += currentItem.chance;
        if (probability <= cumulativeChance / 100) {
            chosenItem = currentItem;
            break;
        }
    }

    // Handle item probability, load image and update history
    if (chosenItem) {
        const itemName = chosenItem.name;
        const itemValue = chosenItem.value;
        const itemImage = loadImage(itemName);
        
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
            <img src="${itemImage}" alt="${itemName}" style="max-width: 100px;">
            <div>${itemName}</div>
            <div>Value: ${itemValue}</div>
        `;
        resultArea.innerHTML = itemElement.outerHTML;

        // Log item history
        const historyItem = document.createElement("div");
        historyItem.textContent = `${itemName} - ED Cost: ${itemValue}`;
        resultHistory.appendChild(historyItem);

        // Store item count
        itemCounts[itemName] = (itemCounts[itemName] || 0) + 1;
    }

    // Update the total ED cost and boxes opened
    document.getElementById("total-ed-cost").textContent = `Total ED Cost: ${totalEdCost}`;
    document.getElementById("total-boxes-opened").textContent = `Boxes Opened: ${totalBoxesOpened}`;
}

// Simulate multiple box opens for faster results
function simulateMultipleRolls(numRolls, interval) {
    let currentRolls = 0;
    const simulate = setInterval(() => {
        if (currentRolls < numRolls) {
            openBox();
            currentRolls++;
        } else {
            clearInterval(simulate);
        }
    }, interval);
}

// Start the simulation when the button is clicked
document.getElementById("open-button").addEventListener("click", () => {
    const numRolls = 100; // You can increase the number of rolls to simulate
    const interval = 10; // Adjust the interval for faster or slower simulation
    simulateMultipleRolls(numRolls, interval);
});
