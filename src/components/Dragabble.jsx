import Draggable from 'react-draggable';
import { useRef } from 'react';
import { motion } from "framer-motion";

function DraggableButtons({name,icon:Icon,color}) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <motion.div
      drag
      initial={{ y: 0 }}
      whileHover={{
        y: [0, -10, 0],
        transition: { duration: 0.6, ease: 'easeInOut' }
      }}
      ref={nodeRef} className='border cursor-grab dark:border-gray-700 border-gray-200 rounded-lg p-2 place-items-center m-1 md:m-0 md:w-30 hover:bg-slate-100 dark:hover:bg-gray-800'>
        <Icon className={`${color} size-10`}></Icon>
        <div className='pt-2'>{name}</div>
      </motion.div>
    </Draggable>
  );
}

export default DraggableButtons