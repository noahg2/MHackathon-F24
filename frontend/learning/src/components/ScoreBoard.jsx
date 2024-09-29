// src/components/Scoreboard.jsx
import React from 'react';
import './Scoreboard.css';

// const Scoreboard = ({ players, onRestart }) => {
//   // Sort players by score in descending order
//   const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

// console.log(players)
//   return (
//     <div className="scoreboard-container">
//       <h1>Game Over! Final Scores</h1>
//       <ul>
//           {players.map((player, index) => (
//             <li key={index}>{index + 1}.{player} {0} points</li>
            
//           ))}
//         </ul>
//       <button onClick={onRestart}>Play Again</button>
//     </div>
//   );
// };

// export default Scoreboard;

const Scoreboard = ({ players, onRestart }) => {
  // Sort players by score in descending order
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="scoreboard-container">
      <h1 className="scoreboard-title">Game Over! Final Scores</h1>
      <ul className="player-list">
        {sortedPlayers.map((player, index) => (
          <li key={index} className={`player-item player-rank-${index + 1}`}>
            <span className="player-rank">{index + 1}.</span>
            <span className="player-name">{player}</span>
            <span className="player-score">{player.score} points</span>
          </li>
        ))}
      </ul>
      <button className="restart-btn" onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default Scoreboard;
