import React from 'react';
import { DropTarget } from 'react-dnd';
import './Box.css';

const boxTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem().type);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

const Box = ({ connectDropTarget }) =>
  connectDropTarget(<div className="box">[Drop fruit here]</div>);

export default DropTarget(['APPLE', 'BANANA', 'ORANGE'], boxTarget, collect)(
  Box
);
