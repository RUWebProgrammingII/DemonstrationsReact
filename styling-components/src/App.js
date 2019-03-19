import React, { Component } from 'react';
import { ButtonInline, ButtonRadium } from './components/Button';
import { PaperInline, PaperRadium } from './components/Paper';
import { AvatarInline, AvatarRadium } from './components/Avatar';
import { AlertInline, AlertRadium } from './components/Alert';

class App extends Component {
	render() {
		return (
            <div>
				<h1>ButtonInline</h1>
				<ButtonInline type="success" onClick={() => console.log('success')}>Success btn</ButtonInline>
				<ButtonInline type="warning" onClick={() => console.log('warning')}>Warning btn</ButtonInline>
				<ButtonInline type="danger" onClick={() => console.log('danger')}>Danger btn</ButtonInline>
				<h1>PaperInline</h1>
				<PaperInline shadowSize="small" backgroundColor="lightblue">Small</PaperInline>
				<PaperInline shadowSize="medium" backgroundColor="red">Medium</PaperInline>
				<PaperInline shadowSize="large" backgroundColor="lightyellow">Large</PaperInline>
				<h1>AvatarInline</h1>
				<AvatarInline size="small" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
				<AvatarInline size="medium" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
				<AvatarInline size="large" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
				<h1>AlertInline</h1>
				<AlertInline type="info" title="Info" message="Info message" />
				<AlertInline type="success" title="Success" message="Success message" />
				<AlertInline type="danger" title="Danger" message="Danger message" />
				<AlertInline type="warning" title="Warning" message="Warning message" />
				<hr />
				<h1>ButtonRadium</h1>
				<ButtonRadium type="success" onClick={() => console.log('success')}>Success btn</ButtonRadium>
				<ButtonRadium type="warning" onClick={() => console.log('warning')}>Warning btn</ButtonRadium>
				<ButtonRadium type="danger" onClick={() => console.log('danger')}>Danger btn</ButtonRadium>
				<h1>PaperRadium</h1>
				<PaperRadium shadowSize="small" backgroundColor="lightblue">Small</PaperRadium>
				<PaperRadium shadowSize="medium" backgroundColor="red">Medium</PaperRadium>
				<PaperRadium shadowSize="large" backgroundColor="lightyellow">Large</PaperRadium>
				<h1>AvatarRadium</h1>
				<AvatarRadium size="small" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
				<AvatarRadium size="medium" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
				<AvatarRadium size="large" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
				<h1>AlertRadium</h1>
				<AlertRadium type="info" title="Info" message="Info message" />
				<AlertRadium type="success" title="Success" message="Success message" />
				<AlertRadium type="danger" title="Danger" message="Danger message" />
				<AlertRadium type="warning" title="Warning" message="Warning message" />
            </div>
        );
	}
}

export default App;
