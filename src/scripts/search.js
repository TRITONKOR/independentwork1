var array = [];
arraySize = 100;

requiredNumber = 0;

function BinarySearch() {
    if (array[0] > array[-1]) {
        document.getElementById("showAnswer").value = "how you do this????";
        return 0;
    }
    
    requiredNumber = document.getElementById("pushValue").value;
    let left = 0;
    let right = arraySize - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (array[mid] == requiredNumber) {
            document.getElementById("showAnswer").value = "On position: " + (mid + 1);
            return 0; 
        } else if (array[mid] < requiredNumber) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    document.getElementById("showAnswer").value = "now avaible here";
}

function LineSearch() {
    requiredNumber = document.getElementById("pushValue").value;

    for (step = 0; step < arraySize; step++) {
        if (array[step] == requiredNumber) {
            document.getElementById("showAnswer").value = "On position: " + (step + 1);
            return 0;
        }
    }
    document.getElementById("showAnswer").value = "now avaible here";
}

function GenerateArray() {
    array.length = 0;
    document.getElementById("displayArray").textContent = "";

    arraySize = document.getElementById("pushCount").value;

    for (step = 1; step <= arraySize; step++) {
        array.push(step);
    }

    document.getElementById("displayArray").textContent = array;
}
