import React from 'react';
import Select from 'react-select';

import cuid from 'cuid';

import IngredientList from '../ingredient-list';

const presetMeasures = [
  { value: 'g', label: 'grams' },
  { value: 'cup', label: 'cups' },
];

export default class IngredientSelect extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      selectedIngredient: {
        value: '',
        label: '',
      },
      custom: true,
      unit: 'g',
      amount: 1,
      customAmount: '',
    };
    this.state = this.initialState;
  }

  unselectIngredient = (entry, input) => {
    input.onChange(input.value.filter(e => e.ingredient.value !== entry.ingredient.value));
  }

  addIngredient = ingredient => {
    const value = {
      ingredient: this.state.selectedIngredient,
      amount: this.state.amount,
      unit: this.state.unit,
      custom: this.state.custom,
      customAmount: this.state.customAmount,
    };
    if (value.custom) {
      value.ingredient.value = cuid();
    }
    this.props.input.onChange([...this.props.input.value, value]);
    this.setState(this.initialState);
  }

  valueSelected = option => {
    this.setState({ selectedIngredient: option, custom: false });
  }

  handleUnitChange = unit => this.setState({ unit });
  handleAmountChange = event => this.setState({ amount: event.target.value });
  handleCustomAmountChange = event => this.setState({ customAmount: event.target.value });

  isEntryValid = () => 
    (!this.state.custom && this.state.unit && this.state.amount && this.state.selectedIngredient)
    || (this.state.custom && this.state.customAmount);

  onType = val => {
    this.setState({
      selectedIngredient: {
        value: '',
        label: val,
      },
      custom: true,
    });
    return this.props.getIngredients(val);
  }

  render() {
    const { fields, options, label, input } = this.props;
    return (
      <div className="field">
        <IngredientList formInput={input} custom={false} removeIngredient={this.unselectIngredient} />
        <IngredientList formInput={input} custom={true} removeIngredient={this.unselectIngredient} />
        <div className="flex">
          <Select.Async
            name="Ingredient"
            className="grow"
            value={this.state.selectedIngredient}
            loadOptions={this.onType}
            onChange={this.valueSelected}
          />
          {!this.state.custom &&
            <div className="flex grow">
              <input placeholder="amount" onChange={this.handleAmountChange} value={this.state.amount} type="number" step="0.2" className="input grow" style={({ width: 'auto' })} />
              <Select
                name="amount"
                value={this.state.unit}
                className="grow"
                clearable={false}
                options={presetMeasures}
                onChange={this.handleUnitChange}
              />
            </div>
          }
          {this.state.custom && this.state.selectedIngredient.label &&
            <div>
              <input value={this.state.customAmount} onChange={this.handleCustomAmountChange} className="input grow" placeholder="2 cloves" />
            </div>
          }
          <button disabled={!this.isEntryValid()} onClick={this.addIngredient} className="button is-primary">add</button>
        </div>
      </div>
    );
  }
}
