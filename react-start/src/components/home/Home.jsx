import React from 'react';
import styles from './Home.module.css';

class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <button onClick={() => this.setState({value: this.state.value + 1})}>
        Нажми меня пж: {this.state.value}
      </button>
    );
  }
}

const Home = () => {
  return (
    <div className={styles.item}>
      <h1>Привет</h1>
      <Click />
    </div>
  );
};

export default Home;
