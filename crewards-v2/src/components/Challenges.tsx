interface Challenges {
  id: string;
  title: string;
  thumbnail: string;
  rewardValue: string;
  rewardImage: string;
  glowColor: string;
}

const Challenges: React.FC = () => {

  // List of challenges
  const challenges: Challenges[] = [
    {
      id: "hacksaw-slayers-inc-96",
      title: "First to hit 750x with minimum $0.20 bet",
      thumbnail: "slayers.png",
      rewardValue: "150.00000000",
      rewardImage: "usd.png",
      glowColor: "rgba(186, 215, 1, 0.5)",
    },
    {
      id: "hacksaw-six-six-six-96",
      title: "First to hit 666x with minimum $0.20 bet",
      thumbnail: "six.png",
      rewardValue: "125.00000000",
      rewardImage: "usd.png",
      glowColor: "rgba(254, 1, 33, 0.5)",
    },
    {
      id: "nolimit-apocalypse",
      title: "First to hit 888x with minimum $0.20 bet",
      thumbnail: "apocalypse.png",
      rewardValue: "175.00000000",
      rewardImage: "usd.png",
      glowColor: "rgba(51, 177, 26, 0.5)",
    },
    {
      id: "originals/keno",
      title: "First to hit 500x with minimum $0.20 bet",
      thumbnail: "keno.png",
      rewardValue: "100.00000000",
      rewardImage: "usd.png",
      glowColor: "rgba(252, 142, 1, 0.5)",
    },
  ];

  const handleClick = (gameId: string) => {
    window.open(`https://shuffle.com/games/${gameId}`, "_blank");
  };

  return (
    <div
      id="challenges"
      className="relative min-h-screen flex flex-col justify-center bg-[#171414] pb-8 pt-28 xl:pt-28 2xl:pt-40"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black opacity-20 z-0"
        style={{ backgroundImage: "url('shuffle-banner.png')" }}
      />

      {/* Top with blur */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-transparent to-transparent z-10 filter blur-lg" />

      {/* Bottom with blur */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-transparent to-transparent z-10 filter blur-lg" />

      <h1 className="text-5xl font-bold text-white mb-12 text-center z-10">
        CHALLENGES
      </h1>
      <div
        className="relative bg-zinc-700 bg-opacity-0 rounded-xl p-8 mx-6 lg:mx-48 2xl:mx-48 z-10"
        style={{ height: "auto", overflow: "hidden" }}
      >
        <div
          className="flex space-x-4"
          style={{ cursor: "grab", justifyContent: "flex-start" }}
        >
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="max-w-[200px] 2xl:max-w-[320px] flex flex-col rounded-lg p-4"
              onClick={() => handleClick(challenge.id)}
            >
              <img
                src={challenge.thumbnail}
                alt={challenge.title}
                className="rounded-lg transition-transform transform hover:scale-110"
                style={{
                  filter: `drop-shadow(0 0 20px ${challenge.glowColor})`,
                }}
              />
              <h3 className="text-lg font-bold text-white text-left mt-6">
                {challenge.title}
              </h3>
              <div className="mt-1">
                <span className="text-base text-zinc-300 font-medium">
                  Reward:
                </span>{" "}
                <div className="flex items-center">
                  <img
                    src={challenge.rewardImage}
                    alt="Reward"
                    className="w-4 h-4 mr-1"
                  />
                  <span className="text-base text-white font-semibold ml-1">
                    {challenge.rewardValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
