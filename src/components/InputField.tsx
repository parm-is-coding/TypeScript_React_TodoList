import React from 'react'
import "./styles.css"

function InputField() {
  return (
    <form className = "input">
        <input className = "inputBox" type="text"/>
        <button className = "goButton">Go</button>
    </form>
  )
}

export default InputField