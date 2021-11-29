var params: [string,number];

params = ['Gianluca',43]

function showData(par:[string, number]) {

    console.log(par[0])    
}

showData(params);

enum DAYS {
    MON = 1,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
}

function isWorkingDay(day: DAYS){
    if(day === DAYS.SUN || day === DAYS.SAT){
        return true;
    }
    return false;
}

console.log(isWorkingDay(DAYS.SUN))