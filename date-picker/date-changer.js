

// document.querySelector('._monthYear_1kb43_487').addEventListener('onchange', (e) => {
//     e.preventDefault()
//     console.log('here')
// })

document.querySelector('._prev_1kb43_531').addEventListener('click', (e) => {
    e.preventDefault();
    checkBookedDates()
    // console.log('prev-clicked')
})
document.querySelector('._next_1kb43_529').addEventListener('click', (e) => {
    e.preventDefault();
    checkBookedDates()
    // console.log('next-clicked')
})



// console.log([...bookedDays])
// console.log(calenderDays)


function checkBookedDates() {

    let  bookedDays  =  [
        {
            date: {
                day: "15",
                month: "March",
                year: "2024"
            },
            email: 'alert@bsf.com'
        },
    
    
        // array of objects that can hold 2 values... first value is object of 3string day, month, year && second value is string of email
        {
            date: {
                day: "22",
                month: "March",
                year: "2024"
            },
            email: 'alert@bsf.com'
        },
        {
            date: {
                day: "23",
                month: "March",
                year: "2024"
            },
            email: 'alert@bsf.com'
        },
        {
            date: {
                day: "24",
                month: "March",
                year: "2024"
            },
            email: 'alert@bsf.com'
        },
        {
            date: {
                day: "25",
                month: "March",
                year: "2024"
            },
            email: 'alert@bsf.com'
        }
    ]

    
    let calenderDays = [...document.querySelectorAll('._day_1kb43_751')];
    calenderDays.forEach(calenderDay => {
        if  (calenderDay.className.includes('_prevMonth_1kb43_815') || calenderDay.className.includes('_nextMonth_1kb43_813')) {
            console.log( 'prevMonthDay or Next')
        } else {
            availableDateCheck(calenderDay)
            // console.log('no prevMonth and  nextMOnnnth', calenderDay.dataset.day)
            calenderDay.addEventListener('click', (e) => {
                e.preventDefault()
                console.log(calenderDay?.dataset?.day)
                // availableDateCheck(calenderDay)
            })
        }
    
    })

    function availableDateCheck(whichDayElement) {
        let month = whichDayElement.dataset.date.slice(5, 6);
        let year = whichDayElement.dataset.date.slice(0, 4);
        let day = whichDayElement.dataset.day;
        // console.log(whichDayElement.dataset.day, whichDayElement.dataset.date)
    
        // console.log(whichDayElement.dataset.date.slice(0, 4))
        bookedDays.forEach(bookedDay  =>  {
            if (bookedDay.date.day == day  && bookedDay.date.year == year) {
                whichDayElement.disabled = true;
                // whichDayElement.style.color = "red";
                whichDayElement.setAttribute('class', 'booked_day _day_1kb43_751')
                console.log('got hit')
            }
            // console.log(bookedDay.date.day, bookedDay.date.month, bookedDay.date.year)
        })
        // whichDayElement.disabled = true;
    }
    
    
    
    
}





checkBookedDates()