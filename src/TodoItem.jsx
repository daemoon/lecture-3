import * as React from 'react';

export class TodoItem extends React.Component {
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
    };

    render() {
        return (<li onClick={this.doItem}>{this.props.value}<input type="checkbox" checked={this.state.done}/></li>)
    }
}