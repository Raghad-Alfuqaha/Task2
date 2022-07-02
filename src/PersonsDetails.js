



import { Link, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const PersonsDetails = () => {
  const { id } = useParams();
  const { data: persons, error, loading } = useFetch('http://icloudjo.com:8050/REST/persons/' + id);
  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {persons && persons.map((persons,index) =>(
        <p key= {index}>
<br />
        <h1 id='title'> VIEW USER DATA</h1>
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
       <tr key = {id}>
       <td> {persons.id} </td>
     <td> {persons.first_name} </td>
     <td> {persons.middle_name} </td>
     <td>   {persons.last_name}</td>
     <td>   {persons.email}</td>
    
     
       </tr>
       </tbody>
       
       </table>
      </p> )
       )}
    <Link to='/'>&larr; Go back</Link> 
    </div>
  );
};
export default PersonsDetails;






