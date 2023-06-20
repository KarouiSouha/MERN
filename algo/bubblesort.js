const num1=[5,3,4,2,1];
const num2=[9,2,5,6,4,3,7,10,1,8]
function bubblesort(num){
    var test;
    do{
        test = false;
    for(let i=0;i<num.length-1;i++){
        if (num[i]>num[i+1]){
            let aux=num[i];
            num[i]=num[i+1];
            num[i+1]=aux;
            test = true;
        }
    }
} while(test);
}
console.log(num2);
bubblesort(num2)
console.log(num2);