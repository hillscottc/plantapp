import React from 'react'
import {Fieldset, Field, createValue} from 'react-forms'

export default class PlantsQueryForm extends React.Component {

  constructor(props) {
    super(props);
    let formValue = createValue({
      value: props.value,
      onChange: this.onChange.bind(this)
    });
    this.state = {formValue};
  }

  onChange(formValue) {
    this.setState({formValue});
  }

  render() {
    return (
        <Fieldset formValue={this.state.formValue}>
          <Field select="symbol" label="First name" />
          <Field select="synonym" label="Last name" />
        </Fieldset>
    )
  }
}