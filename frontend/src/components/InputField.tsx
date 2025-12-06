import React from 'react'

const InputField = () => {
    return (
        <form className='input'>
            <input type='input' placeholder='Enter a task' className='input_box'></input>
            <button className='input_submit' type='submit'>GO</button>
        </form>
    )
}

export default InputField
