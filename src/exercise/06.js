// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState()

  const handleSubmit = e => {
    e.preventDefault();
    // onSubmitUsername(e.target.elements[0]?.value)

    // EC1
    onSubmitUsername(inputRef.current.value)
  }

  // EC2
  const handleChange = () => {
    const value = inputRef.current.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" ref={inputRef} onChange={handleChange} />
      </div>
      <button type="submit" disabled={error ? true : false}>Submit</button>
      {error && <div role="alert">{error}</div>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)

  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
