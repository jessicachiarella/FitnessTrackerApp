// import React from "react";
// import { updateActivity } from "../api/index";


// const EditActivity = ({ activityId, allActivities, setAllActivities }) => {
//   const [nameInput, setNameInput] = useState("");
//   const [descriptionInput, setDescriptionInput] = useState("");

//     async function handleSubmit(event){
//         event.preventDefault();
//         const updatedActivity = await updateActivity(
//             activityId,
//             nameInput,
//             descriptionInput
//         );
//         setAllActivities([updatedActivity, ...allActivities]);
//       }
      
      
//       return (
//         <div>
//         <div id="EditBox">
//           <div>
//             <h1>Edit Activity</h1>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 id="ETitle"
//                 placeholder="Name"
//                 value={nameInput}
//                 onChange={(event) => {
//                   setNameInput(event.target.value);
//                 }}
//               />
//             </div>
//             <div>
//               <input
//                 id="EDescription"
//                 placeholder="Description"
//                 value={descriptionInput}
//                 onChange={(event) => {
//                   setDescriptionInput(event.target.value);
//                 }}
//               />
//             </div>
//             <button id="Ebutton" type="Submit">
//               SAVE
//             </button>
//           </form>
//         </div>
//     </div>
//       )
      
// }

// export default EditActivity;