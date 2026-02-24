import React, { useState, useEffect, useCallback } from "react";
import instagramIcon from './assets/icon.webp'; // adjust the path if your file is elsewhere

export default function Hello() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 shadow-2xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Password Generator
        </h1>

        <div className="flex items-center rounded-lg overflow-hidden shadow-md mb-4 bg-gray-700">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-2 bg-gray-700 text-white outline-none"
            placeholder="Password"
          />
          <button
            onClick={() => navigator.clipboard.writeText(password)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 transition"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="text-white text-sm">Length: {length}</label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        <div className="flex justify-between text-white text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numAllow}
              onChange={() => setNumAllow(!numAllow)}
              className="accent-orange-500"
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow(!charAllow)}
              className="accent-orange-500"
            />
            Symbols
          </label>
        </div>
      </div>

      <div className="mt-10">
        <a
          href="https://www.instagram.com/yurajgupta09/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}