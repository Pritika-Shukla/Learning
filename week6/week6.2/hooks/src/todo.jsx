//useMemo

import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
const [value,setValue] = useState("");
let sum=0;
  function increment() {
    for(let i=0; i<=value; i++)
        sum=i+sum;
  setCount(sum);
}
  return (
    <div>
      <input
        type="text" 
        placeholder="input"
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />

      <button onClick={increment}>Calculate Sum</button>
      <h4>{count}</h4>
    </div>
  );
};

export default Count;


//using useMemo
// import React, { useState, useMemo } from "react";

                                                                                                                           // const Count = () => {
//   const [value, setValue] = useState(0);


//   // Memoized sum calculation
//   const sum = useMemo(() => {
//     let total = 0;
//     for (let i = 0; i <= value; i++) {
//       total += i;
//     }
//     return total;
//   }, [value]); // Dependency on `value`

//   return (
//     <div>
//       <input
//         type="number" 
//         placeholder="input"
//         onChange={(e) => {
//           setValue(Number(e.target.value));
//         }}
//       />
//       <h4>Sum: {sum}</h4>
//     </div>
//   );
// };

// export default Count;

//usecallback

