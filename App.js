
console.log("Message to developer");
function Alertmsg()
{
    const Hi=()=>{alert("Message to JavaScript Alert")};
return(
<div><button onClick={Hi}>Click</button></div>
);
}
ReactDOM.render(<Alertmsg/>,document.getElementById("mydiv"));



