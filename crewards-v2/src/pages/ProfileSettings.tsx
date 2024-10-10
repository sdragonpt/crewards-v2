import React, { useState, useEffect } from "react";
import { username } from "../components/NavBar";

// Simulação de dados de usuário (poderia vir de uma API)
const mockUser = {
  avatar: "/logo2.png", // Substituir pela URL real do avatar do usuário
  name: username,
  joinedDate: "January 15, 2022",
};

const ProfileSettings: React.FC = () => {
  // Estado para os campos do perfil
  const [ethAddress, setEthAddress] = useState<string>("");
  const [btcAddress, setBtcAddress] = useState<string>("");
  const [ltcAddress, setLtcAddress] = useState<string>("");
  const [csgoEmpireUsername, setCsgoEmpireUsername] = useState<string>("");
  const [discordName, setDiscordName] = useState<string | null>(null);

  // Simulando o carregamento de dados do usuário ao montar o componente
  useEffect(() => {
    const storedData = {
      ethAddress: localStorage.getItem("ethAddress") || "",
      btcAddress: localStorage.getItem("btcAddress") || "",
      ltcAddress: localStorage.getItem("ltcAddress") || "",
      csgoEmpireUsername: localStorage.getItem("csgoEmpireUsername") || "",
      discordName: localStorage.getItem("discordName") || null,
    };
    setEthAddress(storedData.ethAddress);
    setBtcAddress(storedData.btcAddress);
    setLtcAddress(storedData.ltcAddress);
    setCsgoEmpireUsername(storedData.csgoEmpireUsername);
    setDiscordName(storedData.discordName);
  }, []);

  const handleSaveChanges = () => {
    // Salvando as informações no localStorage (ou enviar para a API)
    localStorage.setItem("ethAddress", ethAddress);
    localStorage.setItem("btcAddress", btcAddress);
    localStorage.setItem("ltcAddress", ltcAddress);
    localStorage.setItem("csgoEmpireUsername", csgoEmpireUsername);
    console.log("Informações salvas!");
  };

  const handleDiscordLogin = () => {
    if (discordName) {
      // Logout do Discord
      setDiscordName(null);
      localStorage.removeItem("discordName");
      console.log("Usuário deslogado do Discord");
    } else {
      // Simulação de login no Discord
      const discordUser = "sdragonpt"; // Simulação de login
      setDiscordName(discordUser);
      localStorage.setItem("discordName", discordUser);
      console.log("Usuário logado no Discord");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-zinc-900 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url(/background.png)",
      }}
    >
      <div className="bg-zinc-800 px-8 py-4 rounded-lg shadow-lg w-full max-w-xl lg:mt-24 3xl:mt-36 border-2 mx-4 border-zinc-700">
        {/* Informações do Usuário */}
        <div className="flex items-center mb-6">
          <img
            src={mockUser.avatar}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-white text-lg">{mockUser.name}</h2>
            <p className="text-zinc-400 text-sm">
              Joined: {mockUser.joinedDate}
            </p>
          </div>
        </div>

        {/* Formulário de endereços de criptomoedas e username */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="ethAddress">
              ETH Address
            </label>
            <input
              type="text"
              id="ethAddress"
              value={ethAddress}
              onChange={(e) => setEthAddress(e.target.value)}
              className="w-full p-2 rounded border border-zinc-600 bg-zinc-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="btcAddress">
              BTC Address
            </label>
            <input
              type="text"
              id="btcAddress"
              value={btcAddress}
              onChange={(e) => setBtcAddress(e.target.value)}
              className="w-full p-2 rounded border border-zinc-600 bg-zinc-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="ltcAddress">
              LTC Address
            </label>
            <input
              type="text"
              id="ltcAddress"
              value={ltcAddress}
              onChange={(e) => setLtcAddress(e.target.value)}
              className="w-full p-2 rounded border border-zinc-600 bg-zinc-700 text-white"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white mb-2"
              htmlFor="csgoEmpireUsername"
            >
              CSGOEmpire Username
            </label>
            <input
              type="text"
              id="csgoEmpireUsername"
              value={csgoEmpireUsername}
              onChange={(e) => setCsgoEmpireUsername(e.target.value)}
              className="w-full p-2 rounded border border-zinc-600 bg-zinc-700 text-white"
            />
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={handleSaveChanges}
              className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 mr-3"
            >
              Save Changes
            </button>

            <div className="flex items-center justify-between">
              <button
                onClick={handleDiscordLogin}
                className="py-2 px-4 bg-[#7289da] text-white rounded hover:bg-[#8ea1e1]"
              >
                {discordName ? discordName : "Login with Discord"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
