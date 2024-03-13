import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { name, photo, price, credit } = course;

  return (
    <div className="card bg-base-100 shadow-lg border-2 border-gray-300">
      <figure>
        <img className="w-full h-full" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : {price}</p>
        <p>Credit : {credit}</p>
        <div className="card-actions mt-6 justify-end">
          <button className="bg-gray-200 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
};

export default Course;
