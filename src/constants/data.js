const data = {
    heroBanner: {
        heroMessage: {
            title: 'Cycle hire scheme.'
        },
        heroForms: [{
            label: 'Find a cycle to hire:',
            id: 'location',
            placeholder: 'London, SW20, Waterloo...',
        }]
    },
    tubeBanner: {
        tubeMessage: {
            title: 'TFL Information'
        }
    },
    mainNav: {
        navigationIcon: {
            image: 'https://www.freewheel.com/wp-content/themes/understrap-child/img/FREEWHEEL-KO.png',
            link: 'https://www.freewheel.com/',
            alt: 'freewheel-logo',
            classes: 'float-left',
            target: 'myTopnav',
            id: 'home'
        },
        navigation: [{
            title: 'Hire a Bike',
            id: 'bikeHire'
        }, {
            title: 'TFL Information',
            id: 'tflInfo'
        }]
    }
}

export default data