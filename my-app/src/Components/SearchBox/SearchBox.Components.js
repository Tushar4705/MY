import React, { Component } from 'react'
import './SearchBox.Components.css';
// import Card '../CardComponent/Card.CardComponent.js'
class SearchBox extends Component {
  render() {

    // const {onSearchChange} = this;
    // const filteredMonstars = monstar.filter((monstar)=> {
    //   return monstar.name.toLowerCase().includes(searchField);
    //   });
    // <input className='App__searchBox' type='search' placeholder='Search Monstar' onChange={(event)=>{onSearchChange(event)}}/>



    return (
      <div>
        <input 
          className='App__searchBox'
          type='search' 
          placeholder='Search Monstar' 
          onChange={this.props.onChageHandler}
       />
       {/* <Card monstar = {filteredMonstars}/> */}
      </div>
    )
  }
}
export default SearchBox;
