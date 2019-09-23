const mockData = { tflInfo :[
    {
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
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'central',
      name: 'Central',
      modeName: 'tube',
      disruptions: [],
      created: '2019-09-17T15:10:40.75Z',
      modified: '2019-09-17T15:10:40.75Z',
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
          uri: '/Line/Route?ids=Central&serviceTypes=Regular'
        },
        {
          $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
          name: 'Night',
          uri: '/Line/Route?ids=Central&serviceTypes=Night'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'circle',
      name: 'Circle',
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
          uri: '/Line/Route?ids=Circle&serviceTypes=Regular'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'district',
      name: 'District',
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
          uri: '/Line/Route?ids=District&serviceTypes=Regular'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'dlr',
      name: 'DLR',
      modeName: 'dlr',
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
          uri: '/Line/Route?ids=DLR&serviceTypes=Regular'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'hammersmith-city',
      name: 'Hammersmith & City',
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
          uri: '/Line/Route?ids=Hammersmith & City&serviceTypes=Regular'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'jubilee',
      name: 'Jubilee',
      modeName: 'tube',
      disruptions: [],
      created: '2019-09-17T15:10:40.767Z',
      modified: '2019-09-17T15:10:40.767Z',
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
          uri: '/Line/Route?ids=Jubilee&serviceTypes=Regular'
        },
        {
          $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
          name: 'Night',
          uri: '/Line/Route?ids=Jubilee&serviceTypes=Night'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'london-overground',
      name: 'London Overground',
      modeName: 'overground',
      disruptions: [],
      created: '2019-09-17T15:10:40.743Z',
      modified: '2019-09-17T15:10:40.743Z',
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
          uri: '/Line/Route?ids=London Overground&serviceTypes=Regular'
        },
        {
          $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
          name: 'Night',
          uri: '/Line/Route?ids=London Overground&serviceTypes=Night'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'metropolitan',
      name: 'Metropolitan',
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
          uri: '/Line/Route?ids=Metropolitan&serviceTypes=Regular'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'northern',
      name: 'Northern',
      modeName: 'tube',
      disruptions: [],
      created: '2019-09-17T15:10:40.75Z',
      modified: '2019-09-17T15:10:40.75Z',
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
          uri: '/Line/Route?ids=Northern&serviceTypes=Regular'
        },
        {
          $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
          name: 'Night',
          uri: '/Line/Route?ids=Northern&serviceTypes=Night'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'piccadilly',
      name: 'Piccadilly',
      modeName: 'tube',
      disruptions: [],
      created: '2019-09-17T15:10:40.753Z',
      modified: '2019-09-17T15:10:40.753Z',
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
          uri: '/Line/Route?ids=Piccadilly&serviceTypes=Regular'
        },
        {
          $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
          name: 'Night',
          uri: '/Line/Route?ids=Piccadilly&serviceTypes=Night'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'victoria',
      name: 'Victoria',
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
          uri: '/Line/Route?ids=Victoria&serviceTypes=Regular'
        },
        {
          $type: 'Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities',
          name: 'Night',
          uri: '/Line/Route?ids=Victoria&serviceTypes=Night'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    },
    {
      $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities',
      id: 'waterloo-city',
      name: 'Waterloo & City',
      modeName: 'tube',
      disruptions: [],
      created: '2019-09-17T15:10:40.76Z',
      modified: '2019-09-17T15:10:40.76Z',
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
          uri: '/Line/Route?ids=Waterloo & City&serviceTypes=Regular'
        }
      ],
      crowding: {
        $type: 'Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities'
      }
    }
]}

export default mockData;