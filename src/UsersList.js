

  const UsersList = ({ persons }) => {
    return (
      <div className="person-list">
        {persons.map(person => (
          <div className="person-preview" key={person.id} >
            <h2>{ person.id }</h2>
          </div>
        ))}
      </div>
    );
  }
   
  export default UsersList;