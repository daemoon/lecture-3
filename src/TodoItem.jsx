import * as React from 'react';

export class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            done: false,
        };
    }

    doItem = () => {
        this.setState({
            done: true,
        })
        this.props.save(true);
    };

    render() {
        return (<li onClick={this.doItem}>{this.props.value}<input type="checkbox"
                                                                   checked={this.state.done}/>{this.props.savingStatus !== 'none' && this.props.savingStatus}
        </li>)
    }
}