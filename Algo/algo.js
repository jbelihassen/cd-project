function removeAt(index, arr) {
    if (index > arr.length || index < 0) {
        console.log(arr,null);
        return arr, null;
    } else {
        var arr2 = []
        for (var i = 0; i < arr.length; i++) {
            if (i != index) {
                arr2.push(arr[i])
            }
        }
    }
    console.log(arr2,arr[index]);
    return arr2, arr[index]
}


removeAt(0,["a", "b", "c", "d"] );

