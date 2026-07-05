
    // "id": 1,
    // "title": "Vintage Rolex Submariner",
    // "description": "Classic stainless steel dive watch in excellent condition.",
    // "currentBidPrice": 8500,
    // "timeLeft": "2d 5h",
    // "bidsCount": 24,
    // "image": "https://ibb.co.com/5znMqsP"
import { FaHeart } from "react-icons/fa6";
// import { LuHeart } from "react-icons/lu";


const Table = ({products ,handelAdd, favorite}) => {

  // console.log(products);

  // const {id,title,currentBid} = products

    return (
        <div className='w-7/12'>
       <div className="overflow-x-auto rounded-xl border border-base-300 shadow-lg">
  <table className="table table-zebra" >
    <thead className="bg-base-200">
      <tr>
        <th className="border-b border-base-300">items</th>
        <th className="border-b border-base-300">Current Bid</th>
        <th className="border-b border-base-300">Time Left</th>
        <th className="border-b border-base-300">Bid Now</th>
      </tr>
    </thead>

              <tbody>
            {products.map((item) => {
              const isFavorite = favorite.find(f => f.id === item.id);

              return (
                <tr key={item.id}>
                  <td>
                    <div className='flex items-center gap-4'>
                      <img
                        src={item.image}
                        alt="not found"
                        className="h-16 w-16 object-contain"
                      />
                      <h3>{item.title}</h3>
                    </div>
                  </td>

                  <td>{item.currentBidPrice}</td>
                  <td>{item.timeLeft}</td>

                  <td>
                    <button onClick={() => handelAdd(item)}
                      disabled={isFavorite}
                      className={`text-4xl  ${isFavorite? 'text-red-700': ' text-blue-400'}`}
                      >
                      <FaHeart/>
                    </button>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
  </table>
</div>
        </div>
    );
};

export default Table;