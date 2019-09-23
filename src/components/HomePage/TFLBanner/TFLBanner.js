import React from 'react'
import PropTypes from 'prop-types'
import TflInfo from './TflInfo/TflInfo'
import DisrupInfo from './DisrupInfo/DisrupInfo'
import s from './TFLBanner.module.scss'

class TFLBanner extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			transportSelect: undefined
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(transport){
		this.setState({
			transportSelect: transport,
		})
	}

	render() {
		if (!this.props.tubeBanner) return null
		const { tubeMessage } = this.props.tubeBanner
		return (
			<section>
				<div className={`container-fluid ${s.containerBackground}`}>
					<div className="row h-100">
						<div className="col my-auto text-center">
							<h1 className="display-4">{tubeMessage && tubeMessage.title ? tubeMessage.title : ''}</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<TflInfo tflInfo={this.props.tflInfo} handleClick={this.handleClick} />
					<DisrupInfo transportSelect={this.state.transportSelect} />
				</div>
			</section>
		)
	}
}

TFLBanner.propTypes = {
	tubeBanner: PropTypes.objectOf(PropTypes.any),
	tflInfo: PropTypes.arrayOf(PropTypes.any),
}

TFLBanner.defaultProps = {
	tubeBanner: null,
	tflInfo: null,
}

export default TFLBanner
