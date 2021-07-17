import PropTypes from "prop-types";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input, Label, Button, Form } from "./ContactForm.styled";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const { name } = evt.target;

    this.setState({ [name]: evt.target.value });
  }

  handleSubmit(evt) {
    const { name, number } = this.state;
    const id = uuidv4();
    const contact = { id, name, number };
    const notUniqueName = this.props.contacts.some(
      (item) => item.name === this.state.name
    );
    const notUniqueNumber = this.props.contacts.some(
      (item) => item.number === this.state.number
    );

    evt.preventDefault();

    if (notUniqueName) {
      return alert(this.state.name + " уже добавлен(а) в список контактов");
    } else if (notUniqueNumber) {
      return alert("Уже добавлен контакт с номером: " + this.state.number);
    } else if (this.state.name === "" || this.state.number === "") {
      return alert("Пожалуйста, введите Имя и номер.");
    } else {
      this.props.addContact(contact);
      this.clear();
    }
  }

  clear() {
    this.setState({ name: "", number: "" });
  }

  render() {
    const { name, number } = this.state;

    return (
      <Form>
        <Label>
          Имя:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Введите имя"
            onChange={this.handleChange}
            value={name}
          />
        </Label>
        <Label>
          Номер:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Введите номер телефона"
            onChange={this.handleChange}
            value={number}
          />
        </Label>
        <Button type="submit" onClick={this.handleSubmit}>
          Подтвердить
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
