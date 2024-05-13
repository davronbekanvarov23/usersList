import List from "./components/List";
import "./App.css";
import NewUsersForm from "./components/newUcer/NewUsersForm";
//components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [showmodal, setShowmodal] = useState(false);

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowmodal(false);
    if (e.key === "Escape") setShowmodal(false);
  };
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar />

      <main>
        {/* <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div> */}
        <List />
      </main>
      {showmodal && <NewUsersForm />}
      <button onClick={() => setShowmodal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
