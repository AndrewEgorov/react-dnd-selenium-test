import React from 'react';
import { DragSource } from 'react-dnd';
import banana from './banana.png';

const bananaSource = {
  beginDrag(props) {
    return {
      type: 'banana'
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
}

const Banana = ({ connectDragSource }) =>
  connectDragSource(<img src={banana} alt="Banana" className="banana" />);

export default DragSource('BANANA', bananaSource, collect)(Banana);
