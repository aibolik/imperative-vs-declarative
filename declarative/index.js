const { h, render, Component } = preact;

/** @jsx h */
class MyButton extends Component {
  constructor() {
    super();

    this.state = {
      shining: false
    };
  }

  toggleShine = () => {
    this.setState({ shining: !this.state.shining });
  }

  render(props, { shining }) {
    return (
      <button 
        id="btn" 
        class={shining ? 'shining' : ''}
        onClick={this.toggleShine}>
        { shining ? 'I am shining!' : 'Make me shine!' }
      </button>
    )
  }
}

render(<MyButton />, document.getElementById('root'));