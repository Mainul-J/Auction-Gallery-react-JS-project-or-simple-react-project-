import { CiHeart } from "react-icons/ci";

const Favourit = ({favorite}) => {
    console.log(favorite);
    return (
        <div className='parent-section w-3/12  min-h-24  shadow-md'>
            <div className='child '>
                <div className="flex items-center justify-center px-10 py-5">
                    <span>
                        <CiHeart size={25}/>
                    </span>
                    <h4 className="Favorite flex place-content-center">Favorite Items</h4>
                </div>
                <hr className="w-10/12 mx-auto py-2" />
                {/* condition render is here  */}

                    {
                        favorite.length === 0 ? (
                            <div className="px-10 py-5 mb-4 text-center  ">
                    <h4 className="">No item is selected</h4>
                    <p>Add to click heart</p>
                </div>
                        ) : (
                            
                            <div>
                                <table className="table ">
                                <tbody className="">
                                    {
                                        favorite.map((item,index)=> (<tr key={index}>
                                            <td>
                                                <div className="flex justify-between space-x-3">
                                                    {/* img */}
                                                    <div>
                                                        <img src={item.image}  alt="" className="h-16 w-16 p-2" />
                                                    </div>
                                                    {/* text-div */}
                                                    <div className="text-start">
                                                        <h3 className="">{item.title}</h3>
                                                        <p>{item.currentBidPrice}</p>
                                                        <p>{item.bidsCount}</p>
                                                    </div>
                                                    {/* btn */}
                                                    <div>
                                                        <button>
                                                            btn
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
                <div className="px-10 py-5 flex justify-between">
                    <h4>total price</h4>
                    <p>0</p>
                    </div>
            </div>
        </div>
    );
};

export default Favourit;