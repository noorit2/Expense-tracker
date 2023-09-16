
import './ExpenseForm.css';
import React,{useState} from 'react';
function ExpenseForm(props){
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    function titleChangeHandler(e){
        setEnteredTitle(e.target.value);
        console.log(e);
    }
    function amountChangeHandler(e){
        setEnteredAmount(e.target.value);
    
    }
    function dateChangeHandler(e){
        setEnteredDate(e.target.value);

    }
   function submitHandler(event){
       event.preventDefault();
      const expenseform={
          title:enteredTitle, 
          amount: +enteredAmount, 
       date: new Date(enteredDate)
       };
        props.onSubmitExpense(expenseform);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
        setclicked(false);
    }
   const [clicked,setclicked]=useState(false);
    function buttonclickhandler(e){
    setclicked(true);
    }
    function cancelclickhandler(e){
   setclicked(false);   
    }
    return(
    clicked !== true ? 
        (
            <div  className="new-expense__button"><button  onClick={buttonclickhandler}>Add New Expense</button></div>
        ):
(
    
<form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>title</label>
            <input type='text' name='label' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>amount</label>
            <input type='number' min={0.01} step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>date</label>
            <input type='date' min={2020-1-1} max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className='new-expense__actions'>
    <button onClick={cancelclickhandler}>cancel</button>
    <button type='submit'>add expense</button>
    </div>
</form>
));
}
export default ExpenseForm;
// ********************************************************** Another way using only one state and one change handler function *******************************************************************
// const [userInput, setUserInput]=useState({
//     title:'',amount:'',date:''
// });
// function ChangeHandler(event){
//     setUserInput((prevState)=>{
//         return{...prevState,[event.target.name]:event.target.value};
//     });
//     }
//     function submitHandler(event){
//         event.preventDefault();
//        const expenseform={
//            title:userInput.title, 
//            amount:userInput.amount, 
//             date: new Date(userInput.date)
//         };
//     setUserInput({title:"",amount:"",date:""});}
// return(
//     <form onSubmit={submitHandler}>
//              <div className='new-expense__controls'>
//                  <div className='new-expense__control'>
//                      <label>title</label>
//                      <input type='text' name='title' value={userInput.title} onChange={ChangeHandler}/>
//                  </div>
//                  <div className='new-expense__control'>
//                      <label>amount</label>
//                      <input type='number' min={0.01} step="0.01" name="amount" value={userInput.amount} onChange={ChangeHandler}/>
//                  </div>
//                  <div className='new-expense__control'>
//                      <label>date</label>
//                      <input type='date' min={2020-1-1} max="2022-12-31" name="date" value={userInput.date} onChange={ChangeHandler}/>
//                  </div>
//              </div>
//              <div className='new-expense__actions'>
//              <button type='submit'>add expense</button>
//              </div>
//          </form>
// )
