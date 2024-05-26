import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="p-16">
      <h1 className="text-2xl font-bold mb-8 text-center">Profile</h1>
      <div className="p-8 bg-white shadow">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <Link to="/updateprofile" className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Update Profile
            </Link>
            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Delete Profile
            </button>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <div className="mt-4">
            <span className="text-gray-700 font-bold">Name:</span>
            <span className="text-gray-500"> </span>  
          </div>        
          <div className="mt-4">
            <span className="text-gray-700 font-bold">Email:</span>
            <span className="text-gray-500"> </span>  
          </div>        
        </div>
      </div>
    </div>
  );
};

export default Profile;
