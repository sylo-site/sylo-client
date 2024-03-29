import { useEffect, useState } from "react";
import { styloLogo } from "../../assets";
export const CommonHeader = ({ user = "Baba" }) => {
  const [userData,setUserData] = useState(null)
  const bulletItems = [
    "✅ Verified Properties",
    "✅ 24x7 Assistance",
    "✅ Best Price Guaranteed",
  ];

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    setUserData((prev)=>user)
  },[])

  return (
    <>
      <header className="sylo-header">
        <div className="sylo-logo">
          {/* <img className="sylo-header-logo" src={styloLogo} alt="sylo-logo" /> */}
          <h1>SYLO</h1>
        </div>

        <div className="sylo-heade_desc">
          <h2>Your Haven Away from Home.</h2>
          <p>
            Book student accommodations near top universities and cities across
            the globe.
          </p>
          <div className="bullet-items">
            {bulletItems?.map((item) => {
              return <span className="bullet">{item}</span>;
            })}
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search by City, University or Property"
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="user-profile">
          <button> <span><i class="fa-regular fa-user"></i></span>  Welcome {userData?.name}</button>
        </div>
      </header>
    </>
  );
};
