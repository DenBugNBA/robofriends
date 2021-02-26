import React, {Fragment, Component} from 'react';
import "./App.css";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import { robots } from "../robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // console.log(event.target.value);

    // console.log(FilteredRobots);
  };
  render() {
    const {robots, searchfield} = this.state;
    const FilteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <Fragment>
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={FilteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </Fragment>
      );
    }
  }
}
export default App;

