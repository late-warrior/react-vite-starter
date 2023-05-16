import {Link} from 'react-router-dom';

export function NavBar() {
    return (
        <header className="bg-gray-900 text-white">
        <nav className="flex items-center justify-between px-4 py-2">
          <ul className="flex space-x-4">
            {/* <li><Link to="" className="text-gray-200 hover:text-gray-400">Home</Link></li>
            <li><Link to="about" className="text-gray-200 hover:text-gray-400">About</Link></li>
            <li><Link to="projects" className="text-gray-200 hover:text-gray-400">Projects</Link></li>
            <li><Link to="experience" className="text-gray-200 hover:text-gray-400">Experience</Link></li> */}

            <li><a href="/" className="text-gray-200 hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="text-gray-200 hover:text-gray-400">About</a></li>
            <li><a href="/projects" className="text-gray-200 hover:text-gray-400">Projects</a></li>
            <li><a href="/experience" className="text-gray-200 hover:text-gray-400">Experience</a></li>
          </ul>
        </nav>
        <h1 className="text-4xl font-bold text-center py-8">Ram</h1>
      </header>
    )
}