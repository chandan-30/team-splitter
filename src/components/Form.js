import '../css/Form.css';
import { useEffect, useState } from 'react';
const Nav = ({getN}) => {
    
    const [name,setName] = useState('');
    const [num,setNum] = useState(0);
    const [stringOfNames, setString] = useState('');
    const numChange = (e) => {
        console.log(e.target.value);
        setNum(e.target.value);
    }
    

    const nameChange = (e) => {
        setName(e.target.value);
        
    }
    useEffect(()=>{
        
    },[name]);
    //setNamesLi([...namesLi,name]);

    const AddNames = (e)=>{

        if(name === ' ' || name === ''){
            alert('Edokati enter cheyyi ra kuyya!');
            setName('');
            return;
        }
        
        if(num < stringOfNames.split(' ').length){
            alert('you have entered all names!');
            setName('');
            return;
        }
        setString(stringOfNames + ' ' + name);
        console.log('beforeadd',stringOfNames);
        setName('');
    }

    const submitNames = (e) => {
        e.preventDefault();
        getN(stringOfNames.split(' '));
        setString('');
        setNum(0);
    }

    let count = 0;
    return(
        <>
            <div className='row row1'>
                <div className='col col1'>
                    <form className='form' onSubmit={submitNames}>
                        <label  className="form-label">Number Of People</label>
                        <div className="input-group mb-3">
                        <input type="number" className="form-control num shadow-none" min='4' onChange={numChange} id="basic-url" placeholder="Minimum 4" aria-describedby="basic-addon3"></input>
                        </div>
                        <div className="input-group mb-3">
                        <input type="text" className="form-control shadow-none name" onChange={nameChange} value={name} placeholder="Enter Name and click add" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                        <button className="btn add btn-outline-secondary" onClick={AddNames} type="button" id="button-addon2">Add</button>
                        </div>
                        <p className='nameList'>{stringOfNames}</p>
                        <label  className="form-label lbl">click the button below to form teams and matches</label><br></br>
                        <button className="btn submit btn-outline-secondary" type="submit" id="button-addon2">Create</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Nav;