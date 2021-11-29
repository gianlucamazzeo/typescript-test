// Abstract
abstract class Logger{
  abstract  log(msg: string) : void
    generateId() : number{
       return Math.round(Math.random()*100000000)   
    }
}

interface Log {
    msg: string
    id: number
}

class ConsoleLogger extends Logger implements Log
{
    msg: string = ''
    id: number = 0
    log(msg: string) : void{
       console.log(msg)
    }
}

let Clog = new ConsoleLogger();
let gen = Clog.generateId()
Clog.log('Logging to console')
console.log(gen)