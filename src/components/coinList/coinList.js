import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCoinData } from '../../duck/cryptoReducer';
import axios from 'axios';

const _ = require('lodash');

class CoinList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            coinlistDate: [],
            coinId: [],
            coinImage: [],
            coinSymbol: [],
            coinPrice: [],
            totalvolList: []
         };
         this.getCryptoPrice = this.getCryptoPrice.bind(this);
    }

    componentDidMount() {
      this.props.getAllCoinData()
     
      this.getCryptoPrice()

      axios.get(`https://min-api.cryptocompare.com/data/top/totalvol?limit=100&tsym=USD`)
      .then((response) => {
        console.log(response.data.Data)
        this.setState({ totalvolList: response.data.Data })
      })
    }

    
    getCryptoPrice() {

      setTimeout(() => {
        let { coinSymbol, totalvolList } = this.state;
        
        let me = totalvolList.map((value, index) => {
          // console.log(value.CoinInfo.Internal, index)
          coinSymbol.push(value.CoinInfo.Internal)
        })  

        axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${ coinSymbol.slice(0, 65) }&tsyms=USD,EUR`)
        .then((response) => {
          // console.log(response.data)
          this.setState({ coinPrice: response.data })
        })

      }, 2000)

    }

    

    render() {
      let { coinId, coinImage, coinSymbol, coinPrice } = this.state;
      console.log(this.state)

      let allCoinList = this.props.allCryptoList.allCoinList
      let coinListMap = _.map(allCoinList)
      let coinPriceMap = _.map(coinPrice);

      let displayCoinList = coinListMap.map((value, index) => {
        // console.log(`value:`, value, 'index', index)
        coinId.push(value.Id)
        coinImage.push('https://www.cryptocompare.com' + value.ImageUrl)  
      });

      let displayCoinPrice = coinPriceMap.map((value, index) => {
        // console.log(value, index)
        // console.log(this.state.coinSymbol[index])
        
        return(
          <div key={value.id}>
            <p>{ this.state.coinSymbol[index] }</p>
            <p>{ value.USD }</p>
          </div>
        )
      })

      return (
        <div>
            <p>Coin List </p>
            { displayCoinPrice }
            
        </div>
      );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getAllCoinData })(CoinList);