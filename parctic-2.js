let untreatedCrimes = 0;
    let availableOfficers = 0;


function unTreatedCrime(arr) {
    for (let num of arr) {
        if (num === -1) { // Crime occurs
            if (availableOfficers > 0) {
                availableOfficers--; // One officer handles the crime
            } else {
                untreatedCrimes++; // Crime goes untreated
            }
        } else { // Officers recruited
            availableOfficers += num; // Add officers to the pool
        }
    }
    return untreatedCrimes;
}

// Read input
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(input[0]);
const events = input[1].split(' ').map(Number);





