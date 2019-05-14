class App extends React.Component {
	render() {
		return (
			<Stopwatch/>
		);
	}
}

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			runing: false,
			times: {
				minutes: 3,
				seconds: 55,
				miliseconds: 0
			},
			time: null
		};
		//referencja do obiektu TimeList
		this.child = React.createRef();
	}
	save(time) {
		this.setState({
			time //time: time
		});
	}
	reset(e) {
		this.setState({
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		});
	}
	start(e) {
		if (!this.state.running) {
			this.setState({
				running: true
			});
			this.watch = setInterval(() => this.step(), 10);
		}
	}
	stop(e) {
		if(this.state.running) {
			clearInterval(this.watch);
			this.setState({
				running: false
			});
		}
	}
	step() {
	    if (!this.state.running) return;
		let newTick = this.state.times;
		newTick.miliseconds++;
	    if (newTick.miliseconds >= 100) {
	        newTick.seconds += 1;
	        newTick.miliseconds = 0;
	    }
	    if (newTick.seconds >= 60) {
	        newTick.minutes += 1;
	        newTick.seconds = 0;
	    }
		this.setState({
			times: newTick
		});
	}
	print() {
		return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
	}
	resetList() {
		this.child.current.clear();
	}
	render() {
		return (
			<div>
				<nav className='controls'>
					<a href='#' className='button' id='start' onClick={this.start.bind(this)}>Start</a>
					<a href='#' className='button' id='stop' onClick={this.stop.bind(this)}>Stop</a>
					<a href='#' className='button' id='reset' onClick={this.reset.bind(this)}>Reset</a>
					<a href='#' className='button' id='save' onClick={() => this.save(this.print())}>Save</a>
					<a href='#' className='button' id='resetList' onClick={this.resetList.bind(this)}>Reset list</a>
				</nav>
				<div className='stopwatch'>{this.print()}</div>
				<TimeList time={this.state.time} ref={this.child}/>
			</div>
		);
	}
}

class TimeList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
		//kontekst
		this.clear = this.clear.bind(this);
	}
	componentDidUpdate(prevProps) {
		if(prevProps.time != this.props.time) {
			this.setState({
				items: [...this.state.items, this.props.time]
			});
		}
	}
	clear(e) {
		this.setState({
			items: []
		});
	}
	render() {
		return (
			<ul className='results'>
			{
				this.state.items.map((item, index) => (<li key={index}>{item}</li>))
			}
			</ul>
		);
	}
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

//aplikacja
ReactDOM.render(<App/>, document.getElementById('app'));
