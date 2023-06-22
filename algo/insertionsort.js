function insertionsort(arr){
    let len=arr.length;
    let tmp,i,j;
    for(i=0;i<len;i++){
        tmp=arr[i];
        j = i - 1
        while (j >= 0 && arr[j]> tmp) {
           arr[j+1]=arr[j];
           j--;
        }
        arr[j+1]=tmp
    }
    return arr;
}
let ins= insertionsort([3,5,2,1,0]);
console.log(ins)