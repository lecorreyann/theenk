import { Link } from "@remix-run/react";



export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li className="py-1 px-6"><Link to="/" className="text-sm text-gray-600 hover:text-gray-800">Services</Link></li>
        <li className="py-1 px-6"><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-800">Use cases</Link></li>
        <li className="py-1 px-6"><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-800">About</Link></li>
        <li className="py-1 px-6"><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-800">Contact</Link></li>
      </ul>
    </nav>
  );
}
