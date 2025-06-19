import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="flex items-center justify-center py-24 bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to PopX</h1>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      
      <div className="space-y-4">
        <Link
          to="/register"
          className="block w-full bg-purple-600 text-white px-6 py-2 rounded text-center"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="block w-full bg-purple-300 text-black px-6 py-2 rounded text-center"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  </div>
);

export default Welcome;
