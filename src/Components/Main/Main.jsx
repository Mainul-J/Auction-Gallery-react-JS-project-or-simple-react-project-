import Table from "./Table/Table";

const Main = () => {
    return (
        <section className="main w-10/12 mx-auto mt-16 py-10">
            <h2 className="text-2xl text-gray-600">Active Auctions</h2>
            <p className="text-gray-500 py-3">Discover and bid on extraordinary items</p>
            {/* table start */}
            <div>
                <Table></Table>
            </div>
        </section>
    );
};

export default Main;