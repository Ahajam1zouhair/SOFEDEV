import{ useState } from 'react';

const UpdateProfile = ({ onUpdate, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdate = () => {
    onUpdate({ name, email, image, oldPassword, newPassword, confirmPassword });
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Update Profile</h2>
        <label htmlFor="name" className="block mb-2">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-gray-300 border w-full px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label htmlFor="email" className="block mb-2">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 border w-full px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label htmlFor="image" className="block mb-2">
          Update Image:
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="border-gray-300 border w-full px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label htmlFor="oldPassword" className="block mb-2">
          Old Password:
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="border-gray-300 border w-full px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label htmlFor="newPassword" className="block mb-2">
          New Password:
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border-gray-300 border w-full px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label htmlFor="confirmPassword" className="block mb-2">
          Confirm Password:
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-gray-300 border w-full px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleUpdate}
            className="py-2 px-4 mr-2 bg-blue-400 text-white rounded hover:bg-blue-500"
          >
            Save
          </button>
          <button onClick={onCancel} className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
