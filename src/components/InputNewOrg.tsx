import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { HeaderMol } from './HeaderMol';
import { BoxWrapper } from './BoxWrapper';

// (props: any)
export default class InputNewOrg extends React.Component<{designId: string}, { btnDisabled: boolean, value: string }> {
	constructor(props: any) {
    super(props);
    this.state = {
			btnDisabled: true,
			value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	};
	
	handleChange(event: any) {
		this.setState({value: event.target.value});
		this.setState({btnDisabled: event.target.value.length < 4})
  };

  handleSubmit(event: any) {
    alert('A todo was submitted: ' + this.state.value);
    event.preventDefault();
	};
	
	handleClick(event: any) {
		
	}

	render() {
		return (
			<Fragment>
				<HeaderMol
					h2={`Import New Screen ${this.props.designId}`}
					backBtn={true}
				/>
				<section>
					<label htmlFor="todo-input">Enter a new todo:</label>
					<textarea
						onChange={this.handleChange}
						id="todo-input"
						style={{width: '100%'}}
						placeholder="eg. Wash the dishes"
						value={this.state.value}
						required
					/>
					{
						this.state.btnDisabled && this.state.value !== "" &&
						<label>Please enter a todo that is at least 5 letters long, 
						your current input is only {this.state.value.length}</label>
					}
					<BoxWrapper>
						<Link to="/home">
							<button disabled={this.state.btnDisabled}><strong>Confirm</strong></button>
						</Link>
					</BoxWrapper>
				</section>
			</Fragment>
		);
	};
}