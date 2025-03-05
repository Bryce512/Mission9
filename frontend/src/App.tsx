import './App.css'
import Schools from './CollegeBasketballTeams.json'

function Header() {
  return(  
  <>
    <h1>Welcome to the NCAA Basketball Database</h1>
  </>)
}
function SchoolCard({  // Receives SchoolData from School list
  school,
  name,
  city,
  state,
} : {
    school: string;
    name: string;
    city: string;
    state: string;
  }) {
  return (
    <>
    <td> {school} </td>
    <td> {name} </td>
    <td> {city}, {state} </td>
    </>
  );
}

function SchoolList() { // Creates a list of all School data
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
          {Schools.teams.map((SchoolData) => ( // Dynamically adds new card for each school
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
