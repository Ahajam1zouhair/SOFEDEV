import { useParams } from "react-router-dom";
import { useGetNewsTeamsMutation } from "../../Redux/Api/apiNew";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import CardNews from "../News/CardNews";

export default function NewsClub() {
  const { name } = useParams();

  const [getNewsTeams, { data, isLoading , error}] = useGetNewsTeamsMutation();
  useEffect(() => {
    getNewsTeams({ name });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getNewsTeams]);
  console.log(data);
  return (
    <div className="md:px-10">
    <div className="px-4 md:px-20">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>Error fetching news</div>
      ) : (
        <>
          {data?.articles.map((article) => (
            <CardNews key={article.url} article={article} />
          ))}
        </>
      )}
    </div>
  </div>
  );
}
