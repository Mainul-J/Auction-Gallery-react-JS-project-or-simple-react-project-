import React from 'react';

const Table = () => {
    return (
        <div>
       <div className="overflow-x-auto rounded-xl border border-base-300 shadow-lg">
  <table className="table table-zebra">
    <thead className="bg-base-200">
      <tr>
        <th className="border-b border-base-300">items</th>
        <th className="border-b border-base-300">Current Bid</th>
        <th className="border-b border-base-300">Time Left</th>
        <th className="border-b border-base-300">Bid Now</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td><div className='flex items-center gap-4'>
          <span>
            <img src="" alt="not found" />
          </span>
          <h3>title</h3>
          </div></td>
        <td>$1200</td>
        <td>2 days</td>
        <td><button className='btn'>
          btn</button></td>
      </tr>

      <tr>
        <th>2</th>
        <td>Classic Watch</td>
        <td>Accessories</td>
        <td>$450</td>
      </tr>

      <tr>
        <th>3</th>
        <td>Antique Vase</td>
        <td>Home Decor</td>
        <td>$230</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Table;