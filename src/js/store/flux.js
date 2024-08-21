import { contacts } from "../views/contacts";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: [
				{
					fullName: "Pepa Morales",
					email: "holasoypepa@yahoo.org",
					phone: "(-45) 834 023 213",
					adress: "C/Alegría, 123 - San Borondón, 00000"

				},
				{
					fullName: "Carmen Machi",
					email: "holasoyaida@hotmail.org",
					phone: "(+00) 123 456 789",
					adress: "C/Desengaño, 23 - Lavapiés, 00000"

				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
