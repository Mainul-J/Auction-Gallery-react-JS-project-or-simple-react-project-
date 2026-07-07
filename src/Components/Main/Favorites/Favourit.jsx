import { CiHeart } from "react-icons/ci";

const Favourit = ({favorite,removeItems}) => {

    const totalPrice = favorite.reduce((total,item)=>{
        return total+item.currentBidPrice
    },0)

    console.log(favorite);
    return (
        <div className='parent-section w-3/12  shadow-lg rounded-3xl bg-white'>
            <div className='child '>
                <div className="flex items-center justify-center px-10 py-5 font-bold text-xl">
                    <span>
                        <CiHeart size={25}/>
                    </span>
                    <h4 className="Favorite flex place-content-center">Favorite Items</h4>
                </div>
                <hr className="w-10/12 mx-auto py-2" />
                {/* condition render is here  */}

                    {
                        favorite.length === 0 ? (
                            <div className="px-10 py-5 mb-4 text-center  min-h-24 font-semibold text-xl">
                    <h4 className="">No item is selected</h4>
                    <p>Add to click heart</p>
                </div>
                        ) : (
                            
                            <div className="">
                                <table className="table w-10/12 mx-auto ">
                                <tbody className="">
                                    {
                                        favorite.map((item,index)=> (<tr key={index}>
                                            <td>
                                                <div className="flex justify-between space-x-3 items-center ">
                                                    {/* img */}
                                                    <div>
                                                        <img src={item.image}  alt="" className="h-16 w-16 p-2" />
                                                    </div>
                                                    {/* text-div */}
                                                    <div className="text-start">
                                                        <h3 className="">{item.title.slice(0,20)}</h3>
                                                        <p>${item.currentBidPrice}</p>
                                                        <p>Bids Count{item.bidsCount}</p>
                                                    </div>
                                                    {/* btn */}
                                                    <div>
                                                        <button onClick={()=>{
                                                            removeItems(item)
                                                        }}
                                                        className="text-red-600 btn btn-ghost">
                                                            X
                                                        </button>
                                                    </div>
                                                </div>
                                                

                                            </td>
                                        </tr>)
                                    )

                                    }
                                    
                                </tbody>
                            </table>
                            </div>
                            
                        )
                    }

                {/* <div className="px-10 py-5 mb-4 text-center ">
                    <h4 className="">No item is selected</h4>
                    <p>Add to click heart</p>
                </div> */}
                <hr className="w-10/12 mx-auto" />
                <div className="px-10 py-5 flex justify-between items-center text-xl font-bold">
                    <h4>Total price</h4>
                    <p>${totalPrice}</p>
                    </div>
            </div>
        </div>
    );
};

export default Favourit;