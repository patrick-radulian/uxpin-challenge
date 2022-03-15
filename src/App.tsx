import React from 'react';
import './App.css';
import Bar from 'components/atoms/bar/bar';
import Separator from 'components/atoms/separator/separator';
import IconButton from 'components/atoms/icon-button/icon-button';
import Dashboard from "./icons/dashboard.svg";
import BarItemGroup from 'components/atoms/bar-item-group/bar-item-group';
import Breadcrumbs from 'components/atoms/breadcrumbs/breadcrumbs';

const App: React.FC<{}> = () => {
    return (
        <div className="App">
            <main className="main">
                <Bar style={{padding: "8px", alignItems: "center"}}>
                    <BarItemGroup justify="left">
                        <IconButton iconSrc={Dashboard} style={{marginRight: "11px"}} alt="Dashboard"/>
                        <Separator vertical/>

                        <Breadcrumbs crumbs={["Material UI", "Button"]}/>
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
