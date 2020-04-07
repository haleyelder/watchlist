import React from "react";

const UserList = () => {
  const titles = 
   [
    {
      "id": 1,
      "title": "American Gods",
      "genre": "fantasy, adventure,drama",
      "year": 2017,
      "type": "tv",
      "seasons": 2,
    },
    {
      "id": 2,
      "title": "Star Wars: A New Hope",
      "genre": "sci - fi,fantasy, adventure",
      "year": 1977,
      "type": "movie",
      "seasons": null,
    },
    {
      "id": 3,
      "title": "Dark",
      "genre": "sci - fi, fantasy, thriller",
      "year": 2018,
      "type": "tv",
      "seasons": 2,
    },
    {
      "id": 4,
      "title": "Mr. Robot",
      "genre": "sci - fi, drama, thriller",
      "year": 2016,
      "type": "tv",
      "seasons": 4,
    },

    {
      "id": 5,
      "title": "The Fifth Element",
      "genre": "sci - fi, fantasy",
      "year": 1995,
      "type": "movie",
      "seasons": null,
    },
  ];


    /* future:
    - where to watch? 
    - icons for "genre"s
    */
// console.log(titles[0].title)
// const shows = titles.map(item => {
//   const container = {}
//   container[item.id] = item.id
//   return container;
// })

// console.log(shows)
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Year</th>
          <th>Type</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    </div>
  );
};

export default UserList;
