// Items list (copy over from Python, each with a name, value, and chance)
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

// Load image for each item
function loadImage(itemName) {
    const fileName = itemName + ".png";  // Use the exact name with .png extension
    return `images/${fileName}`;
}

// Open one box
function openBox() {
    totalBoxesOpened++;
    totalEdCost += 4400000;
    const selectedItem = selectRandomItem();

    updateUI(selectedItem);
}

// Open 25 boxes
function openBox25() {
    totalBoxesOpened += 25;
    totalEdCost += 4400000 * 25;
    const results = Array.from({ length: 25 }, selectRandomItem);

    updateUI(results);
}

// Select a random item based on chance
function selectRandomItem() {
    const totalWeight = items.reduce((sum, item) => sum + item.chance, 0);
    let random = Math.random() * totalWeight;
    for (let item of items) {
        if (random < item.chance) return item;
        random -= item.chance;
    }
}

// Update the UI
function updateUI(result) {
    const itemLabel = document.getElementById("itemLabel");
    const itemImage = document.getElementById("itemImage");
    const boxCount = document.getElementById("boxCount");
    const edCost = document.getElementById("edCost");
    const historyLog = document.getElementById("historyLog");

    // Update single item or grid
    if (Array.isArray(result)) {
        document.getElementById("itemGrid").innerHTML = result.map(item => `
            <div>
                <img src="${loadImage(item.name)}" alt="${item.name}">
                <p>${item.name} (${item.chance}%)</p>
            </div>
        `).join('');
    } else {
        itemLabel.textContent = `Rolled: ${result.name} (${result.chance}%)`;
        itemImage.src = loadImage(result.name);
    }

    // Update counts
    boxCount.textContent = `Boxes Opened: ${totalBoxesOpened}`;
    edCost.textContent = `Total ED Cost: ${totalEdCost.toLocaleString()}`;
    historyLog.value += `${result.name} rolled ${result.chance}%\n`;
}
