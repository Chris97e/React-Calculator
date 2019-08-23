import React from 'react';
import Button from '../Button/Button';
import  './App.css'
import Display from '../Display/Display';


function App() {
    
    const [current, setCurrent] = React.useState('0');
    const [formulaDisplay, setFormulaDisplay] = React.useState('');
    const [result, setResult] = React.useState(0);
    const [ready, setReady] = React.useState(false);
    const [after, setAfter] = React.useState(false);
    const take = '';
    
    function handleNumber(number){
        
        
        
        if(current==='0'){
            setCurrent(number);
        } else{
            
            if(after){
                
                setCurrent('');
              
            }
                  
            setCurrent(current+number);
            
        }
        
        setAfter(false);
    }
    
    function handleFunction(operator){
        
        if(current!=='0'){
            
            
            
            
            setFormulaDisplay(formulaDisplay + ' ' + current + ' ' + operator );
            
            if(!ready){
                setResult(parseInt(current));
                setCurrent('0');
                
            }
            
            
            if(ready){
                
                setCurrent(operate(current,operator,result));
                setAfter(true);
                
            }
            
            setReady(true);
            
            
        } else{
            
            if(formulaDisplay.length>0){
                setFormulaDisplay(formulaDisplay.substr(0,formulaDisplay.length -1) + operator);
            }
            
        }
        
        
    }
    
    return ( 
        < div className = "App" >
        
        <Display formula={formulaDisplay} current={current}/>
        
        <section className="Keyboard">
        
        <Button type="controller" value="CE"/>
        <Button type="controller" value="C"/>
        <Button type="controller" value="%" onClick={handleFunction}/>
        <Button type="operation" value="←"/>
        
        <Button type="number"   value="7"  onClick={handleNumber}/>
        <Button type="number"   value="8"  onClick={handleNumber}/>
        <Button type="number"   value="9"  onClick={handleNumber}/>
        <Button type="operation" value="x" onClick={handleFunction}/>
        
        <Button type="number"   value="4" onClick={handleNumber}/>
        <Button type="number"   value="5" onClick={handleNumber}/>
        <Button type="number"   value="6" onClick={handleNumber}/>
        <Button type="operation" value="-" onClick={handleFunction}/>
        
        <Button type="number"   value="1" onClick={handleNumber}/>
        <Button type="number"   value="2" onClick={handleNumber}/>
        <Button type="number"   value="3" onClick={handleNumber}/>
        <Button type="operation" value="+" onClick={handleFunction}/>
        
        <Button type="controller" value="±"/>
        <Button type="number"   value="0" onClick={handleNumber}/>
        <Button type="controller" value=","/>
        <Button type="operation" value="="/>
        </section>
        </div>
        );
    }
    
    function operate(a,operator,b){
        
        a= parseInt(a);
        var finalResult ;
        
        
        switch (operator) {
            
            case '+':
            
            finalResult = a+b;
            finalResult = finalResult.toString();
            if(typeof finalResult === 'String'){
                console.log("pene");
            }
            debugger;
            return finalResult;
            
            case '-':
            finalResult = a-b;
            return a - b;
            
            case 'x':
            finalResult = a+b;
            return a * b;
            
            
        }
        
    }
    
    export default App;