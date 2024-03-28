import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar fixed left-0 top-0 bg-neutral-700 text-header">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            <li><Link href="./registration">Register</Link></li>
            <li><Link href="./">Student Works</Link></li>
            <li><Link href="./">Free Teaching Materials</Link></li>
            <li><Link href="./">Installations</Link></li>
            </ul>
          </div>
          {/*<a className="btn btn-ghost text-xl">daisyUI</a>*/}

            <h1 className = "pl-5"><Link href = "./"><strong>CG</strong>-Online</Link></h1>
         </div>
         
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="./registration">Register</Link></li>
            <li><Link href="./">Student Works</Link></li>
            <li><Link href="./">Free Teaching Materials</Link></li>
            <li><Link href="./">Installations</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="">Login</a>
        </div>
      </div>
    )
}

export default Navbar;