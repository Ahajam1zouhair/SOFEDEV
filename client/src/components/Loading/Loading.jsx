import "./stayleLoading.css";
export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
}
