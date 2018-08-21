import * as React from 'react';

export class TodoItem extends React.PureComponent {
    _audio;
    constructor(props) {
        super(props);

        this.state = {
            done: false,
        };
        this._audio = React.createRef();
    }

    doItem = () => {
        this.setState({
            done: true,
        });
        this._audio.current.play();
    };

    render() {
        return (

        <li onClick={this.doItem}>
            <audio src="https://www.myinstants.com/media/sounds/-click-nice_3.mp3" ref={this._audio} />
            {this.props.value}
            <input type="checkbox" checked={this.state.done}/>
            {this.props.savingStatus !== 'none' && this.props.savingStatus}
        </li>)
    }
}