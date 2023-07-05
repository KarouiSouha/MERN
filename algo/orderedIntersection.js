function orderedIntersection(sortedA,sortedB){
    let list=[];
for (var i=0;i<sortedA.length;i++){
    for(var j=0;j<sortedB.length;j++){
        if (sortedA[i]==sortedB[j]){
            if(list[list.length-1]!==sortedA[i]){
              list.push(sortedA[i])
          }

        }
    }
}
return list;
}
console.log(orderedIntersection([0,1,2,2,2,7],[2,2,6,6,7]))
console.log(orderedIntersection([0,1,2,2,2,7],[2,2]))
console.log(orderedIntersection([0,1,2,2,2,7],[10]))
