import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
const Todo = ({todo, markCompletedTasK,setUpdateData, deleteTask}) => {
  return (
      <>
    {todo && todo.length ? "" : "No tasks..."}

    {todo &&
      todo
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskbg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">
                    {index + 1 + "." + "" + ""}
                  </span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    title="Completed / Not completed"
                    onClick={(e) => markCompletedTasK(task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {task.status ? null : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}

                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        </>
  )

}

export default Todo