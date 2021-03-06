import React, { Component } from 'react';
import './App.css';
import uniqid from 'uniqid';
import Overview from './Components/Overview';

class App extends Component {
	constructor() {
		super();

		this.state = {
			task: { text: '', id: uniqid() },
			tasks: [],
		};
	}

	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
			},
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: { text: '', id: uniqid(), },
			
		});
	};

	render() {
		const { task, tasks } = this.state;

		return (
			<div>
				<form>
					<input onChange={this.handleChange} value={task.text} />
					<button onClick={this.onSubmitTask}>Save</button>
				</form>
				<Overview tasks={tasks} />
			</div>
		);
	}
}

export default App;
