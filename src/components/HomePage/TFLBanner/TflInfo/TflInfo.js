import React from 'react'
import PropTypes from 'prop-types'
import s from './TflInfo.module.scss'

class TflInfo extends React.Component {
    constructor(props) {
		super(props)
		this.sortData = this.sortData.bind(this)
    }
    
    sortData(allData){
        return allData.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            if (a.modeName > b.modeName) return 1
            if (a.modeName < b.modeName) return -1
            return 0
        })
    }

	render() {
		if (!this.props.tflInfo) return null
        const sortedData = this.sortData(this.props.tflInfo)
		return (
            <div className="col-5 m-5">
                {sortedData && sortedData.length
                    && sortedData.map((transport, ind) => (
                        <section key={`tlfInfo${ind}`} className={s.dataClick} onClick={() => this.props.handleClick(transport)}>
                            <p>
                                <strong>{transport.modeName}: </strong>{`${transport.name}`}
                                <span>{(transport.serviceTypes.filter(workTime => (workTime.name).toLowerCase() === 'night')).length > 0 && <i className="fas fa-moon"></i>}</span>
                                <span>{(transport.lineStatuses.filter(status => status.statusSeverity !== 10)).length > 0 
                                && <i className="fas fa-ban"></i>}</span>
                            </p>
                        </section>
                    ))}
            </div>
		)
	}
}

TflInfo.propTypes = {
	handleClick: PropTypes.func,
	tflInfo: PropTypes.arrayOf(PropTypes.any),
}

TflInfo.defaultProps = {
	tflInfo: null,
}

export default TflInfo
