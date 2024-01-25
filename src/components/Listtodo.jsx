import React, { useEffect, useState } from 'react'
import { deleteAllTodo, getAllTodo, getTodoDetailsById } from '../services/allAPI';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Listtodo({ uploadTodoStatus }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [allTodo, setAllTodo] = useState([])
  const [eachTodoValue,setEachTodoValue] = useState({
    todoName:"",
    todoDescription:""
  })

  const getAllTodoItem = async () => {
    const response = await getAllTodo();

    const { data } = response;
    setAllTodo(data)

    console.log("todo items");
    console.log(response);
  }

  const removeTodo = async (id) => {
    const result = await deleteAllTodo(id)
    // alert("succussfully deleted")
    getAllTodoItem()
  }
  useEffect(() => {
    getAllTodoItem();
  }, [uploadTodoStatus])

  const getTaskDetails = async (id) => {
    handleShow()
    const res = await getTodoDetailsById(id);
    // console.log("item details by id ==");
    // console.log(res);
  }

  return (
    <>
      <div className='mt-5'>
        <table className='table table-striped shadow' style={{width:"500px"}}>
          <thead>
            <tr>
              <th className='ps-5 py-3'>Id</th>
              <th className='py-3'>Name</th>
              <th className='py-3'>Description</th>
              <th className='py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              allTodo?.length > 0 ?
                allTodo.map((item) => (
                  <tr>
                    <td className='ps-5'>{item.id}</td>
                    <td>{item.todoName}</td>
                    <td>{item.todoDescription}</td>
                    <td>
                      <button className='btn btn-outline-secondary border-light' onClick={() => getTaskDetails(item.id)}>
                        <i className='fa-solid fa-pen-to-square'></i>
                      </button>
                      <button className='ms-3 btn btn-outline-danger border-light' onClick={() => removeTodo(item.id)}>
                        <i className='fa-solid fa-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))
                :
                <p>no items</p>
            }
          </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ToDo List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='mt-3'>
              <div>
                <input
                  type="text" className='form-control border border-secondary' border border-primary />
              </div>
              <div className='mt-3'>
                <textarea
                  name="w3review" id="w3review" cols="30" rows="3" className='border-secondary'></textarea>
              </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Listtodo