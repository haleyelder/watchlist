import React from "react";

class ProductCategoryRow extends React.Component {
  render() {
    const genre = this.props.genre;
  
    return (
      <tr>
        <th>
          {genre}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const titles = this.props.titles;
    const genre = this.props.genre; 
    return (
      <tr>
        {/* <td>{year}</td> */}
        <td>{genre}</td>
        <td>{titles.title}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    this.props.titles.forEach((titles) => {
        rows.push(
          <ProductCategoryRow
            genre={titles.genre}
          
            key={titles.genre} />
        );
      rows.push(
        <ProductRow
          // year = {year}
          titles={titles}
          key={titles.title} 
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class UserList extends React.Component {
  render() {
    return (
      <div>
        <ProductTable
          titles={this.props.titles}
        />
      </div>
    );
  }
}


export default UserList








// import data from "../testData";

// // const UserList = () => {
// const titles = [
//   {
//     "id": 1,
//     "title": "American Gods",
//     "genre": "fantasy, adventure,drama",
//     "year": 2017,
//     "type": "tv",
//     "seaons": 2,
//   },
//   {
//     "id": 2,
//     "title": "Star Wars: A New Hope",
//     "genre": "sci - fi,fantasy, adventure",
//     "year": 1977,
//     "type": "movie",
//     "seaons": null,
//   },
//   {
//     "id": 3,
//     "title": "Dark",
//     "genre": "sci - fi, fantasy, thriller",
//     "year": 2018,
//     "type": "tv",
//     "seaons": 2,
//   },
//   {
//     "id": 4,
//     "title": "Mr. Robot",
//     "genre": "sci - fi, drama, thriller",
//     "year": 2016,
//     "type": "tv",
//     "seaons": 4,
//   },

//   {
//     "id": 5,
//     "title": "The Fifth Element",
//     "genre": "sci - fi, fantasy",
//     "year": 1995,
//     "type": "movie",
//     "seaons": null,
//   },
// ];

// function UserList(props) {
//     return (
//       <div>
//         {/* {titles} */}
//         <table>
//           <tr>
//             <th>{props.data}id</th>
//             <th>title</th>
//             <th>year</th>
//             <th>type</th>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>Jill</td>
//             <td>Smith</td>
//             <td>50</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Eve</td>
//             <td>Jackson</td>
//             <td>94</td>
//           </tr>
//         </table>
//       </div>
//     );
//   }


// export default UserList;
