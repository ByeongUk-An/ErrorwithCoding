import React from "react";
import { UserProvider } from "./context/UserContext";
import Print from "./context/Print";
import File1 from "./ucontext/ucon1";
import Redu from "./usereduser/Redu";
import Callbacks from "./useCallback/Callbacks";
function App() {
  // const user = { name: "end", age: 2 };
  return (
    // <UserProvider value={user}>
    //   <Print />
    // </UserProvider>
    // <File1 />
    // <Redu />
    <Callbacks />
  );
}

export default App;
