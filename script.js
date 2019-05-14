class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			users: []
		};
	}

	onChangeHandle(event) {
		this.setState({searchText: event.target.value});
	}

	onSubmit(event) {
		event.preventDefault();
		const {searchText} = this.state;
		const url = `https://api.github.com/search/users?q=${searchText}`;
		fetch(url)
		.then(response => response.json())
		.then(responseJson => this.setState({users: responseJson.items}));
	}

	render() {
		return (
			<div className='search-form'>
				<form onSubmit={event => this.onSubmit(event)}>
					<label htmlFor="searchText">Wyszukaj użytkownika</label>
					<input
						type="text"
						id="searchText"
						onChange={event => this.onChangeHandle(event)}
						value={this.state.searchText}/>
				</form>
				<UsersList users={this.state.users}/>
			</div>
		);
	}
}

class UsersList extends React.Component {
	get users() {
		if(this.props.users.length == 0) {
			return 'Nie znaleziono';
		} else {
			return this.props.users.map(user => <User key={user.id} user={user}/>);
		}
	}

	render() {
		return (
			<div className='user-list'>
				{this.users}
			</div>
		);
	}
}

class User extends React.Component {
	render() {
		return (
			<div className='user-item'>
				<img src={this.props.user.avatar_url} style={{maxWidth: '100px'}}/>
				<a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
			</div>
		);
	}
}

//aplikacja
ReactDOM.render(<App/>, document.getElementById('root'));
