import React from "react";

const UserList = () => {
  const titles = [
    {
      "id": 1,
      "title": "American Gods",
      "genre": "fantasy, adventure,drama",
      "year": 2017,
      "type": "tv",
      "seaons": 2,
    },
    {
      "id": 2,
      "title": "Star Wars: A New Hope",
      "genre": "sci - fi,fantasy, adventure",
      "year": 1977,
      "type": "movie",
      "seaons": null,
    },
    {
      "id": 3,
      "title": "Dark",
      "genre": "sci - fi, fantasy, thriller",
      "year": 2018,
      "type": "tv",
      "seaons": 2,
    },
    {
      "id": 4,
      "title": "Mr. Robot",
      "genre": "sci - fi, drama, thriller",
      "year": 2016,
      "type": "tv",
      "seaons": 4,
    },

    {
      "id": 5,
      "title": "The Fifth Element",
      "genre": "sci - fi, fantasy",
      "year": 1995,
      "type": "movie",
      "seaons": null,
    },
  ];

// to render next
  // for (var items in titles) {
  //   return titles[items]
  // }
  // const items = titles.map(x => {
  //   const title = Object.getOwnPropertyNames(x.title).map(key => {
  //     return `TITLE: ${x.title}`
  //   }).join(',')

  //   return `GENRE: ${x.genre}\n\n${title}`;
  // }).join('\n\n---\n\n')

  return (
    <div>
      {items}
      <table>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>year</th>
          <th>type</th>
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
