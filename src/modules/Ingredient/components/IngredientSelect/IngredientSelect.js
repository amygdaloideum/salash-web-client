import React from 'react';
import { Field } from 'redux-form';

class ingredientsSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //chips: [],      
      value: ''
    }
  }

  addChip = () => {
    if (!this.state.value || ~this.props.input.value.indexOf(this.state.value)) {
      this.setState({ value: '' });
      return;
    }
    const chips = [...this.props.input.value, this.state.value];
    this.props.input.onChange(chips);
    this.setState({ value: '' });
  }

  removeChip = (i) => {
    const chips = [
      ...this.props.input.value.slice(0, i),
      ...this.props.input.value.slice(i + 1)
    ];
    this.props.input.onChange(chips);
  }

  updateValue = evt => {
    this.setState({
      value: evt.target.value.toLowerCase().replace(/[^a-z\s]/g,'')
    });
  }

  handleKeyPress = evt => {
    if(evt.key === 'Enter') {
      this.addChip();
    }
  }


  render() {
    return (
      <div>
        <div>
          {
            this.props.input.value.map((chip, i) => (
              <div key={i}>
                <span>{chip}</span>
                <i onClick={() => this.removeChip(i)} className="material-icons">clear</i>
              </div>
            ))
          }
        </div>
        <div>
          <input value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.updateValue} type="text" />
          <button type="button" onClick={this.addChip}><i className="material-icons">add</i></button>
        </div>
      </div>
    );
  }
}


export default ingredientsSelect;