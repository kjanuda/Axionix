import React from "react";
import Header from "./Pages/Home/Header";   // ✅ correct path
import AppRoute from "./routes/AppRoutes";   // ✅ make sure this file exists

const App = () => {
  return (
    <div>
    
      <main className="p-0">
        <AppRoute />
      </main>
    </div>
  );
};

export default App;
