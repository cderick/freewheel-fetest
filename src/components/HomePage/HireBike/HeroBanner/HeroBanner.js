import React from 'react'
import PropTypes from 'prop-types'
import s from './HeroBanner.module.scss'

class HeroBanner extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		if(e){
			const value = e.target.value
			if(value.length > 1){
				this.props.getApiQuery(value)
			} else {
				this.props.cleanData()
			}
		}
	}

	render() {
		if (!this.props.heroBanner) return null
		const { heroMessage, heroForms } = this.props.heroBanner
		return (
			<div id="homePage" className={`container-fluid ${s.containerBackground}`}>
				<div className="row h-100">
					<div className="col my-auto">
						<h1 className="display-4">{heroMessage && heroMessage.title ? heroMessage.title : ''}</h1>
						<form>
							<div className="row">
								<div className="col-10 m-auto">
									{heroForms && heroForms.length
										&& heroForms.map((cv, ind) => (
											<div key={`main${ind}`} className={`form-group text-left ${s.forms} ${cv.customClass ? s[cv.customClass] : ''}`}>
												<label className="text-white" htmlFor={cv.id}>{cv.label}</label>
												<input type="text" onChange={(e) => {this.handleChange(e)}} className="form-control" id={cv.id} placeholder={cv.placeholder} />
											</div>
										)
									)}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

HeroBanner.propTypes = {
	heroBanner: PropTypes.objectOf(PropTypes.any),
	getApiQuery: PropTypes.func,
	cleanData: PropTypes.func
}

HeroBanner.defaultProps = {
	heroBanner: null,
}

export default HeroBanner
