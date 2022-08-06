
function selectionSort(arr){

    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest ){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest = temp];
        }
        
    }

    return arr;
}

selectionSort([34, 33, 20, 129, 17]);

// ES 2015
function selectionSortNew(arr) {
    const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

selectionSortNew([34, 33, 20, 129, 17]);