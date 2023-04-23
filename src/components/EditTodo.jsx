import { useState } from "react";

const EditTodo = ({ handleEdit, id }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      console.log("edit tidak boleh kosong");
      return;
    } else {
      handleEdit(value, id);
      setValue("");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-3 mb-3">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Enter todo list ..."
          className="px-3 py-2 w-3/5 md:w-full border border-gray-200 focus:outline-primary rounded-lg bg-transparent placeholder:italic"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-hover text-white font-semibold
          rounded-lg px-4 py-1 text-sm transition duration-300 w-fit"
        >
          Edit
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
