import React from "react";

const Hello=()=>{
//     return(
//         <div>
//     <h1>Hello devs</h1>
//     </div>
//     )
return React.createElement('div',{id:'hello'},
React.createElement('h1',null,'Hello manoj') )
}

export default Hello