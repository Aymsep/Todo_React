import {Link} from 'react-router-dom'
const Navbar = () => {

    return ( 
        <nav className="navbar">
            <Link to="/"><h1>first blog</h1></Link>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/create">new blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;