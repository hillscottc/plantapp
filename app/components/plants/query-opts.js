import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap';
import './query-opts.css'


class QueryOpts extends Component {

  constructor(props) {
    super(props);
    this.state = {family:'', common:'', symbol: '', sci: ''};
  }

  changeSymbolVal = (e) => {
    const symbol = e.target.value;
    this.setState({symbol});
    const {family, common, sci} = this.state;
    this.props.doQuery({family, common, symbol, sci});
  };

  changeCommonVal = (e) => {
    const common = e.target.value;
    this.setState({common});
    const {family, symbol, sci} = this.state;
    this.props.doQuery({family, common, symbol, sci});
  };

  changeFamilyVal = (e) => {
    const family = e.target.value;
    this.setState({family});
    const {common, symbol, sci} = this.state;
    this.props.doQuery({family, common, symbol, sci});
  };

  changeSciVal = (e) => {
    const sci = e.target.value;
    this.setState({sci});
    const {common, symbol, family} = this.state;
    this.props.doQuery({family, common, symbol, sci});
  };

  clickReset = () => {
    this.setState({family:'', common:'', symbol: '', sci: ''});
    this.props.resetQuery();
  };

  render() {
    const { family, common, symbol, sci } = this.state;
    const {changeCommonVal, changeFamilyVal, changeSymbolVal, changeSciVal, clickReset} = this;

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
          <br />
          <Button
              bsStyle="primary"
              bsSize="xsmall"
              onClick={clickReset}>
            reset
          </Button>
        </div>
    );
  }
}

QueryOpts.propTypes = {
  resetQuery: PropTypes.func.isRequired,
  doQuery: PropTypes.func.isRequired,
};

export default QueryOpts;
