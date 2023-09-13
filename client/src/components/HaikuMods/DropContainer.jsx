import { useDrop } from 'react-dnd';

const DropContainer = ({ onDrop, children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'WORD',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let backgroundColor = 'transparent';

  if (isActive) {
    backgroundColor = 'lightgrey';
  } else if (canDrop) {
    backgroundColor = 'darkgrey';
  }

  return (
    <div ref={drop} className="drop-container haiku" style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default DropContainer;