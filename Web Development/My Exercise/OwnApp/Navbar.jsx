
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex bg-gray-600">
      
        <Link to="/" className='m-3 text-white text-3xl'>Home</Link>
        <Link to="/" className='m-3 text-white text-3xl'>Link</Link>
        <h1 className='text-gray-800 m-3 text-3xl'>Disable</h1>      
    </div>
  );
}

