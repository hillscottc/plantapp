import React, { Component, PropTypes } from 'react'


class QueryOpts extends Component {

  constructor(props) {
    super(props);
    this.changeCommonVal = this.changeCommonVal.bind(this);
    this.changeFamilyVal = this.changeFamilyVal.bind(this);
    this.state = {familyVal:'', commonVal:''};
  }

  changeCommonVal(e) {
    const commonVal = e.target.value;
    this.setState({commonVal});
    this.props.doComplexQuery({family:this.state.familyVal, common: commonVal});
  }

  changeFamilyVal(e) {
    const familyVal = e.target.value;
    this.setState({familyVal});
    this.props.doComplexQuery({family:familyVal, common: this.state.commonVal});
  }



  render() {
    const { familyVal, commonVal } = this.state;
    const { changeCommonVal, changeFamilyVal} = this;

    return (
        <div>
          family
          <input type="text" value={familyVal} onChange={changeFamilyVal} />
          <br/>
          common
          <input type="text" value={commonVal} onChange={changeCommonVal} />
        </div>
    );
  }
}

QueryOpts.propTypes = {
  doComplexQuery: PropTypes.func.isRequired
};

export default QueryOpts;
