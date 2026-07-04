

const Favourit = () => {
    return (
        <div className='parent-section w-3/12  border'>
            <div className='child '>
                <div className="flex place-content-center px-10 py-5">
                    <span>
                        icon
                    </span>
                    <h4 className="Favorite flex place-content-center">Favorite Items</h4>
                </div>
                <hr className="w-10/12 mx-auto" />
                {/* condition render is here  */}
                <div className="px-10 py-5 mb-4 text-center ">
                    <h4 className="">No item is selected</h4>
                    <p>Add to click heart</p>
                </div>
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