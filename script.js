fetch('/frequencies.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('freqContainer');
    data.forEach(freq => {
      const li = document.createElement('li');
      li.textContent = freq.nom + ' – ' + freq.frequence + ' Hz';
      li.onclick = () => {
        console.log('Lecture de ' + freq.frequence + ' Hz');
      };
      container.appendChild(li);
    });
  });