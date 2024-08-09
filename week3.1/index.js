//map,filter,arrow functtions

const inp=[1,2, 3,4,8,6,7];
// let newArr=[];
// for(let i=0;i<inp.length; i++) {
// newArr.push(inp[i]*2)
// }
// console.log(newArr)



// const ans=inp.map(function (i){
//     return i*2;
// })
// console.log(ans);

 const newArr=[1,2,3,4,5,8]
// const ans=[]
// for(let i=0;i<newArr.length;i++){
//     if(newArr[i]%2==0){
//         ans.push(newArr[i])
//     }
// }
// console.log(ans);

const ans=newArr.filter(function(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
})

console.log(ans)