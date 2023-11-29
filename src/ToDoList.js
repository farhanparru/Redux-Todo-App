import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteTask, editTask } from './features/slice';

const ToDoList = () => {
  // To dispatch Actions
  const dispatch = useDispatch();
  //  To get state from store  using (useSelector)
  const data = useSelector((state) => state.todo);
  const [addata, setAddData] = useState('');
  const [edit, setEdit] = useState(null);

  const submit = () => {
    if (!addata) {
      alert('Add');
    } else {
      dispatch(addData(addata));
      setAddData('');
    }
  };

  const editbtn = () => {
    if (edit !== null) {
      dispatch(editTask({ id: edit, text: addata }));
      setEdit(null);
      setAddData('');
    }
  };

  const handleedit = (id, text) => {
    setAddData(text);
    setEdit(id);
  };
// function dispatches the deleteTask action  from redux with the id
  const handledelet = (id) => {
    dispatch(deleteTask(id));
    console.log(id);
  };

  return (
    <div>
      <header className="bg-success text-white p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <font face="Comic sans MS" size="11" color="black">
                <strong>ToDo List</strong>
              </font>
            </div>
          </div>
        </div>
      </header>

      <div className="container mt-3">
        <h2>Add Items</h2>
        <input
  onChange={(e) => setAddData(e.target.value)}
  className="form-control"
  value={addata}
  style={{
    height: '3rem', 
    width: '70%', 
    borderRadius: '10px', 
    borderColor: 'white',
    backgroundColor: 'gray', 
    paddingLeft: '10px', 
    fontSize: '1rem', 
  }} 
  placeholder="Add New Task..!"
  type="text"
/>
        {edit === null ? (
          <button
            onClick={submit}
            className="btn btn-dark mt-3"
            disabled={!addata}
            style={{ borderRadius: '5px' }}
          >
            Add Task
          </button>
        ) : (
          <button
            onClick={editbtn}
            className="btn btn-dark mt-3"
            style={{ borderRadius: '5px' }}
          >
            Edit Task
          </button>
        )}

        <h3 className="mt-4">Tasks</h3>
        <ul className="list-group">
          {data.map((item, index) => (
            <li
              key={item.id || index}
              className="list-group-item d-flex justify-content-between align-items-center"
             style={{
              backgroundColor: "green",
              borderRadius: '5px',
              marginTop: '10px',
              height: '3rem',
              width: '70%', 
              padding: '0.5rem',
              fontSize: '1rem',
             }}
            >
              {item.text}
              <div>
                <FaEdit className="mx-2" onClick={() => handleedit(item.id, item.text)} />
                <MdDelete onClick={() => handledelet(item.id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
