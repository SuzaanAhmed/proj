import Image from "next/image";
import BfTraits from "./bf_traits/page";
import Header from "./header/page";

export default function Home() {
  return (
    <div className="bg-[#FFC0CB] text-black p-5">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <div>
          <h1 className="text-4xl font-bold text-center sm:text-left">About Me</h1>
          <Header />
          <hr className="my-4" />
          <BfTraits />
          <hr className="my-4" />
          <Baby />
          <hr className="my-4" />
          <Past />
          <hr className="my-4" />
          <hr className="my-4" />
        </div>
      </main>
    </div>
  );
}

function Past() {
  return (
    <div>
      <h1 className="text-xl font-bold">I am attractive. That makes you insecure. I get it.</h1>
      <p>No need to worry—these are all my past relationships. They are all blocked.</p>
      <ol className="list-decimal ml-6 mt-2">
        <li>Shreyas (My favorite)</li>
        <li>Sharath</li>
        <li>Shivaraj</li>
        <li>Nadir</li>
        <li>Chiranthan</li>
        <li>Harshith</li>
      </ol>
    </div>
  );
}

function Baby() {
  return (
    <div>
      <h1 className="text-xl font-bold">Eventually, you will want to have kids with me.</h1>
      <p>Here are some baby names to choose from:</p>
      <table className="border-collapse border border-black mt-3">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-4 py-2">Boy Names</th>
            <th className="border border-black px-4 py-2">Girl Names</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">Arjun</td>
            <td className="border border-black px-4 py-2">Aarohi</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Rohan</td>
            <td className="border border-black px-4 py-2">Sneha</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Vihaan</td>
            <td className="border border-black px-4 py-2">Ananya</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Kabir</td>
            <td className="border border-black px-4 py-2">Meera</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Aditya</td>
            <td className="border border-black px-4 py-2">Priya</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}