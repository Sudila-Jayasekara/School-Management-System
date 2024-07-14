import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

function App() {

  const navigate = useNavigate();

  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col space-y-4 justify-center items-center min-h-screen bg-blue-400'>
      <p className='text-3xl font-bold'>Hi Bro</p>
      <button onClick={() => navigate('/users')}  className='bg-white text-black px-6 py-3 rounded hover:bg-gray-300'>Users</button>
    </div>
  )
}

export default App