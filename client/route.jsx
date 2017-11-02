import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Match} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
const muiTheme = getMuiTheme(lightBaseTheme, {
	appBar: {
		color: '#202D3E'
	}
	})


ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
	 <Router>
				 <div>
					 <Switch>
		<Route   path='/' component={yourComponent}/>
		</Switch>
				 </div>
	 </Router>
	</MuiThemeProvider>,

  document.getElementById('root'))
