import React, { Component } from 'react';
import { FireBall } from './components';

class App extends Component {
	render() {
        return (
            <div>
				<h1>Components</h1>
				<FireBall size="small" />
				<FireBall size="medium" />
				<FireBall size="large" />
			</div>
        );
	}
}

export default App;
