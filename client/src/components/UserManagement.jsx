// src/components/UserManagement.jsx

const users = [
    { id: 1, name: 'Michael Holz', date: '04/10/2013', role: 'Admin', status: 'Active', img: 'path/to/image' },
  ];
  
  const UserManagement = () => {
    return (
      <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-4 md:mb-0">User Management</h1>
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">Export to Excel</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">Add New User</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Date Created</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-4 text-center">{index + 1}</td>
                  <td className="py-3 px-4 flex items-center">
                    <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full mr-3 shadow-md" />
                    {user.name}
                  </td>
                  <td className="py-3 px-4">{user.date}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    <span className={`py-1 px-3 rounded-full text-white ${
                      user.status === 'Active' ? 'bg-green-500' :
                      user.status === 'Suspended' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex space-x-2 justify-center">
                    <button className="bg-blue-600 text-white p-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">⚙️</button>
                    <button className="bg-red-600 text-white p-2 rounded-lg shadow-md hover:bg-red-700 transition duration-200">❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition duration-200">Previous</button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200">1</button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200">2</button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition duration-200">3</button>
            <button className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 transition duration-200">Next</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserManagement;
  