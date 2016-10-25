import React, { Component, PropTypes } from 'react'
import QuerySelect from './query-select'


class QueryOpts extends Component {

  constructor(props) {
    super(props);
    this.changeCommonVal = this.changeCommonVal.bind(this);
    this.changeFamilyVal = this.changeFamilyVal.bind(this);
    this.selectQuery = this.selectQuery.bind(this);
    this.changeQueryVal = this.changeQueryVal.bind(this);
    this.state = {queryType: '', queryVal:'', familyVal:'', commonVal:''};
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
    const { familyVal, commonVal, queryType, queryVal } = this.state;
    const {selectQuery, changeQueryVal, changeCommonVal, changeFamilyVal} = this;

    return (
        <div>
          <QuerySelect { ...{queryType, queryVal, selectQuery, changeQueryVal} } />

          <div>
            family
            <input type="text" value={familyVal} onChange={changeFamilyVal} />
            <br/>
            common
            <input type="text" value={commonVal} onChange={changeCommonVal} />
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
