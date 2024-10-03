import React, { useState } from "react";

const ShuffleLoginPage: React.FC = () => {
  const [userID, setUserID] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o login
    console.log("UserID:", userID);
    console.log("Crypto Address:", cryptoAddress);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-zinc-900 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url(/background.png)",
      }}
    >
      <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-normal text-white text-center mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="userID">
              UserID*
            </label>
            <input
              type="text"
              id="userID"
              required
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              className="w-full p-2 rounded border border-zinc-600 bg-zinc-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="cryptoAddress">
              Crypto Address (optional)
            </label>
            <input
              type="text"
              id="cryptoAddress"
              value={cryptoAddress}
              onChange={(e) => setCryptoAddress(e.target.value)}
              className="w-full p-2 rounded border border-zinc-600 bg-zinc-700 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#8337d8] text-white rounded hover:bg-[#582c8c]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShuffleLoginPage;
