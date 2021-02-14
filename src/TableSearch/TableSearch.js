import React, {useState} from 'react'

function TableSearch (props) {
    const [value, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
      }

    return (
        <div className="input-group">
             <div className="input-group-prepend">
                 <button onClick={() => props.onSearch(value)} >Найти</button>
            </div>
            <input 
                type="text" 
                className="form-control"
                onChange={valueChangeHandler} 
                value={value}
            />
        </div>
    )
}

export default TableSearch