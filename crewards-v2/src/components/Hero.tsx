function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(/background.png)",
        }}
      />
      <div
        className="absolute z-0 bg-cover bg-center h-full w-full brightness-110"
        style={{
          backgroundImage: "url(/redglow.png)", // Image behind text
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold">UNLOCK REWARDS</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          AT EVERY STEP
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          From small wins to big rewards, our program has something for everyone
          at every step of the way!
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-md">
            AFFILIATES
          </a>
          <a href="#" className="bg-gray-800 text-white px-6 py-3 rounded-md">
            LEADERBOARD
          </a>
        </div>
      </div>
      {/* Rotating Mini Images */}
      <img
        src="/logo.png"
        alt="Mini 1"
        className="absolute left-72 bottom-44 w-16 h-16 animate-spin"
      />
      <img
        src="/logo.png"
        alt="Mini 2"
        className="absolute top-36 left-1/2 transform -translate-x-1/2 w-12 h-12 animate-spin"
      />
      <img
        src="/logo.png"
        alt="Mini 3"
        className="absolute right-44 top-1/2 transform -translate-y-1/2 w-16 h-16 animate-spin"
      />
    </div>
  );
}

export default Hero;
