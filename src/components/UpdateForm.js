import React from 'react'

const UpdateForm = ({updateData, changeTask, updateTask, cancelUpdate}) => {
  return (
    <>
          {/* update task */}
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control form-control-lg "
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-lg btn-success mr_20"
                onClick={updateTask}
              >
                Update
              </button>
              <button
                className="btn btn-lg btn-warning "
                onClick={cancelUpdate}
              >
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
  )
}

export default UpdateForm