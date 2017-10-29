import React from 'react';

class CategorySelect extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e, option) => {
    const { input, options } = this.props;
    if(input.value.find(v => v.id === e.target.value)) {
      return;
    }
    const selectedOption = options.find(o => o.id === e.target.value);
    const index = input.value.findIndex(v => v === option);

    input.onChange(input.value.concat([selectedOption]));
  }

  unselectIngredient = (category, input) => {
    input.onChange(input.value.filter(v => v.id !== category.id));
  }

  render() {
    const { fields, options, label, input } = this.props;
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="tags">
          {input.value.map((category, index) => (
          <span key={index} className="tag is-info is-medium">
            {category.name}
            <button onClick={ e => this.unselectIngredient(category, input)} className="delete is-small"></button>
          </span>))
          }
        </div>
        <div className="control">
          <div className="select">
            <select placeholder="select" value={""} onChange={this.handleChange}>
              <option value="" disabled>-- choose categories --</option>
              {
                options.map((option, index) => <option key={index} value={option.id}>{option.name}</option>)
              }
            </select>
          </div>
        </div>
      </div>
    );
  }
}


export default CategorySelect;