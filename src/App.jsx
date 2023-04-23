import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import Loading from "./components/Loading";
import EditTodo from "./components/EditTodo";

// frammer
import { AnimatePresence, motion } from "framer-motion";

// uuid
import { v4 as uuidv4 } from "uuid";

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true)

  const successToast = (action, msg) => {
    toast.success(action + msg, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
    })
  }
  
  const errorToast = (action, msg) => {
    toast.error(action + msg, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
    })
  }

  const handleAdd = (e) => {
    e.preventDefault();
    // jika input kosong
    if (inputValue === "") {
      errorToast("data cannot be empty", "")
      return;
    // tambah data jika data di isi
    } else {
      const newTodo = { id: uuidv4(), text: inputValue, isEditing: false };
      setTodo([...todo, newTodo]);
      successToast(inputValue, " successfully added !")
    }
    setInputValue("");
  };

  const toggleEdit = (id) => {
    const newArr = todo.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setTodo(newArr);
  };

  const handleEdit = (text, id) => {
    const newArr = todo.map((item) =>
      item.id === id ? { ...item, text, isEditing: !item.isEditing } : item
    );
    setTodo(newArr);
    successToast(inputValue, " edited successfully !")
  };

  // const submitUpdate = (e, id) => {
  //   e.preventDefault()
  //   updateForm(inputEdit, id)
  // }

  const handleDelete = (id, text) => {
    const newArr = todo.filter((item) => item.id !== id);
    setTodo(newArr);
    errorToast(text, " successfully deleted")
  };

  // frammer motion
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const list = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -50 },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1300)
  }, [])

  return (
    <div className="min-h-screen bg-gray-200">
      {loading ? <Loading/> :
      <>
        <ToastContainer/>
        <div className="pt-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-3/4 md:w-2/5 mx-auto"
          >
            <motion.div className="p-5 bg-white rounded-t-lg">
              <AddTodo
                value={inputValue}
                handleChange={(e) => setInputValue(e.target.value)}
                handleAdd={handleAdd}
              />
            </motion.div>
            {todo.length <= 0 ? null : (
              <div className="p-3 mb-3 bg-gray-100 rounded-b-lg overflow-y-scroll overflow-x-hidden h-[50vh]">
                <AnimatePresence>
                  {todo.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={list}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <TodoItem
                        item={item.text}
                        handleDelete={() => handleDelete(item.id, item.text)}
                        handleEdit={() => toggleEdit(item.id)}
                      />
                      {item.isEditing ? (
                        <EditTodo id={item.id} handleEdit={handleEdit} />
                      ) : null}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </>
      }
    </div>
  );
}

export default App;
