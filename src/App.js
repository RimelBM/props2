import React from 'react';
import Profile from './profile/Profile.js';



function App() {
  
      const Fullname = "Rimel BM";
      const Bio = "I learn in ENSIT" ;
      const Profession = "Artist/Developper From Tunisia" ;

      const  handleClick = (e) => {
        e.preventDefault();
        alert(`My name is  ${Fullname}`);
      };
  
  return (
    
    <div style={{backgroundColor:'#e6e6e6' ,paddingTop:'30px',marginLeft:'130px',marginRight:'130px' ,marginTop:'30px',borderRadius:'9px'}}>
      
      
        <Profile data ={{Fullname,Bio,Profession}}   handleClick={handleClick}  >

              <img src="Rimel.PNG" alt="Rimel" width="600px"/>

          </Profile>
    </div>
  );
}

export default App;
