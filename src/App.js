import React, { Component } from "react";
import "./App.module.css";
import { Wrapper, Title } from "./components/General.styled";
import ContactForm from "./components/contactForm/ContactForm";
import ContactsList from "./components/contactsList/ContactsList";
import Filter from "./components/filter/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    if (localStorage.components) {
      this.getLocalContacts();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      this.updateLocalContacts();
    }
  }

  getLocalContacts = (prevProps, prevState) => {
    const parsedData = JSON.parse(localStorage.getItem("contacts"));
    this.setState({ contacts: parsedData });
  };

  updateLocalContacts = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = (evt) => {
    const contactForDelete = this.state.contacts.findIndex(
      (contact) => contact.id === evt.currentTarget.id
    );
    const newContacts = this.state.contacts;

    newContacts.splice(contactForDelete, 1);

    this.setState({
      contacts: newContacts,
    });

    this.updateLocalContacts();
  };

  handleChange = (evt) => {
    const { name } = evt.target;

    this.setState({ [name]: evt.target.value });
  };

  filter = () => {
    const { contacts } = this.state;

    const filteredContacts = contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filteredContacts;
  };

  render() {
    const { filter, contacts } = this.state;
    const notification = <h2>Нет сохраненных контактов `=(</h2>;

    return (
      <Wrapper>
        <Title>Телефонная книга:</Title>
        <ContactForm addContact={this.addContact} contacts={contacts} />
        <Filter filter={filter} onChange={this.handleChange} />
        {this.state.contacts.length < 1 ? (
          notification
        ) : (
          <ContactsList
            contacts={this.filter}
            deleteContact={this.deleteContact}
          />
        )}
      </Wrapper>
    );
  }
}
