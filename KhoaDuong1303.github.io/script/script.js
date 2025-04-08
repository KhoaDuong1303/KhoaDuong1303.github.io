function showMessage()
{
    let age = 15;
    let Name = "Katalina";

    if (age >= 18)
        {
            alert ("Hello" + Name + "You can now drive:)");
        }
        else
        {
            alert ("Hello kid" + " You are too young to drive: ")
            let years = 18 - age;
            alert (" Please come back after " + years + "years")
                  }
                  let sum= 0;
    for (let i = 1; i<=100; i = i+1 )
    {
    sum= sum +i;
    }
   alert(sum);
}

function changeColor()
{
    document.getElementById("main").style.backgroundColor ="grey"; 
}


