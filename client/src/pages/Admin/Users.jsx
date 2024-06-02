import { useState } from "react";
import { useGetAllUsersQuery } from "../../Redux/features/user/authApiSlice";
import UserManagement from "../../components/UserManagement";
import Loading from "../../components/Loading/Loading";

export default function Users() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data, error, isLoading } = useGetAllUsersQuery({ page, pageSize });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  console.log(data);
  return (
    <div className="px-4 md:px-20">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>Error fetching users</div>
      ) : (
        <>
          <UserManagement data={data} />
          <div className="pagination flex justify-end items-center space-x-4 mt-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
            >
              Previous
            </button>
            <span className="text-lg">Page {page}</span>
            <button
              onClick={handleNextPage}
              disabled={!data || data.length < pageSize}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
