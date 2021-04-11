import { Component } from "react";

class Form extends Component {
  state = { data: {}, errors: {} };
  handelChange = ({ target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };
}

export default Form;
