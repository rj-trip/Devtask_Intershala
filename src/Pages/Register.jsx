import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create your PopX account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {['Full Name', 'Phone number', 'Email address', 'Password', 'Company name'].map(label => (
            <input
              key={label}
              required
              placeholder={label}
              className="border rounded px-3 py-2 w-full"
            />
          ))}
          <p className="text-sm">Are you an Agency?*</p>
          <div className="flex items-center gap-4">
            <label><input type="radio" name="agency" value="yes" className="mr-1" /> Yes</label>
            <label><input type="radio" name="agency" value="no" className="mr-1" /> No</label>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
