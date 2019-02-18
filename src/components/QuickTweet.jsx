import React from 'react';
import { STYLES } from './STYLES';
import { v4 } from 'uuid';

class QuickTweet extends React.Component {
  constructor(props) {
    super(props);

    this._quickAddTweet = React.createRef();
    this.handleQuickAdd = this.handleQuickAdd.bind(this);
  }

  handleQuickAdd() {
    this.props.onAddTweetToDb({
      icon: null,
      message: this._quickAddTweet.current.value,
      handle: 'ralph',
      id: v4()
    });

    this._quickAddTweet.current.value = null;
  }

  render() {
    return (
      <div
        style={{
          padding: '1.5em',
          backgroundColor: 'white',
          borderBottom: '2px solid #d2d2d2'
        }}
      >
        <i
          className='far fa-user-circle'
          style={{ fontSize: '1.8em', mmargin: '20px' }}
        />
        <input
          style={STYLES.styledInput}
          type='text'
          ref={this._quickAddTweet}
        />
        <button onClick={this.handleQuickAdd} style={STYLES.addTweetButton}>
          <span style={{ fontSize: '2em' }}>+</span>
        </button>
      </div>
    );
  }
}

export default QuickTweet;
