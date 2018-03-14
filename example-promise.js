// function getTempCallback (location, callback) {
//     callback(undefine, 78);
//     callback('City not found');
// }

// getTempCallback('Detroit', function (err, temp) {
//     if (err) {
//         console.log('error: ', err);
//     } else {
//         console.log(success: ', temp');
//     }
// })
// /*
// Promise
// */

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         resolve(79);
//         reject('city not found');
//     });
// }

// getPromise('Detroit').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promis error', err);
// })

function addPromise (a, b) {
    return new Promise(function(resolve,reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('not a number');
        }
    })
    
}

addPromise(6, 'four').then(function (sum) {
    console.log('success: ', sum)
}, function (err) {
    console.log('error ',err);

})