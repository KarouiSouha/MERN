var arr1=[1,3,3,8,10];
var arr2=[1,3,3,5,8,10,10,10];
function merge(arr1, arr2){
    let arr = arr1.concat(arr2);
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    var test;
    do{
        test = false;
    for(let i=0;i<uniqueArr.length-1;i++){
        if (uniqueArr[i]>uniqueArr[i+1]){
            let aux=uniqueArr[i];
            uniqueArr[i]=uniqueArr[i+1];
            uniqueArr[i+1]=aux;
            test = true;
        }
    }
    } while(test);
    console.log(uniqueArr)
}
merge([1,3,3,8,10],[1,3,3,5,8,10,10,10]);
