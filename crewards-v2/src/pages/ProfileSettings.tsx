import React, { useState, useEffect } from "react";
import { username } from "../components/NavBar";

// Simulação de dados de usuário (poderia vir de uma API)
const mockUser = {
  avatar: "/logo2.png", // Substituir pela URL real do avatar do usuário
  name: username,
  joinedDate: "JANUARY 15, 2022",
};

const ProfileSettings: React.FC = () => {
  // Estado para os campos do perfil
  const [ethAddress, setEthAddress] = useState<string>("");
  const [btcAddress, setBtcAddress] = useState<string>("");
  const [ltcAddress, setLtcAddress] = useState<string>("");
  const [changesSaved, setChangesSaved] = useState(false);

  useEffect(() => {
    // Restaurando endereços
    const storedEthAddress = localStorage.getItem("ethAddress") || "";
    const storedBtcAddress = localStorage.getItem("btcAddress") || "";
    const storedLtcAddress = localStorage.getItem("ltcAddress") || "";
    setEthAddress(storedEthAddress);
    setBtcAddress(storedBtcAddress);
    setLtcAddress(storedLtcAddress);

    // Restaurando estados de conexão e nomes de usuário
    const storedShuffleLinked =
      localStorage.getItem("isShuffleLinked") === "true";
    const storedEmpireLinked =
      localStorage.getItem("isEmpireLinked") === "true";
    const storedShuffleUsername = localStorage.getItem("shuffleUsername") || "";
    const storedCsgoEmpireUsername =
      localStorage.getItem("csgoEmpireUsername") || "";

    setIsShuffleLinked(storedShuffleLinked);
    setShuffleUsername(storedShuffleUsername);
    setIsEmpireLinked(storedEmpireLinked);
    setCsgoEmpireUsername(storedCsgoEmpireUsername);
  }, []);

  const [isShuffleLinked, setIsShuffleLinked] = useState(false);
  const [isEmpireLinked, setIsEmpireLinked] = useState(false);

  const [shuffleUsername, setShuffleUsername] = useState("");
  const [csgoEmpireUsername, setCsgoEmpireUsername] = useState("");

  // Função para alternar o estado de conexão do Shuffle
  const handleShuffleLinkToggle = () => {
    if (!isShuffleLinked) {
      const fakeUsername = "SERGIONFR";
      setShuffleUsername(fakeUsername);
    } else {
      setShuffleUsername("");
    }
    setIsShuffleLinked(!isShuffleLinked);
  };

  // Função para alternar o estado de conexão do CSGOEmpire
  const handleEmpireLinkToggle = () => {
    if (!isEmpireLinked) {
      const fakeUsername = "sdragonpt";
      setCsgoEmpireUsername(fakeUsername);
    } else {
      setCsgoEmpireUsername("");
    }
    setIsEmpireLinked(!isEmpireLinked);
  };

  const handleSaveChanges = () => {
    // Salvando as informações das contas no localStorage
    localStorage.setItem("ethAddress", ethAddress);
    localStorage.setItem("btcAddress", btcAddress);
    localStorage.setItem("ltcAddress", ltcAddress);

    // Salvando os estados de conexão e nomes de usuário
    localStorage.setItem("isShuffleLinked", isShuffleLinked.toString());
    localStorage.setItem("shuffleUsername", shuffleUsername);
    localStorage.setItem("isEmpireLinked", isEmpireLinked.toString());
    localStorage.setItem("csgoEmpireUsername", csgoEmpireUsername);

    console.log("Changes Saved!");

    // Mostrando a mensagem de alterações salvas
    setChangesSaved(true);

    setTimeout(() => {
      setChangesSaved(false);
    }, 3000);
  };

  const containerClasses = "absolute inset-0 bg-cover bg-center";

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[#0E0E0E]">
      <div className={`${containerClasses} brightness-125 background-0`} />

      {/* TOP */}
      <div className="relative flex items-start w-[68%] z-10 mt-[6vw] md:mt-[12vw] lg:mt-[11vw] xl:mt-[10vw] 2xl:mt-[8vw] 3xl:mt-[7vw]">
        {/* Title */}
        <div className="flex justify-center flex-1">
          <div className="flex items-center">
            <img
              src="/icons/profile.png"
              alt="Imagem do botão"
              className="w-5 h-5 object-contain mr-2"
            />
            <span className="font-bold font-workSans text-base text-white text-[1.2vw]">
              PROFILE
            </span>
          </div>
        </div>
        {/* Logout Button */}
        <div className="absolute bottom-1/2 translate-y-1/2 right-0">
          <div className="relative flex cursor-pointer justify-center py-3 px-4 shadow-button-1 items-center text-center rounded-xl overflow-hidden">
            {/* Fundo com opacidade */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#B70020] to-[#FF1D44] transition-opacity duration-300 opacity-20 hover:opacity-30 z-20"></div>

            {/* Ícone e texto */}
            <img
              src="/icons/logout.png"
              alt="Logout Icon"
              className="w-5 h-5 object-contain mr-2 z-10"
            />
            <span className="font-bold font-workSans text-base text-[#EE1B3F] z-10">
              LOGOUT
            </span>
          </div>
        </div>
      </div>

      <div className="z-10 w-[76%] scale-90">
        {/* Informações do Usuário */}
        <div className="flex items-center bg-[#191919] rounded-t-xl p-6 border-b-2 border-b-[#191919]">
          <img
            src={mockUser.avatar}
            alt="User Avatar"
            className="w-[2.8vw] mr-4 rounded-full border-[3px] border-transparent outline outline-2 outline-offset-2 outline-[#2B2B2B] transition-transform duration-300"
          />
          <div>
            <h2 className="text-white font-bold text-[1.2vw]">
              {mockUser.name}
            </h2>
            <p className="text-zinc-400 font-semibold text-[0.8vw]">
              JOINED: {mockUser.joinedDate}
            </p>
          </div>
        </div>

        {/* Formulário de endereços de criptomoedas e username */}
        <div className="bg-[#131313] p-6 rounded-b-xl">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* BTC */}
            <div className="mb-6 items-center">
              <label
                className="flex text-white mb-2 font-bold"
                htmlFor="btcAddress"
              >
                <img
                  src="/btc.png"
                  alt="Shuffle Logo"
                  className="w-[1vw] mr-2 object-contain"
                />
                <p className="text-[0.9vw]">BTC ADDRESS</p>
              </label>
              <input
                type="text"
                id="btcAddress"
                placeholder="YOUR ADDRESS..."
                value={btcAddress}
                onChange={(e) => setBtcAddress(e.target.value)}
                className="w-full py-2 px-4 rounded-lg border-2 border-[#282828] bg-[#121212] text-[#B2B2B2] font-semibold placeholder-[#3a3a3a] placeholder:font-semibold"
              />
            </div>
            {/* ETH */}
            <div className="mb-6 items-center">
              <label
                className="text-white mb-2 flex font-bold"
                htmlFor="ethAddress"
              >
                <img
                  src="/eth.png"
                  alt="Shuffle Logo"
                  className="w-[1vw] mr-2 object-contain"
                />
                <p className="text-[0.9vw]">ETH ADDRESS</p>
              </label>
              <input
                type="text"
                id="ethAddress"
                placeholder="YOUR ADDRESS..."
                value={ethAddress}
                onChange={(e) => setEthAddress(e.target.value)}
                className="w-full py-2 px-4 rounded-lg border-2 border-[#282828] bg-[#121212] text-[#B2B2B2] font-semibold placeholder-[#3a3a3a] placeholder:font-semibold"
              />
            </div>
            {/* LTC */}
            <div className="mb-8 items-center">
              <label
                className="flex text-white mb-2 font-bold"
                htmlFor="ltcAddress"
              >
                <img
                  src="/ltc.png"
                  alt="Shuffle Logo"
                  className="w-[1vw] mr-2 object-contain"
                />
                <p className="text-[0.9vw]">LTC ADDRESS</p>
              </label>
              <input
                type="text"
                id="ltcAddress"
                placeholder="YOUR ADDRESS..."
                value={ltcAddress}
                onChange={(e) => setLtcAddress(e.target.value)}
                className="w-full py-2 px-4 rounded-lg border-2 border-[#282828] bg-[#121212] text-[#B2B2B2] font-semibold placeholder-[#3a3a3a] placeholder:font-semibold"
              />
            </div>

            <hr className="border-[#242424] mb-6" />

            {/* csgoempire */}
            <div className="mb-6 relative justify-between flex items-center">
              <div>
                <img
                  src="/csgoempire.png"
                  alt="CSGOEmpire Logo"
                  className="w-[8vw] object-contain"
                />
                <div className="relative flex items-center">
                  <p className="text-[#B2B2B2] font-semibold text-[0.8vw] -mt-1 pl-[0.3vw]">
                    {isEmpireLinked ? (
                      <>
                        CONNECTED AS{" "}
                        <span className="text-[#E9B10E]">
                          @{csgoEmpireUsername}
                        </span>
                      </>
                    ) : (
                      "CONNECT YOUR SHUFFLE ACCOUNT"
                    )}
                  </p>
                </div>
              </div>
              <div
                onClick={handleEmpireLinkToggle} // Alterna conexão/desconexão
                className={`flex justify-center py-3 px-4 my-2 shadow-button items-center text-center ${
                  isEmpireLinked
                    ? "bg-gradient-to-l from-[#9C6E0A] to-[#F6AF16] opacity-30" // Botão desabilitado (conectado)
                    : "bg-gradient-to-l from-[#9C6E0A] to-[#F6AF16] hover:opacity-70 cursor-pointer" // Botão ativo
                } rounded-xl transition-all duration-300`}
              >
                <img
                  src="/icons/link.png"
                  alt="Link Icon"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-bold font-workSans text-base text-white">
                  {isEmpireLinked ? "LINKED" : "LINK ACCOUNT"}
                </span>
              </div>
            </div>

            <hr className="border-[#242424] mb-6" />

            {/* shuffle */}
            <div className="mb-6 relative justify-between flex items-center">
              <div>
                <img
                  src="/shuffle.png"
                  alt="Shuffle Logo"
                  className="w-[8vw] object-contain"
                />
                <div className="relative flex items-center">
                  <p className="text-[#B2B2B2] font-semibold text-[0.8vw] -mt-1 pl-[0.4vw]">
                    {isShuffleLinked ? (
                      <>
                        CONNECTED AS{" "}
                        <span className="text-[#886CFF]">
                          @{shuffleUsername}
                        </span>
                      </>
                    ) : (
                      "CONNECT YOUR SHUFFLE ACCOUNT"
                    )}
                  </p>
                </div>
              </div>
              <div
                onClick={handleShuffleLinkToggle}
                className={`flex justify-center py-3 px-4 my-2 shadow-button items-center text-center ${
                  isShuffleLinked
                    ? "bg-gradient-to-l from-[#4C30C0] to-[#886cff] opacity-30" // LINKED
                    : "bg-gradient-to-l from-[#4C30C0] to-[#886cff] hover:opacity-70 cursor-pointer"
                } rounded-xl transition-all duration-300`}
              >
                <img
                  src="/icons/link.png"
                  alt="Link Icon"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-bold font-workSans text-base text-white">
                  {isShuffleLinked ? "LINKED" : "LINK ACCOUNT"}{" "}
                </span>
              </div>
            </div>

            <hr className="border-[#242424] mb-6" />

            {/* Botão "Save Changes" à esquerda */}
            <div className="flex flex-wrap">
              <div
                onClick={handleSaveChanges}
                className="flex cursor-pointer justify-center py-3 px-4 shadow-button items-center text-center bg-gradient-to-l from-[#B70020] to-[#FF1D44] rounded-xl hover:opacity-70 transition-opacity duration-300"
              >
                <img
                  src="/icons/save.png"
                  alt="Save Icon"
                  className="w-5 h-5 object-contain mr-2"
                />
                <span className="font-bold font-workSans text-base text-white">
                  SAVE CHANGES
                </span>
              </div>
              {changesSaved && (
                <p className="text-green-500 mt-3 ml-3 font-semibold">
                  Changes Saved!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
