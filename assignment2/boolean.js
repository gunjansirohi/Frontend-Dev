let isDoorClosed=false;
let iswindowclosed=false;
let isownerinside=false;
let isAlarmOn=false;
if(isAlarmOn && isDoorClosed && isownerinside && iswindowclosed){
    console.log("Granted");
}
else if(isAlarmOn || isDoorClosed || isownerinside || iswindowclosed){
    console.log("Safe");
}
else if(!isAlarmOn || !isownerinside || !isDoorClosed || !iswindowclosed){
    console.log("Unsafe");
}