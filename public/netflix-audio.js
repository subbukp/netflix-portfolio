/**
 * Netflix-style sound effects generated with the Web Audio API
 * This provides custom synthesized sounds without requiring external audio files
 */

// Create a Netflix "tudum" sound effect
function playNetflixTudum() {
  try {
    // Use a shared AudioContext or create a new one
    const audioContext = window.netflixAudioContext || 
                        new (window.AudioContext || window.webkitAudioContext)();
    
    // Store for future use
    window.netflixAudioContext = audioContext;
    
    // Resume the audio context (needed for Chrome's autoplay policy)
    audioContext.resume();
    
    // Create oscillator for the main "tu-dum" sound
    const osc = audioContext.createOscillator();
    osc.type = 'sine';
    
    // Create gain node for volume control
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0;
    
    // Connect the nodes
    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Start the oscillator
    osc.start();
    
    // Create the "tu-dum" effect
    const currentTime = audioContext.currentTime;
    
    // First note (Tu)
    osc.frequency.setValueAtTime(150, currentTime);
    gainNode.gain.setValueAtTime(0, currentTime);
    gainNode.gain.linearRampToValueAtTime(0.6, currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0.4, currentTime + 0.2);
    gainNode.gain.linearRampToValueAtTime(0, currentTime + 0.3);
    
    // Second note (Dum)
    osc.frequency.setValueAtTime(100, currentTime + 0.3);
    gainNode.gain.setValueAtTime(0, currentTime + 0.3);
    gainNode.gain.linearRampToValueAtTime(0.7, currentTime + 0.4);
    gainNode.gain.linearRampToValueAtTime(0.5, currentTime + 0.6);
    gainNode.gain.linearRampToValueAtTime(0, currentTime + 1);
    
    // Stop the oscillator after the sound is complete
    osc.stop(currentTime + 1);
    
    console.log('Netflix tudum effect played successfully');
    return true; // Sound successfully played
  } catch (error) {
    console.error('Audio playback failed:', error);
    return false; // Sound failed to play
  }
}

// Create a Netflix trailer start sound effect
function playTrailerStart() {
  try {
    // Use a shared AudioContext or create a new one
    const audioContext = window.netflixAudioContext || 
                        new (window.AudioContext || window.webkitAudioContext)();
    
    // Store for future use
    window.netflixAudioContext = audioContext;
    
    // Resume the audio context (needed for Chrome's autoplay policy)
    audioContext.resume();
    
    // Create two oscillators for a richer sound
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    
    osc1.type = 'sine';
    osc2.type = 'triangle';
    
    // Create gain nodes
    const gain1 = audioContext.createGain();
    const gain2 = audioContext.createGain();
    const masterGain = audioContext.createGain();
    
    gain1.gain.value = 0;
    gain2.gain.value = 0;
    masterGain.gain.value = 0.3;
    
    // Create filter for more cinematic sound
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    
    // Connect everything
    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(filter);
    gain2.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(audioContext.destination);
    
    // Start oscillators
    osc1.start();
    osc2.start();
    
    const currentTime = audioContext.currentTime;
    
    // Create dramatic sound effect
    osc1.frequency.setValueAtTime(220, currentTime);
    osc2.frequency.setValueAtTime(110, currentTime);
    
    // Volume envelopes
    gain1.gain.setValueAtTime(0, currentTime);
    gain1.gain.linearRampToValueAtTime(0.7, currentTime + 0.1);
    gain1.gain.linearRampToValueAtTime(0.5, currentTime + 0.2);
    gain1.gain.linearRampToValueAtTime(0, currentTime + 1.5);
    
    gain2.gain.setValueAtTime(0, currentTime);
    gain2.gain.linearRampToValueAtTime(0.5, currentTime + 0.15);
    gain2.gain.linearRampToValueAtTime(0.3, currentTime + 0.4);
    gain2.gain.linearRampToValueAtTime(0, currentTime + 1.2);
    
    // Frequency changes for dramatic effect
    osc1.frequency.linearRampToValueAtTime(150, currentTime + 0.8);
    osc2.frequency.linearRampToValueAtTime(75, currentTime + 0.8);
    
    // Filter sweep
    filter.frequency.setValueAtTime(800, currentTime);
    filter.frequency.linearRampToValueAtTime(2000, currentTime + 0.3);
    filter.frequency.linearRampToValueAtTime(600, currentTime + 1.0);
    
    // Stop oscillators
    osc1.stop(currentTime + 2);
    osc2.stop(currentTime + 2);
    
    console.log('Netflix trailer sound effect played successfully');
    return true;
  } catch (error) {
    console.error('Audio playback failed:', error);
    return false;
  }
}

// Add browser-specific audio initializers
function initAudio() {
  // Create context on user interaction to satisfy browsers' autoplay policies
  if (!window.netflixAudioContext) {
    try {
      window.netflixAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      console.log('Audio context initialized');
    } catch (e) {
      console.error('Could not initialize audio context:', e);
    }
  }
}

// Initialize audio on various user interactions
document.addEventListener('click', initAudio, {once: true});
document.addEventListener('touchstart', initAudio, {once: true});
document.addEventListener('keydown', initAudio, {once: true});

// Export the functions to the global scope
window.playNetflixTudum = playNetflixTudum;
window.playTrailerStart = playTrailerStart;
window.initAudio = initAudio; 