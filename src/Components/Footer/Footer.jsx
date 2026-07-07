

const Footer = () => {
    return (
        <section className="mt-14 bg-white">
            <div className="w-10/12 mx-auto flex flex-col justify-center items-center py-10 gap-y-5">
                <div>
                <h1 className="text-xl font-medium">Auction<span className="text-amber-400">Gallery</span></h1>
            </div>
            <div>
                <ul className="flex gap-5">
                <li>Bid.</li>
                <li>Win.</li>
                <li>Own.</li>
            </ul>
            </div>

           <div>
             <ul className="flex gap-5">
                <li>Home</li>
                <li>Auction</li>
                <li>Category</li>
                <li>How to works</li>
            </ul>
           </div>
            <p>&copy; AuctionHub 2025. All rights reserved.</p>
            </div>
            
        </section>

        
    );
};

export default Footer;