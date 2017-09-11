import React, { Component } from 'react';
import { Get } from 'react-axios';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		};
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<p>{this.props.dataApi + '/user'}</p>
				<Get url={this.props.dataApi + '/user'}>
					{(error, response, isLoading) => {
						if(error) {
							return (<div>Something bad happened: {error.message}</div>)
						}
						else if(isLoading) {
							return (<div>Loading...</div>)
						}
						else if(response !== null) {
							return (<ul>
												{
													response.data.users.map((v, i) => {
														return <li key={i}>
																		<div>{v.email}</div>
																		<div>{v.firstName} {v.lastName}</div>
																	</li>
													})
												}
											</ul>)
						}
						return (<div>Default message before request is made.</div>)
					}}
				</Get>
			</div>
		);
	}
}

export default Home;
