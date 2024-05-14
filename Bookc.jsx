import Leftside from '../Topside/Leftside';
import './Bookc.css';
import React, { useState } from 'react';

function Bpage() {
  const [level, setLevel] = useState('');
  const [slot, setSlot] = useState('');
  const [venue, setVenue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskCounter, setTaskCounter] = useState(1);
  const [showAssignmentBox, setShowAssignmentBox] = useState(false);
  const [showBookSlotButton, setShowBookSlotButton] = useState(true);

  const handleDisplay = () => {
      setShowAssignmentBox(true);
  };

  const cancelBooking = () => {
      setShowAssignmentBox(false);
      setLevel('');
      setSlot('');
      setVenue('');
  };

  const handleTaskSubmission = (e) => {
      e.preventDefault();
      setShowBookSlotButton(false);
      const newTask = {
          id: taskCounter,
          level,
          slot,
          venue
      };
      setTasks([...tasks, newTask]);
      setTaskCounter(taskCounter + 1);
      setShowAssignmentBox(false);
      setLevel('');
      setSlot('');
      setVenue('');
  };

  return (
      <div>
          <Leftside />
          <div class="coursemain">
              <div className='flexrow'>
                  <div className='videoback'>
                      <div ><h3>COURSE MATERIAL</h3></div>
                      <iframe class="youtube" src="https://www.youtube.com/embed/x3dQsMkJgDg?si=NnQygxNyBdhfquf_"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   
                  </div>
                  <div className='bookflex'>
                      <div className='flexcon'>
                          <div class="pc">
                              <a onClick={handleDisplay}><div class="c" ></div></a>
                              <p className='cp'>C PROGRAMMING</p>
                              <div className='assdetail'>
                                  <div ><h3>ASSESSMENT DETAILS</h3></div>
                                  {showBookSlotButton && <a onClick={handleDisplay}><button className='bookbtn'>BOOK SLOT</button></a>}
                                  {showAssignmentBox && (
                                      <AssignmentBox
                                          level={level}
                                          setLevel={setLevel}
                                          slot={slot}
                                          setSlot={setSlot}
                                          venue={venue}
                                          setVenue={setVenue}
                                          onCancel={cancelBooking}
                                          onSubmit={handleTaskSubmission}
                                      />
                                  )}
                                  <TaskList tasks={tasks} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='flexrow'>
                  <div className='topicback'>
                      <div ><h3>COURSE TOPICS</h3></div>
                      <div className='btnflex'>
                          <a><button className='coursebtn'>TOPIC NUMBER - 1</button></a>
                          <a><button className='coursebtn'>TOPIC NUMBER - 2</button></a>
                          <a><button className='coursebtn'>TOPIC NUMBER - 3</button></a>
                          <a><button className='coursebtn'>TOPIC NUMBER - 4</button></a>
                          <a><button className='coursebtn'>TOPIC NUMBER - 5</button></a>
                          <a><button className='coursebtn'>TOPIC NUMBER - 6</button></a>
                          <a><button className='coursebtn'>TOPIC NUMBER - 7</button></a>
                          <a><button className='coursebtn'>TOPIC NUMBER - 8</button></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

function AssignmentBox({ level, setLevel, slot, setSlot, venue, setVenue, onCancel, onSubmit }) {
    return (
      <div>
        <div className="black"></div>
        <div className="assign">
            <h2>Slot selection</h2>
              <div className='optionflex'></div>
                <form onSubmit={onSubmit}>
                  <p  id="roll">Level</p>
                    <select className='optionbox' id="level"  value={level} onChange={(e) => setLevel(e.target.value)} required>
                      <option value="">Choose your level</option>
                      <option value="Level-I">Level-I</option>
                      <option value="Level-II">Level-II</option>
                      <option value="Level-III">Level-III</option>
                    </select>
                  <p id="nam">Available Slot</p>
                    <select className='optionbox' id="slot" value={slot} onChange={(e) => setSlot(e.target.value)} required>
                      <option value="">Choose option</option>
                      <option value="15.04.2024 (9 am to 10 am)">15.04.2024 (9 am to 10 am)</option>
                      <option value="15.04.2024 (10 am to 11 am)">15.04.2024 (10 am to 11 am)</option>
                      <option value="15.04.2024 (1.30 pm to 2.30 pm)">15.04.2024 (1.30 pm to 2.30 pm)</option>
                      <option value="15.04.2024 (2.45 pm to 3.45 pm)">15.04.2024 (2.45 pm to 3.45 pm)</option>
                    </select>
                  <p id="dis">Available Venue</p>
                    <select className='optionbox' id="venue" value={venue} onChange={(e) => setVenue(e.target.value)} required>
                      <option value="">Choose option</option>
                      <option value="CSE Lab 1">CSE Lab 1</option>
                      <option value="CSE Lab 2">CSE Lab 2</option>
                      <option value="IT Lab 1">IT Lab 1</option>
                      <option value="IT Lab 2">IT Lab 2</option>
                    </select>
                                          
          <button type="submit">Submit</button> 
          <button onClick={onCancel}>Cancel</button>
        </form>
      </div>
      </div>
    );
  }
  
  function TaskList({ tasks }) {
    return (
      <div className="task-list">
        <ul>
          {tasks.map((task) => (
            <aside>
            <div class="Task">
                <div class="subtask">
                    <ul class="ul1" >
                        <li  ><b>S.no - {task.id}</b></li>
                        
                    </ul>
                    <ul class="ul2">
                        <li ><b>Level - {task.level}</b></li>
                        
                    </ul>
                    <ul class="ul3">
                        <li ><b>Slot - {task.slot}</b></li>
                        
                    </ul>
                    <ul class="ul4">
                        <li  ><b>Venue - {task.venue}</b></li>
                        
                    </ul>
                    
                </div> 
            </div></aside> 
          ))}
        </ul>
      </div>
    );
  }

export default Bpage