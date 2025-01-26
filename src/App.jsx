import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      <div className="p-4">
        {/* Display the measured width */}
        <p className="text-xl mb-4">
          The width of the box is: <strong>{width}px</strong>
        </p>

        {/* Target div */}
        <div
          ref={divRef}
          className="bg-blue-500 text-white text-center py-8 rounded-md shadow-md"
        >
          Resize the window to see the initial width of this box!
        </div>
      </div>
    </>
  );
}

export default App;
