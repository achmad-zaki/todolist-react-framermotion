import { TbTrashFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai"

import { useState } from "react";

import { motion } from "framer-motion";

const opacity = {
  visible: { opacity: 1, x: 0},
  hidden: { opacity: 0, x: 20},
}

const TodoItem = ({ item, handleDelete, handleEdit}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center gap-5 mb-3">
      <div className="bg-white w-full shadow-md flex items-center justify-between gap-3 p-5 rounded-lg border-l-4 border-l-primary">
        <h1 className="font-semibold">{item}</h1>
        <div>
          <button className="bg-primary hover:bg-primary-hover text-white p-3 rounded-lg transition duration-300" onClick={() => setShow(!show)}>
            <AiFillSetting size={20}/>
          </button>
        </div>
      </div>
      <motion.div variants={opacity} animate={show ? "visible" : "hidden"} className={`space-x-2 flex ${show ? 'block' : 'hidden'}`}>
        <button
          className="bg-success hover:bg-success-hover text-white p-3 rounded-lg transition duration-300"
          onClick={handleEdit}
        >
          <MdModeEdit size={20} />
        </button>
        <button
          className="bg-danger hover:bg-danger-hover text-white p-3 rounded-lg transition duration-300"
          onClick={handleDelete}
        >
          <TbTrashFilled size={20} />
        </button>
      </motion.div>
    </div>
  );
};

export default TodoItem;
