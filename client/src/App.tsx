import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' children={<Login />} />
          <Route path='/register' children={<Register />} />
          <Route path='/chat' children={<Chat />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
