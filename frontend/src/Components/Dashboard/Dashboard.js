import React, { useState } from "react";
import "./dashboard.css";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsBookshelf } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";
import { CiBookmarkRemove } from "react-icons/ci";
import { ImEnlarge2 } from "react-icons/im";
import { Avatar, Popover } from "antd";
import Home from "../Home/Home";

const Dashboard = ({user}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="dashboard">
      {toggle ? (
        <div className="dashboard_side_area">
          <div className="dashboard_side_top">
            <Avatar
              className="enlarge_btn_max"
              shape="square"
              size={20}
              icon={<ImEnlarge2 />}
              onClick={() => setToggle(false)}
            />
            <h2>{user.name}</h2>
            <span className="divider_span"></span>
          </div>
          <div className="dashboard_side_main">
            <h3 className="menu_text">Parking Lots</h3>
            <h3 className="menu_text">Parking Slots</h3>
            <h3 className="menu_text">Make Entry</h3>
            <h3 className="menu_text">Generate Bill</h3>
          </div>
          <div className="dashboard_side_footer">
            <button className="log_out_btn">
              LogOut <RiLogoutCircleLine />{" "}
            </button>
          </div>
        </div>
      ) : (
        <div className="dashboard_side_area_min">
          <Avatar
            className="enlarge_btn"
            shape="square"
            size={20}
            icon={<ImEnlarge2 />}
            onClick={() => setToggle(true)}
          />
          <div className="dashboard_side_top">
            <Avatar
              style={{
                marginTop: "15px",
                background: "#CFF5E7",
                color: "#06283D",
              }}
              size={70}
            >
              {user.name}
            </Avatar>
            <span className="divider_min"></span>
          </div>
          <div className="dashboard_side_main_min">
            <Popover placement="right" content={<h6>Parking Lots</h6>}>
              <Avatar
                style={{ background: "#22577A" }}
                size={40}
                icon={<MdPlace />}
              />
            </Popover>
            <Popover placement="right" content={<h6>Parking Slots</h6>}>
              <Avatar
                style={{ background: "#22577A" }}
                size={40}
                icon={<BsBookshelf />}
              />
            </Popover>
            <Popover placement="right" content={<h6>Make Entry</h6>}>
              <Avatar
                style={{ background: "#22577A" }}
                size={40}
                icon={<FaCashRegister />}
              />
            </Popover>
            <Popover placement="right" content={<h6>Generate Bill</h6>}>
              <Avatar
                style={{ background: "#22577A" }}
                size={40}
                icon={<CiBookmarkRemove />}
              />
            </Popover>
          </div>
          <div className="dashboard_side_footer">
            <button className="log_out_btn">
              LogOut <RiLogoutCircleLine />{" "}
            </button>
          </div>
        </div>
      )}
      <div className="dashboard_main">
        <Home fWidth={toggle} />
      </div>
    </div>
  );
};

export default Dashboard;
