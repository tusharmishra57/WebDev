import {useRef} from 'react'
export function Otp()
{
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return <div className="flex justify-center">
        <SubOtpBox ref = {ref1} onDone={() => {ref2.current.focus();}} />
        <SubOtpBox ref={ref2} onDone={()=>{ref3.current.focus();}}/>
        <SubOtpBox ref={ref3} onDone={()=>{ref4.current.focus();}} />
        <SubOtpBox ref={ref4} onDone={()=>{ref5.current.focus();}}/>
        <SubOtpBox ref={ref5} onDone={()=>{ref6.current.focus();}}/>
        <SubOtpBox ref={ref6} onDone={()=>{ref6.current.focus();}}/>
    </div>
}

function SubOtpBox({
    onDone,
    ref
})
{
    return <div>
        <input ref = {ref} type = "text" className = "bg-blue-400 w-[40px] h-[50px] rounded-2xl m-1" onChange = {onDone}></input>
    </div>
}