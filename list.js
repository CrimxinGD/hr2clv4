// script.js
fetch('challenges.json')
  .then(res => res.json())
  .then(challenges => {
    const list = document.getElementById('challenge-list');
    challenges.forEach(c => {
      const item = document.createElement('div');
      item.innerHTML = `
        <h2>${c.name}</h2>
        <p>By: ${c.creator}</p>
        <p>Points: ${c.points}</p>
        <p>Level ID: ${c.levelID}</p>
      `;
      list.appendChild(item);
    });
  });
