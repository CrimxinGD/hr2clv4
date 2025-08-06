fetch('players.json')
  .then(res => res.json())
  .then(players => {
    players.sort((a, b) => b.points - a.points);
    const board = document.getElementById('leaderboard');
    players.forEach((p, i) => {
      const row = document.createElement('div');
      row.innerHTML = `<strong>#${i + 1}</strong> ${p.name} - ${p.points} pts`;
      board.appendChild(row);
    });
  });
