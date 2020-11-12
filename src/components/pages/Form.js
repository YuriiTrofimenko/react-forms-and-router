import { useRef, useState } from 'react'
export default function Form() {
  const loginRef= useRef(null)
  const [login, setLogin] = useState('')
  const [loginValid, setLoginValid] = useState(true)
  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('handleFormSubmit')
    // console.log(document.getElementsByName('login')[0].value)
    console.log(loginRef.current.value)
  }
  const handleLoginChaned = e => {
    e.preventDefault();
    const newValue = e.target.value
    console.log(login, newValue)
    if (newValue.match(/^[A-ZА-Я][a-zа-я]{0,24}$/) || !newValue) {
      setLogin(newValue)
      setLoginValid(true)
    } else {
      setLoginValid(false)
    }
  }
  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="login" style={{'color': 'red', 'display': loginValid ? 'none' : 'block'}}>Имя должно начинаться с большой буквы, содержать только буквенные знаки и не превышать 25 символов</label>
        <input ref={loginRef} style={{'display': 'block'}} name="login" type="text" value={login} onChange={handleLoginChaned} required></input>
        <input name="password" type="password"></input>
        <input type="submit" value="submit"></input>
      </form>
    </>
  );
}