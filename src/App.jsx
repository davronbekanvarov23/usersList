import { useDispatch } from "react-redux";
import { addForm } from "./features/user/userSlice";
import { useRef, useState } from "react";
import List from "./components/List";
import "./App.css";
//components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const [users,setUsers]=useState([])


  const dispatch = useDispatch();
  const ismRef = useRef();
  const familiyaRef = useRef();
  const davlatRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      Ism: ismRef.current.value,
      Familiya: familiyaRef.current.value,
      Davlat: davlatRef.current.value,
    };
    dispatch(addForm(newObj));
  };

  return (
    <div className="App">
      <Navbar usersLength={users.length} />

      <main>
        {" "}
        <form onSubmit={handleSubmit}>
          <input ref={ismRef} type="text" />
          <input ref={familiyaRef} type="text" />
          <input ref={davlatRef} type="text" />
          <button>submit</button>
        </form>
        <List />
      </main>
      <Footer />
    </div>
  );
}

export default App;
