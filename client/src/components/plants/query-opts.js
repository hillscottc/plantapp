import React, { Component, PropTypes } from 'react'


class QueryOpts extends Component {

  constructor(props) {
    super(props);
    this.changeCommonVal = this.changeCommonVal.bind(this);
    this.changeFamilyVal = this.changeFamilyVal.bind(this);
    this.changeSymbolVal = this.changeSymbolVal.bind(this);
    this.changeSciVal = this.changeSciVal.bind(this);
    this.state = {family:'', common:'', symbol: '', sci: ''};
  }

  changeSymbolVal(e) {
    const symbol = e.target.value;
    this.setState({symbol});
    const {family, common, sci} = this.state;
    this.props.doComplexQuery({family, common, symbol, sci});
  }

  changeCommonVal(e) {
    const common = e.target.value;
    this.setState({common});
    const {family, symbol, sci} = this.state;
    this.props.doComplexQuery({family, common, symbol, sci});
  }

  changeFamilyVal(e) {
    const family = e.target.value;
    this.setState({family});
    const {common, symbol, sci} = this.state;
    this.props.doComplexQuery({family, common, symbol, sci});
  }

  changeSciVal(e) {
    const sci = e.target.value;
    this.setState({sci});
    const {common, symbol, family} = this.state;
    this.props.doComplexQuery({family, common, symbol, sci});
  }

  render() {
    const { family, common, symbol, sci } = this.state;
    const {changeCommonVal, changeFamilyVal, changeSymbolVal, changeSciVal} = this;

    return (
        <div>
          <div>
            symbol
            <input type="text" value={symbol} onChange={changeSymbolVal} />
            <br/>
            sci
            <input type="text" value={sci} onChange={changeSciVal} />
            <br/>
            family
            <input type="text" value={family} onChange={changeFamilyVal} />
            <br/>
            common
            <input type="text" value={common} onChange={changeCommonVal} />
          </div>
        </div>
    );
  }
}

QueryOpts.propTypes = {
  doQuery: PropTypes.func.isRequired,
  resetQuery: PropTypes.func.isRequired,
  doComplexQuery: PropTypes.func.isRequired,
};

export default QueryOpts;
