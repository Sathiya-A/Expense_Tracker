import profile from '../images/profile.png'
export default function Header(){
    return(
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Expense Tracker</a>
    <form className="d-flex">
     
       <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={profile} alt="" width="50" height="50"></img>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Sign out</a></li>
          
          </ul>
        </li>

    </form>
  </div>
</nav>
    )
}