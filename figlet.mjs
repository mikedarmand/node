import { log } from 'console'
import figlet from 'figlet'

function Figlet(text){
    figlet(text, (err, data)=>{
        if(err){
            console.log('there is something wrong')
            console.dir(err)
            return;
        
        }
        console.log(data)
        
    })
   

}
Figlet('come fare per leggere dei numeri con il package figlet?')