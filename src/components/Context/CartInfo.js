import React from "react";
const items=React.createContext(
    {
        id:[],
        Amount:0,
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }
);
export default items;