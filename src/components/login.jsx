import "../styles/login.css";

function Login() {
  return (
    <div>
      <form action="/" method="POST" id="FormularioLogin">
        <input type="number" placeholder="Número documento" />
        <input type="password" placeholder="Contraseña" />
      </form>
    </div>
  );
}

export default Login;
