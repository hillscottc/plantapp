
//   UNUSED FOR NOW.
//


import React, { PropTypes, Component }  from 'react'
import Select from 'react-select';


const queryOptions = [
  {value: 100, label: '100'},
  {value: 1000, label: '1,000'},
  {value: 10000, label: '10,000'},
  {value: 90000, label: '90,000'}
];


class QueryOpts extends Component {

  constructor(props) {
    super(props);
    this.selectMax = this.selectMax.bind(this);
    this.changeOpts = this.changeOpts.bind(this);

    this.state = {maxVal: 100, common:'', family:'', symbol: ''};
  }

  selectMax(e) {
    this.setState({maxVal: e.value });
  }

  changeOpts(queryType, queryVal) {

    const {common, family, symbol} = this.state;

    let opts = {};

    switch(queryType) {
      case "family":
        this.setState({family: queryVal});
        opts = {symbol:symbol, common:common, family:queryVal};
        break;
      case "common":
        this.setState({common: queryVal});
        opts = {symbol:symbol, common:queryVal, family:family};
        break;
      case "symbol":
        this.setState({symbol: queryVal});
        opts = {symbol:queryVal, common:common, family:family};
        break;
      default:
        throw new Error("Query Type error");
    }

    this.props.doComplexQuery(opts);

  }

  render() {
    const { maxVal } = this.state;

    return (
        <div>
          <p>Options</p>
          Max:
          <Select
              value={maxVal}
              options={queryOptions}
              onChange={this.selectMax}
              className="select"
          />
          <div>Symbol:
            <input type="text" onChange={(e) => this.changeOpts('symbol', e.target.value)} />
          </div>
          <div>Family:
            <input type="text" onChange={(e) => this.changeOpts('family', e.target.value)} />
          </div>
          <div>Common:
            <input type="text" onChange={(e) => this.changeOpts('common', e.target.value)} />
          </div>
        </div>
    );
  }
}


QueryOpts.propTypes = {
  doComplexQuery: PropTypes.func.isRequired
};

export default QueryOpts;
