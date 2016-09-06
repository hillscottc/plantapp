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
          <Field select="symbol" label="Symbol" />
          <Field select="synonym" label="Synonym" />
          <Field select="sci_name" label="Scientific Name" />
          <Field select="common_name" label="Common Name" />
          <Field select="family" label="Family" />
        </Fieldset>
    )
  }
}