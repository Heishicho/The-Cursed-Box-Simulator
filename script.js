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

    // Special case for "Elite Growth Elixir (200%) (5)"
    if (itemName === "Elite Growth Elixir (200%) (5)") {
        return `images/elite_growth_elixir_200_5.png`;  // Custom file name for this item
    }

    // Default case for other items
    let fileName = itemName.replace(/\s+/g, '_').toLowerCase() + ".png";
    return `images/${fileName}`;
}

// Open one box
function openBox() {
    totalBoxesOpened++;
    totalEdCost += 4400000;
    const selectedItem = selectRandomItem();
    updateUI([selectedItem]); // Pass the selected item as an array
}

// Open 25 boxes
function openBox25() {
    totalBoxesOpened += 25;
    totalEdCost += 4400000 * 25;
    const results = Array.from({ length: 25 }, selectRandomItem);
    updateUI(results); // Pass the results as an array of items
}

// Random item selection based on chances
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

// Update the UI with the selected items and costs
function updateUI(items) {
    const itemContainer = document.getElementById("item-container");
    const historyLog = document.getElementById("historyLog");

    // Clear current item display
    itemContainer.innerHTML = "";

    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const itemImage = document.createElement("img");
        const imagePath = loadImage(item.name);
        if (imagePath) {
            itemImage.src = imagePath;
        }

        const itemName = document.createElement("p");
        itemName.textContent = item.name;
        itemName.classList.add("small-item-name");

        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemName);
        itemContainer.appendChild(itemDiv);

        // Track item counts
        if (!itemCounts[item.name]) {
            itemCounts[item.name] = 0;
        }
        itemCounts[item.name]++;
    });

    // Sort the items by number of rolls
    const sortedItems = Object.entries(itemCounts)
        .sort((a, b) => a[1] - b[1])
        .map(entry => entry[0]);

    // Update history log
    historyLog.value = "";
    sortedItems.forEach(itemName => {
        historyLog.value += `${itemName} - Rolls: ${itemCounts[itemName]}\n`;
    });

    // Update total ED cost
    document.getElementById("total-ed-cost").textContent = `Total ED Cost: ${totalEdCost.toLocaleString()}`;
    document.getElementById("total-boxes").textContent = `Total Boxes Opened: ${totalBoxesOpened}`;
}

// Start rolling for a selected item until it is rolled
let rollingInterval;
function startRollingForItem() {
    const targetItemName = document.getElementById("item-select").value;
    let rolledItem;

    // Increment the counters for each roll
    const boxesPerRoll = 1;  // Increment per roll (since it's a single box each time)
    const edCostPerRoll = 4400000;  // ED cost for each box

    // Variable to track number of rolls
    let rollCount = 0;

    // Store rolled items in an array for logging
    let rolledItems = [];

    // Speed up the rolling process by reducing the interval to 1 ms (almost instant)
    rollingInterval = setInterval(() => {
        // Simulate a roll (one box per interval)
        rolledItem = selectRandomItem();
        rolledItems.push(rolledItem);

        // Increment the total boxes opened and ED cost for each roll
        totalBoxesOpened += boxesPerRoll;
        totalEdCost += edCostPerRoll;

        // Update the total boxes and ED cost in the UI
        document.getElementById("total-boxes").textContent = `Total Boxes Opened: ${totalBoxesOpened}`;
        document.getElementById("total-ed-cost").textContent = `Total ED Cost: ${totalEdCost.toLocaleString()}`;

        // Update the history log with every item rolled
        updateHistoryLog(rolledItem);

        // Check if the selected item is found
        if (rolledItem.name === targetItemName) {
            // Log the successful roll of the selected item
            document.getElementById("historyLog").value += `\nTarget Item Found: ${rolledItem.name} rolled after ${rollCount + 1} rolls\n`;

            // Clear the interval after the target item is found
            clearInterval(rollingInterval);
            console.log(`Rolled the target item: ${targetItemName}`);
        }

        rollCount++;  // Increment the roll count
    }, 1);  // Speed up the rolling by setting the interval to 1 ms (very fast)
}

// Update the history log with the rolled item
function updateHistoryLog(item) {
    const historyLog = document.getElementById("historyLog");
    historyLog.value += `${item.name} - ED Cost: ${totalEdCost.toLocaleString()}\n`;
}
