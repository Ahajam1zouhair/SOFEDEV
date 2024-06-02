/* eslint-disable react/prop-types */
// src/components/UserManagement.jsx

// eslint-disable-next-line react/prop-types
const UserManagement = ({ data }) => {
  return (
    <div className="container mx-auto my-8  rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-ms md:text-3xl font-bold text-blue-700 mb-4 md:mb-0">
          User Management
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 text-left text-xs md:text-sm">#</th>
              <th className="py-3 px-4 text-left text-xs md:text-sm">Name</th>
              <th className="py-3 px-4 text-left text-xs md:text-sm">email</th>
              <th className="py-3 px-4 text-left text-xs md:text-sm">
                Date Created
              </th>
              <th className="py-3 px-4 text-left text-xs md:text-sm">Role</th>
              <th className="py-3 px-4 text-left text-xs md:text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="text-center text-xs md:text-sm">{index + 1}</td>
                <td className="py-3 px-4 flex items-center text-xs md:text-sm">
                  <img
                    src={user.image_profile.url}
                    alt={user.name}
                    className="w-6 h-6 md:w-10 md:h-10  rounded-full mr-3 shadow-md"
                  />
                  {user.name}
                </td>
                <td className="py-3 px-4 text-xs md:text-sm">
                  {user.email}
                </td>
                <td className="py-3 px-4 text-xs md:text-sm">
                  {user.createdAt}
                </td>
                <td className="py-3 px-4 text-xs md:text-sm">
                  {user.isAdmin ? <span>admin</span> : <span>user</span>}
                </td>
                {/* <td className="py-3 px-4">
                  <span
                    className={`py-1 px-3 rounded-full text-white ${
                      user.status === "Active"
                        ? "bg-green-500"
                        : user.status === "Suspended"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td> */}
                <td className="py-3 px-4 flex space-x-2 justify-center">
                  <button className="bg-red-600 text-white p-2 rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition duration-200">
            Previous
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200">
            1
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200">
            2
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200">
            3
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition duration-200">
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default UserManagement;
