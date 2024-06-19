import React from 'react'

const Descriptiton = ({description,setDescription,OpenModelDes,IsOpenModelDes}) => {
  return (
    <div className="description">
    {!OpenModelDes ? (
      <div>
        <div className="flex justify-between pb-10">
          <h3>Description</h3>
          <a
            onClick={() => {
              IsOpenModelDes(true);
            }}
          >
            Edit Descriptions
          </a>
        </div>
        {description}
      </div>
    ) : (
      <div>
        <h2 className="mb-3">Description</h2>
        <textarea
          className="p-2"
          placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div>
          <button
            className="cancel rounded"
            onClick={() => {
              IsOpenModelDes(false);
            }}
          >
            Cancel
          </button>
          <button
            className="update rounded"
            onClick={() => {
              IsOpenModelDes(false);
            }}
          >
            Update
          </button>
        </div>
      </div>
    )}
  </div>
  )
}

export default Descriptiton
