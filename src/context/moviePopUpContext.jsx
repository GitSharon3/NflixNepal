// Context for managing the visibility state of the global movie details popup modal.
import { createContext, useState } from "react";

// Context instance shared across the application to toggle and read popup visibility.
export const PopUpContext = createContext(null);

export default function MoviePopUpProvider({ children }) {
  // Keep modal visibility global so any movie card can open the shared popup.
  const [showModal, setShowModal] = useState(false);

  return (
    <PopUpContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </PopUpContext.Provider>
  );
}
