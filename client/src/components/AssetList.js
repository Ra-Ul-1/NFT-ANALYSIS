import React, { Component } from 'react'
import axios from 'axios';
import AddFavourite from "./AddFavourite";


export default class AssetList extends Component {

    state = {
        assets: []
    }

    getData = () => {
        axios.get('/marketOverview')
        .then(response => {
            this.setState({
                assets: response.data,
            })
        })
        .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getData()
    }



    
    render () {
        {/* This is where we map - this.state.assets.map() */}
        let assetTable = this.state.assets.map(asset => {
            return (
                // <div>
                //     <h3>
                //     {asset.name}    
                //     </h3>
                // </div>
                <div>
                <table>
                  <tbody>
                  <tr>
                      <th className="Large Cell">{asset.name}</th>
                      <th className="Cell">{asset.symbol}</th>
                      <th className="Cell">{(asset.quote.USD.price).toFixed(1)} </th>
                      <th className="Cell">{(asset.quote.USD.volume_24h/1000000000).toFixed(1)} B</th>
                      <th className="Cell">{(asset.quote.USD.percent_change_90d).toFixed(1)} %</th>
                      <th className="Cell">{(asset.quote.USD.percent_change_7d).toFixed(1)} %</th>
                      <th className="Cell">{(asset.quote.USD.percent_change_24h).toFixed(1)} %</th>
                      <th className="Cell">{(asset.quote.USD.percent_change_1h).toFixed(1)} %</th>
                      <th className="Cell">{(asset.quote.USD.market_cap/1000000000).toFixed(1)} B</th>
                      <th className="Cell">{asset.cmc_rank}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
        })
        return (
          <div>
          <AddFavourite user={this.props.user} getData={this.getData} {...this.props} />
          <table>
                  <thead>
                  <tr>
                    <th className="Large Header Cell">Coin</th>
                    <th className="Header Cell">Symbol</th>
                    <th className="Header Cell">Price ($)</th>
                    <th className="Header Cell">Volume ($) (24h)</th>
                    <th className="Header Cell">3m</th>
                    <th className="Header Cell">7d</th>
                    <th className="Header Cell">24h</th>
                    <th className="Header Cell">1h</th>
                    <th className="Header Cell">Market Cap ($)</th>
                    <th className="Header Cell">Rank</th>
                    </tr>
                  </thead>
                </table>

          {assetTable}
          </div>
        );
        }

}