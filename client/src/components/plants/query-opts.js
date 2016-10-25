import React, { Component, PropTypes } from 'react'
import QuerySelect from './query-select'


class QueryOpts extends Component {

  constructor(props) {
    super(props);
    this.changeCommonVal = this.changeCommonVal.bind(this);
    this.changeFamilyVal = this.changeFamilyVal.bind(this);
    this.changeSymbolVal = this.changeSymbolVal.bind(this);
    this.changeSciVal = this.changeSciVal.bind(this);
    this.selectQuery = this.selectQuery.bind(this);
    this.changeQueryVal = this.changeQueryVal.bind(this);
    this.state = {queryType: '', queryVal:'', family:'',
      common:'', symbol: '', sci: ''};
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

  selectQuery(e) {
    this.setState({ queryVal:''});
    const queryType = e ? e.value : '';
    this.setState({queryType});
    if (! queryType) {
      this.props.resetQuery();
    }
  }

  changeQueryVal(e) {
    const queryType = this.state.queryType;
    const queryVal = e.target.value;

    this.setState({queryVal});

    if (queryType && queryVal ) {
      this.props.doQuery(queryType, queryVal);
    }
  }

  render() {
    const { family, common, symbol, sci, queryType, queryVal } = this.state;
    const {selectQuery, changeQueryVal, changeCommonVal, changeFamilyVal,
        changeSymbolVal, changeSciVal} = this;

    return (
        <div>
          <QuerySelect { ...{queryType, queryVal, selectQuery, changeQueryVal} } />

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
