import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Title = props => (
  <tr>
    <td>{props.title.username}</td>
    <td>{props.title.description}</td>
    <td>{props.title.year}</td>
    <td>{props.title.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.title._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTitle(props.title._id) }}>delete</a>
    </td>
  </tr>
)

export default class TitleList extends Component {
  constructor(props) {
    super(props);
    this.deleteTitle = this.deleteTitle.bind(this);
    this.state = { titles: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/titles/")
      .then((response) => {
        this.setState({ titles: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteTitle(id) {
    axios
      .delete("http://localhost:5000/titles/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      titles: this.state.titles.filter((el) => el._id !== id),
    });
  }

  titleList() {
    return this.state.titles.map(currentTitle => {
      return <Title title={currentTitle} deleteTitle={this.deleteTitle} key={currentTitle._id}/>;
    })
  }


  render() {
    return (
      <div>
        <h3>Logged Titles</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Title</th>
              <th>Year</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.titleList()}</tbody>
        </table>
      </div>
    );
  }
}
