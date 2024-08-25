import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="full-screen-bg">

	<div className="d-flex justify-content-center align-items-center h-75 flex-column">
	<h1 className="text-center" id="titleHome">CHOOSE YOUR CONTACT LIST EXPERIENCE</h1>
        <div className="mt-4">
          <Link to="/addContactV2">
            <span className="btn btn-lg me-4" id="button-dpd" role="button">
              daviniapd Design
            </span>
          </Link>
          <Link to="/addContact">
            <span className="btn btn btn-lg" id="button-4geeks" role="button">
              4geeks Design
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};