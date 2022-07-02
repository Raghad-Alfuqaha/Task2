

import useFetch from './useFetch'
import PersonsList from './PersonsList';
const Home = () => {
 
  const { data: persons, error, loading } = useFetch('http://icloudjo.com:8050/REST/persons');
 
  return (
    <div className='home'>
   
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {
    
        persons && (<PersonsList list={persons} title='persons'/> )
      }

     
     
    </div>
  );
};
export default Home;