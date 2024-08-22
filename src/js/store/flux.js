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
					name: "",
					email: "",
					phone: "",
					address: ""

				},

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			addContact: (newContact, onSuccess, onError) => {
				fetch('https://playground.4geeks.com/contact/agendas/sole/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newContact)
				})
				.then(resp => {
					if (!resp.ok) {
						throw new Error('Error creating user');
					}
					return resp.json();
				})
				.then(data => {
					console.log("User created:", data);
					const store = getStore();
					setStore({ contacts: [...store.contacts, data] });
					onSuccess();
				})
				.catch(error => {
					console.log(error);
					onError();
				});
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
