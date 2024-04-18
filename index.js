const years = 2024
const birthYears = [2000, 2001, 2002, 2003]
const newYear = []



    // for(let year of birthYears){
    //     console.log( years - year );
    // }

    function calcAge() {
        for (let year of birthYears){
            newYear.push( years - year)
        }       
    }
    calcAge()

console.log(newYear )


