import React from 'react';
import './App.css';
import Separator from 'components/atoms/separator/separator';
import TopBar from 'components/organisms/top-bar/top-bar';
import Header from 'components/molecules/header/header';
import Preview from 'components/molecules/preview/preview';
import Properties from 'components/organisms/properties/properties';
import UXPinHeader from 'components/molecules/uxpin-header/uxpin-header';

const App: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <UXPinHeader/>

            <div className="App-scroll-container">
                <div className="App">
                    <div className="main">
                        <TopBar/>
                        <Separator color="var(--silver-darken5)"/>
                        <Header/>
                        <Preview/>
                        <Properties/>
                    </div>

                    <Separator vertical/>
                </div>
            </div>
        </React.Fragment>

    );
}

export default App;
