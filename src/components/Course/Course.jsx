import PropTypes from "prop-types";
import { CgDollar } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa6";
import { AiFillForward } from "react-icons/ai";

const Course = ({ course, handleCourseSelection }) => {
  const { name, photo, price, credit, description } = course;

  return (
    <div className="card bg-base-100 shadow-lg border-2 border-gray-300">
      <figure>
        <img className="w-full h-full" src={photo} alt="Shoes" />
      </figure>
      <div className="p-5 ">
        <h2 className="font-semibold text-xl">{name}</h2>
        <p className="mt-3">{description}</p>
        <div className="flex justify-between mt-6">
          <p className="flex items-center gap-1 font-medium">
            <CgDollar />
            Price : {price}
          </p>
          <p className="flex items-center gap-1 font-medium">
            <FaRegBookmark />
            Credit : {credit}
          </p>
        </div>
        <div className="card-actions mt-8 flex justify-end ">
          <button
            onClick={() => handleCourseSelection(course)}
            className="bg-blue-400 uppercase text-white w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg font-medium hover:bg-blue-500 duration-200"
          >
            select <AiFillForward />
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleCourseSelection: PropTypes.func,
};

export default Course;
