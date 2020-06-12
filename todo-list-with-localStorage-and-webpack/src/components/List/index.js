import React, { Component } from "react";
import Item from "../Item/index";
import styles from "./styles.scss";

class List extends Component {
  render() {
    const { itemList, handleDelete, handleEdit, handleSave } = this.props;
    return (
      <ul className={styles.List}>
        <p>Your Todo List</p>
        {itemList.map((item) => {
          return (
            <Item
              handleDelete={() => handleDelete(item.id)}
              handleEdit={handleEdit}
              item={item}
              key={item.id}
            />
          );
        })}
        <button onClick={handleSave} className="ui inverted blue button">
          Save
        </button>
      </ul>
    );
  }
}

export default List;
