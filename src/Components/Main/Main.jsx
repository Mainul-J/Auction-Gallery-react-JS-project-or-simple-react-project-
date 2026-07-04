import { useEffect, useState } from "react";
import Favourit from "./Favorites/Favourit";
import Table from "./Table/Table";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [favorite,setFavorite] = useState([]);
    useEffect(()=>{
            fetch('/auction.json')
                .then(res=>res.json())
                .then(data=>setProducts(data))
    },[]);

    const handelAdd = (products) =>{
        console.log(products);
        const exiting = favorite.find((item)=>item.id === products.id)
        if(exiting) {
            return exiting
        }
        setFavorite([...favorite,products])
    }

    console.log(favorite);
    // console.log(products);
    return (
        <section className="main  mt-16 py-10">
            <h2 className="text-2xl text-gray-600 w-10/12 mx-auto">Active Auctions</h2>
            <p className="text-gray-500 py-3 w-10/12 mx-auto">Discover and bid on extraordinary items</p>
            {/* table start */}
            <div className="flex w-10/12 mx-auto justify-between">
                <Table 
                products={products}
                handelAdd={handelAdd}
                favorite={favorite}
                ></Table>
                <Favourit></Favourit>
            </div>
        </section>
    );
};

export default Main;