import React from "react";
// import women  from '../assets/animation/women1.json'
// import Lottie from "lottie-react";
import image from '../assets/image/women.svg'
const ProfileWithSkills = () => {
  return (
    <div className="relative max-w-md mx-auto  mb-322 ">
    //   {/* Profile Image */}
    <div className="relative flex items-center justify-center">
        <img 
       src={image}
       alt="Profile"
       className="w-76 h-76 rounded-full bg-blue-950 shadow-lg"
       />

        
     </div>


{/* <Lottie animationData={women}>

</Lottie> */}


      </div>
  );
};

export default ProfileWithSkills;
