var config = {
  address: "localhost", 
  port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	language: "fi",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: 'MMM-Hsl-stops',
			position: 'top_right',
			config: {
				stopId: 'HSL:2434207',  // Id of the stop you want to display, give id test to use test data JSON
				hurryTime: 5, // In minutes apply hurrytime is passenger has to hurry, 0-x minutes
				stopNickName: '', // Personalize stop name with a nickname
				routeIdFilter: ['158', '125'], // Routes filters, retain only the routes listed here
				maxListedDepartures: '3', // Max number of departures listed on screen
				maxFetchedDepartures: '5', // Max number of departures fetched from API to dataset
				timeRange: 12 * 60 * 60, // Range of trips to be polled in seconds
				timeToStop: 4, // Time to get to the stop in minutes
				humanizeTimeTreshold: 15,
				apiUrl: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql' // HSL digirtransit API url
			}
		},
		{
						module: 'MMM-Hsl-stops',
						position: 'top_right',
						config: {
										stopId: 'HSL:2434204',  // Id of the stop you want to display, give id test to use test data JSON
										hurryTime: 5, // In minutes apply hurrytime is passenger has to hurry, 0-x minutes
										stopNickName: '', // Personalize stop name with a nickname
										routeIdFilter: ['157', '159'], // Routes filters, retain only the routes listed here
										maxListedDepartures: '2', // Max number of departures listed on screen
										maxFetchedDepartures: '3', // Max number of departures fetched from API to dataset
										timeRange: 12 * 60 * 60, // Range of trips to be polled in seconds
										timeToStop: 7, // Time to get to the stop in minutes
										humanizeTimeTreshold: 15,
										apiUrl: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql' // HSL digirtransit API url
						}
		},
		{
			module: 'mmm-weatherchart',
			position: 'bottom_bar', // this can be any of the regions
			config: {
				country: 'Finland', // as determined above
				area: 'Southern_Finland', // as determined above
				city: 'Nöykkiö', // as determined above
				updateInterval: 60 * 60 * 1000, // update every hour
				hideBorder: true, // whether or not a border with city name should be shown
				negativeImage: true, // whether or not the default white image should be inverted
				mmDirectory: "/opt/MagicMirror/" // required for caching; adjust if it differs
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
