import React, { usestate } from 'react';
function Abhi()
{
    const[counts1,setCounts1]=usestate(0);
    function myfunc()
    {
        setCounts1(counts1+1)
    }
    function myfunc1()
    {
        setCounts1(counts1-1)
    }
return (
    <>
    <button onClick={myfunc}>INCREASE</button>
    <button onClick={myfunc1}>DECREASE</button>
    <span>{counts1}</span>
    </>
);
}
export default Abhi