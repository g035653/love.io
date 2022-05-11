import react from 'react';
import Card from './Card';


const Manlist = ({ photos }) => {
    const ManArray = Man.map((user, i) => {
    return<Card key ={i} id={Image[i].id} name={Image[i].name} email={Image[i].email}/>
        })    
        return (
  <div>
           {ManArray};
  </div>
    );
}
 
    export default Manlist;