import React, { Component } from 'react';
import './List.css';

/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item.
*/
class List extends Component {
   renderList() {
       /*
          Javascript map will let you iterate and modify each item in a list.
          In this example, we are changing each item
       */

       const items = this.props.items.map(item => {
         return <div key={item.name}>
        <img className="images" src={item.img}/>
          <div className = "subtitle">
            <b>{item.name}</b>
            <br></br>
            Pokedex #: {item.pokedex}
            <br></br>
            Type: {item.type}
          </div>
         </div>
       });

       return items;
   }

   render() {
       return (
         <div className = "newspaper">
           {this.renderList()}
         </div>
       );
   }
}

export default List;
