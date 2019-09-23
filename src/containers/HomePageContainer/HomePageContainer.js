import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getQueryValue, getTFLInformation } from '../../actions'
import HomePage from '../../components/HomePage/HomePage'
import loadingImg from '../../static/loadingImage.gif' 

class HomePageContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			queryValue: undefined,
			showContent: false
		}
		this.getApiQuery = this.getApiQuery.bind(this)
		this.cleanData = this.cleanData.bind(this)
	}

	componentDidMount(){
		this.props.getTFLInformation()
	}

	getApiQuery(value){
		this.props.getQueryValue(value)
		this.setState({
			queryValue: value,
			showContent: true
		})
	}

	cleanData(){
		this.setState({
			showContent: false
		})
	}

	render() {
		const { queryValue, showContent } = this.state
		const { queryContent, tflContent } = this.props
		if (tflContent && tflContent.entries) { 
			return (
				<HomePage
					queryValue={queryValue}
					getApiQuery={this.getApiQuery}
					retrievedObjet={queryContent.entries}
					tflInfo={tflContent.entries}
					showContent={showContent}
					cleanData={this.cleanData}
				/>
			)
		} 
		return ( 
			<section className="w-100 text-center pt-5 mt-5"> 
				<object alt="Loading" aria-label="Loading" className="mt-5" width="200" height="200" data={loadingImg} /> 
			</section> 
		)
	}
}

HomePageContainer.propTypes = {
	getQueryValue: PropTypes.func.isRequired,
	getTFLInformation: PropTypes.func.isRequired,
	queryContent: PropTypes.objectOf(PropTypes.any),
	tflContent: PropTypes.objectOf(PropTypes.any),
}

HomePageContainer.defaultProps = {
	queryContent: null,
	tflContent: null,
}

function mapStateToProps(state) {
	return {
		queryContent: state.get('queryContent').toJS(),
		tflContent: state.get('tflContent').toJS(),
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getQueryValue,
		getTFLInformation,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
