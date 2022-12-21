function updateClock(){
    var now=new Date();
    var dname=now.getDay();
    var mo=now.getMonth();
    var dnum=now.getDate().toString();
    var yr=now.getFullYear().toString();
    var hr=now.getFullYear();
    var hou=now.getHours().toString();
    var min=now.getMinutes().toString();
    var sec=now.getSeconds().toString();
    var pe="AM";


        if(hou.length<2)
        {
            hou='0'+hou;
        }

        if(min.length<2)
        {
            min='0'+min;
        }


        if(sec.length<2)
        {
            sec='0'+sec;
        }

        if(hr==0)
        {
            hou="12";
        }

        if(hr>=12)
        {
            pe="AM";
        }

        var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        var ids=["dayname","month","daynum","year","hour","minutes","seconds","period"];
        var values=[week[dname],months[mo],dnum,yr,hou,min,sec,pe];

        for (var i=0;i<ids.length;i++)
        {
            document.getElementById(ids[i]).firstChild.nodeValue=values[i];
        }


        

}

function Sou()
{
    addEventListener('mousemove',()=>{
        document.getElementById("music").play();
    });
    
}

function initClock()
{
    updateClock();
    setInterval(updateClock,1000);
    setInterval(Sou,1000);

}

