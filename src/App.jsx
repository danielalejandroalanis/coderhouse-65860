import React from "react";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isAdmin = false;
  return isAdmin ? (
    <AdminLayout>
      <div style={{ color: "white" }}>
        Este es el layout del administrador admin
      </div>
    </AdminLayout>
  ) : (
    <MainLayout>
      <ItemListContainerComponent greeting="Bienvenidos a mi e-commerce!" />
    </MainLayout>
  );
}

export default App;
