// 196 ==>	Get the Months Between Two Dates
// 	Create a function that, given 2 dates, returns the names of the months that are present between them (inclusive).
// 		Input
// 			var january = new Date(2017, 0, 1);
// 			var march = new Date(2017, 2, 1);
// 			monthsInterval(january, march)
// 		output
// 			['January', 'February', 'March']
// 		Input
// 			var december = new Date(2017, 11, 1);
// 			var january = new Date(2018, 0, 1);
// 			monthsInterval(december, january)
// 		output
// 			['January', 'December']
// 		Input
// 			var january2017 = new Date(2017, 0, 1);
// 			var january2018 = new Date(2018, 0, 1);
// 			monthsInterval(january2017, january2018)
// 		output
// 		['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// 			(Notice that January is not duplicated!)
// 	The returned array should include the months of dateStart and dateEnd (inclusive)
// 	The returned array must not include duplicate values
// 	The month names returned by the function should be sorted (not alphabetically, but ordered by which comes first (January = 1st month, February = 2nd month, … , December = 12th month))
// 	The function should produce the same output even if dateStart is greater than dateEnd
function monthsInterval(date1,date2){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    if(date1>date2){
      [date1,date2] = [date2,date1]
    }
    
    let year1 = date1.getFullYear()
    let year2 = date2.getFullYear()
    
    let month1 = date1.getMonth()
    let month2 = date2.getMonth()
    
    if(year1 == year2){
     return months.slice(month1, month2+1)
    }
    
    let month = 12 * (year2 - year1)
    month = month - month1 
    month = month + month2
    if(month>11){
      return months
    }else{
      return [... months.slice(month1), ...months.slice(0,month2+1)]
    }
  }
  
  var january = new Date(2017, 0, 1);
  var march = new Date(2017, 2, 1);
  console.log(monthsInterval(january, march))
  
  
  var december = new Date(2017, 11, 1);
  var january = new Date(2018, 0, 1);
  console.log(monthsInterval(december, january))
  
  
  var january2017 = new Date(2017, 0, 1);
  var january2018 = new Date(2018, 0, 1);
  console.log(monthsInterval(january2017, january2018))
  
  
  