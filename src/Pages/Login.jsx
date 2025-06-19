import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Signin to your PopX account</h2>
      <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form onSubmit={handleLogin} className="flex flex-col w-80 space-y-4">
        <input type="email" required placeholder="Enter email address" className="border rounded px-3 py-2" />
        <input type="password" required placeholder="Enter password" className="border rounded px-3 py-2" />
        <button type="submit" className="bg-gray-400 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;