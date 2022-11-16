import React from 'react'
import { useAuth } from "../../hooks";

export  function Home() {
  const { logout } = useAuth();
  return (
    <div>
        <p>Estamos en la Home..</p>
        <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}
