import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { MaliceContextProvider } from './context/malice-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MaliceContextProvider>
			<HashRouter>
				<App />
			</HashRouter>
		</MaliceContextProvider>
	</React.StrictMode>
);
