import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Simulação de dados de usuário (poderia vir de uma API)
const mockUser = {
  avatar: "/logo2.png", // Substituir pela URL real do avatar do usuário
  name: "Sérgio",
  joinedDate: "JANUARY 15, 2022",
};

// Tipagem para as props do Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  toggleLogin: () => void; // Define a função de alternância como prop
}

const ProfileSettingsModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  toggleLogin,
}) => {
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

  const [timeLeftEmpire, setTimeLeftEmpire] = useState(180); // Tempo para CSGOEmpire
  const [progressBarWidthEmpire, setProgressBarWidthEmpire] = useState(100);

  const [isEmpireLinkModalOpen, setIsEmpireLinkModalOpen] = useState(false);

  // Função para abrir o modal de link para CSGOEmpire
  const openEmpireLinkModal = () => {
    setIsEmpireLinkModalOpen(true);
  };

  // Timer para CSGOEmpire
  useEffect(() => {
    if (isEmpireLinkModalOpen) {
      const timer = setInterval(() => {
        setTimeLeftEmpire((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });

        // Atualiza a largura da barra para CSGOEmpire
        setProgressBarWidthEmpire((timeLeftEmpire / 180) * 100);
      }, 1000);

      return () => clearInterval(timer); // Limpeza ao fechar o modal
    }
  }, [isEmpireLinkModalOpen, timeLeftEmpire]);

  // Função para fechar o modal de CSGOEmpire
  const closeEmpireLinkModal = () => {
    setIsEmpireLinkModalOpen(false);
    setTimeLeftEmpire(180); // Reseta o tempo
    setProgressBarWidthEmpire(100); // Reseta a largura
  };

  // Estado para os campos do perfil
  const [ethAddress, setEthAddress] = useState<string>("");
  const [btcAddress, setBtcAddress] = useState<string>("");
  const [ltcAddress, setLtcAddress] = useState<string>("");
  const [changesSaved, setChangesSaved] = useState(false);

  const [isShuffleLinked, setIsShuffleLinked] = useState(false);
  const [isEmpireLinked, setIsEmpireLinked] = useState(false);

  const [shuffleUsername, setShuffleUsername] = useState("");
  const [csgoEmpireUsername, setCsgoEmpireUsername] = useState("");

  const handleClose = () => {
    onClose(); // Chama a função onClose passada como prop para fechar o modal
  };

  // Função para fazer logout
  const handleLogout = () => {
    toggleLogin(); // Alterna o estado de login para deslogar
    onClose(); // Fecha o modal após o logout
  };

  useEffect(() => {
    // Restaurando endereços e estados de conexão
    const storedEthAddress = localStorage.getItem("ethAddress") || "";
    const storedBtcAddress = localStorage.getItem("btcAddress") || "";
    const storedLtcAddress = localStorage.getItem("ltcAddress") || "";
    setEthAddress(storedEthAddress);
    setBtcAddress(storedBtcAddress);
    setLtcAddress(storedLtcAddress);

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

  const handleSaveChanges = () => {
    // Salvando informações e estados de conexão
    localStorage.setItem("ethAddress", ethAddress);
    localStorage.setItem("btcAddress", btcAddress);
    localStorage.setItem("ltcAddress", ltcAddress);

    localStorage.setItem("isShuffleLinked", isShuffleLinked.toString());
    localStorage.setItem("shuffleUsername", shuffleUsername);
    localStorage.setItem("isEmpireLinked", isEmpireLinked.toString());
    localStorage.setItem("csgoEmpireUsername", csgoEmpireUsername);

    console.log("Changes Saved!");
    setChangesSaved(true);

    setTimeout(() => {
      setChangesSaved(false);
    }, 3000);
  };

  const handleCopy = (event: React.MouseEvent<SVGSVGElement>) => {
    // Copiar o texto para a área de transferência
    navigator.clipboard.writeText("m27d6hd285yi");

    // Encontrar o container para manipular os ícones
    const label = event.currentTarget.closest("label") as HTMLElement | null;

    if (label) {
      // Encontrar os ícones dentro do label
      const clipboardIcon = label.querySelector(
        ".clipboard"
      ) as HTMLElement | null;
      const clipboardCheckIcon = label.querySelector(
        ".clipboard-check"
      ) as HTMLElement | null;

      // Verificar se os ícones existem
      if (clipboardIcon && clipboardCheckIcon) {
        // Mostrar o ícone de "check" e esconder o ícone original
        clipboardCheckIcon.style.display = "block";
        clipboardIcon.style.display = "none";

        // Após 3 segundos, voltar ao ícone original
        setTimeout(() => {
          clipboardCheckIcon.style.display = "none";
          clipboardIcon.style.display = "block";
        }, 3000); // 3000 milissegundos = 3 segundos
      }
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex flex-wrap justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="z-10 md:w-[76%] -mt-[16vw] md:-mt-[3vw] scale-75">
        <div className="flex justify-between items-center bg-[#191919] rounded-t-xl p-6 border-b-2 border-b-[#191919]">
          {/* Informações do Usuário */}
          <div className="flex items-center">
            <img
              src={mockUser.avatar}
              alt="User Avatar"
              className="md:w-[2.8vw] w-[10vw] mr-4 rounded-full border-[3px] border-transparent outline outline-2 outline-offset-2 outline-[#2B2B2B] transition-transform duration-300"
            />
            <div>
              <h2 className="text-white font-bold md:text-[1.2vw] text-[5vw]">
                {mockUser.name}
              </h2>
              <p className="text-zinc-400 font-semibold md:text-[0.8vw] text-[3vw]">
                JOINED: {mockUser.joinedDate}
              </p>
            </div>
          </div>

          <div className="flex">
            {/* Botão de Voltar */}
            <div
              onClick={handleClose}
              className="relative flex cursor-pointer justify-center py-3 px-4 shadow-button-1 items-center text-center rounded-xl overflow-hidden mr-4"
            >
              {/* Fundo com opacidade */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#2B2B2B] to-[#505050] transition-opacity duration-300 opacity-20 hover:opacity-30 z-20"></div>

              {/* Ícone e texto */}
              <img
                src="/icons/arrow-1.png" // Substitua pelo ícone de "voltar"
                alt="Back Icon"
                className="w-5 h-5 object-contain mr-2 z-10"
              />
              <span className="font-bold font-workSans text-base text-[#B2B2B2] z-10">
                BACK
              </span>
            </div>

            {/* Botão de Logout */}
            <div
              onClick={handleLogout}
              className="relative flex cursor-pointer justify-center py-3 px-4 shadow-button-1 items-center text-center rounded-xl overflow-hidden"
            >
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

        {/* Formulário de endereços de criptomoedas e username */}
        <div className="bg-[#131313] p-6 rounded-b-xl  max-h-screen overflow-y-auto pb-6">
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
                  className="md:w-[1vw] w-[4.6vw] mr-2 object-contain"
                />
                <p className="md:text-[0.9vw]">BTC ADDRESS</p>
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
                  className="md:w-[1vw] w-[4.6vw] mr-2 object-contain"
                />
                <p className="md:text-[0.9vw]">ETH ADDRESS</p>
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
                  className="md:w-[1vw] w-[4.6vw] mr-2 object-contain"
                />
                <p className="md:text-[0.9vw]">LTC ADDRESS</p>
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

            {/* stake */}
            <div className="mb-6 relative justify-between flex items-center">
              <div>
                <img
                  src="/stake.png"
                  alt="Stake Logo"
                  className="md:w-[4vw] m-2 object-contain"
                />
                <div className="relative flex items-center">
                  <p className="text-[#B2B2B2] font-semibold md:text-[0.8vw] text-[3vw] -mt-1 md:pl-[0.3vw] pl-[2vw]">
                    {isEmpireLinked ? (
                      <>
                        CONNECTED AS{" "}
                        <span className="text-[#1475E1]">
                          @{csgoEmpireUsername}
                        </span>
                      </>
                    ) : (
                      "CONNECT YOUR STAKE ACCOUNT"
                    )}
                  </p>
                </div>
              </div>
              <div
                onClick={openEmpireLinkModal} // Alterna conexão/desconexão
                className={`flex justify-center py-3 px-4 my-2 shadow-button items-center text-center ${
                  isEmpireLinked
                    ? "bg-gradient-to-l from-[#07478E] to-[#1475E1] opacity-30" // Botão desabilitado (conectado)
                    : "bg-gradient-to-l from-[#07478E] to-[#1475E1] hover:opacity-70 cursor-pointer" // Botão ativo
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

        {/* Novo Modal de Link */}
        {isEmpireLinkModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#191919] p-6 rounded-lg">
              <div className="justify-between flex">
                {/* Title */}
                <div className="flex items-center">
                  <img
                    src="/icons/link.png" // Substitua pelo ícone de "voltar"
                    alt="Back Icon"
                    className="w-5 h-5 object-contain mr-2 z-10"
                  />
                  <h2 className="font-semibold text-[#B2B2B2]">
                    LINK STAKE
                  </h2>
                </div>
                <div onClick={closeEmpireLinkModal} className="cursor-pointer">
                  <img
                    src="/icons/x.png" // Substitua pelo ícone de "voltar"
                    alt="Return"
                    className="md:w-[1.2vw] w-[20px] object-contain mr-2 z-10"
                  />
                </div>
              </div>

              <hr className="border-[#242424] mt-4" />

              {/* Actions */}
              <div className="bg-[#161616] rounded-xl mt-4 p-4">
                <div>
                  <img
                    src="/stake.png" // Substitua pelo ícone de "voltar"
                    alt="Stake Logo"
                    className="w-[4vw] object-contain mr-2 z-10 my-2"
                  />
                  <h1 className="text-white font-extrabold text-[1vw]">
                    COMPLETE THE FOLLOWING ACTIONS
                  </h1>
                  <h2 className="text-[#505050] font-semibold text-[0.9vw]">
                    FOLLOW THE STEPS AND LINK YOUR STAKE ACCOUNT
                  </h2>
                </div>
                <hr className="border-[#242424] mt-2" />
                <div className="text-[#B2B2B2] font-semibold mt-4">
                  <p>1. GO TO STAKE.COM AND OPEN THE CHAT.</p>
                  <p className="mt-2">
                    2. COPY AND PASTE THE FOLLOWING MESSAGE PROVIDED IN THE
                    CHAT.
                  </p>
                </div>
              </div>

              {/* Mini Title */}
              <h1 className="text-white font-bold text-[1vw] mt-6 mb-4">
                YOUR VERIFICATION CODE
              </h1>

              {/* Code */}
              <div className="flex items-center bg-[#141414] justify-between rounded-xl p-3 lg:p-2 lg:py-3 mb-6 text-left text-white border-2 border-[#3F3F3F]">
                <span className="font-bold font-workSans ml-2">
                  m27d6hd285yi
                </span>
                <label className="container-1 mr-4">
                  <input type="checkbox" id="checkbox" />
                  <svg
                    viewBox="0 0 384 512"
                    height="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="clipboard"
                    onClick={handleCopy}
                  >
                    <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                  </svg>

                  <svg
                    viewBox="0 0 384 512"
                    height="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="clipboard-check"
                    style={{ display: "none" }} // Inicialmente invisível
                  >
                    <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                  </svg>
                </label>
              </div>

              <hr className="border-[#242424] mt-4" />

              {/* Seconds Bar */}
              <div className="relative mt-6">
                <div className="w-full bg-[#131313] rounded-full h-2.5">
                  <div
                    className="bg-[#1475E1] h-2.5 rounded-full"
                    style={{ width: `${progressBarWidthEmpire}%` }}
                  ></div>
                </div>
                <p className="text-[#B2B2B2] mt-2 text-left font-semibold">
                  YOU HAVE {timeLeftEmpire} SECONDS TO COMPLETE THIS ACTION
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body // Isso renderiza o modal fora da árvore da Navbar
  );
};

export default ProfileSettingsModal;
