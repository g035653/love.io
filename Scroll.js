import React from "react";

const scroll = (Props)  => {
return (
 <div style={{overflowY: 'scroll', border :'1px solid black', height: '800px'}}>
     {Props.children}
 </div>
);
};

export default scroll;