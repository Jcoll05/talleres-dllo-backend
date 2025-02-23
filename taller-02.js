//Punto 1
function findMax(numberList){
    
    let maxElement= numberList[0]
    numberList.forEach(element => {
     if(maxElement < element){
        maxElement = element;
     }
    });
    return maxElement;
}
console.log(findMax([5, -30, 1, 0, 2, 50, 6, -60]));

//punto 2
function includes(numberList, number){
    
    for (let i = 0; i < numberList.length; i++){

        if(numberList[i] === number){
            return true;
        }
    }
    return false;

}
console.log(includes([5, -30, 1, 0, 2, 50, 6, -60], -30));

//punto 3
function sum(numberList){

    let sumElement = 0;

    for(let i = 0; i < numberList.length; i++){
        sumElement = sumElement + numberList[i];
    }
    return sumElement;
}
console.log(sum([5, -30, 1, 0, 2, 50, 6, -60]));

//punto 4
function missingNumbers(numberList){
    //bubbleSort used to sort ascending, smallest to biggest.
    for (let i = 0; i < numberList.length - 1; i++) {
        for (let j = 0; j < numberList.length - 1 - i; j++) {
            if (numberList[j] > numberList[j + 1]) {
                // Swap elements
                let temp = numberList[j];
                numberList[j] = numberList[j + 1];
                numberList[j + 1] = temp;
            }
        }
    }
    sortedList = numberList; //Sorted list now holds the numberList that just got sorted.

    let missingList = [];
    let previousNumber = sortedList[0]; //Initialize the previous number with the first element.
    for(let i = 0; i < sortedList.length; i++){
      
        if(sortedList[i] != previousNumber){  //Checks the previousNumber is not equal to the element, used for first element.
            if(sortedList[i] != previousNumber + 1){ //Conditional that checks the element is not the number that follows.
                let number = previousNumber;
                do{
                    number = number + 1;
                    if(number != sortedList[i]){ 
                     missingList.push(number);
                    }
                }while(number != sortedList[i]); //Loop will add to the list until number is the same as the element being checked.
            }

        }
       previousNumber = sortedList[i];  //previousNumber gets updated with the value of the current element.
    }
    return missingList;
}
console.log(missingNumbers([5, -30, 1, 0, 2, 50, 6]))
