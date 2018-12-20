import React, { Component } from 'react';
import MemoryCard from '../MemoryCard';
import images from "../../images.json";
import "./MainGameContainer.css";

class MainGameContainer extends Component {
	state = {
		images,
		message: "",
		score: 0,
		topScore: 0
	};

	handleClick = (id, clicked) => {

		const imageOrder = this.state.images;

		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Incorrectly!",
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You Guessed Correctly!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
				<div className="gameMessage text-center row">
					<div className="text-right col-6">{this.state.message} </div>
					<div className="text-left col-6">Score: {this.state.score} | Top Score: {this.state.topScore}</div>
				</div>
				<div className="container">
					<div className="row">
						{this.state.images.map(image => (
							<MemoryCard
								key={image.id}
								id={image.id}
								name={image.name}
								clicked={image.clicked}
								image={image.image}
								handleClick={this.handleClick}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
};

export default MainGameContainer;