import React, { Component } from "react";
import Input from "./components/Input";
import styles from "./App.scss";
import uuid from "uuid";
import List from "./components/List/index";

class App extends Component {
  state = {
    itemList: [],
    item: "",
    id: uuid(),
  };

  componentDidMount() {
    this.setState({ itemList: JSON.parse(localStorage.getItem("itemList")) });
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { item, id, itemList } = this.state;

    const newItem = { text: item, id: id };
    const newItemList = [...itemList, newItem];

    if (item) {
      this.setState({
        item: "",
        id: uuid(),
        itemList: newItemList,
        isEdit: false,
      });
    }
  };

  handleDelete = (id) => {
    this.setState({
      itemList: this.state.itemList.filter((item) => item.id != id),
    });
  };

  handleEdit = (id, text) => {
    const newItemList = [...this.state.itemList];
    const changedItem = newItemList.find((item) => item.id == id);
    changedItem.text = text;

    this.setState({
      itemList: newItemList,
    });
  };

  handleSave = () => {
    const { itemList } = this.state;
    localStorage.setItem("itemList", JSON.stringify(itemList));
  };
  render() {
    const { item, itemList } = this.state;
    return (
      <div className={styles.App}>
        <Input
          item={item}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <List
          handleEdit={this.handleEdit}
          itemList={itemList}
          handleDelete={this.handleDelete}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default App;
