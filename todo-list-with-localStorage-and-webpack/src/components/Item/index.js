import React, { Component } from "react";
import styles from "./styles.scss";
import Edit from "../../images/edit.svg";
import Delete from "../../images/delete.svg";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: `${this.props.item.text}`,
    };
    this.textInput = React.createRef();
  }

  handleEdit = () => {
    this.textInput.current.focus();
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleEdit(this.props.item.id, this.state.inputValue);
    this.textInput.current.blur();

    if (this.state.inputValue == "") {
      alert("You need to type something.");
      this.textInput.current.focus();
    }
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  render() {
    const { handleDelete } = this.props;
    return (
      <li className={styles.Item}>
        <input type="checkbox" id="checkbox" />

        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            className={styles.text}
            value={this.state.inputValue}
            ref={this.textInput}
          />
        </form>
        <div className={styles.Buttons}>
          <div onClick={this.handleEdit}>
            <img src={Edit} />
          </div>
          <div onClick={handleDelete}>
            <img src={Delete} />
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
