const mottos = [
    "Building Bridges Through Words: Your Gateway to Global Communication.", // English
    "Construire des ponts à travers les mots : Votre passerelle vers la communication mondiale.", // French
    "بناء جسور من خلال الكلمات: بوابتك إلى التواصل العالمي." // Arabic
  ];
  
  let currentMottoIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let delay = 100; // Delay between typing characters
  
  function typeMotto() {
    const currentMotto = mottos[currentMottoIndex];
    const displayedMotto = currentMotto.substring(0, currentCharIndex);
  
    document.getElementById("motto").textContent = displayedMotto;
  
    if (!isDeleting && currentCharIndex === currentMotto.length) {
      // Start deleting after displaying the motto
      isDeleting = true;
      delay = 55; // Delay before deleting
    } else if (isDeleting && currentCharIndex === 0) {
      // Switch to the next motto after deleting
      isDeleting = false;
      currentMottoIndex = (currentMottoIndex + 1) % mottos.length;
      delay = 55; // Delay before typing next motto
    }
  
    // Increment/decrement character index
    currentCharIndex += isDeleting ? -1 : 1;
  
    // Schedule next character typing
    setTimeout(typeMotto, delay);
  }
  
  // Start typing animation
  typeMotto();