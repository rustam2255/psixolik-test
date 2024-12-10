

const Result = ({ name, type }) => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md text-center">
      <h1 className="text-2xl font-bold mb-6">Test Natijasi</h1>
      <p className="text-lg">
        <strong>{name}</strong>sizning temperament tipingiz:{" "}
        <span className="text-blue-500 font-semibold">{type}</span>.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
      >
        Qayta boshlash
      </button>
    </div>
  );
};

export default Result;
