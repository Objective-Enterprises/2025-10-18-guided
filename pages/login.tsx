import { useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  return (
    <form
      className='container login-form'
      onSubmit={(event) => {
        event.preventDefault()
        if (username === 'admin' && password === 'foodie123') {
          localStorage.setItem('token', 'fake-jwt-token')
          router.push('/menu')
        }
      }}
    >
      <input
        placeholder='username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        placeholder='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}