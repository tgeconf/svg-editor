import { ReactComponent } from '*.svg';
import React from 'react'

import '../assets/style/toolBtn.scss'

interface IToolBtn {
    content: string
}

export default class ToolBtn extends React.Component<IToolBtn, IToolBtn>{
    static IMPORT_BTN: string = 'import';
    static EXPORT_BTN: string = 'export';
    constructor(props: IToolBtn) {
        super(props);
        this.state = {
            content: this.props.content
        }
    }

    render() {
        const mouseClick = () => {
            switch (this.state.content) {
                case ToolBtn.IMPORT_BTN:
                    alert('import');
                    break;
                case ToolBtn.EXPORT_BTN:
                    alert('export');
                    break;
                default:
                    break;
            }
        }

        return (
            <div className='tool-btn' onClick={mouseClick}>
                <span>{this.props.content}</span>
            </div>
        )
    }
}