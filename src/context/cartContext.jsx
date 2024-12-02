import {useState, createContext} from "react"

export const cartContext = createContext()


export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([]);

    const IsInCart = (id)=>{
        return cart.some(prod => prod.id === id)
    };

    const addItem = (productToAdd)=>{
        if(!IsInCart(productToAdd.id))
            {setCart((prev) => [...prev, productToAdd])}
        else {
            console.log("el producto ya esat en el carrito")
        }
    };

    const removeItem = (id)=>
        {
            const cartUpdated = cart.filter(prod=> prod.id !== id )
            setCart(cartUpdated)
        };

    const clearCart = ()=>{
        setCart([])
    };

    const getTotal = ()=>
        {
            let accu = 0;
            cart.forEach((item)=>
                {
                    accu += item.quantity * item.price
                });
                return accu
        };

    const getTotalQantity = ()=>
        {
            let accu = 0;
            cart.forEach(product=>{
                accu += product.quantity
            });
            return accu
        };

    
    const totalQuantity = getTotalQantity()


        const obj = {

            cart,
            IsInCart,
            addItem,
            removeItem,
            clearCart,
            totalQuantity,
            getTotal


        };
        return (

            <cartContext.Provider  value = {obj}>
                {children }
            </cartContext.Provider>
        )

}