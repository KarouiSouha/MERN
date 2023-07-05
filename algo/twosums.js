function twosum(arr,v){
var list=[];
for (var i=0;i<arr.length;i++){ 
    var test=false;
     for(var j=0;j<arr.length;j++){
        if(i!=j){
            if((arr[i]+arr[j])==v){
             list.push(i,j)
             test=true;
             break
            }
        }
        }
        if(test){
                break
            }
} 
return list
}
console.log(twosum([2,11,7,15],9))
console.log(twosum([3,2,4],6))
