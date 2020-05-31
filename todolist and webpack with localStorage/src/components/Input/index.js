import React, { Component } from "react";
import Add from "../../images/add.svg";
import styles from "./styles.scss";

class Input extends Component {
  render() {
    const { handleChange, handleSubmit, item } = this.props;
    return (
      <div className={styles.Input}>
        <form onSubmit={handleSubmit}>
          <input
            value={item}
            autoFocus={true}
            onChange={handleChange}
            className={styles.userInput}
            type="text"
          ></input>
        </form>
        <div onClick={handleSubmit} className={styles.Button}>
          <img src={Add} alt="" />
        </div>
      </div>
    );
  }
}

export default Input;
