const maxActiveButtons = 2;
const n = 10;
const m = 20;

// Toggle the state of the button
function toggleButtonState(event) {
    const button = event.target;
    const isActive = button.classList.contains('active');
    const activeButtons = document.querySelectorAll('.toggle-button.active');

    if (isActive) {
        button.classList.remove('active');
        button.classList.add('inactive');
        button.textContent = "";
    } else if (activeButtons.length < maxActiveButtons) {
        if (button.classList.contains('inactive')) {
            button.classList.remove('inactive');
        }
        if (activeButtons.length === 0) button.textContent = "Src";
        if (activeButtons.length === 1) button.textContent = "Des";

        button.classList.add('active');
    } else {
        button.classList.remove('active');
        button.classList.add('inactive');
        button.textContent = "";
    }
}


function refreshPage() {
    location.reload();
}


// Print the grid in the console
function formGraphGrid() {
    const buttons = document.querySelectorAll('.toggle-button');
    const gridArray = [];
    const src = [];
    const des = [];

    for (let i = 0; i < n; i++) {
        gridArray[i] = [];
        for (let j = 0; j < m; j++) {
            const buttonIndex = i * m + j;
            const button = buttons[buttonIndex];
            if (button.classList.contains('active')) {
                if (src.length == 0) {
                    src[0] = i;
                    src[1] = j;
                } else {
                    des[0] = i;
                    des[1] = j;
                }
                gridArray[i][j] = 1;
            } else if (button.classList.contains('inactive')) {
                gridArray[i][j] = -1;
            } else {
                gridArray[i][j] = 1;
            }
        }
    }
    findSmallestDistance(gridArray, src, des);
}

function updateGridWithShortestPath(origin, src, des) {
    let row = des[0];
    let col = des[1];

    const allButtons = document.querySelectorAll('.toggle-button');
    if (origin[row][col] == m * row + col) {
        alert("Not Possible");
        return;
    }

    while (row !== src[0] || col !== src[1]) {
        setButtonsActiveByRowColumn(row, col);
        let val = origin[row][col];
        row = Math.floor(val / m);
        col = val % m;
        console.log("New row/col: [" + row + " , " + col + "]");
    }
    console.log("FINAL row/col: [" + row + " , " + col + "]" + " and value in origin is " + origin[row][col]);
}


function setButtonsActiveByRowColumn(row, column) {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach((button, index) => {
        const buttonRow = Math.floor(index / m); // Assuming the grid has 10 columns
        const buttonColumn = index % m; // Assuming the grid has 10 columns

        if (buttonRow === row && buttonColumn === column) {
            button.classList.add('active');
        }
    });
}