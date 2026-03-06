'use client';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const Todolist = () => {
    
    // let count = 1;

    // const [count, setcount] = useState(1);// useState is a hook that allows us to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.

    const [taskList, settaskList] = useState([]);

    const addNewTask = (e) => {
        if(e.key === 'Enter'){
            console.log(e.target.value);
            
            const newTask = { task: e.target.value, completed: false };
            settaskList([ newTask, ...taskList ]);

            e.target.value = '';
        }
    }

    const deleteTask = (index) => {
        const temp = taskList;
        temp.splice(index, 1);
        settaskList([...temp]);
    }

    return (
        <div className='bg-gray-100 min-h-screen'>

            {/* <button className='border p-4' onClick={ () => { alert('button was clicked'); } }>
                submit
            </button>

            <h1 className='text-2xl'>{count}</h1>

            <button className='border p-3 mt-5'
                onClick={ () => {
                    // count++;
                    setcount(count + 1);
                    console.log(count);
                } }
            >add count</button> */}

            <div className='container py-10 mx-auto'>
                <h1 className='text-2xl text-center font-bold'>Todo List</h1>
                <div className='border rounded-xl bg-white shadow-xl'>
                    <div className='p-5 border-b-1'>
                        <input type="text"
                        onKeyDown={addNewTask}
                        className='py-2 px-5 text-lg w-full rounded-md bg-blue-100'
                        placeholder='Enter your task' 
                    />
                    </div>
                    <div className='p-5'>
                        {
                            taskList.length === 0 ? (
                                <p className='text-center font-bold text-gray-400 text-xl'>
                            🙂 No Todos to show Yet
                        </p>
                            ) : (
                                taskList.map( (obj, index) => {
                                    return <div key = {index}
                                    className='border border-gray-400 p-4 rounded-lg mb-4 flex justify-between items-center'
                                    >
                                        <div className='flex gap-3 w-1/3'>
                                        <input type='checkbox' 
                                            onChange={(e) => {
                                                const temp = taskList;
                                                temp[index].completed = e.target.checked;
                                                settaskList([...temp]);
                                            }}
                                        />
                                            <p className='text-lg'>{obj.task}</p>
                                        </div>

                                        {
                                            obj.completed ? (
                                                <p className='bg-green-200 text-green-800 font-semibold px-2 rounded-full'>Completed</p>
                                            ) : (
                                                <p className='bg-amber-200 text-amber-800 font-semibold px-2 rounded-full'>Pending</p>
                                            )
                                        }

                                        <button 
                                        onClick = { () => {deleteTask(index)} }
                                        className='bg-red-500 text-white p-2 rounded-md'>
                                            <Trash2 />
                                        </button>
                                    </div>
                                })
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Todolist;