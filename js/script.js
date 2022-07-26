// 1

function getCurrentDate(separator) {
    console.log(new Date().getDate() + separator + ( new Date().getMonth() +1) + separator + new Date().getFullYear())
}

getCurrentDate('-')

// 2 

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getMonthName = new Date("10/11/2021");
console.log("The current month is " + monthNames[getMonthName.getMonth()]);


//3

function dateCompare(){
    const date1 = new Date('11/14/2021 00:01');
    const date2 = new Date('11/14/2021 00:00');

    if(date1 > date2){
        console.log(`${'11/14/2021 00:01'} больше, чем ${'11/14/2021 00:00'}`)
    } else if(date1 < date2){
        console.log(`${'11/14/2021 00:00'} больше, чем ${'11/14/2021 00:01'}`)
    } else{
        console.log(`Обе даты равны`)
    }
}

dateCompare("11/14/2021 00:00", "11/14/2021 00:01")


//4 

const day = new Date('Nov 16, 2020');
const n = day.getDay();
 if( n == 6 )
console.log("выходной");
else
console.log("не выходной");