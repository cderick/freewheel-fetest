import React from 'react'
import PropTypes from 'prop-types'
import s from './DisrupInfo.module.scss'

class DisrupInfo extends React.Component {
    render() {
        if (!this.props.transportSelect) return <div className={`col-5 m-5 ${s.infoService}`}></div>
        const { transportSelect } = this.props
        return (
            <div className={`col-5 m-5 ${s.infoService}`}>
                {transportSelect &&
                    <section>
                        <p className={s.linesClass}><strong className="h5">Line:</strong> {transportSelect.name}</p>
                        {(transportSelect.lineStatuses.filter(status => status.statusSeverity === 10)).length > 0
                            ? (
                                <p className={s.allClear}>No service disruptions</p>
                            ) : (
                                <div>
                                    <p className={s.notWorking}>Service currently suffering disruptions</p>
                                    {transportSelect.lineStatuses.map((disrupt, disIn) => (
                                        <section key={`dis${disIn}`}>
                                            <p><strong className="h5">Reason: </strong>{disrupt.reason}</p>
                                        </section>
                                    ))}
                                </div>
                            )}
                    </section>
                }
            </div>

        )
    }
}

DisrupInfo.propTypes = {
    transportSelect: PropTypes.objectOf(PropTypes.any),
}

DisrupInfo.defaultProps = {
    transportSelect: null,
}

export default DisrupInfo
