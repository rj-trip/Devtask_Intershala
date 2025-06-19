import Img from '../assets/marry.jpg';

const Account = () => (
  <div className="flex items-center justify-center bg-gray-100 py-16">
    <div className="bg-white p-6 rounded-xl shadow-md w-[80%] max-w-md">
      <h3 className="text-lg font-bold mb-6 text-center">Account Settings</h3>

      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={Img}
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
            📷
          </span>
        </div>
        <div>
          <h4 className="font-bold text-lg">Marry Doe</h4>
          <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  </div>
);

export default Account;
