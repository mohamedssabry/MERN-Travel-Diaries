import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./auth/Auth";
import Diaries from "./diaries/Diaries";
import Header from "./header/Header";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import Add from "./diaries/Add";
import DiaryUpdate from "./diaries/DiaryUpdate";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/add" element={<Add />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:id" element={<DiaryUpdate />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
