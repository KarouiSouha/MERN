function diagonale(arr){
var sum1=0;
var sum2=0;
var result=0;
    for(var i=0;i<arr.length-1;i++){
       sum1+=arr[i][i]
    //    console.log(sum1)
       sum2+=arr[i][arr.length-1-i]
       result=sum1-sum2;
    }
return Math.abs(result)
}
console.log(diagonale([[1,2,3],[4,5,6],[9,8,9]]))