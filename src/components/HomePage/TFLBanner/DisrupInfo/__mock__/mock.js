const mockData = { 
    transportSelect: {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'bakerloo',
      name: 'Bakerloo',
      modeName: 'tube',
      disruptions: [],
      created: '2019-09-17T15:10:40.747Z',
      modified: '2019-09-17T15:10:40.747Z',
      lineStatuses: [
        {
          $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities',
          id: 0,
          statusSeverity: 10,
          statusSeverityDescription: 'Good Service',
          created: '0001-01-01T00:00:00',
          validityPeriods: []
        }
      ],
      routeSections: [],
      serviceTypes: [
        {
          $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
          name: 'Regular',
          uri: '/Line/Route?ids=Bakerloo&serviceTypes=Regular'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    }
}

export default mockData;