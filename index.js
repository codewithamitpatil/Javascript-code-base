
// every if all test is true with array
// some if atleast one element pass test


const p = (data) => {
    console.log(data);
    //console.table(data)
};

const Duplicate =(arr)=>{
   let res = [];
   let temp = arr.filter((item)=>{
       res.filter((elm)=>{
         if(item == elm){
             res.push(item);
           }
      });
   });

};

const Duplicate =(arr)=>{
   return arr.filter((item,pos)=>{
      return arr.indexOf(item) == pos;
   })
};

const Duplicate =(arr)=>{

   return arr.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
  });

};


const Duplicate =(arr)=>{
   let res = [];
   let count = 0;
   let j =0;
   for(let i=0;i<arr.length;i++){
   for( j=0;j<count;j++){
      if(arr[i] == res[j]){
         break;
      }
   }

      if(count == j){
         res[count]=arr[i];
         count++;
      }
   }
   
   return res;

};

//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
// Examples
const setA = new Set([1, 2, 3, 4])
const setB = new Set([4,3,5,7,8,8])
const setC = new Set([3, 4, 5, 6])

const set_a = [1,2,2,2,3,4,5,5,'a','a'];
const set_b = [1,2,3,8,9];

p(Duplicate(set_a));