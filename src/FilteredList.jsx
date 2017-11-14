import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import { Button, ButtonGroup} from 'react-bootstrap';
import List from './List';
import './FilteredList.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            generation: "",
            search: "",
            pokedex: "no"
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
      if (this.state.type == "All" && this.state.generation == "All") {
        return item.name.toLowerCase().search(this.state.search) !== -1
      }

      if (this.state.type == "All" && this.state.generation != "All") {
        return item.name.toLowerCase().search(this.state.search) !== -1
        && item.generation.search(this.state.generation) !== -1;
      }

      if (this.state.generation == "All" && this.state.type != "All") {
        return item.name.toLowerCase().search(this.state.search) !== -1
        && item.type.search(this.state.type) !== -1
      }

      else {
        return item.name.toLowerCase().search(this.state.search) !== -1
        && item.type.search(this.state.type) !== -1
        && item.generation.search(this.state.generation) !== -1;
      }
    }

    filterType = (event) => {
      if (event == 1) {
        this.setState({type: "All"})
      }
      if (event == 2) {
        this.setState({type: "Grass"})
      }
      if (event == 3) {
        this.setState({type: "Fire"})
      }
      if (event == 4) {
        this.setState({type: "Water"})
      }
    }

    filterGeneration = (event) => {
      if (event == 1) {
        this.setState({generation: "All"})
      }
      if (event == 2) {
        this.setState({generation: "Kanto"})
      }
      if (event == 3) {
        this.setState({generation: "Johto"})
      }
      if (event == 4) {
        this.setState({generation: "Hoenn"})
      }
      if (event == 5) {
        this.setState({generation: "Sinnoh"})
      }
      if (event == 6) {
        this.setState({generation: "Unova"})
      }
      if (event == 7) {
        this.setState({generation: "Kalos"})
      }
      if (event == 8) {
        this.setState({generation: "Alola"})
      }
    }

    sortItem = (item) => {
      if (this.state.pokedex == "no") {
        this.props.items.sort(function(a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }

      else {
        this.props.items.sort(function(a, b) {
          var numA = a.pokedex;
          var numB = b.pokedex;
          if (numA < numB) {
            return -1;
          }
          if (numA > numB) {
            return 1;
          }
          return 0;
        });
      }
      return item;
    }

    sortValues1 = (event) => {
      this.setState({pokedex: "yes"})
    }

    sortValues2 = (event) => {
      this.setState({pokedex: "no"})
    }

    sortAndFilter = (item) => {
      item = this.sortItem(item);
      item = item.filter(this.filterItem);
      return item;
    }

    render() {
        return (
            <div className="filter-list">
              <div className="wrapper">
                <div className = "one">
                  <h4> Filter by </h4>
                </div>
                <div className = "two">
                <DropdownButton id="dropdown-size-large" title="Type" onSelect = {this.filterType}>
                     <MenuItem eventKey="1">All</MenuItem>
                     <MenuItem eventKey="2">Grass</MenuItem>
                     <MenuItem eventKey="3">Fire</MenuItem>
                     <MenuItem eventKey="4">Water</MenuItem>
                </DropdownButton>
                </div>
                <div className = "three">
                <DropdownButton id="dropdown-size-large" title="Region" onSelect = {this.filterGeneration}>
                     <MenuItem eventKey="1">All</MenuItem>
                     <MenuItem eventKey="2">Kanto</MenuItem>
                     <MenuItem eventKey="3">Johto</MenuItem>
                     <MenuItem eventKey="4">Hoenn</MenuItem>
                     <MenuItem eventKey="5">Sinnoh</MenuItem>
                     <MenuItem eventKey="6">Unova</MenuItem>
                     <MenuItem eventKey="7">Kalos</MenuItem>
                     <MenuItem eventKey="8">Alola</MenuItem>
                </DropdownButton>
                </div>
                <div className = "four">
                  <h4>Sort by</h4>
                </div>
                <div className = "five">
                  <ButtonGroup>
                    <Button onClick = {this.sortValues1}>
                      Pokedex #
                    </Button>
                    <Button onClick = {this.sortValues2}>
                      Alphabetical
                    </Button>
                  </ButtonGroup>
                </div>
                <div className = "eight">
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                </div>
                <div className = "seven">

                <List items={this.sortAndFilter(this.props.items)}/>
                </div>
              </div>
            </div>
        );
    }
}

export default FilteredList;
