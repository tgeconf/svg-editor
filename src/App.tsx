import React from 'react';
import './assets/style/App.scss';
import ToolBtn from './component/toolBtn';

function App() {
    return (
        <div className="wrapper">
            <div className="tool-wrapper">
                <ToolBtn content={ToolBtn.IMPORT_BTN}></ToolBtn>
                <ToolBtn content={ToolBtn.EXPORT_BTN}></ToolBtn>
            </div>
            <div id='chartContainer' className='chart-container'></div>
        </div>
    );
}

export default App;