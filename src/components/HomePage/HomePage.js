import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation/Navigation'
import TFLBanner from './TFLBanner/TFLBanner'
import HeroBanner from './HireBike/HeroBanner/HeroBanner'
import DataBanner from './HireBike/DataBanner/DataBanner'
import data from '../../constants/data'

class HomePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			heroBanner: undefined,
			navItems: undefined,
			tubeBanner: undefined,
			defaultNav: 'tflInfo'
		}
		this.changeNav = this.changeNav.bind(this)
	}

	componentDidMount() {
		const { mainNav, heroBanner, tubeBanner } = data
		this.setState({
			heroBanner: heroBanner,
			navItems: mainNav,
			tubeBanner: tubeBanner
		})
	}

	changeNav(nav) {
		const { defaultNav } = this.state
		if(defaultNav !== nav){
			this.setState({
				defaultNav: nav,
			})
		}
	}

	render() {
		const { defaultNav, navItems, tubeBanner, heroBanner } = this.state
		const { 
			tflInfo, 
			cleanData, 
			getApiQuery, 
			showContent, 
			queryValue, 
			retrievedObjet 
		} = this.props
		return (
			<section>
				<Navigation changeNav={this.changeNav} navItems={navItems} />
				{defaultNav === 'tflInfo' ? (
					<section>
						<TFLBanner tflInfo={tflInfo} tubeBanner={tubeBanner} />
					</section>
				) : (
					<section>
						<HeroBanner cleanData={cleanData} getApiQuery={getApiQuery} heroBanner={heroBanner} />
						<DataBanner showContent={showContent} queryValue={queryValue} cardsData={retrievedObjet} />
					</section>
				)}
			</section>
		)

	}
}

HomePage.propTypes = {
	retrievedObjet: PropTypes.arrayOf(PropTypes.any),
	tflInfo: PropTypes.arrayOf(PropTypes.any),
	getApiQuery: PropTypes.func,
	queryValue: PropTypes.string,
	showContent: PropTypes.bool,
	cleanData: PropTypes.func
}

HomePage.defaultProps = {
	tflInfo: undefined,
	retrievedObjet: undefined,
	queryValue: undefined,
	showContent: false
}

export default HomePage
