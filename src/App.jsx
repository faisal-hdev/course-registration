import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="container mx-auto max-sm:px-4 flex flex-col md:flex-row gap-6 my-10 md:my-16">
          <Courses />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
