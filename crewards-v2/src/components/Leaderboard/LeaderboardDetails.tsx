// src/components/Leaderboard/LeaderboardDetails.tsx
const players = [
  { position: 4, name: "Player 4", prize: "$5,000", wagered: "$30,000", avatar: "/avatar4.png" },
  { position: 5, name: "Player 5", prize: "$4,000", wagered: "$25,000", avatar: "/avatar5.png" },
  { position: 6, name: "Player 6", prize: "$3,000", wagered: "$20,000", avatar: "/avatar6.png" },
  { position: 7, name: "Player 7", prize: "$2,000", wagered: "$15,000", avatar: "/avatar7.png" },
  { position: 8, name: "Player 8", prize: "$1,000", wagered: "$10,000", avatar: "/avatar8.png" },
  { position: 9, name: "Player 9", prize: "$500", wagered: "$5,000", avatar: "/avatar9.png" },
  { position: 10, name: "Player 10", prize: "$250", wagered: "$1,000", avatar: "/avatar10.png" },
];

function LeaderboardDetails() {

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#171414]">
        <div className="absolute inset-0 bg-black opacity-70" />
      <div className="flex justify-between mx-4">
        <h2 className="text-white">User</h2>
        <div className="flex space-x-16">
          <h2 className="text-white">Prize</h2>
          <h2 className="text-white">Wagered</h2>
        </div>
      </div>

      {players.map((player) => (
        <div key={player.position} className="flex items-center bg-gray-800 rounded-lg p-4 mt-2 w-[1000px]">
          <div className="flex items-center w-1/3">
            <span className="text-white mr-2">{player.position}</span>
            <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-full mr-2" />
            <span className="text-white">{player.name}</span>
          </div>
          <div className="flex justify-between w-2/3">
            <div className="text-white">{player.wagered}</div>
            <div className="text-white">{player.prize}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeaderboardDetails;
