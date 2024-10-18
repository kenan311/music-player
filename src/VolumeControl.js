import React, { useState } from 'react';

function VolumeControl() {
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    // Assuming you have an audio element in your application
    const audio = document.querySelector('audio');
    if (audio) {
      audio.volume = event.target.value;
    }
  };

  return (
    <div className="volume-control">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default VolumeControl;
