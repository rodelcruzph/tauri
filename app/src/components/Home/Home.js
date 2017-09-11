import React, { Component } from 'react';
import { Get } from 'react-axios';

let fetchedData = [];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    console.log(fetchedData);
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
              fetchedData = response.data.users;
              return (<div>Success</div>)
              // return (<ul>
              //           {response.data.users.map((k, v) => {
              //             return <li key={k}>{v}</li>
              //           })}
              //         </ul>)
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    );
  }
}

export default Home;
