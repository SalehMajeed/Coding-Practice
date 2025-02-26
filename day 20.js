// 167 ==>	Sort the Dates
// 	In this challenge, sort an array containing a series of dates given as strings. Each date is given in the format DD-MM-YYYY_HH:MM:
// 		"12-02-2012_13:44"
// 	The priority of criteria used for sorting will be:
// 		Year
// 		Month
// 		Day
// 		Hours
// 		Minutes
// 	Given an array arr and a string type, implement a function that returns:
// 		if type is equal to "ASC", the array arr sorted in ascending order.
// 		if type is equal to "DSC", the array arr sorted in descending order.
// 		sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "ASC") ➞ [ "10-02-2016_12:30", "10-02-2018_12:15", "10-02-2018_12:30" ]
// 		sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "DSC") ➞ [ "10-02-2018_12:30", "10-02-2018_12:15", "10-02-2016_12:30" ]
// 		sortDates(["09-02-2000_10:03", "10-02-2000_18:29", "01-01-1999_00:55"], "ASC") ➞ [ "01-01-1999_00:55", "09-02-2000_10:03", "10-02-2000_18:29" ]
// 	Remember: the date is in the format DD-MM-YYYY_HH:MM.
// 	You can expect only valid formatted dates, without exceptions to handle.
function sortDates(arr, type) {
    let dateArray = []
    for (let i = 0; i < arr.length; i++) {
        let [date, time] = arr[i].split("_")
        let [day, month, year, hours, minutes] = [...date.split("-"), ...time.split(":")]
        month -= 1
        dateArray.push(new Date(year, month, day, hours, minutes))
    }
    return dateArray.sort((a, b) => type == "DSC"?a<b?1:a>b?-1:0:a<b?-1:a>b?1:0)
    console.log(dateArray)
}
console.log(sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "ASC"))
console.log(sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "DSC"))
console.log(sortDates(["09-02-2000_10:03", "10-02-2000_18:29", "01-01-1999_00:55"], "ASC"))

// 168 ==>	Pricey Products
// 	You will be given an object with various consumer products and thier respective prices. Return a list of the products with a minimum price of 500 in descending order.
// 		products({"Computer" : 600, "TV" : 800, "Radio" : 50}) ➞ ["TV","Computer"]
// 		products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}) ➞ ["Bike1", "Bike3"]) 
// 		products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}) ➞ []
function product(obj) {
    // let emptyArray = []
    // for(ele in obj){
    //     if(obj[ele] >= 500){
    //         emptyArray.push({
    //             name:ele,
    //             value:obj[ele]
    //         })
    //     }
    // }
    // return emptyArray.sort(({value:a},{value:b}) => {
    //     return a>b?-1:b>a?1:0
    // }).map(element=>{
    //     return element.name
    // })
    return Object.keys(obj).filter(ele => obj[ele] >= 500).sort((a, b) => obj[a] > obj[b] ? -1 : obj[b] > obj[a] ? 1 : 0)
}
console.log(product({ "Computer": 600, "TV": 800, "Radio": 50 }))
console.log(product({ "Bike1": 510, "Bike2": 401, "Bike3": 501 }))
console.log(product({ "Loafers": 50, "Vans": 10, "Crocs": 20 }))

// 169 ==>	Super Strict Grading
// 	Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!
// 		whoPassed({
// 			"John" : ["5/5", "50/50", "10/10", "10/10"],
// 			"Sarah" : ["4/8", "50/57", "7/10", "10/18"],
// 			"Adam" : ["8/10", "22/25", "3/5", "5/5"],
// 			"Barry" : ["3/3", "20/20"]
// 		}) ➞ ["Barry", "John"]
// 		whoPassed({
// 			"Zara" : ["10/10"],
// 			"Kris" : ["30/30"],
// 			"Charlie" : ["100/100"],
// 			"Alex" : ["1/1"]
// 		}) ➞ ["Alex", "Charlie", "Kris", "Zara"]
// 		whoPassed({
// 			"Zach" : ["10/10", "2/4"],
// 			"Fred" : ["7/9", "2/3"]
// 		}) ➞ []
// 	All of a student's test scores must be 100% to pass.
// 	Remember to return an array of student names sorted alphabetically.
function whoPassed(obj){
    return Object.keys(obj).filter(element=> obj[element].every(ele=>{
    	let arr = ele.split("/")
      return arr[0] == arr[1]
    }
    )).sort()
}
console.log(whoPassed({
    "John" : ["5/5", "50/50", "10/10", "10/10"],
    "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
    "Adam" : ["8/10", "22/25", "3/5", "5/5"],
    "Barry" : ["3/3", "20/20"]
}))
console.log(whoPassed({
    "Zara" : ["10/10"],
    "Kris" : ["30/30"],
    "Charlie" : ["100/100"],
    "Alex" : ["1/1"]
}))
console.log(whoPassed({
    "Zach" : ["10/10", "2/4"],
    "Fred" : ["7/9", "2/3"]
}))

// 170 ==>	Bound Sort
// 	Create a function that returns true if an input array can be completely sorted by only sorting within the bounds [0, n] (inclusive), where n is smaller than or equal to the array's length, and false otherwise.
// 		boundSort([1, 6, 5, 3, 8, 9], [0, 3]) ➞ true // If [1, 6, 5, 3] is sorted to [1, 3, 5, 6], the array is completely sorted.
// 		boundSort([1, 6, 5, 3, 8, 9], [0, 2]) ➞ false // Even if [1, 6, 5] is sorted to [1, 5, 6], the array is still not completely sorted.
// 		boundSort([1, 9, 2, 5, 7], [0, 4]) ➞ true
// 		boundSort([1, 9, 2, 5, 7], [0, 3]) ➞ false // Sorting from [0, 3] gives us [1, 2, 5, 9, 7], array still not completely sorted.
// 	Numbers in array will be unique. The lower index of the bound will always be 0.
function compare(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return false
    }
    if (array1.length != array2.length) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false
        }
    }
    return true
}
function boundSort(originalArray, boundry) {
    let array1 = [...originalArray.slice(boundry[0], boundry[1] + 1).sort((a, b) => a - b), ...originalArray.slice(boundry[1]+1)]
    return compare(array1, originalArray.sort((a, b) => a - b))
}
console.log(boundSort([1, 6, 5, 3, 8, 9], [0, 3]))
console.log(boundSort([1, 6, 5, 3, 8, 9], [0, 2]))
console.log(boundSort([1, 9, 2, 5, 7], [0, 4]))
console.log(boundSort([1, 9, 2, 5, 7], [0, 3]))