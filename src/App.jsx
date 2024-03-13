import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="container mx-auto max-sm:px-4">
          <div className="flex flex-col md:flex-row gap-6 my-10 md:my-16">
            <div className="w-full md:w-[70%] ">
              <Courses />
            </div>
            <div className="bg-green-200 w-full md:w-[30%] p-4">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
