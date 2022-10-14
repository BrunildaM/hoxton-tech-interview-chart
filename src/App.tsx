import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";
const studentData = [
  {
    name: "Stephen",
    submissions: {
      beavers: 3,
      stars: 2,
    },
  },
  {
    name: "Eduardo",
    submissions: {
      beavers: 7,
      stars: 1,
    },
  },
  {
    name: "Pepe",
    submissions: {
      beavers: 6,
      stars: 9,
    },
  },
  {
    name: "Gigachad",
    submissions: {
      beavers: 0,
      stars: 10,
    },
  },
];

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  const[students, setStudents] = useState(studentData)
  // const newUser = {
  //   name: "Anna",
  //   submissions: {
  //     beavers: 0,
  //     stars: 10,
  //   },
  // };
  // studentData.push(newUser);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const newStudent = {
            name: e.target.name.value,
            submissions: {
              beavers: e.target.beavers.value,
              stars:e.target.stars.value
            }
          }
         const newStudentsData = [...students,newStudent]
         setStudents(newStudentsData)
        }
      }
      >
        <input type="text" name="name" placeholder="Student name"/>
        <input type="number" id="beavers" name="beavers" placeholder="Beavers" />
        <input type="number" id="stars" name="stars" placeholder="Stars" />
        <button >Submit</button>
      </form>

      <BarChart width={500} height={200} data={studentData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="submissions.beavers" name="beavers" fill="#8884d8" />
        <Bar dataKey="submissions.stars" name="stars" fill="#82ca9d" />
      </BarChart>
    </>
  );
}

export default App;
