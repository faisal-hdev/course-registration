// import { useState, useSyncExternalStore } from "react";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const totalCredit = 15;

function App() {
  const [carts, setCarts] = useState([]);

  const handleCourseSelection = (course) => {
    const credits = carts.reduce((p, c) => p + c.credit, 0);

    if (credits + course.credit > totalCredit) {
      return toast.error(`Only ${totalCredit} credits allowed`);
    }

    const allReadyExist = carts.find((c) => c.id == course.id);
    if (allReadyExist) {
      return toast.warning("Course already selected!");
    } else {
      const newCourseItem = [...carts, course];
      setCarts(newCourseItem);
      toast.success("Course added!");
    }
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="container mx-auto max-sm:px-4 flex flex-col md:flex-row gap-6 my-10 md:my-16">
          <Courses handleCourseSelection={handleCourseSelection} />
          <Cart carts={carts} />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
