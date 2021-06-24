import axios from 'axios';
const api_key = require('../config/keys')

// export const getData = (start = '2021-01-01', end = '2021-01-30', code = 'CO') => {
//     axios.request({
//         method: 'GET',
//         url: 'https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSHistoricalDataBetweenDatesForState',
//         params: { end_date: end, start_date: start, statecode: code },
//         headers: {
//             'x-rapidapi-key': api_key,
//             'x-rapidapi-host': 'covid-19-usa-data-by-zt.p.rapidapi.com'
//         }
//     }).then(res => {
//         let count = 0
//         res.data.records.forEach(day => {
//             count += parseInt(day.cases.dailyconfirmed)
//         });
//         console.log(count)
//         return count;

//     })

//         .catch(function (error) {
//             console.error(error);
//         });
// }

// const requestData = (start, end, code) => {   
//     return new Promise((resolve, reject) => {
//         axios.request({
//             method: 'GET',
//             url: 'https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSHistoricalDataBetweenDatesForState',
//             params: { end_date: end, start_date: start, statecode: code },
//             headers: {
//                 'x-rapidapi-key': api_key,
//                 'x-rapidapi-host': 'covid-19-usa-data-by-zt.p.rapidapi.com'
//             }
//         }).then(response => {
//             resolve(response)
//         })
//             .catch(error => {
//                 console.error('auth.error', error);
//                 reject(error)
//             });
//     });
// };

// requestData("2020-09-01", '2020-09-31', "CO")


// const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KA", "KT", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA", "WA", "WV","WI","WY"]


// const fetchData = () => {
//     const start = '2021-03-01'
//     const end = '2021-03-31'
//     states.forEach((state, i) => {
//         requestData(start, end, state).then(res => {
//             console.log(states[i])
//             let data = res.data.records
//             let count = 0;
//             data.forEach(day => {
//                 count += parseInt(day.cases.dailyconfirmed)
//             })
//             console.log(count)
//         })
//     })
// }

