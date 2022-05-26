const billAmount=document.querySelector("#bill-amount");
const cashProvided=document.querySelector("#cash-given");
const checkButton=document.querySelector("#Check");
const numberOfNotes=document.querySelectorAll(".no-of-notes");
const errorMsg=document.querySelector("#error-msg");
checkButton.addEventListener("click",clickHandler);
notes=[2000,500,100,20,10,5,1];

function clickHandler()
{
    errorMsg.style.display="none";
    if(billAmount.value >= 0)
    {
        console.log("here again")
        console.log('Bill='+billAmount.value);
        console.log("Cash Provided="+cashProvided.value);
        if(cashProvided.value >= billAmount.value)
        {
            console.log("inside if");
            console.log('Bill='+billAmount.value);
            console.log("Cash Provided="+cashProvided.value);
            var change=cashProvided.value-billAmount.value;
            console.log("Change="+change)
            for(i=0;i<notes.length;i++)
            {
                console.log(notes.length);
                console.log("entered for");
                var numOfNotes=Math.trunc(change/notes[i]);
                numberOfNotes[i].innerText=numOfNotes;
                change%=notes[i];
                console.log("new change "+change);
            }
        }
        else
        {
            console.log(billAmount.value);
            console.log(cashProvided.value);
            errorMsg.style.display="block";
            errorMsg.innerText="You want to wash plates or what? Gimme atleast "+billAmount.value;
        }
    }
    else
    {
        errorMsg.style.display="block";
        errorMsg.innerText="The bill amount entered must be positive";
    }

}