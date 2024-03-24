// Define the observer callback
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start the counter when the statistic element is in view
        startCounter(entry.target);
      } else {
        // Reset the counter when the statistic element is out of view
        entry.target.textContent = 0;
      }
    });
  };
  
  // Create the observer
  const observer = new IntersectionObserver(observerCallback);
  
  // Start observing each statistic element
  document.querySelectorAll('.statistic').forEach(statistic => {
    observer.observe(statistic);
  });
  
  // Define the startCounter function
  function startCounter(statistic) {
    const targetCount = +statistic.getAttribute('data-count');
    const incrementValue = targetCount > 1000 ? 50 : 1;
    const increment = () => {
      const currentCount = +statistic.textContent;
      if (currentCount < targetCount) {
        statistic.textContent = currentCount + incrementValue;
      } else {
        clearInterval(intervalId);
        statistic.classList.add('completed');
      }
    };
    const intervalId = setInterval(increment, 10);
  }
  