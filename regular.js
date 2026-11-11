
  <script>
    // Updates the live Date and Time inside the Patty layer continuously
    function updateClock() {
      const now = new Date();

      // Format Date (e.g., Wednesday, Nov 11, 2026)
      const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      const dateString = now.toLocaleDateString('en-US', options);

      // Format Time (HH:MM:SS)
      const timeString = now.toLocaleTimeString('en-US', { hour12: false });

      // Update DOM elements safely
      const dateEl = document.getElementById('current-date');
      const timeEl = document.getElementById('current-time');

      if (dateEl) dateEl.textContent = dateString;
      if (timeEl) timeEl.textContent = timeString;
    }

    // Initialize clock immediately & update every second
    updateClock();
    setInterval(updateClock, 1000);
  </script>
