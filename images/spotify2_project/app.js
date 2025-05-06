document.addEventListener('DOMContentLoaded', function() {
    // Player functionality
    const playBtn = document.getElementById('play');
    const progressBar = document.querySelector('.progress-bar');
    let isPlaying = false;
    
    // Toggle play/pause
    playBtn.addEventListener('click', function() {
      isPlaying = !isPlaying;
      if (isPlaying) {
        playBtn.src = playBtn.getAttribute('pause_button.jpeg')
        // playBtn.src = 'player_icon3_pause.png'; // You need to add a pause icon
        // In a real app, you would play the audio here
      } else {
        playBtn.src = playBtn.getAttribute('pause_button.jpeg');
        // playBtn.src = 'player_icon3.png';
        // In a real app, you would pause the audio here
      }
    });
    
    // Update progress bar
    progressBar.addEventListener('input', function() {
      // In a real app, you would update the audio position here
      const value = this.value;
      console.log('Progress:', value + '%');
    });
    
    // Simulate progress for demo
    if (progressBar) {
      let progress = 0;
      const interval = setInterval(() => {
        if (isPlaying && progress < 100) {
          progress += 0.5;
          progressBar.value = progress;
        } else if (progress >= 100) {
          progress = 0;
        }
      }, 1000);
    }
    
    // Volume control
    const volumeIcons = document.querySelectorAll('.controls i');
    volumeIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        if (this.classList.contains('fa-volume-high')) {
          this.classList.remove('fa-volume-high');
          this.classList.add('fa-volume-off');
          // Mute audio in a real app
        } else if (this.classList.contains('fa-volume-off')) {
          this.classList.remove('fa-volume-off');
          this.classList.add('fa-volume-high');
          // Unmute audio in a real app
        }
      });
    });
    
    // Navigation menu active state
    const navOptions = document.querySelectorAll('.nav-option');
    navOptions.forEach(option => {
      option.addEventListener('click', function() {
        navOptions.forEach(opt => opt.style.opacity = '0.7');
        this.style.opacity = '1';
      });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.card1, .big-card1');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (img) {
          img.style.transform = 'scale(1.03)';
          img.style.transition = 'transform 0.3s ease';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        if (img) {
          img.style.transform = 'scale(1)';
        }
      });
    });
    
    // Search functionality
    const searchIcon = document.querySelector('.search i');
    searchIcon.addEventListener('click', function() {
      alert('Search functionality would go here');
      // In a real app, implement search logic
    });
    
    // Library buttons
    const libraryButtons = document.querySelectorAll('.button button');
    libraryButtons.forEach(button => {
      button.addEventListener('click', function() {
        libraryButtons.forEach(btn => btn.style.backgroundColor = 'transparent');
        this.style.backgroundColor = '#282828';
        // Filter content based on selection
      });
    });
    
    // Simulate time update for demo
    if (document.querySelector('.progress span:first-child')) {
      let seconds = 22;
      const timeInterval = setInterval(() => {
        if (isPlaying) {
          seconds++;
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          document.querySelector('.progress span:first-child').textContent = 
            `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
      }, 1000);
    }
  });