import { useEffect, useState } from "react";
import Favourit from "./Favorites/Favourit";
import Table from "./Table/Table";
import { ToastContainer, toast } from 'react-toastify';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [favorite,setFavorite] = useState([]);
    useEffect(()=>{
            fetch('/auction.json')
                .then(res=>res.json())
                .then(data=>setProducts(data))
    },[]);

    const handelAdd = (products) =>{
        // console.log(products);
        const exiting = favorite.find((item)=>item.id === products.id)
        if(exiting) {
            return exiting
        }
        toast.success(`${products.title} add to favorite`)
        setFavorite([...favorite,products])
    }
    const removeItems  = (items) =>{
        const removeItem = favorite.find((product)=>(product.id === items.id))
    const remaining = favorite.filter((product)=>(product.id !== items.id))

    toast.error(`${removeItem.title}remove item `)
setFavorite(remaining)
}

    // console.log(favorite);
    // console.log(products);
    return (
        <section className="main  mt-16 py-10">
            <h2 className="text-2xl text-gray-600 w-10/12 mx-auto">Active Auctions</h2>
            <p className="text-gray-500 py-3 w-10/12 mx-auto">Discover and bid on extraordinary items</p>
            {/* table start */}
            <div className="flex w-10/12 mx-auto justify-between items-start">
                <Table 
                products={products}
                handelAdd={handelAdd}
                favorite={favorite}
                ></Table>
                <ToastContainer></ToastContainer>
                <Favourit favorite={favorite}
                removeItems={removeItems}
                ></Favourit>
            </div>
        </section>
    );
};

export default Main;