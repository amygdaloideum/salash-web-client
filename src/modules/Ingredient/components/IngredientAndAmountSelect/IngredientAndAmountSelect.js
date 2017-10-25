import React from 'react';
import Select from 'react-select';

const presetMeasures = [
  { value: 'g', label: 'grams'},
  { value: 'cup', label: 'cups'},
];

export default class IngredientSelect extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      tempValue: {
        value: 'custom',
        label: '',
      },
      report: {},
    };
    this.state = this.initialState;
  }

  unselectIngredient = (category, input) => {
    input.onChange(input.value.filter(v => v !== category));
  }

  addIngredient = ingredient => {
    this.props.input.onChange([this.state.tempValue]);
    this.setState(this.initialState);
  }

  valueSelected = option => {
    if (option.value && option.value !== 'custom') {
      this.props.getReport(option.value).then(report => {
        this.setState({ report });
        console.log(report);
      });
    }
    this.setState({ tempValue: option });
  }

  onType = val => {
    this.setState({
      tempValue: {
        value: 'custom',
        label: val,
      }
    });
    return this.props.getIngredients(val);
  }

  render() {
    const { fields, options, label, input } = this.props;
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="tags">
          {input.value.map((ingredient, index) => (
            <span key={index} className="tag is-info is-medium">
              {ingredient.label}
              <button onClick={e => this.unselectIngredient(category, input)} className="delete is-small"></button>
            </span>))
          }
        </div>
        <div className="flex">
          <Select.Async
            name="Ingredient"
            className="grow"
            value={this.state.tempValue}
            loadOptions={this.onType}
            onChange={this.valueSelected}
          />
          {this.state.tempValue.value !== 'custom' &&
            <div className="flex grow">
              <input placeholder="amount" type="number" step="0.2" className="input grow" style={({ width: 'auto' })} />
              <Select
                name="amount"
                value="g"
                className="grow"
                clearable={false}
                options={presetMeasures}
                onChange={console.log}
              />
            </div>
          }
          {this.state.tempValue.value === 'custom' && this.state.tempValue.label &&
          <div>
            <input className="input grow" placeholder="2 cloves" />
          </div>
          }
          <button onClick={this.addIngredient} className="button is-primary">add</button>
        </div>
      </div>
    );
  }
}
