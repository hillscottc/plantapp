import React, { Component, PropTypes } from 'react'
import { action } from 'mobx'
import { inject, observer } from 'mobx-react'
import { Button } from 'react-bootstrap'
import './query-opts.css'


@inject('plantStore')
@observer
class QueryOpts extends Component {

  constructor(props) {
    super(props);
  };

  @action
  changeSymbolVal = (e) => {
    const symbol = e.target.value;
    this.props.plantStore.symbol = symbol;

    const {family, common, sci} = this.props.plantStore;
    this.props.doQuery({family, common, symbol, sci});
  };

  @action
  changeCommonVal= (e) => {
    const common = e.target.value;
    this.props.plantStore.common = common;

    const {family, symbol, sci} = this.props.plantStore;
    this.props.doQuery({family, common, symbol, sci});
  };

  @action
  changeFamilyVal = (e) => {
    const family = e.target.value;
    this.props.plantStore.family = family;

    const {common, symbol, sci} = this.props.plantStore;
    this.props.doQuery({family, common, symbol, sci});
  };

  @action
  changeSciVal = (e) => {
    const sci = e.target.value;
    this.props.plantStore.sci = sci;

    const {common, symbol, family} = this.props.plantStore;
    this.props.doQuery({family, common, symbol, sci});
  };

  @action
  clickReset = () => {
    Object.assign(this.props.plantStore, {
      common: '',
      family: '',
      symbol: '',
      sci: '',
    });
    this.props.resetQuery();
  };

  render() {
    const { family, common, symbol, sci } = this.props.plantStore;
    const {changeCommonVal, changeFamilyVal, changeSymbolVal, changeSciVal, clickReset} = this;

    return (
        <div className="QueryOpts">
          <div>
            <label htmlFor="symbol">symbol</label>
            <input id="symbol" type="text" value={symbol || ''} onChange={changeSymbolVal} />
          </div>
          <div>
            <label htmlFor="sci">sci</label>
            <input id="sci" type="text" value={sci || ''} onChange={changeSciVal} />
          </div>
          <div>
            <label htmlFor="sci">family</label>
            <input id="family" type="text" value={family || ''} onChange={changeFamilyVal} />
          </div>
          <div>
            <label htmlFor="common">common</label>
            <input id="common" type="text" value={common || ''} onChange={changeCommonVal} />
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
