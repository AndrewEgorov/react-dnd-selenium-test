import React from 'react';
import { DragSource } from 'react-dnd';
import orange from './orange.png';

const orangeSource = {
  beginDrag(props) {
    return {
      type: 'orange'
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
}

const Orange = ({ connectDragSource }) =>
  connectDragSource(<img src={orange} alt="Orange" />);

export default DragSource('ORANGE', orangeSource, collect)(Orange);
