import * as React from 'react';

import './toolbar-style';

type ToolbarProps = {
    width: number;
    height: number;
}

class Toolbar extends React.Component<ToolbarProps> {

    render(): JSX.Element {
        return(
            <div className='alg-toolbar'>
                Toolbar
                Graph: {this.props.width}x{this.props.height}
            </div>
        );
    }
}

export default Toolbar;