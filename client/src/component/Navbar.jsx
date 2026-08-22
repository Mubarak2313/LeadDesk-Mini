import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav className="flex justify-between items-center px-10 py-5 bg-blue-600 text-white">
          <h1 className="text-2xl font-bold ">
            LeadDesk Mini
          </h1>
          <div className="space-x-6">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/admin">Admin</Link>
    
          </div>
        </nav>
    )
}
export default Navbar;