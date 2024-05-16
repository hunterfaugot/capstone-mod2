const randomizerButton = document.getElementById('randomizer-btn');

// Add event listener to the assemble button
randomizerButton.addEventListener('click', () => {
  // Increase chip count by 1
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(100));
  // Expected output: 0, 1 or 2
})