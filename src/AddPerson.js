// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const AddPerson = () => {
//   const [first_name, setFirstName] = useState('');
//   const [middle_name, setMiddleName] = useState('');
//   const [last_name, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [description, setDescription] = useState('');
//   const [loading, setLoading] = useState(false);

//   const history = useHistory();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const person = { first_name , middle_name ,last_name ,email ,description } 
//     setLoading(true);
//     fetch('http://icloudjo.com:8050/REST/persons', {
//       method: 'POST', // GET POST PUT DELETE 
//       body: JSON.stringify( person ),
//       headers: { 'content-type': 'application/json' }, //mime type
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setLoading(false);
//         // history.go(-1); // Home
//         history.push('/'); // Home
//       });
//   };
//   return (
//     <div>
      
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor='first_name'>First Name</label>
//           <input
//             type='text'
//             id='first_name'
         
//             required
//             value={first_name}
//             onChange={e => setFirstName(e.target.value)}
//           />
//            <label htmlFor='middle_name'>Middle Name</label>
//           <input
//             type='text'
//             id='middle_name'
           
//             required
//             value={middle_name}
//             onChange={e => setMiddleName(e.target.value)}
//           />
//            <label htmlFor='last_name'>Last Name</label>
//           <input
//             type='text'
//             id='last_name'
            
//             required
//             value={last_name}
//             onChange={e => setLastName(e.target.value)}
//           />

//         </div>
//         <div>
//           <label htmlFor='commenter_email'>Email</label>
//           <input
//             type='email'
//             id='commenter_email'
           
//             required
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor='description'>Description</label>
//           <input
//             id='description'
//             name='description'
//             value={description}
//             required
//             onChange={e => setDescription(e.target.value)} /> 
//         </div>
//         <div>
//           <button type='submit'>{loading ? 'Loading...' : 'Save'}</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddPerson;





import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css'
const AddPerson = () => {
  const [first_name, setFirstName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const person = { first_name , middle_name ,last_name ,email ,description } 
    setLoading(true);
    fetch('http://icloudjo.com:8050/REST/persons', {
      method: 'POST',
      body: JSON.stringify( person ),
      headers: { 'content-type': 'application/json' }, 
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoading(false);
       
        history.push('/'); 
      });
  };
  return (
  
<div className="card" style={{  borderRadius : '15px' }} >
  <div className="card-body ">

      <h2 className="text-uppercase text-center mb-5">add new user</h2>
      <form onSubmit={handleSubmit}>
       
        <div className="form-outline mb-4">
          <label htmlFor='first_name'>First Name</label>
          <input
          className ="form-control form-control-lg"
            type='text'
            id='first_name'
         
            required
            value={first_name}
            onChange={e => setFirstName(e.target.value)}
          /> </div>
          <div className="form-outline mb-4">
           <label htmlFor='middle_name'>Middle Name</label>
          <input
          className ="form-control form-control-lg"
            type='text'
            id='middle_name'
           
            required
            value={middle_name}
            onChange={e => setMiddleName(e.target.value)}
          /> </div>
           <div className="form-outline mb-4">
           <label htmlFor='last_name'>Last Name</label>
          <input
          className ="form-control form-control-lg"
            type='text'
            id='last_name'
            
            required
            value={last_name}
            onChange={e => setLastName(e.target.value)}
          />
          </div>
        
       
        <div className="form-outline mb-4">
          <label htmlFor='commenter_email'>Email</label>
          <input
          className ="form-control form-control-lg"
            type='email'
            id='commenter_email'
           
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
       <div className="form-outline mb-4">
          <label htmlFor='description'>Description</label>
          <input
          className ="form-control form-control-lg"
            id='description'
            name='description'
            value={description}
            required
            onChange={e => setDescription(e.target.value)} /> 
        </div>
        <div class="px-5 py-4">
          <button type='submit' className="btn  btn-lg">{loading ? 'Loading...' : 'Save'}</button>
        </div>


       
     
        </form>

</div>

</div>


  );
};

export default AddPerson;







