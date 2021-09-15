
// every if all test is true with array
// some if atleast one element pass test


const p = (data) => {
    console.log(data);
    //console.table(data)
};

const IsSuperSet = (setA,setB) => {

     for(let item of setB){
        if(!setA.has(item)){
          return false;
        }
     }
     return true;
};

const isSuperSet = (setA,setB) => {

     for(let item of setB){
        if(!setA.includes(item)){
          return false;
        }
     }
     return true;
};


const InterSection = (setA,setB) => {

   let temp = new Set();

   for(let item of setA){
      if(setB.has(item)){
            temp.add(item);
      }
   }
 
  return temp;

};

const interSection = (setA,setB) => {

   let temp = [];

   for(let item of setA){
      if(setB.includes(item)){
         temp.push(item);
      }
   }
 
  return temp;

};

const symmetricDifference = (setA,setB) => {

   let temp = [];

   for(let item of setA){
      if(!setB.includes(item)){
         temp.push(item);
      }
   }
   for(let item of setB){
         if(!setA.includes(item)){
            temp.push(item);
         }
   }
 
  return temp;

};

const SymmetricDifference = (setA,setB) => {

   let temp = new Set();

   for(let item of setA){
      if(!setB.has(item)){
         temp.add(item);
      }
   }
   for(let item of setB){
         if(!setA.has(item)){
            temp.add(item);
         }
   }
 
  return temp;

};

const Union = (setA,setB) => {

   let temp = new Set([...setA ,...setB]);
   return temp;

};

const union = (setA,setB) => {

   let temp = new Set([...setA ,...setB]);
   return Array.from(temp);

};

const Difference = (setA,setB) => {
   let temp = new Set();
   for(let item of setA){
      if(!setB.has(item)){
          temp.add(item);
      }
   }

   return temp;
};

const difference = (setA,setB) => {
   
   let temp =[];
   
   for(let item of setA){
      if(!setB.includes(item)){
          temp.push(item);
      }
   }

   return temp;
};
// Examples
const setA = new Set([1, 2, 3, 4])
const setB = new Set([4,3,5,7,8,8])
const setC = new Set([3, 4, 5, 6])

const set_a = [1,2,3,4,5];
const set_b = [1,2,3,8,9];

p(Difference(setB,setA));
p(difference(set_a,set_b));
p(Union(setA, setC))  
p(union(set_a,set_b));
p(symmetricDifference(set_a,set_b));
p(SymmetricDifference(setA,setB));
p(InterSection(setA,setB));
p(interSection(set_a,set_b));
p(IsSuperSet(setA,setB)); // set
p(isSuperSet(set_a,set_b));// arr

