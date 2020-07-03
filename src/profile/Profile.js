import React from 'react';

import PropTypes from 'prop-types';

const Profile = (props) =>

{    const{data,handleClick,children} = props
        console.log(data) ;
        console.log(handleClick);
        console.log(children);

    const{Fullname,Bio,Profession} = data;
        console.log(Fullname);

       
return (

        <div style ={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            
           
            <h1 style={{fontFamily:'arial' , backgroundColor:'#ff6699',width:'600px',textAlign:'center',color:'white'}}>{Fullname}</h1>
            <h4 style={{fontFamily:'arial' }}>- {Bio} -</h4>
            <h5 style={{fontFamily:'arial',color:'#9475f0'}}>{Profession}</h5>
            {children}
            
            <a href='/' 
            onClick={handleClick} 
            style={{fontSize:"30px" , color:'white',textDecoration:"none",backgroundColor:'#ff6699' ,borderRadius:'9px',width:'600px',textAlign:'center'}}>
            
                Click me
             </a>



        </div>
        
        );
}

Profile.defaultProps =
{
    data : {Fullname:"Rim",Bio:"I learn in ENSIT",Profession:"Artist/Developper From Tunisia"} 
    
}

Profile.propTypes ={
    data: PropTypes.objectOf(PropTypes.string),
    children:PropTypes.element ,
    handleClick:PropTypes.func
    
  } ;

export default Profile;

