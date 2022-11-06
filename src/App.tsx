import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <p className="text-xl mr-2">Count: {count}</p>
      <button
        onClick={() => setCount(count => count + 1)}
        className="w-auto px-2 py-1 border-none rounded-5"
      >
        Click
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="max-w-600px mx-auto">
      <div className="flex items-center flex-col mt-40">
        <h1 className="text-4xl">Hello, World!</h1>
        <h2 className="mb-5">This is a simple demo labs</h2>
        <Counter />
      </div>
    </div>
  );
}
