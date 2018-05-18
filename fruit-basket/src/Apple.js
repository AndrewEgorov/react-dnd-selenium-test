import React from 'react';
import { DragSource } from 'react-dnd';
import apple from './apple.png';

const appleSource = {
  beginDrag(props) {
    return {
      type: 'apple'
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
}

const Apple = ({ connectDragSource }) =>
  connectDragSource(<img src={apple} alt="apple" />);

export default DragSource('APPLE', appleSource, collect)(Apple);
