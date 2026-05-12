import { useState } from "react";

import AwesomeComponent from "./AwesomeComponent";
import TravelApp5 from "./TravelApp5";
import TravelApp6 from "./TravelApp6";

function App() {

  const [selectedApp, setSelectedApp] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">

      {/* POPUP */}
      {selectedApp === "" && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">

          <div className="bg-white text-black p-8 rounded-2xl flex flex-col gap-4 w-[300px]">

            <h1 className="text-2xl font-bold text-center">
              Select App
            </h1>

            <button
              onClick={() => setSelectedApp("1")}
              className="bg-blue-500 text-white py-2 rounded-xl"
            >
              1 - AwesomeComponent
            </button>

            <button
              onClick={() => setSelectedApp("2")}
              className="bg-green-500 text-white py-2 rounded-xl"
            >
              2 - TravelApp5
            </button>

            <button
              onClick={() => setSelectedApp("3")}
              className="bg-red-500 text-white py-2 rounded-xl"
            >
              3 - TravelApp6
            </button>

          </div>

        </div>

      )}

      {/* COMPONENTS */}
      {selectedApp === "1" && <AwesomeComponent />}

      {selectedApp === "2" && <TravelApp5 />}

      {selectedApp === "3" && <TravelApp6 />}

    </div>
  );
}

export default App;