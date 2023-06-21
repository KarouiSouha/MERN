const myArr=[3,2,9,5,1,4,8]
const arrtest=[4,5,1,3,6,7,10,2,8,9]
const test=[7,7,1,2,9]
function selectionsort(arr){
    for(let i = 0; i < arr.length; i++){
        let idx = i; 
        for(let j = i+1; j < arr.length; j++){
          if(arr[j] < arr[idx]){
            idx = j; 
          }
        }
        let aux = arr[i];
        arr[i] = arr[idx];
        arr[idx] = aux;
      }
      return arr
    }
console.log(selectionsort(myArr));
console.log(selectionsort(arrtest));
console.log(selectionsort(test));