import Shuffle from "../components/Leaderboard/Shuffle";

function Leaderboard() {
  return (
    <div className="relative bg-cover bg-center bg-[#171414] overflow-hidden">
      {/* Imagem do Stake */}
      <div className="absolute top-[52vw] md:top-[12.4vw] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="flex justify-center bg-[#191919] rounded-full border-2 border-[#2B2B2B]">
          {/* Contêiner para a imagem do Stake */}
          <div className="relative flex flex-col items-center z-20">
            <div className="rounded-xl px-3">
              <img
                src="/stake.png"
                alt="Stake"
                className="w-32 hidden md:block px-8 py-2" // Versão para telas maiores
              />
              <img
                src="/stake.png"
                alt="Stake Small"
                className="w-7 pb-2 pt-2 ml-4 mr-4 block md:hidden" // Versão para telas menores
              />
            </div>
          </div>
        </div>

        {/* Linha de fundo fixa */}
        <div className="absolute top-[49.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2B2B2B] rounded-full md:h-[100%] md:mt-0 h-[100%] md:w-[100%] w-[100%] transition-all duration-300 ease-in-out z-10" />
      </div>

      {/* Renderiza apenas o componente Shuffle (você pode trocar depois) */}
      <Shuffle />
    </div>
  );
}

export default Leaderboard;
