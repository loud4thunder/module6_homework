function getCountOfNums() {
    let arr = [22, 3, 11, 123, 558, 665, 567, 44532, 554, 'd', null, 'e'];
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    console.log("Чётных " + countEven);
    console.log("Нечётных " + countOdd);
    console.log("Других " + countOther);
}

getCountOfNums();
