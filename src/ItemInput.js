import * as React from 'react';

export class ItemAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    onTextChange = (newValue) => {
        this.setState({
            value: newValue
        });
    };

    onAdd = () => {
        this.props.onAdd(this.state.value);
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e) => this.onTextChange(e.target.value)}/>
                <button onClick={this.onAdd}>Add</button>
            </div>
        )
    }
}