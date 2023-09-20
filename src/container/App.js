import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseApp from "../components/firebaseConfig";

//COMPONENTES
import Navbar from '../components/navBar';
import Footer from '../components/footer';

//PAGINAS
import Login from '../pages/login';
import Registro from '../pages/register';
import Home from '../pages/home';

import 'bootstrap/dist/css/bootstrap.min.css';


function PrivateRoute({ element, user, handleSignOut }) {
  if (!user) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, renderiza el elemento proporcionado
  return element;
}

function App() {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Después de cerrar sesión, puedes redirigir al usuario a la página de inicio o hacer otras acciones
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
      <Router>
        {/* Pasa las propiedades user y handleSignOut directamente al componente Navbar */}
        <Navbar user={user} onSignOut={handleSignOut} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          {/* Usa PrivateRoute para proteger la ruta */}
          <Route
            path="/home"
            element={<PrivateRoute element={<Home />} user={user} handleSignOut={handleSignOut} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;
