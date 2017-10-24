import React from 'react';

class CategorySelect extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e, option) => {
    const input = this.props.input;
    const index = input.value.findIndex(v => v === option);

    input.onChange(input.value.concat([e.target.value]));
  }

  unselectIngredient = (category, input) => {
    input.onChange(input.value.filter(v => v !== category));
  }

  isChecked(option) {
    return ~this.props.input.value.findIndex(v => v === option);
  }

  render() {
    const { fields, options, label, input } = this.props;
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="tags">
          {input.value.map((category, index) => (
          <span key={index} className="tag is-info is-medium">
            {category}
            <button onClick={ e => this.unselectIngredient(category, input)} className="delete is-small"></button>
          </span>))
          }
        </div>
        <div className="control">
          <div className="select">
            <select placeholder="select" value={''} onChange={this.handleChange}>
              <option></option>
              {
                options.map((option, index) => <option key={index}>{option}</option>)
              }
            </select>
          </div>
          <button onClick={this.handleChange} className="button is-primary">add</button>
        </div>
      </div>
    );
  }
}


export default CategorySelect;