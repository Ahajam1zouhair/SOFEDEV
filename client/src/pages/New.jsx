// news.jsx
import { useEffect, useState } from "react";

import CardNews from "../components/News/CardNews";
import Loading from "../components/Loading/Loading";
import { useGetFootballNewsQuery } from "../Redux/Api/apiNew";

export default function News() {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const { data, error, isLoading } = useGetFootballNewsQuery({
    page,
    pageSize,
  });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return (
    <div className="md:px-10">
      <div className="px-4 md:px-20 mb-10">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div>Error fetching news</div>
        ) : (
          <>
            {data.articles.map((article) => (
              <CardNews key={article.url} article={article} />
            ))}
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
                disabled={data.articles.length < pageSize}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
