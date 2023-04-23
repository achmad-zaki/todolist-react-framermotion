const AddTodo = ({ handleChange, handleAdd, value }) => {
  return (
    <form onSubmit={handleAdd}>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Enter todo list ..."
          value={value}
          onChange={handleChange}
          className="px-3 py-2 w-3/5 md:w-3/4 border border-gray-200 focus:outline-primary rounded-lg bg-transparent placeholder:italic"
        />
        <button
          type="submit"
          className="btn bg-primary hover:bg-primary-hover text-white font-semibold
            rounded-lg px-4 py-1 text-sm transition duration-300 w-fit"
        >
          New task
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
