//STEP 1
// const favoriteMovies = ["Wall-E", "Avatar", "Suzume", "Top Gun: Maverick", "Avatar: The Way of Water" ]
// console.log(favoriteMovies[1])
//STEP 2
// let favoriteMovies = new Array(5)
// favoriteMovies[0] = "Wall-E"
// favoriteMovies[1] = "Avatar"
// favoriteMovies[2] = "Suzume"
// favoriteMovies[3] = "Top Gun: Maverick"
// favoriteMovies[4] = "Avatar: The Way of Water"
// console.log(favoriteMovies[0])
//STEP 3
// let favoriteMovies = new Array(5)
// favoriteMovies[0] = "Wall-E"
// favoriteMovies[1] = "Avatar"
// favoriteMovies[2] = "Suzume"
// favoriteMovies[3] = "Top Gun: Maverick"
// favoriteMovies[4] = "Avatar: The Way of Water"
// console.log(favoriteMovies[0])
// favoriteMovies.splice(2, 0, "John Wick")
// console.log(favoriteMovies.length)
//STEP 4
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// delete favoriteMovies[0]
// console.log(favoriteMovies)
//STEP 5
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// favoriteMovies.push("Kiki's Delivery Service")
// favoriteMovies.push("Robocop")
// for (const index in favoriteMovies) {
//     console.log(favoriteMovies[index])
// }
//STEP 6
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// favoriteMovies.push("Kiki's Delivery Service")
// favoriteMovies.push("Robocop")
// for (const movie of favoriteMovies) {
//     console.log(movie)
// }
//STEP 7
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// favoriteMovies.push("Kiki's Delivery Service")
// favoriteMovies.push("Robocop")
// favoriteMovies.sort()
// for (const movie of favoriteMovies) {
//     console.log(movie)
// }
//STEP 8
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// favoriteMovies.push("Kiki's Delivery Service")
// favoriteMovies.push("Robocop")

// let leastFavMovies = []
// leastFavMovies.push("2001: A Space Odyssey")
// leastFavMovies.push("Deadpool & Wolverine")
// leastFavMovies.push("Captain Marvel")
// console.log("\n")
// console.log("Movies I like:")
// console.log("\n")
// for (const index in favoriteMovies) {
//     console.log(favoriteMovies[index])
// }
// console.log("\n")
// console.log("Movies I regret watching:")
// console.log("\n")
// for (const movie of leastFavMovies){
//     console.log(movie)
// }
// console.log("\n")
//STEP 9
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// favoriteMovies.push("Kiki's Delivery Service")
// favoriteMovies.push("Robocop")

// let leastFavMovies = []
// leastFavMovies.push("2001: A Space Odyssey")
// leastFavMovies.push("Deadpool & Wolverine")
// leastFavMovies.push("Captain Marvel")
// let movies = favoriteMovies.concat(leastFavMovies)
// movies.sort()
// movies.reverse()
// console.log(movies)
//STEP 10
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// favoriteMovies.push("Kiki's Delivery Service")
// favoriteMovies.push("Robocop")

// let leastFavMovies = []
// leastFavMovies.push("2001: A Space Odyssey")
// leastFavMovies.push("Deadpool & Wolverine")
// leastFavMovies.push("Captain Marvel")
// let movies = favoriteMovies.concat(leastFavMovies)
// movies.sort()
// movies.reverse()
// console.log(movies.at(length-1))
//STEP 11
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// favoriteMovies.push("Kiki's Delivery Service")
// favoriteMovies.push("Robocop")

// let leastFavMovies = []
// leastFavMovies.push("2001: A Space Odyssey")
// leastFavMovies.push("Deadpool & Wolverine")
// leastFavMovies.push("Captain Marvel")
// let movies = favoriteMovies.concat(leastFavMovies)
// movies.sort()
// movies.reverse()
// console.log(movies.at(0))
//STEP 12
// let favoriteMovies = []
// favoriteMovies.push("Wall-E")
// favoriteMovies.push("Avatar")
// favoriteMovies.push("Suzume")
// favoriteMovies.push("Top Gun: Maverick")
// favoriteMovies.push("Avatar: The Way of Water")
// favoriteMovies.push("Kiki's Delivery Service")
// favoriteMovies.push("Robocop")

// let leastFavMovies = []
// leastFavMovies.push("2001: A Space Odyssey")
// leastFavMovies.push("Deadpool & Wolverine")
// leastFavMovies.push("Captain Marvel")
// let movies = favoriteMovies.concat(leastFavMovies)

// let leastFavIndices = []
// for (const item of leastFavMovies) {
//     let index = movies.indexOf(item)
//     leastFavIndices.push(index)
// }
// console.log(leastFavIndices)
// let moviesToAdd = ["The Martian", "Top Gun", "Pacific Rim"]
// for (const index of leastFavIndices) {
//     movies[index] = moviesToAdd.pop()
// }
// console.log(movies)
//STEP 13
// movies = [["Wall-E", 1], ["Avatar", 2], ["Avatar: The Way of Water", 3], ["Top Gun: Maverick", 4], ["Suzume", 5]]
// let movieNames = movies.filter(getMovieName)
// function getMovieName(item) {
//     for (const value of item) {
//         if (typeof value === "string"){
//             console.log(value)
//             return value
//         }
//     }
// }
//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"]
// let showEmployee = (employeeArray) => {
//     console.log('\n')
//     console.log('Employees:')
//     console.log('\n')
//     for (let employee of employeeArray) {
//         console.log(employee)
//     }
//     console.log('\n')
// }
// showEmployee(employees)
//STEP 15
// // Filter false, null, 0, and blank values from an array
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

// function filterValues(array) {
//     let check = (value) => {
//         if (value !== false) {
//             return value
//         }
//         else if (value !== null) {
//             return value
//         }
//         else if (value !== 0) {
//             return value
//         }
//         else if (value !== '') {
//             return value
//         }
//     } 
//     return array.filter(check)
// }
//STEP 16

// function randomItem(array) {
//     let randomIndex = Math.floor(Math.random() * array.length)
//     return sampleArray.at(randomIndex)  
// }

// let sampleArray = [45, 87, 22, 69, 999, 11, 32, 78, 5, 40, 99]
// console.log(randomItem(sampleArray))

//STEP 17

// function maxValue(array) {
//     let max = -Infinity
//     for (value of array) {
//         if (value > max) {
//             max = value
//         }
//     }
//     return max
// }
// let sampleArray = [45, 87, 22, 69, 999, 999911, Infinity, 78, 5, 40, 99]
// console.log(maxValue(sampleArray))
