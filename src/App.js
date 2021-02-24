import React from 'react'
import { data } from './data'
import Tutors from './tutors'
function App() {
  // only when we are actually accessing an api
  // const [loading,setLoading] = useState(true)
  const [tutors, setTutors] = React.useState([])
  /* const fetchData = async () =>{
    try{
      const tutors = await data.json()
      setTutors(tutors)
    }
    catch (e){
      console.log(e)
    }  
  }

  React.useEffect(()=>{
    fetchData()
  },[]) */

  React.useEffect(()=>{
    setTutors(data)
  },[])

  return (
    <main>
      <Tutors tutors = {tutors} />
    </main>
  )
}

export default App
