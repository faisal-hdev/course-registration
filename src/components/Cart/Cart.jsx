import PropTypes from "prop-types";
import { totalCredit } from "../../App";

const Cart = ({ carts }) => {
  // console.log(carts);
  const credits = carts.reduce((p, c) => p + c.credit, 0);
  return (
    <div className="w-full h-full md:w-[25%] py-10 px-4 border-2 shadow-lg rounded-2xl">
      <h1 className="text-xl border-b-2 border-gray-200 pb-3">
        Credit Hour Remaining : {totalCredit - credits}
      </h1>
      <h1 className="text-xl mt-4 mb-2">Course Name</h1>
      <div className="border-b-2 pb-3 border-gray-200">
        <ul className="list-decimal pl-6">
          {carts.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </div>
      <h3 className="mt-4 text-xl border-b-2 pb-5 border-gray-200">
        Total Credit hour : {credits}
      </h3>
      <h3 className="mt-4 text-xl">
        Total Price : {carts.reduce((p, c) => p + c.price, 0)} USD
      </h3>
    </div>
  );
};

Cart.propTypes = {
  carts: PropTypes.array,
};

export default Cart;
