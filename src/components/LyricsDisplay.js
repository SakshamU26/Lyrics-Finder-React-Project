import React from 'react';

const LyricsDisplay = ({ lyrics }) => {
  return (
    <div>
      {lyrics ? <pre>{lyrics}</pre> : <p>No lyrics found.</p>}
    </div>
  );
};

export default LyricsDisplay;
