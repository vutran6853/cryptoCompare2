import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    
    render() {
        return (
            <div>
                <Link to='/'>
                    <button>home</button>
                </Link>

                <Link to='/coins'>
                    <button>Coins</button>
                </Link>

                <Link to='/exchanges'>
                    <button>Exchanges</button>
                </Link>

                <Link to='/mining'>
                    <button>Mining</button>
                </Link>

                <Link to='/wallets'>
                    <button>Wallets</button>
                </Link>

                <Link to='/spend'>
                    <button>Spend</button>
                </Link>

                <Link to='/forum'>
                    <button>Forum</button>
                </Link>

                <Link to='/portfolio'>
                    <button>Portfolio</button>
                </Link>
            </div>
        );
    }
}

export default NavBar;