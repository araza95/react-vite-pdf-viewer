// React Imports
import { FunctionComponent } from "react";

const Sidebar: FunctionComponent = () => {
  return (
    <aside className="flex flex-col w-64 bg-gray-800 text-white transition-all duration-300">
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>

      {/* Uploaded PDFs */}
      <div className="flex-1 overflow-y-auto">
        {["PDF 1", "PDF 2", "PDF 3", "PDF 4", "PDF 5"].map((pdf, index) => (
          <div key={index} className="p-4 hover:bg-gray-700 cursor-pointer">
            <p>{pdf}</p>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-200">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
