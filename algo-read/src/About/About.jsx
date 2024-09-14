import { Link } from "react-router-dom"; // Usar o Link para navegar entre páginas
function About() {
    return (
    <div>
        <h1>About Our Website</h1>
        <Link to="/">
            <button className="btn btn-success">Home</button>
        </Link>
    </div>
    );
  }
  
  export default About;