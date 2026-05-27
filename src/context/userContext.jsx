// Global context providing authenticated user session data across the component tree.
import { createContext, useState } from "react";

// Context instance representing the currently authenticated user.
export const AuthContext = createContext(null);

export default function Context({ children }) {
  // Track the Firebase user object for all route and UI decisions.
  const [User, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ User, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
