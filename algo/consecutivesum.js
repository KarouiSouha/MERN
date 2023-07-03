function consecutivesum(arr,v){
  let list=[]
for(var i=0;i<arr.length;i++){ 
    let sum=0;
    let sumlist=[]
    for(var j=i;j<arr.length;j++){
        sum+=arr[j]; 
        sumlist.push(arr[j])
        if (sum==v){

          list.push(sumlist)
          if(arr[j+1]==0 ){
            sumlist.push(arr[j+1])
            list.push(sumlist)
        }
          sumlist=[]
          break
        }    }
}
    return list

}
console.log(consecutivesum([2,5,3,6,7,0,0,23,11],16))
