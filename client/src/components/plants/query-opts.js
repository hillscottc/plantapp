import React, { Component, PropTypes } from 'react'
import './query-opts.css'


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
        <div className="QueryOpts">
          <div>
            <label htmlFor="symbol">symbol</label>
            <input id="symbol" type="text" value={symbol} onChange={changeSymbolVal} />
          </div>
          <div>
            <label htmlFor="sci">sci</label>
            <input id="sci" type="text" value={sci} onChange={changeSciVal} />
          </div>
          <div>
            <label htmlFor="sci">family</label>
            <input id="family" type="text" value={family} onChange={changeFamilyVal} />
          </div>
          <div>
            <label htmlFor="common">common</label>
            <input id="common" type="text" value={common} onChange={changeCommonVal} />
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
