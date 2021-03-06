
const PersonsList = ({...props}) => {
    const {  list} = props;
    return (
      <div className='list'>
               <h1 id='title'> VIEW ALL USERS DATA</h1>

       
        {list.map(person => (
           
          <div key={person.id} className="view" >
          <table className="table " id='users'  >
        <thead >
    <tr>
    <th scope="col">ID</th>
      <th scope="col">FirstName</th>
      <th scope="col">MiddleName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email </th>
     
    </tr>
  </thead>
  <tbody>
       <tr >
       <td> {person.id} </td>
     <td> {person.first_name} </td>
     <td> {person.middle_name} </td>
     <td>   {person.last_name}</td>
     <td>   {person.email}</td>
    
     
       </tr>
       </tbody>
       
       </table>
           
          </div>
        ))}
      </div>
    );
  };
  export default PersonsList;
  








