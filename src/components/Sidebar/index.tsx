// React Imports
import { FunctionComponent } from "react";

// Store Imports
import { useSidebarStore } from "../../store/sidebar-store";
import { cn } from "../../utils/tailwind-cn";

interface ISidebarProps {
  className?: string;
}

/**
 * @description Sidebar Component - This component is responsible for the layout of the sidebar.
 *
 * @param className - The className for the sidebar
 *
 * @returns Sidebar Component
 */
const Sidebar: FunctionComponent<ISidebarProps> = () => {
  const { isCollapsed, toggleSidebar } = useSidebarStore();

  return (
    <aside
      className={cn(
        "flex flex-col transition-all duration-300 bg-primary text-primary-text border-r-1 border-l-gray-700",
        isCollapsed ? "w-12" : "w-64"
      )}
    >
      <button
        onClick={toggleSidebar}
        className="p-2 m-4 bg-primary text-white rounded"
      >
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      {/* Logo */}
      <div className="h-[5dvh] border-b border-gray-700">
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
