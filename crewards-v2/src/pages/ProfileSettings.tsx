import React, { useState, useEffect } from "react";
import { username } from "../components/NavBar";
import Modal from "./Modal";

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
  const [shuffleUsername, setShuffleUsername] = useState<string>("");
  const [isConnectedCsgo, setIsConnectedCsgo] = useState(false);
  const [isConnectedShuffle, setIsConnectedShuffle] = useState(false);
  const [isVerifiedCsgo, setIsVerifiedCsgo] = useState(false);
  const [isVerifiedShuffle, setIsVerifiedShuffle] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentConnection, setCurrentConnection] = useState("");
  const [changesSaved, setChangesSaved] = useState(false);
  const [notVerifiedCsgo, setNotVerifiedCsgo] = useState(false);
  const [notVerifiedShuffle, setNotVerifiedShuffle] = useState(false);

  // Estado para armazenar os usernames antigos
  const [oldCsgoEmpireUsername, setOldCsgoEmpireUsername] =
    useState<string>("");
  const [oldShuffleUsername, setOldShuffleUsername] = useState<string>("");

  useEffect(() => {
    const storedData = {
      ethAddress: localStorage.getItem("ethAddress") || "",
      btcAddress: localStorage.getItem("btcAddress") || "",
      ltcAddress: localStorage.getItem("ltcAddress") || "",
      csgoEmpireUsername: localStorage.getItem("csgoEmpireUsername") || "",
      shuffleUsername: localStorage.getItem("shuffleUsername") || "",
    };
    setEthAddress(storedData.ethAddress);
    setBtcAddress(storedData.btcAddress);
    setLtcAddress(storedData.ltcAddress);
    setCsgoEmpireUsername(storedData.csgoEmpireUsername);
    setShuffleUsername(storedData.shuffleUsername);

    // Armazena os usernames antigos
    setOldCsgoEmpireUsername(storedData.csgoEmpireUsername);
    setOldShuffleUsername(storedData.shuffleUsername);
  }, []);

  const handleCsgoUsernameChange = (value: string) => {
    setCsgoEmpireUsername(value);
    if (isVerifiedCsgo) {
      setIsVerifiedCsgo(false); // Redefine para não verificado se o usuário alterar o nome
    }
  };

  const handleShuffleUsernameChange = (value: string) => {
    setShuffleUsername(value);
    if (isVerifiedShuffle) {
      setIsVerifiedShuffle(false); // Redefine para não verificado se o usuário alterar o nome
    }
  };

  const handleSaveChanges = () => {
    // Salvando as informações no localStorage
    localStorage.setItem("ethAddress", ethAddress);
    localStorage.setItem("btcAddress", btcAddress);
    localStorage.setItem("ltcAddress", ltcAddress);
    localStorage.setItem("csgoEmpireUsername", csgoEmpireUsername);
    localStorage.setItem("shuffleUsername", shuffleUsername);

    console.log("Informações salvas!");

    // Verifica se houve mudança no username do CSGOEmpire e se não foi verificado
    if (csgoEmpireUsername !== oldCsgoEmpireUsername && !isVerifiedCsgo) {
      setNotVerifiedCsgo(true);
    } else {
      setNotVerifiedCsgo(false);
    }

    // Verifica se houve mudança no username do Shuffle e se não foi verificado
    if (shuffleUsername !== oldShuffleUsername && !isVerifiedShuffle) {
      setNotVerifiedShuffle(true);
    } else {
      setNotVerifiedShuffle(false);
    }

    // Mostrando a mensagem de alterações salvas
    setChangesSaved(true);

    setTimeout(() => {
      setChangesSaved(false);
    }, 3000);
  };

  const handleConnectCsgo = () => {
    setCurrentConnection("csgo");
    setIsModalOpen(true);
  };

  const handleConnectShuffle = () => {
    setCurrentConnection("shuffle");
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConnect = () => {
    if (currentConnection === "csgo") {
      setIsConnectedCsgo(true);
      setIsVerifiedCsgo(true); // Define como verificado
    } else if (currentConnection === "shuffle") {
      setIsConnectedShuffle(true);
      setIsVerifiedShuffle(true); // Define como verificado
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-zinc-900 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url(/background.png)",
        paddingTop:
          windowHeight < 390 ? "20px" : windowHeight < 700 ? "40px" : "0", // Margem superior ajustada
      }}
    >
      <div
        className={`bg-gradient-to-t from-[#111418] to-[#22252b] px-8 py-4 rounded-lg shadow-lg w-full max-w-xl border-2 mx-4 border-zinc-800 ${
          windowHeight < 700 ? "mt-20 mb-10" : "mt-20 mb-10"
        } md:mt-32 md:mb-20 3xl:mt-32 3xl:mb-32`}
        style={{
          overflow: "auto", // Adiciona um scroll se o conteúdo for maior que a altura máxima
        }}
      >
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
              className="w-full p-2 rounded border border-zinc-900 bg-[#21262C] text-white"
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
              className="w-full p-2 rounded border border-zinc-900 bg-[#21262C] text-white"
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
              className="w-full p-2 rounded border border-zinc-900 bg-[#21262C] text-white"
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-white mb-2"
              htmlFor="csgoEmpireUsername"
            >
              CSGOEmpire Username
            </label>
            <div className="relative flex items-center">
              <img
                src="/empirelogo.png"
                alt="Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                id="csgoEmpireUsername"
                value={csgoEmpireUsername}
                onChange={(e) => handleCsgoUsernameChange(e.target.value)} // Atualiza aqui
                className="flex-grow p-2 rounded border border-zinc-900 bg-[#21262C] text-white pl-10"
              />
              <button
                type="button"
                onClick={handleConnectCsgo}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                <i className="fas fa-link"></i>
              </button>
            </div>
            {isConnectedCsgo && (
              <div className="flex items-center mt-2">
                {isVerifiedCsgo ? (
                  <div className="text-green-500">
                    <i className="fas fa-check-circle mr-1"></i>
                    Verified
                  </div>
                ) : (
                  <div className="text-red-500">
                    <i className="fas fa-times-circle mr-1"></i>
                    Not Verified
                  </div>
                )}
              </div>
            )}
            {notVerifiedCsgo && !isConnectedCsgo && (
              <div className="text-red-500">
                <i className="fas fa-times-circle mr-1"></i>
                Not Verified
              </div>
            )}
          </div>
          <div className="mb-6 relative">
            <label className="block text-white mb-2" htmlFor="shuffleUsername">
              Shuffle Username
            </label>
            <div className="relative flex items-center">
              <img
                src="/shufflelogo.png"
                alt="Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                id="shuffleUsername"
                value={shuffleUsername}
                onChange={(e) => handleShuffleUsernameChange(e.target.value)} // Atualiza aqui
                className="flex-grow p-2 rounded border border-zinc-900 bg-[#21262C] text-white pl-10"
              />
              <button
                type="button"
                onClick={handleConnectShuffle}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                <i className="fas fa-link"></i>
              </button>
            </div>
            {isConnectedShuffle && (
              <div className="flex items-center mt-2">
                {isVerifiedShuffle ? (
                  <div className="text-green-500">
                    <i className="fas fa-check-circle mr-1"></i>
                    Verified
                  </div>
                ) : (
                  <div className="text-red-500">
                    <i className="fas fa-times-circle mr-1"></i>
                    Not Verified
                  </div>
                )}
              </div>
            )}
            {notVerifiedShuffle && !isConnectedShuffle && (
              <div className="text-red-500">
                <i className="fas fa-times-circle mr-1"></i>
                Not Verified
              </div>
            )}
          </div>

          {/* Botão "Save Changes" à esquerda */}
          <div className="flex flex-wrap">
            <div>
              <button
                onClick={handleSaveChanges}
                className="py-2 px-4 bg-red-600 text-white rounded transition duration-300 ease-in-out hover:bg-red-700 hover:opacity-90"
              >
                Save Changes
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <span className="flex flex-wrap items-center py-2 px-4 ml-3 bg-[#7289da] text-white rounded">
                <img
                  src="/discordlogo.png"
                  alt="Discord Logo"
                  className="w-6 mr-2"
                />
                {username}
              </span>
            </div>
            {changesSaved && (
              <p className="text-green-500 mt-3 ml-3">Changes Saved!</p>
            )}
          </div>
        </form>

        {/* Modal para Conexão */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConnect={handleModalConnect}
        >
          <h2 className="text-lg mb-4 text-white">
            Connect to {currentConnection === "csgo" ? "CSGOEmpire" : "Shuffle"}
          </h2>
          <p className="text-zinc-400 mb-4">
            Would you like to connect your account?
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileSettings;
