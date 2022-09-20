import { useState } from 'react';
import '../css/DisplayTeams.css';

const DisplayTeams = ({teams}) => {

    let arrM;
    
    let t = [];
    for(let i=0;i<teams.length;i++){
        t.push(i+1);
    }
    
    const sched = (t) => {
        // Online Javascript Editor for free
        
        let actual_len = t.length;
        let c = t.length-1;
        let mn = 1;
        let depth = Math.floor(t.length/4);
        let obj = {};
        let r1,r2;
        let bye = '';
        if(t.length == 2){
            obj['match1'] = t[0] + 'VS' + t[1];
        }
        while(c != mn){
            
            if(t.length == 0){
                t = Object.keys(obj);
                if(obj['match'+(mn-1)].includes('Winner')){
                    
                    t = t.slice(-depth);
                    depth -= 1;
                    
                // console.log('gere')
                }
                t = t.map(x => 'Winner(' + x + ')');
            }
            if(t.length % 2 != 0){
                let bye_exists = bye;
                let b = Math.floor(Math.random() * t.length);
                /*if(t.length == 3){
                    bye = t[b];
                }
                else{
                    bye = 'Winner('+t[b]+')';   
                }*/
                if(bye_exists){
                    bye = t[b] + ' VS ' + bye_exists;
                    obj['match'+mn] = bye;
                    bye = 'Winner(match'+mn + ')';
                    mn += 1;
                }else{
                    bye = t[b];
                }
                
                
                t.splice(b, 1);
            }
            
            r1 = Math.floor(Math.random() * t.length);
            r2 = Math.floor(Math.random() * t.length);
            if(r1 == r2) continue;
            obj['match'+mn] = t[r1] +' VS ' + t[r2];
            
            let num = t[r2];
            
            t.splice(r1, 1);
            r2 = t.indexOf(num);
            t.splice(r2, 1);
            
            mn += 1;
        
        }
        if(bye.length != 0){
            obj['match'+mn] = 'Winner(match' + (mn-1) + ') VS ' + bye; 
        }

        if(actual_len ==4 || actual_len==8 || actual_len ==16 || actual_len == 32){
            obj['match'+mn] = 'Winner(match' + (mn-1) + ') VS ' + 'Winner(match' + (mn-2) + ')';
        }

        return obj;

    }
            let getObj;
    if(teams.length){        
        getObj = sched(t);
        
        arrM = Object.values(getObj);
        console.log('asc',arrM);
        
    }
    
    let cn = 'pt';
    
   
    return(
        <>
            <div className='divofT'>
                <h2>List Of Teams</h2>
            {teams.map(t=>
                <p key={t.id} className={cn}>{'team ' + t.id + ' => '+ t.team}</p>
            )
            }
            <br></br>
            <h5>Match Schedule</h5>
            {arrM ?arrM.map((t,i)=>
                <p key={i} className={cn}>{'Match'+ (i+1) + ' :: ' + t}</p>
            ): ''
            }
            </div>
        </>
    );    

}

export default DisplayTeams;