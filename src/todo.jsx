import React, {  useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlusSquareFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiFillMinusSquare } from 'react-icons/ai';
// import { db } from "../src/firebase.js"
// import {
//   collection,
//   addDoc,
//   getDocs,
//   doc,
// } from "firebase/firestore";
function Todo() {
  const [todoItem, setTodoItem] = useState([])
  const [inputValue, setinputValue] = useState("")
  const [indexNumber, setIndexNumber] = useState("");
  const [updateInput, setUpdateInput] = useState("")
  // const [refresh, setRefresh] = useState(false);
  //CREATE COLLECTION
//   const dbCollection = collection(db, "todo Collection");

  // useEffect(()=>{
  //   async function getData(){
  //     const querySnapshot = await getDocs(dbCollection)
  //     const arr = []
  //     querySnapshot.forEach((doc)=>{
  //       arr.push({
  //         value: doc.data().todoValue,
  //       })
  //     })
  //     setTodoItem([...arr])
  //   }
  //   getData()
  // },[refresh])




//   console.log(dbCollection);
  const addTodo =  () => {
  // const addTodo = async () => {
    // const obj = {
    //   todoValue: inputValue,
    // }
    if (!inputValue) {
      alert("No input")
    } else {
      // const addTodo = await addDoc(dbCollection, obj)
      // console.log(addTodo);
      // setRefresh(!refresh)
      todoItem.push(inputValue)
      setTodoItem([...todoItem])
      setinputValue("")
    }

  }
  const deleteTodo = (ind) => {
    console.log(ind);
    todoItem.splice(ind, 1)
    setTodoItem([...todoItem])
  }
  const updateTodo = (ind) => {
    todoItem.splice(ind, 1, updateInput)
    setTodoItem([...todoItem])
    setIndexNumber('')
    setUpdateInput("")
  }
  const editTodo = (ind) => {
    setUpdateInput(todoItem[ind])
  }
  console.log(todoItem)
  return (
    <div className='container-fluid mainBox'>
      <div className="container box1   pt-5">
        <div className="container d-flex justify-content-center  align-items-start pb-4 ">
          <div className=" divInp  ">
            <input type="text" placeholder='Enter Todo' value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
              className='w-100 px-2' />
          </div>
          <div class="ms-2 box-2  ">
            <BsPlusSquareFill
              color='rgb(4 130 201)'
              className='inpBtn'
              onClick={addTodo}
              size={33} />
          </div>

        </div>
        {todoItem.map((todo, ind) => {

          return (
            <React.Fragment key={ind}>
              {indexNumber === ind ? (
                <div className='d-flex me-auto ms-auto align-items-center  updInp'>
                  <input
                    onChange={(e) => setUpdateInput(e.target.value)}
                    className="w-100  bg-white text-black updInp"
                    value={updateInput}
                    autoFocus
                  />
                  <AiOutlineEdit
                    onClick={() => updateTodo(ind)}
                    color='black'
                    size={30}
                  />
                </div>
              ) : (

                <div className="container  mb-3 sapan  ">
                  <div className="h-auto text1  w-100 float-start">
                    <span>{todo}</span>

                    <div className="d-flex float-end ms-auto ">
                      <AiOutlineEdit
                        color='black'
                        size={25}
                        className=" w-100"
                        onClick={() => {
                          editTodo(ind)
                          setIndexNumber(ind)
                        }}
                      />
                      <AiFillMinusSquare
                        color='red'
                        size={25}
                        onClick={() => deleteTodo(ind)}
                        className="w-100"

                      />
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          )
        })
        }
      </div>

    </div>


  )
}

export default Todo
