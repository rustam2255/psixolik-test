
import TestForm from "./components/TestForm";
import Result from "./components/Result";
import { useState } from "react";
import './index.css';

const App = () => {
  const [result, setResult] = useState(null);

  const handleComplete = (name, type) => {
    setResult({ name, type });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!result ? <TestForm onComplete={handleComplete} /> : <Result {...result} />}
    </div>
  );
};

export default App;
