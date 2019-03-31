import React, { Component } from 'react';
import { Heading, FireBall } from './components';

class App extends Component {
	render() {
        return (
            <div>
				<Heading>FireBall</Heading>
				<FireBall size="small" />
				<FireBall size="medium" />
				<FireBall size="large" />
			</div>
        );
	}
}

export default App;
