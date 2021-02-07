import React from "react";
import Data from "../json/data.json";
const categoriesKey = Object.keys(Data);
const firstCategory = categoriesKey[0];


class Selector extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: firstCategory};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const selectedChoice = this.state.value;
    event.preventDefault();

  }


  render() {
    return (
      <>
        <div className="code-quiz__form">
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                {categoriesKey.map((categories) => (
                    <option value={categories}>{categories}</option>
                ))};
              </select>
            </label>
            <button type="submit">Start</button>
          </form>
        </div>
        </>
    );
  }
}
export default Selector