import './App.css'

import Schools from './CollegeBasketballTeams.json'

function Header() {
  return(  
  <>
    <h1>Welcome to the NCAA Basketball Database</h1>
  </>)
}
function SchoolCard({  
  school,
  name,
  city,
  state,
} : {
    tid: number;
    cid: number;
    did: number;
    school: string;
    name: string;
    abbrev: string;
    pop: number;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
  }) {
  return (
    <>
    <td> {school} </td>
    <td> {name} </td>
    <td> {city}, {state} </td>
    </>
  );
}

function SchoolList() {
  return (
    <>
    <table className="centered-table">
      <thead>
        <tr>
          <td>School Name</td>
          <td>School Mascot</td>
          <td>Location</td>
        </tr>
      </thead>
      <tbody> 
          {Schools.teams.map((SchoolData) => (
          <tr> <SchoolCard {...SchoolData} /> </tr>
          ))}
      </tbody>   
    </table>

  </>
  )
  
}

function App() {

  return (
    <>
     <Header/>
     <SchoolList />
    </>
  )
}

export default App
