import React from 'react';
// import { showSnackbar } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
