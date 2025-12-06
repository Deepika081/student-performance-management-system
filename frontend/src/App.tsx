import { useState, useEffect } from 'react'
import './App.css'
import getStudentData from './services/api'
import type { Student } from './types/student'
//import InputField from './components/InputField'

function App() {
  const [data, setData] = useState<Record<string, Student>>({})
  useEffect(() => {
    const fetchData = async () => {
      const result = await getStudentData()
      setData(result)
    }
    fetchData()
  }, [])
  const details = Object.entries(data)
  return (
    <>
      <h1>Student Performance Management</h1>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Math marks</th>
              <th>Science marks</th>
              <th>Social marks</th>
              <th>Math weak areas</th>
              <th>Science weak areas</th>
              <th>Social weak areas</th>
              <th>Guardian Name</th>
              <th>Relation with student</th>
              <th>Contact number</th>
            </tr>
          </thead>
          <tbody>
            {details.map(([roll_no, student]: [string, Student]) => (
              <tr key={roll_no}>
                <td>{roll_no}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.marks?.math}</td>
                <td>{student.marks?.science}</td>
                <td>{student.marks?.social}</td>
                <td>{student.weak_areas?.math.join(',')}</td>
                <td>{student.weak_areas?.science.join(',')}</td>
                <td>{student.weak_areas?.social.join(',')}</td>
                <td>{student.guardian?.name}</td>
                <td>{student.guardian?.relation}</td>
                <td>{student.guardian?.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
