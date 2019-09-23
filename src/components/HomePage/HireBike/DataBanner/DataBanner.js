import React from 'react'
import PropTypes from 'prop-types'
import s from './DataBanner.module.scss'

class DataBanner extends React.Component {
	render() {
		const { cardsData, queryValue, showContent } = this.props
		if (!cardsData) return null
		return (
			<div id="DataBanner" className="container pt-5 pb-5">
				{showContent &&
				<section>
					<div className="row">
						<div className="col text-center">
							<h2 className="pb-5">You searching at: <span className="text-danger">{queryValue}</span></h2>
						</div>
					</div>
					<div className="row">
						<div className="col">
							{cardsData && cardsData.length
								&& cardsData.map((cv, ind) => (
									<div key={`map${ind}`} className={`card float-left mr-3 mb-3 ${s.customWidth}`}>
										<img src="https://wallpapercave.com/wp/66stx2A.jpg" className="card-img-top" alt="catPlaceholder" />
										<div className="card-body">
											<h6 className="card-title text-danger font-weight-bold">{cv.commonName}</h6>
											<p className="card-text">{`${(cv.id).substring(((cv.id).indexOf('_') + 1))} ${cv.commonName} (${cv.lat}, ${cv.lon})`}</p>
											<a href={`https://www.google.com/maps/search/${cv.lat},${cv.lon}/${cv.lat},${cv.lon},17z`} rel="noopener noreferrer" target="_blank" className="btn btn-primary">Check on Google Maps</a>
										</div>
									</div>
								))}
						</div>
					</div>
				</section>}
			</div>
		)
	}
}

DataBanner.propTypes = {
	cardsData: PropTypes.arrayOf(PropTypes.any),
	queryValue: PropTypes.string,
	showContent: PropTypes.bool
}

DataBanner.defaultProps = {
	cardsData: null,
	queryValue: undefined,
	showContent: false
}

export default DataBanner
