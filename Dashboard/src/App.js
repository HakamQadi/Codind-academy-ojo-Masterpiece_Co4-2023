import './App.css';
import RegisterForm from './components/RegisterForm';
import Loginform from './components/Loginform';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
// import { useState } from 'react';
// import SideNav from './components/dashborad/SideNav';
import UsersTable from './components/dashborad/UsersTable';
// import Home from './components/dashborad/Home';
import AddUser from './components/dashborad/AddUser';
import SideNav from './components/dashborad/SideNav';
import NavBar from './components/dashborad/NavBar';
import ViewOrders from './components/dashborad/ViewOrders';
function App() {


  // const receivedData = (data) => {
  //   setId(data);
  // };

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<RegisterForm />} /> */}
        <Route path="/" element={<Loginform />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <NavBar/>
      <div className="App" style={{ display: "flex" }}>
        <SideNav />
        <Routes>
          <Route path="/dashboard" element={<UsersTable/>} />
          <Route path="/dashboard/adduser" element={<AddUser  />} />
          <Route path="/view-orders" element={<ViewOrders />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
