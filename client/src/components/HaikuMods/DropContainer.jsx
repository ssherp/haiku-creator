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
    backgroundColor = 'lightgreen';
  } else if (canDrop) {
    backgroundColor = 'lightyellow';
  }

  return (
    <div ref={drop} className="drop-container" style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default DropContainer;