import "./App.css";
import contacts from "./contacts.json"
import {useState} from "react";

let fiveContacts = contacts.splice(0,25)



function App() {
  const [contacts, setContacts] = useState(fiveContacts)
 
  
  return <div className="App">
    <h1>Iron Contacts</h1>  
    <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>

        {contacts.map((contact) => {
          return (
            <tr>
                <td><img src={contact.pictureUrl}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? '🏆' :  ' '}</td>
                <td>{contact.wonEmmy ? '🏆' :  ' '}</td>
            </tr>
          );
        })
      }

        
        
           
        </tbody>
    </table>
    
  </div>;
}
export default App;