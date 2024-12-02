const myDiv = document.getElementById("numKey");
const txtScreen = document.getElementById("txtDisplyScreen");
function keyClicked(numKeyValue)
{
    txtScreen.value = txtScreen.value + numKeyValue;
    console.log("Hello World " + numKeyValue);
}

function clearScreen()
{
    txtScreen.value = '';
    console.log("Clear ");

}

function getResult()
{
    txtScreen.value = eval( txtScreen.value);
    
    console.log(eval( txtScreen.value));

}