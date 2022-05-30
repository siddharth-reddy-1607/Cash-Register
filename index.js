const billAmount=document.querySelector("#bill-amount");
const nextButton=document.querySelector("#next-button");
const cashProvided=document.querySelector("#cash-given");
const checkButton=document.querySelector("#Check");
const numberOfNotes=document.querySelectorAll(".no-of-notes");
const errorMsg=document.querySelector("#error-msg");
const cashDisplay=document.querySelector("#cash-display");
cashDisplay.style.display="none";
const tableDisplay=document.querySelector("#table-display");
tableDisplay.style.display="none";
checkButton.addEventListener("click",clickHandlerCheck);
nextButton.addEventListener("click",clickHandlerNext);
notes=[2000,500,100,20,10,5,1];

function clickHandlerNext()
{
    errorMsg.style.display="none";
    cashDisplay.style.display="none";
    tableDisplay.style.display="none";
    if(billAmount.value <= 0)
    {
        errorMsg.innerText="The bill amount must be positve!";
        errorMsg.style.display="block";
    }
    else
    {
        console.log(billAmount.value);
        cashDisplay.style.display="flex";
    }
}
function clickHandlerCheck()
{
    errorMsg.style.display="none";
    tableDisplay.style.display="none";
    
        if(+cashProvided.value >= +billAmount.value)
        {
            var change=cashProvided.value-billAmount.value;
            errorMsg.style.display="block";
            errorMsg.innerText="Change="+change;
            for(i=0;i<notes.length;i++)
            {
                var numOfNotes=Math.trunc(change/notes[i]);
                numberOfNotes[i].innerText=numOfNotes;
                change%=notes[i];
            }
            tableDisplay.style.display="block";
            
        }
        else
        {
            errorMsg.style.display="block";
            errorMsg.innerText="You want to wash dishes or what? Gimme atleast "+billAmount.value;
        }

}