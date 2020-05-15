import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
		tags: [ 'tag1', 'tag2', 'tag3' ]
	};
	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handldeIncrement.bind(this);
	// }
	handldeIncrement() {
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<div>
				<span className="this.getBadgeClasses">{this.formatCount()}</span>
				<button onClick={this.handldeIncrement} className="btn btn-secondary btn-sm">
					Increment
				</button>
				<ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
			</div>
		);
	}
	getBadgeClasses() {
		let classes = 'btn m-2 btn-';
		classes += this.state.count === 0 ? 'Warning' : 'Primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;
