import React from 'react';
import './App.css';
import Separator from 'components/atoms/separator/separator';
import TopBar from 'components/organisms/top-bar/top-bar';




const App: React.FC<{}> = () => {
    return (
        <div className="App">
            <main className="main">
                <TopBar/>

                <Separator color="var(--silver-darken5)"/>
            </main>
        </div>
    );
}

export default App;
