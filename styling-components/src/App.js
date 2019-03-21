import React, { Component } from 'react';
import { ButtonInline, ButtonRadium, ButtonMSS, ButtonCM } from './components/Button';
import { PaperInline, PaperRadium, PaperMSS, PaperCM } from './components/Paper';
import { AvatarInline, AvatarRadium, AvatarMSS, AvatarCM } from './components/Avatar';
import { AlertInline, AlertRadium, AlertMSS, AlertCM } from './components/Alert';
import { Square, Rectangle } from './components/StyledComponents/StyledComponents';

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
							<hr/>
							<h1>ButtonMSS</h1>
							<ButtonMSS type="success" onClick={() => console.log('success')}>Success btn</ButtonMSS>
							<ButtonMSS type="warning" onClick={() => console.log('warning')}>Warning btn</ButtonMSS>
							<ButtonMSS type="danger" onClick={() => console.log('danger')}>Danger btn</ButtonMSS>
							<h1>PaperMSS</h1>
							<PaperMSS shadowSize="small" backgroundColor="lightblue">Small</PaperMSS>
							<PaperMSS shadowSize="medium" backgroundColor="red">Medium</PaperMSS>
							<PaperMSS shadowSize="large" backgroundColor="lightyellow">Large</PaperMSS>
							<h1>AvatarMSS</h1>
							<AvatarMSS size="small" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
							<AvatarMSS size="medium" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
							<AvatarMSS size="large" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
							<h1>AlertMSS</h1>
							<AlertMSS type="info" title="Info" message="Info message" />
							<AlertMSS type="success" title="Success" message="Success message" />
							<AlertMSS type="danger" title="Danger" message="Danger message" />
							<AlertMSS type="warning" title="Warning" message="Warning message" />
							<hr />
							<h1>ButtonCM</h1>
							<ButtonCM type="success" onClick={() => console.log('success')}>Success btn</ButtonCM>
							<ButtonCM type="warning" onClick={() => console.log('warning')}>Warning btn</ButtonCM>
							<ButtonCM type="danger" onClick={() => console.log('danger')}>Danger btn</ButtonCM>
							<h1>PaperCM</h1>
							<PaperCM shadowSize="small" backgroundColor="lightblue">Small</PaperCM>
							<PaperCM shadowSize="medium" backgroundColor="red">Medium</PaperCM>
							<PaperCM shadowSize="large" backgroundColor="lightyellow">Large</PaperCM>
							<h1>AvatarCM</h1>
							<AvatarCM size="small" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
							<AvatarCM size="medium" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
							<AvatarCM size="large" avatarUrl="https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist" />
							<h1>AlertCM</h1>
							<AlertCM type="info" title="Info" message="Info message" />
							<AlertCM type="success" title="Success" message="Success message" />
							<AlertCM type="danger" title="Danger" message="Danger message" />
							<AlertCM type="warning" title="Warning" message="Warning message" />
							<hr/>
							<h1>Styled components</h1>
							<Square />
							<Rectangle />
							<Rectangle width={200} height={200} />
						</div>
        );
	}
}

export default App;
