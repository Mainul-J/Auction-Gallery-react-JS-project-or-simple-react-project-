import './banner.css'

const Banner = () => {
    return (
        <div className='back '>
            <div
  className="relative"
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content">
    <div className="max-w-md -scale-x-100 absolute right-44 top-24">
      <h1 className="mb-5 text-5xl font-bold   ">Bid on Unique Items from <br /> Around the world</h1>
      <p className="mb-5">
        Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auction
      </p>
      <button className="btn px-10 rounded-4xl text-xl">Explore Auction</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;