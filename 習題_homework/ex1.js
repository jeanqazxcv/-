
function findMinMax(array){
    let min = array[0], max = array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]<min){
            min = array[i];
        }else if (array[i]>max){
            max = array[i];
        }
    }
    return{min: min, max: max};
}
findMinMax([1,2,3,4,5])