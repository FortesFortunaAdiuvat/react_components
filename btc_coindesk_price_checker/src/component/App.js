import React, { Component } from 'react'
import Wallet from './Wallet'
import Loot from './Loot'

const App = () => 
    <div> 
        <h2> Loot Check </h2>
        <hr />
        <Wallet />
        <hr/>
        <Loot />
        <div>
            powered by <a target='_blank' href='https://www.coindesk.com/price'>CoinDesk</a>
        </div>
    </div>

export default App