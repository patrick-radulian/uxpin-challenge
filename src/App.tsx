import React from 'react';
import './App.css';
import Separator from 'components/atoms/separator/separator';
import TopBar from 'components/organisms/top-bar/top-bar';
import Header from 'components/molecules/header/header';
import Preview from 'components/molecules/preview/preview';
import Properties from 'components/organisms/properties/properties';

const App: React.FC<{}> = () => {
    return (
        <div className="App">
            <TopBar/>

            <Separator color="var(--silver-darken5)"/>

            <main className="main">
                <Header/>
                <Preview/>
                <Properties/>
            </main>
        </div>
    );
}

export default App;
