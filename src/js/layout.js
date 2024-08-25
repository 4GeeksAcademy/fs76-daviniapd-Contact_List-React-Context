import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { AddContact } from "./views/addContact";
import { Contacts } from "./views/contacts";
import { ContactCard } from "./component/contactCard";
import { AddContactV2 } from "./views/addContactV2";
import injectContext from "./store/appContext";


import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/addContact" element={<AddContact />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/contactCard/:theid" element={<ContactCard />} />
						<Route path="/addContactV2" element={<AddContactV2 />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
