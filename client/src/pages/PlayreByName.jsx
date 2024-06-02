import { useParams } from "react-router-dom";
import { useGetPlayerQuery } from "../Redux/Api/apiPlyares";
import HeaderPlayre from "../components/playreByName/HeaderPlayre";
import TabsPlayre from "../components/playreByName/TabsPlayre";
import Loading from "../components/Loading/Loading";

export default function PlayreByName() {
  const { name } = useParams();
  const { data, isLoading } = useGetPlayerQuery(name, {
    skip: !name,
  });
  console.log(data);
  return (
    <div className="max-w-screen-xl mx-auto  md:px-16">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeaderPlayre data={data} />
          <TabsPlayre data={data} />
        </>
      )}
    </div>
  );
}
