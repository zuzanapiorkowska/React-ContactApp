import React from "react";
import { Header } from "./Header";
import { Card } from "./Card";
import { contacts } from "./contacts";

function createCard(contact) {
  return (<Card 
  key={contact.id}
  id={contact.id}
  name={contact.name}
  src={contact.src}
  phone={contact.phoneNumber}
  email={contact.email}/>);
}

export function App() {
  console.log(contacts);
  return (<div>
    <Header />
    {contacts.map(createCard)}
  </div>
  );
}
