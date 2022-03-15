import React from 'react';
import './App.css';
import Bar from 'components/bar/bar';
import Separator from 'components/separator/separator';
import IconButton from 'components/icon-button/icon-button';
import Dashboard from "./icons/dashboard.svg";
import BarItemGroup from 'components/bar-item-group/bar-item-group';

const App: React.FC<{}> = () => {
    return (
        <div className="App">
            <main className="main">
                <Bar height="40" alignItems="">
                    <BarItemGroup justify="left">
                        <IconButton icon={Dashboard} alt="Dashboard"/>
                    </BarItemGroup>

                    <BarItemGroup justify="right">
                        <span>Discard Changes</span>
                    </BarItemGroup>
                </Bar>

                <Separator color="var(--grey-200)"/>
            </main>
        </div>
    );
}

export default App;
