// import PersonsList from './PersonsList';
// import PersonsDetails from './PersonsDetails';
// import AddPerson from './AddPerson';
// import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
    
//         <div className="content">
       
      
//           <Switch>
          

//             <Route exact path="/" />
//             <Home />
            
//             <Route path="/details" component={PersonsDetails} />
//             <Route path="/add" component={AddPerson} />
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import PersonsList from './PersonsList';
import PersonsDetails from './PersonsDetails';
import AddPerson from './AddPerson';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
    
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/AddPerson"> 
          <AddPerson />
        </Route>
        <Route path="/persons/:id">
          <PersonsDetails /> 
        </Route>
        
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;