import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: "item 1",
//     },
//     {
//       id: 2,
//       name: "item 2",
//     },
//     {
//       id: 3,
//       name: "item 3",
//     },
//   ]);

//   const handleAddItem = () => {
//     const newItem = {
//       id: items.length + 1,
//       name: `item ${items.length + 1}`,
//     };

//     setItems([newItem, ...items]);
//   };

//   console.log("====================================");
//   console.log(items);
//   console.log("====================================");

//   return (
//     <>
//       <button onClick={handleAddItem}>Add item</button>
//       <ul>
//         {items.map((item, index) => {
//           return (
//             <li key={item.id}>
//               <input defaultValue={item.name} />
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

const initTasks = [
  {
    name: "Lau nhà",
    status: "doing",
  },
  {
    name: "Học bài",
    status: "do",
  },
];

function App() {
  const [tasks, setTasks] = useState(initTasks);

  // if (isLogin) {
  //   return (
  //     <div>
  //       <h1>Hello world</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <input name="task" />
    </div>
  );
}

export default App;
