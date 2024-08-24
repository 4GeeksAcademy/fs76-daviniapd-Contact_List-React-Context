
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

			contacts: []
		},
		actions: {
			
			addContact: (newContact, onSuccess, onError) => {
				fetch('https://playground.4geeks.com/contact/agendas/sole/contacts', {
				  method: 'POST',
				  headers: {
					'Content-Type': 'application/json'
				  },
				  body: JSON.stringify(newContact)
				})
				.then(resp => resp.json())
				.then(data => {
				  const store = getStore();
				  setStore({ contacts: [...store.contacts, data] }); 
				  onSuccess();
				})
				.catch(error => {
				  console.log(error);
				  onError();
				});
			  },

			  loadContacts: () => {
				return fetch("https://playground.4geeks.com/contact/agendas/sole/contacts")
				  .then(resp => {
					console.log('Response:', resp);
					return resp.json();
				  })
				  .then(data => {
					console.log('Data:', data);
					const store = getStore();
					setStore({ ...store, contacts: data.contacts });
					return data;
				  })
				  .catch(error => console.log(error));
			  },

			  deleteContacts: (contactId) => {
				const store = getStore();
				const requestOptions = { 
				  method: "DELETE",
				  redirect: "follow"
				};
				return fetch("https://playground.4geeks.com/contact/agendas/sole/contacts/" + contactId, requestOptions)
				.then((resp) => {
					console.log('Response:', resp);
					return resp.text();
				})
				.then((data) => {
					console.log('Data:', data);
					const contacts = store.contacts.filter((contact) => contact.id !== contactId);
					setStore({ contacts: contacts });
				})
				.catch((error) => {
				  console.error(error);
				});
			  },

			updateContact: (updatedContact, onSuccess, onError) => {
				fetch(`https://playground.4geeks.com/contact/agendas/sole/contacts/${updatedContact.id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updatedContact)
				})
				.then(resp => resp.json())
				.then(data => {
					const store = getStore();
					const updatedContacts = store.contacts.map(contact => 
						contact.id === updatedContact.id ? updatedContact : contact
					);
					setStore({ contacts: updatedContacts });
					onSuccess();
				})
				.catch(error => {
					console.log(error);
					onError();
				});
			},

		}
	};
};

export default getState;
