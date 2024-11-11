import { useState } from "react";


export const ItemCount = ({valorInicial=1, stock, onAdd})=>
    {
        const [count, setCount]=useState(valorInicial);

        const decrementar = ()=>{

            if(count>1){
                setCount(count-1)
            };
        };

        const Incrementar = ()=>{
            if(count<stock)
                {
                    setCount(count + 1);
                };
        };

        return(
           <div className="buttonContainer">
            <button className="buttonDetail" onClick={decrementar}>Decrementar</button>
            <b>Cantidad:  {count}</b>
            <button className="buttonDetail" onClick={Incrementar}>Incrementar</button>
            <button className="buttonDetail" onClick={()=>onAdd(count)}>Agregar al carrito</button>
            
            
            </div>
        )

    }