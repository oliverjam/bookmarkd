import React from 'react';

function Snackbar(props) {
  console.log(props);
  return (
    <div style={{ backgroundColor: 'red' }}>
      <p>{props.message}</p>
      <button>undo</button>
    </div>
  );
}

export default Snackbar;
