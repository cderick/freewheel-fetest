import React from 'react'
import PropTypes from 'prop-types'
import s from './Navigation.module.scss'

class Navigation extends React.Component {
	render() {
		if (!this.props.navItems) return null
		const { 
			navigationIcon,
			navigation
		} = this.props.navItems
		return (
			<section>
				<nav className={s.topnav} id={navigationIcon.id}>
					<a className={`${navigationIcon.classes && navigationIcon.classes}`} id={navigationIcon.id} href={navigationIcon.link} rel="noopener noreferrer" target="_blank" >
						<img className={s.imgResize} src={navigationIcon.image} alt={navigationIcon.alt}/>
					</a>
					{navigation && navigation.length
					&& navigation.map((nav, navInd) => (
						<button key={`nav${navInd}`} onClick={() => this.props.changeNav(nav.id)}>{nav.title}</button>
					))}
				</nav>
			</section>
		)
	}
}

Navigation.propTypes = {
	navItems: PropTypes.objectOf(PropTypes.any),
	changeNav: PropTypes.func,
}

Navigation.defaultProps = {
	navItems: undefined,
}

export default Navigation
