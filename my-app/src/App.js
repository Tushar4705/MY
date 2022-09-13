import { Component } from 'react'; //for implementation of the component class
import './App.css';
import Card from './Components/CardComponent/Card.CardComponent.js'
import SearchBox from './Components/SearchBox/SearchBox.Components';

// function () {        instade of using functions we are using a class
class App extends Component{
  constructor(){
    
    super();            //we need to implement "super " every time we implement constructor
    this.state = {
      monstar:[ ],
      searchField: ''
    }
    // this.state = { name:{firstname:'Tushar', lastname: 'Biswas'}, 
                          // comp: "Google"};
    
  }
  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users') //this is a promis 
    .then((response)=> response.json())
    .then((users) => this.setState(
      ()=>{
        return{monstar: users};
      }
    ));

  }





  onSearchChange=(event)=>{
    const searchField = event.target.value.toLowerCase();
    this.setState(()=>{
      return{searchField};
    }
            )
  }








  render(){         //when a class is used we need to implement this render function  to implement the html part

    const {monstar, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonstars = monstar.filter((monstar)=> {
      return monstar.name.toLowerCase().includes(searchField);
      });

    return (
      <div className="App">
        <header className="App-header">
        <SearchBox/>
          <input className='App__searchBox' type='search' placeholder='Search Monstar' onChange={(event)=>{onSearchChange(event)}}/>
          <Card monstar = {filteredMonstars}/>





              {/* {filteredMonstars.map((monstar) => {return (
            // <div key={monstar.id}>
            //         <h1> 
            //           {monstar.name}
            //         </h1>
            //       </div> 
           ) })} */} 

          
          {/*
          {/* <p> */}
            {/* Hi {this.state.name.firstname} {this.state.name.lastname} & I am currently working at {this.state.comp}   */}
            {/* when we need JS variables we implement '{}' */}
          {/* </p>            */}
          {/* <button className='App__button' */}
            {/* onClick={()=>{ */}
              {/* this.setState(    Fallback format explained */}
                {/* ()=>{ */}
                  {/* return{     //update part */}
                    {/* name:{firstname: 'Sujit', lastname: 'Biswas'}, */}
                    {/* comp:'Biswas Silver House' */}
                  {/* }; */}
                {/* }, */}
                {/* ()=>{ // Fall back part */}
                   {/* console.log(this.state) */}
                {/* }); */}
            {/* }} */}
          {/* > */}
          {/* Change Name */}
          {/* </button> */}          
        </header>
      </div>
    );
  }
}
  

export default App;
