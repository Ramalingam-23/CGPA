var semcount=1;
var e=0;
var tot=0;
var pos = 0;
var semester ;
var cgpagrd=0,cgpacrd=0;
function sub(){
    semester = document.getElementById("num").value;
    var val=document.getElementById("num").value;
    tot=val;
    if(val==null){
        alert("Cant be empty");
    }
    else if(e!=tot){
      
        var a1=document.getElementById("main");
        var s1=document.createElement("label").innerHTML="TOTAL SUBJECTS:";
        a1.append(s1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","num"+e);
        a1.append(ip1);
        document.getElementById("main").appendChild(document.createElement("br"));
        document.getElementById("main").appendChild(document.createElement("br"));
        semcount++;
        var bt1=document.createElement("input");
        bt1.setAttribute("type","button");
        bt1.setAttribute("value","submit");
        bt1.setAttribute("onclick","table()");
        bt1.innerHTML="submit";
        a1.append(bt1);
        var a=document.getElementById("btn").disabled = true; 
    }
}

var tb=0;
function table(){
    console.log(e);
    var q1=document.createElement("TABLE");
    q1.setAttribute("id","tb"+e);
    var q2=document.getElementById("main");
    q2.append(q1);
    var q3=document.getElementById("num"+e).value;
    for(var i=1;i<=q3;i++){
        pos++;
        row(i);
    }
    // e++;
    var bt2=document.createElement("input");
        bt2.setAttribute("type","button");
        bt2.setAttribute("value","submit");
        bt2.setAttribute("onclick","calculate1()");
        bt2.innerHTML="submit";
        document.getElementById("main").appendChild(bt2);
        tb++;
        //var r=document.getElementById("btn1").disabled = true;

}
function calculate1(){
    semester-=1;
    var q3=document.getElementById("num"+e).value;
    console.log(q3);
    pos=0;
    var totgrd=0,totcrd=0;
    for(var i=1;i<=q3;i++){
        pos++;
        var grd=document.getElementById("grd"+e+pos).value;
        var crd=parseFloat(document.getElementById("crd"+e+pos).value);
        if (grd=="O")
        totgrd+=(10*crd);
        else if (grd=="A+")
        totgrd+=(9*crd);
        else if (grd=="A")
        totgrd+=(8*crd);
        else if (grd=="B+")
        totgrd+=(7*crd);
        else if (grd=="B")
        totgrd+=(6*crd);
        totcrd+=crd;
    }
    document.getElementById("main").appendChild(document.createElement("br"));
    cgpagrd+=totgrd;
    cgpacrd+=totcrd;
    var gpares = document.createElement("h7");
    gpares.innerHTML="Your GPA is: "+(totgrd/totcrd);
    document.getElementById("main").appendChild(gpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    var cgpares = document.createElement("h7");
    cgpares.innerHTML="Your CGPA is: "+(cgpagrd/cgpacrd);
    document.getElementById("main").appendChild(cgpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    if (semester>0)
    {
        e++;
        pos=0;
        sub1();
    }

}

function row(x){
    var r1=document.createElement("TR");
    r1.setAttribute("id","tr"+x);
    var r2=document.getElementById("tb"+e);
    r2.append(r1);
    var x1=document.createElement("TD");
    x1.setAttribute("id","td"+e+x);
    var x2=document.createElement("input");
    x2.setAttribute("list","grade");
    x1.appendChild(x2);
    var x3=document.createElement("datalist");
    x3.setAttribute("id","grade");
    x1.appendChild(x3);
    var x4=document.createElement("option");
    x4.setAttribute("value","ENGINEERING CHEMISTRY");
    x3.appendChild(x4);
    var x5=document.createElement("option");
    x5.setAttribute("value","ENGINEERING PHYSICS");
    x3.appendChild(x5);
    var x6=document.createElement("option");
    x6.setAttribute("value","MATHEMATICAL FOUNDATIONS FOR ENGINEERS");
    x3.appendChild(x6);
    var x7=document.createElement("option");
    x7.setAttribute("value","TECHNICAL ENGLISH");
    x3.appendChild(x7);
    var x8=document.createElement("option");
    x8.setAttribute("value","PYTHON PROGRAMMING");
    x3.appendChild(x8);
    var x9=document.createElement("option");
    x9.setAttribute("value","BASIC ELECTRICAL AND ELECTRONICS ENGINEERING"); 
    x3.appendChild(x9);
    var x10=document.createElement("option");
    x10.setAttribute("value","PROFESSIONAL ENGLISH");
    x3.appendChild(x10);
    var x11=document.createElement("option");
    x11.setAttribute("value","PROBABILITY AND QUEUEING THEORY");
    x3.appendChild(x11);
    var x12=document.createElement("option");
    x12.setAttribute("value","SEMICONDUCTOR PHYSICS");
    x3.appendChild(x12);
    var x13=document.createElement("option");
    x13.setAttribute("value","BIOLOGY FOR ENGINEERS");
    x3.appendChild(x13);
    var x13=document.createElement("option");
    x13.setAttribute("value","PROBLEM SOLVING TECHNIQUES");
    x3.appendChild(x13);
    var x14=document.createElement("option");
    x14.setAttribute("value","ENGINEERING GRAPHICS");
    x3.appendChild(x14);
    var x14=document.createElement("option");
    x14.setAttribute("value","ENGINEERING PHYSICS AND CHEMISTRY LABORATORY");
    x3.appendChild(x14);
    var x15=document.createElement("option");
    x15.setAttribute("value","PYTHON PROGRAMMING LABORATORY");
    x3.appendChild(x15);
    var x16=document.createElement("option");
    x16.setAttribute("value","SEMICONDUCTOR PHYSICS AND BIOLOGY LABORATORY");
    x3.appendChild(x16);
    var x17=document.createElement("option");
    x17.setAttribute("value","PROBLEM SOLVING TECHNIQUES LABORATORY");
    x3.appendChild(x17);
    var x18=document.createElement("option");
    x18.setAttribute("value","INNOVATION THROUGH DESIGN THINKING");
    x3.appendChild(x18);
    document.getElementById("tr"+x).appendChild(x1);



    
    var y1=document.createElement("TD");
    y1.setAttribute("id","td2"+e+x);
    var y2=document.createElement("input");
    y2.setAttribute("id","grd"+e+pos);
    y2.setAttribute("list","rank");
    y1.appendChild(y2);
    var y3=document.createElement("datalist");
    y3.setAttribute("id","rank");
    y1.appendChild(y3);
    var y4=document.createElement("option");
    y4.setAttribute("value","O");
    y3.appendChild(y4);
    var y5=document.createElement("option");
    y5.setAttribute("value","A+");
    y3.appendChild(y5);
    var y6=document.createElement("option");
    y6.setAttribute("value","A");
    y3.appendChild(y6);
    var y7=document.createElement("option");
    y7.setAttribute("value","B+");
    y3.appendChild(y7);
    var y8=document.createElement("option");
    y8.setAttribute("value","B");
    y3.appendChild(y8);
    document.getElementById("tr"+x).appendChild(y1);



    var z1=document.createElement("TD");
    z1.setAttribute("id","td3"+e+x);
    var z2=document.createElement("input");
    z2.setAttribute("list","grade1");
    z1.appendChild(z2);
    var z3=document.createElement("datalist");
    z3.setAttribute("id","grade1");
    z1.appendChild(z3);
    var z4=document.createElement("option");
    z4.setAttribute("value","19SH14C");
    z3.appendChild(z4);
    var z5=document.createElement("option");
    z5.setAttribute("value","19SH13C");
    z3.appendChild(z5);
    var z6=document.createElement("option");
    z6.setAttribute("value","19SH12C");
    z3.appendChild(z6);
    var z7=document.createElement("option");
    z7.setAttribute("value","19SH11C");
    z3.appendChild(z7);
    var z8=document.createElement("option");
    z8.setAttribute("value","19CS11C");
    z3.appendChild(z8);
    var z9=document.createElement("option");
    z9.setAttribute("value","19CS11C");
    z3.appendChild(z9);
    var z10=document.createElement("option");
    z10.setAttribute("value","19CS12C");
    z3.appendChild(z10);
    var z11=document.createElement("option");
    z11.setAttribute("value","19CS21C");
    z3.appendChild(z11);
    var z12=document.createElement("option");
    z12.setAttribute("value","19CS22C");
    z3.appendChild(z12);
    var z13=document.createElement("option");
    z13.setAttribute("value","19CS23C");
    z3.appendChild(z13);
    var z14=document.createElement("option");
    z14.setAttribute("value","19CS24C");
    z3.appendChild(z14);
    var z15=document.createElement("option");
    z15.setAttribute("value","19CS25C");
    z3.appendChild(z15);
    var z16=document.createElement("option");
    z16.setAttribute("value","19SH15C");
    z3.appendChild(z16);
    var z17=document.createElement("option");
    z17.setAttribute("value","19SH16C");
    z3.appendChild(z17);
    var z18=document.createElement("option");
    z18.setAttribute("value","19CS13C");
    z3.appendChild(z18);
    var z19=document.createElement("option");
    z19.setAttribute("value","19CS26C");
    z3.appendChild(z19);
    var z20=document.createElement("option");
    z20.setAttribute("value","19CS27C");
    z3.appendChild(z20);
    var z21=document.createElement("option");
    z21.setAttribute("value","19GN01C");
    z3.appendChild(z21);
    document.getElementById("tr"+x).appendChild(z1);


    
    var w1=document.createElement("TD");
    w1.setAttribute("id","td4"+e+x);
    var w2=document.createElement("input");
    w2.setAttribute("list","credit");
    w2.setAttribute("id","crd"+e+pos);
    w1.appendChild(w2);
    var w3=document.createElement("datalist");
    w3.setAttribute("id","credit");
    w1.appendChild(w3);
    var w4=document.createElement("option");
    w4.setAttribute("value","0");
    w3.appendChild(w4);
    var w5=document.createElement("option");
    w5.setAttribute("value","1");
    w3.appendChild(w5);
    var w6=document.createElement("option");
    w6.setAttribute("value","1.5");
    w3.appendChild(w6);
    var w7=document.createElement("option");
    w7.setAttribute("value","2");
    w3.appendChild(w7);
    var w8=document.createElement("option");
    w8.setAttribute("value","3");
    w3.appendChild(w8);
    var w9=document.createElement("option");
    w9.setAttribute("value","4");
    w3.appendChild(w9);
    var w10=document.createElement("option");
    w10.setAttribute("value","6");
    w3.appendChild(w10);
    document.getElementById("tr"+x).appendChild(w1);


    
}
function sub1(){
    var val=document.getElementById("num").value;
    tot=val;
    if(val==null){
        alert("Cant be empty");
    }
    else if(e!=tot){
      
        var a1=document.getElementById("main");
        var s1=document.createElement("label").innerHTML="TOTAL SUBJECTS:";
        a1.append(s1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","num"+e);
        a1.append(ip1);
        document.getElementById("main").appendChild(document.createElement("br"));
        document.getElementById("main").appendChild(document.createElement("br"));
        semcount++;
        var bt1=document.createElement("input");
        bt1.setAttribute("type","button");
        bt1.setAttribute("value","submit");
        bt1.setAttribute("onclick","table1()");
        bt1.innerHTML="submit";
        a1.append(bt1);
        var a=document.getElementById("btn").disabled = true; 
    }
}

var tb=0;
function table1(){
    console.log(e);
    var q1=document.createElement("TABLE");
    q1.setAttribute("id","tb2"+e);
    var q2=document.getElementById("main");
    q2.append(q1);
    var q3=document.getElementById("num"+e).value;
    for(var i=1;i<=q3;i++){
        pos++;
        row1(i);
    }
    var bt2=document.createElement("input");
        bt2.setAttribute("type","button");
        bt2.setAttribute("value","submit");
        bt2.setAttribute("onclick","calculate2()");
        bt2.innerHTML="submit";
        document.getElementById("main").appendChild(bt2);
        tb++;
        //var r=document.getElementById("btn1").disabled = true;
        
}
function calculate2(){
    semester-=1;
    var q3=document.getElementById("num"+e).value;
    console.log(q3);
    pos=0;
    var totgrd=0,totcrd=0;
    for(var i=1;i<=q3;i++){
        pos++;
        var grd1=document.getElementById("grd"+e+pos).value;
        var crd1=parseFloat(document.getElementById("crd"+e+pos).value);
        if (grd1=="O")
        totgrd+=(10*crd1);
        else if (grd1=="A+")
        totgrd+=(9*crd1);
        else if (grd1=="A")
        totgrd+=(8*crd1);
        else if (grd1=="B+")
        totgrd+=(7*crd1);
        else if (grd1=="B")
        totgrd+=(6*crd1);
        totcrd+=crd1;
    }
    document.getElementById("main").appendChild(document.createElement("br"));
    cgpagrd+=totgrd;
    cgpacrd+=totcrd;
    var gpares = document.createElement("h7");
    gpares.innerHTML="Your GPA is: "+(totgrd/totcrd);
    document.getElementById("main").appendChild(gpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    var cgpares = document.createElement("h7");
    cgpares.innerHTML="Your CGPA is: "+(cgpagrd/cgpacrd);
    document.getElementById("main").appendChild(cgpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    if (semester>0)
    {
        e++;pos=0;
        sub2();
    }

}
function row1(x){
    var p1=document.createElement("TR");
    p1.setAttribute("id","tr2"+x);
    var p2=document.getElementById("tb2"+e);
    p2.append(p1);
    var o1=document.createElement("TD");
    o1.setAttribute("id","td5"+e+x);
    var o2=document.createElement("input");
    o2.setAttribute("list","grade2");
    o1.appendChild(o2);
    var o3=document.createElement("datalist");
    o3.setAttribute("id","grade2");
    o1.appendChild(o3);
    var o4=document.createElement("option");
    o4.setAttribute("value","ENGINEERING CHEMISTRY");
    o3.appendChild(o4);
    var o5=document.createElement("option");
    o5.setAttribute("value","ENGINEERING PHYSICS");
    o3.appendChild(o5);
    var o6=document.createElement("option");
    o6.setAttribute("value","MATHEMATICAL FOUNDATIONS FOR ENGINEERS");
    o3.appendChild(o6);
    var o7=document.createElement("option");
    o7.setAttribute("value","TECHNICAL ENGLISH");
    o3.appendChild(o7);
    var o8=document.createElement("option");
    o8.setAttribute("value","PYTHON PROGRAMMING");
    o3.appendChild(o8);
    var o9=document.createElement("option");
    o9.setAttribute("value","BASIC ELECTRICAL AND ELECTRONICS ENGINEERING"); 
    o3.appendChild(o9);
    var o10=document.createElement("option");
    o10.setAttribute("value","PROFESSIONAL ENGLISH");
    o3.appendChild(o10);
    var o11=document.createElement("option");
    o11.setAttribute("value","PROBABILITY AND QUEUEING THEORY");
    o3.appendChild(o11);
    var o12=document.createElement("option");
    o12.setAttribute("value","SEMICONDUCTOR PHYSICS");
    o3.appendChild(o12);
    var o13=document.createElement("option");
    o13.setAttribute("value","BIOLOGY FOR ENGINEERS");
    o3.appendChild(o13);
    var o13=document.createElement("option");
    o13.setAttribute("value","PROBLEM SOLVING TECHNIQUES");
    o3.appendChild(o13);
    var o14=document.createElement("option");
    o14.setAttribute("value","ENGINEERING PHYSICS AND CHEMISTRY LABORATORY");
    o3.appendChild(o14);
    var o14=document.createElement("option");
    o14.setAttribute("value","PYTHON PROGRAMMING LABORATORY");
    o3.appendChild(o14);
    var o15=document.createElement("option");
    o15.setAttribute("value","SEMICONDUCTOR PHYSICS AND BIOLOGY LABORATORY");
    o3.appendChild(o15);
    var o16=document.createElement("option");
    o16.setAttribute("value","PROBLEM SOLVING TECHNIQUES LABORATORY");
    o3.appendChild(o16);
    var o17=document.createElement("option");
    o17.setAttribute("value","INNOVATION THROUGH DESING THINKING");
    o3.appendChild(o17);
    document.getElementById("tr2"+x).appendChild(o1);



    
    var i1=document.createElement("TD");
    i1.setAttribute("id","td6"+e+x);
    var i2=document.createElement("input");
    i2.setAttribute("list","rank1");
    i2.setAttribute("id","grd"+e+pos);
    i1.appendChild(i2);
    var i3=document.createElement("datalist");
    i3.setAttribute("id","rank1");
    i1.appendChild(i3);
    var i4=document.createElement("option");
    i4.setAttribute("value","O");
    i3.appendChild(i4);
    var i5=document.createElement("option");
    i5.setAttribute("value","A+");
    i3.appendChild(i5);
    var i6=document.createElement("option");
    i6.setAttribute("value","A");
    i3.appendChild(i6);
    var i7=document.createElement("option");
    i7.setAttribute("value","B+");
    i3.appendChild(i7);
    var i8=document.createElement("option");
    i8.setAttribute("value","B");
    i3.appendChild(i8);
    document.getElementById("tr2"+x).appendChild(i1);



    var u1=document.createElement("TD");
    u1.setAttribute("id","td7"+e+x);
    var u2=document.createElement("input");
    u2.setAttribute("list","grade4");
    u1.appendChild(u2);
    var u3=document.createElement("datalist");
    u3.setAttribute("id","grade4");
    u1.appendChild(u3);
    var u4=document.createElement("option");
    u4.setAttribute("value","19SH11C");
    u3.appendChild(u4);
    var u5=document.createElement("option");
    u5.setAttribute("value","19SH12C");
    u3.appendChild(u5);
    var u6=document.createElement("option");
    u6.setAttribute("value","19SH13C");
    u3.appendChild(u6);
    var u7=document.createElement("option");
    u7.setAttribute("value","19SH14C");
    u3.appendChild(u7);
    var u8=document.createElement("option");
    u8.setAttribute("value","19CS11C");
    u3.appendChild(u8);
    var u9=document.createElement("option");
    u9.setAttribute("value","19CS21C ");
    u3.appendChild(u9);
    var u10=document.createElement("option");
    u10.setAttribute("value","19CS21C");
    u3.appendChild(u10);
    var u11=document.createElement("option");
    u11.setAttribute("value","19CS22C");
    u3.appendChild(u11);
    var u12=document.createElement("option");
    u12.setAttribute("value","19CS23C");
    u3.appendChild(u12);
    var u13=document.createElement("option");
    u13.setAttribute("value","19CS24C ");
    u3.appendChild(u13);
    var u14=document.createElement("option");
    u14.setAttribute("value","19C25C");
    u3.appendChild(u14);
    var u15=document.createElement("option");
    u15.setAttribute("value","19SH15C");
    u3.appendChild(u15);
    var u16=document.createElement("option");
    u16.setAttribute("value","19SH16C");
    u3.appendChild(u16);
    var u17=document.createElement("option");
    u17.setAttribute("value","19CS13C");
    u3.appendChild(u17);
    var u18=document.createElement("option");
    u18.setAttribute("value","19CS38C");
    u3.appendChild(u18);
    var u19=document.createElement("option");
    u19.setAttribute("value","19CS39C");
    u3.appendChild(u19);
    var u20=document.createElement("option");
    u20.setAttribute("value","19CS26C");
    u3.appendChild(u20);
    var u21=document.createElement("option");
    u21.setAttribute("value","19CS27C");
    u3.appendChild(u21);
    var u22=document.createElement("option");
    u22.setAttribute("value","19GN01C");
    u3.appendChild(u22);
    document.getElementById("tr2"+x).appendChild(u1);



    var t1=document.createElement("TD");
    t1.setAttribute("id","td8"+e+x);
    var t2=document.createElement("input");
    t2.setAttribute("list","credit1");
    t2.setAttribute("id","crd"+e+pos);
    t1.appendChild(t2);
    var t3=document.createElement("datalist");
    t3.setAttribute("id","credit1");
    t1.appendChild(t3);
    var t4=document.createElement("option");
    t4.setAttribute("value","0");
    t3.appendChild(t4);
    var t5=document.createElement("option");
    t5.setAttribute("value","1");
    t3.appendChild(t5);
    var t6=document.createElement("option");
    t6.setAttribute("value","1.5");
    t3.appendChild(t6);
    var t7=document.createElement("option");
    t7.setAttribute("value","2");
    t3.appendChild(t7);
    var t8=document.createElement("option");
    t8.setAttribute("value","3");
    t3.appendChild(t8);
    var t9=document.createElement("option");
    t9.setAttribute("value","4");
    t3.appendChild(t9);
    var t10=document.createElement("option");
    t10.setAttribute("value","6");
    t3.appendChild(t10);
    document.getElementById("tr2"+x).appendChild(t1);

    

}
function sub2(){
    var val=document.getElementById("num").value;
    tot=val;
    if(val==null){
        alert("Cant be empty");
    }
    else if(e!=tot){
      
        var aa1=document.getElementById("main");
        var ss1=document.createElement("label").innerHTML="TOTAL SUBJECTS:";
        aa1.append(ss1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","num"+e);
        aa1.append(ip1);
        document.getElementById("main").appendChild(document.createElement("br"));
        document.getElementById("main").appendChild(document.createElement("br"));
        semcount++;
        var bt1=document.createElement("input");
        bt1.setAttribute("type","button");
        bt1.setAttribute("value","submit");
        bt1.setAttribute("onclick","table2()");
        bt1.innerHTML="submit";
        aa1.append(bt1);
        var a=document.getElementById("btn").disabled = true; 
    }
}

var tb=0;
function table2(){
    console.log(e);
    var q1=document.createElement("TABLE");
    q1.setAttribute("id","tb3"+e);
    var q2=document.getElementById("main");
    q2.append(q1);
    var q3=document.getElementById("num"+e).value;
    for(var i=1;i<=q3;i++){
        pos++;
        row2(i);
    }
    var bt2=document.createElement("input");
        bt2.setAttribute("type","button");
        bt2.setAttribute("value","submit");
        bt2.setAttribute("onclick","calculate3()");
        bt2.innerHTML="submit";
        document.getElementById("main").appendChild(bt2);
        tb++;
        //var r=document.getElementById("btn1").disabled = true;
        
}
function calculate3(){
    semester-=1;
    var q3=document.getElementById("num"+e).value;
    pos=0;
    var totgrd=0,totcrd=0;
    for(var i=1;i<=q3;i++){
        pos++;
        var grd2=document.getElementById("grd"+e+pos).value;
        var crd2=parseFloat(document.getElementById("crd"+e+pos).value);
        if (grd2=="O")
        totgrd+=(10*crd2);
        else if (grd2=="A+")
        totgrd+=(9*crd2);
        else if (grd2=="A")
        totgrd+=(8*crd2);
        else if (grd2=="B+")
        totgrd+=(7*crd2);
        else if (grd2=="B")
        totgrd+=(6*crd2);
        totcrd+=crd2;
    }
    document.getElementById("main").appendChild(document.createElement("br"));
    cgpagrd+=totgrd;
    cgpacrd+=totcrd;
    var gpares = document.createElement("h8");
    gpares.innerHTML="Your GPA is: "+(totgrd/totcrd);
    document.getElementById("main").appendChild(gpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    var cgpares = document.createElement("h8");
    cgpares.innerHTML="Your CGPA is: "+(cgpagrd/cgpacrd);
    document.getElementById("main").appendChild(cgpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    if (semester>0)
    {
        e++;
        pos=0;
        sub3();
    }

}


function row2(x){
    var q1=document.createElement("TR");
    q1.setAttribute("id","tr3"+x);
    var q2=document.getElementById("tb3"+e);
    q2.append(q1);
    var m1=document.createElement("TD");
    m1.setAttribute("id","td9"+e+x);
    var m2=document.createElement("input");
    m2.setAttribute("list","grade5");
    m1.appendChild(m2);
    var m3=document.createElement("datalist");
    m3.setAttribute("id","grade5");
    m1.appendChild(m3);
    var m4=document.createElement("option");
    m4.setAttribute("value","DISCRETE MATHEMATICS");
    m3.appendChild(m4);
    var m5=document.createElement("option");
    m5.setAttribute("value","DATA STRUCTURES");
    m3.appendChild(m5);
    var m6=document.createElement("option");
    m6.setAttribute("value","COMPUTER ORGANIZATION AND ARCHITECTURE");
    m3.appendChild(m6);
    var m7=document.createElement("option");
    m7.setAttribute("value","OBJECT ORIENTED PROGRAMMING");
    m3.appendChild(m7);
    var m8=document.createElement("option");
    m8.setAttribute("value","DIGITAL PRINCIPLES OF SYSTEM DESIGN");
    m3.appendChild(m8);
    var m9=document.createElement("option");
    m9.setAttribute("value","SOFTWARE ENGINEERING METHODOLOGIES"); 
    m3.appendChild(m9);
    var m10=document.createElement("option");
    m10.setAttribute("value","DATA STRUCTURES LABORATORY");
    m3.appendChild(m10);
    var m11=document.createElement("option");
    m11.setAttribute("value","OBJECT ORIENTED PROGRAMMING LABORATORY");
    m3.appendChild(m11);
    var m12=document.createElement("option");
    m12.setAttribute("value","COMMMUNICATION SKILLS LABORATORY");
    m3.appendChild(m12);
    document.getElementById("tr3"+x).appendChild(m1);



    
    var n1=document.createElement("TD");
    n1.setAttribute("id","td10"+e+x);
    var n2=document.createElement("input");
    n2.setAttribute("list","rank2");
    n2.setAttribute("id","grd"+e+pos);
    n1.appendChild(n2);
    var n3=document.createElement("datalist");
    n3.setAttribute("id","rank2");
    n1.appendChild(n3);
    var n4=document.createElement("option");
    n4.setAttribute("value","O");
    n3.appendChild(n4);
    var n5=document.createElement("option");
    n5.setAttribute("value","A+");
    n3.appendChild(n5);
    var n6=document.createElement("option");
    n6.setAttribute("value","A");
    n3.appendChild(n6);
    var n7=document.createElement("option");
    n7.setAttribute("value","B+");
    n3.appendChild(n7);
    var n8=document.createElement("option");
    n8.setAttribute("value","B");
    n3.appendChild(n8);
    document.getElementById("tr3"+x).appendChild(n1);



    var b1=document.createElement("TD");
    b1.setAttribute("id","td11"+e+x);
    var b2=document.createElement("input");
    b2.setAttribute("list","grade6");
    b1.appendChild(b2);
    var b3=document.createElement("datalist");
    b3.setAttribute("id","grade6");
    b1.appendChild(b3);
    var b4=document.createElement("option");
    b4.setAttribute("value","19CS31C");
    b3.appendChild(b4);
    var b5=document.createElement("option");
    b5.setAttribute("value","19CS32C");
    b3.appendChild(b5);
    var b6=document.createElement("option");
    b6.setAttribute("value","19CS33C");
    b3.appendChild(b6);
    var b7=document.createElement("option");
    b7.setAttribute("value","19CS34C");
    b3.appendChild(b7);
    var b8=document.createElement("option");
    b8.setAttribute("value","19CS35C");
    b3.appendChild(b8);
    var b9=document.createElement("option");
    b9.setAttribute("value","19CS36C");
    b3.appendChild(b9);
    var b10=document.createElement("option");
    b10.setAttribute("value","19CS37C");
    b3.appendChild(b10);
    var b11=document.createElement("option");
    b11.setAttribute("value","19CS38C");
    b3.appendChild(b11);
    var b12=document.createElement("option");
    b12.setAttribute("value","19CS39C ");
    b3.appendChild(b12);
    document.getElementById("tr3"+x).appendChild(b1);



    var v1=document.createElement("TD");
    v1.setAttribute("id","td12"+e+x);
    var v2=document.createElement("input");
    v2.setAttribute("list","credit2");
    v2.setAttribute("id","crd"+e+pos);
    v1.appendChild(v2);
    var v3=document.createElement("datalist");
    v3.setAttribute("id","credit2");
    v1.appendChild(v3);
    var v4=document.createElement("option");
    v4.setAttribute("value","0");
    v3.appendChild(v4);
    var v5=document.createElement("option");
    v5.setAttribute("value","1");
    v3.appendChild(v5);
    var v6=document.createElement("option");
    v6.setAttribute("value","1.5");
    v3.appendChild(v6);
    var v7=document.createElement("option");
    v7.setAttribute("value","2");
    v3.appendChild(v7);
    var v8=document.createElement("option");
    v8.setAttribute("value","3");
    v3.appendChild(v8);
    var v9=document.createElement("option");
    v9.setAttribute("value","4");
    v3.appendChild(v9);
    var v10=document.createElement("option");
    v10.setAttribute("value","6");
    v3.appendChild(v10);
    document.getElementById("tr3"+x).appendChild(v1);

    

}
function sub3(){
    var val=document.getElementById("num").value;
    tot=val;
    if(val==null){
        alert("Cant be empty");
    }
    else if(e!=tot){
      
        var a1=document.getElementById("main");
        var s1=document.createElement("label").innerHTML="TOTAL SUBJECTS:";
        a1.append(s1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","num"+e);
        a1.append(ip1);
        document.getElementById("main").appendChild(document.createElement("br"));
        semcount++;
        var bt1=document.createElement("input");
        bt1.setAttribute("type","button");
        bt1.setAttribute("value","submit");
        bt1.setAttribute("onclick","table3()");
        bt1.innerHTML="submit";
        a1.append(bt1);
        var a=document.getElementById("btn").disabled = true; 
    }
}

var tb=0;
function table3(){
    console.log(e);
    var q1=document.createElement("TABLE");
    q1.setAttribute("id","tb4"+e);
    var q2=document.getElementById("main");
    q2.append(q1);
    var q3=document.getElementById("num"+e).value;
    for(var i=1;i<=q3;i++){
        pos++;
        row3(i);
    }
    var bt2=document.createElement("input");
        bt2.setAttribute("type","button");
        bt2.setAttribute("value","submit");
        bt2.setAttribute("onclick","calculate4()");
        bt2.innerHTML="submit";
        document.getElementById("main").appendChild(bt2);
        tb++;
        //var r=document.getElementById("btn1").disabled = true;
        
}
function calculate4(){
    semester-=1;
    var q3=document.getElementById("num"+e).value;
    pos=0;
    var totgrd=0,totcrd=0;
    for(var i=1;i<=q3;i++){
        pos++;
        var grd2=document.getElementById("grd"+e+pos).value;
        var crd2=parseFloat(document.getElementById("crd"+e+pos).value);
        if (grd2=="O+")
        totgrd+=(10*crd2);
        else if (grd2=="A+")
        totgrd+=(9*crd2);
        else if (grd2=="A")
        totgrd+=(8*crd2);
        else if (grd2=="B+")
        totgrd+=(7*crd2);
        else if (grd2=="B")
        totgrd+=(6*crd2);
        totcrd+=crd2;
    }
    document.getElementById("main").appendChild(document.createElement("br"));
    cgpagrd+=totgrd;
    cgpacrd+=totcrd;
    var gpares = document.createElement("h8");
    gpares.innerHTML="Your GPA is: "+(totgrd/totcrd);
    document.getElementById("main").appendChild(gpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    var cgpares = document.createElement("h8");
    cgpares.innerHTML="Your CGPA is: "+(cgpagrd/cgpacrd);
    document.getElementById("main").appendChild(cgpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    if (semester>0)
    {
        e++;
        pos=0;
        sub4();
    }

}

function row3(x){
    var e1=document.createElement("TR");
    e1.setAttribute("id","tr4"+x);
    var e2=document.getElementById("tb4"+e);
    e2.append(e1);
    var l1=document.createElement("TD");
    l1.setAttribute("id","td13"+e+x);
    var l2=document.createElement("input");
    l2.setAttribute("list","grade7");
    l2.setAttribute("id","grd"+e+pos);
    l1.appendChild(l2);
    var l3=document.createElement("datalist");
    l3.setAttribute("id","grade7");
    l1.appendChild(l3);
    var l4=document.createElement("option");
    l4.setAttribute("value","STATISTICAL AND NUMERICAL METHODS");
    l3.appendChild(l4);
    var l5=document.createElement("option");
    l5.setAttribute("value","DESIGN AND ANALYSIS OF ALGORITHMS");
    l3.appendChild(l5);
    var l6=document.createElement("option");
    l6.setAttribute("value","OPERATING SYSTEMS");
    l3.appendChild(l6);
    var l7=document.createElement("option");
    l7.setAttribute("value","DATABASE MANAGEMENT SYSTEMS");
    l3.appendChild(l7);
    var l8=document.createElement("option");
    l8.setAttribute("value","COMPUTER NETWORKS");
    l3.appendChild(l8);
    var l9=document.createElement("option");
    l9.setAttribute("value","FINANCE AND ACCOUNTING");
    l3.appendChild(l9);
    var l10=document.createElement("option");
    l10.setAttribute("value","OPERATING SYSTEMS LABORATORY");
    l3.appendChild(l10);
    var l11=document.createElement("option");
    l11.setAttribute("value","DATABASE MANAGEMENT SYSTEMS LABORATORY");
    l3.appendChild(l11);
    var l12=document.createElement("option");
    l12.setAttribute("value","NETWORKS LABORATORY");
    l3.appendChild(l12);
    document.getElementById("tr4"+x).appendChild(l1);



    
    var k1=document.createElement("TD");
    k1.setAttribute("id","td14"+e+x);
    var k2=document.createElement("input");
    k2.setAttribute("list","rank3");
    k1.appendChild(k2);
    var k3=document.createElement("datalist");
    k3.setAttribute("id","rank3");
    k1.appendChild(k3);
    var k4=document.createElement("option");
    k4.setAttribute("value","O");
    k3.appendChild(k4);
    var k5=document.createElement("option");
    k5.setAttribute("value","A+");
    k3.appendChild(k5);
    var k6=document.createElement("option");
    k6.setAttribute("value","A");
    k3.appendChild(k6);
    var k7=document.createElement("option");
    k7.setAttribute("value","B+");
    k3.appendChild(k7);
    var k8=document.createElement("option");
    k8.setAttribute("value","B");
    k3.appendChild(k8);
    document.getElementById("tr4"+x).appendChild(k1);



    var j1=document.createElement("TD");
    j1.setAttribute("id","td15"+e+x);
    var j2=document.createElement("input");
    j2.setAttribute("list","grade8");
    j1.appendChild(j2);
    var j3=document.createElement("datalist");
    j3.setAttribute("id","grade8");
    j1.appendChild(j3);
    var j4=document.createElement("option");
    j4.setAttribute("value","19CS41C");
    j3.appendChild(j4);
    var j5=document.createElement("option");
    j5.setAttribute("value","19CS42C");
    j3.appendChild(j5);
    var j6=document.createElement("option");
    j6.setAttribute("value","19CS43C");
    j3.appendChild(j6);
    var j7=document.createElement("option");
    j7.setAttribute("value","19CS44C");
    j3.appendChild(j7);
    var j8=document.createElement("option");
    j8.setAttribute("value","19CS45C");
    j3.appendChild(j8);
    var j9=document.createElement("option");
    j9.setAttribute("value","19CS46C");
    j3.appendChild(j9);
    var j10=document.createElement("option");
    j10.setAttribute("value","19CS47C");
    j3.appendChild(j10);
    var j11=document.createElement("option");
    j11.setAttribute("value","19CS48C");
    j3.appendChild(j11);
    var j12=document.createElement("option");
    j12.setAttribute("value","19CS49C");
    j3.appendChild(j12);
    document.getElementById("tr4"+x).appendChild(j1);



    var h1=document.createElement("TD");
    h1.setAttribute("id","td16"+e+x);
    var h2=document.createElement("input");
    h2.setAttribute("list","credit3");
    h2.setAttribute("id","crd"+e+pos);
    h1.appendChild(h2);
    var h3=document.createElement("datalist");
    h3.setAttribute("id","credit3");
    h1.appendChild(h3);
    var h4=document.createElement("option");
    h4.setAttribute("value","0");
    h3.appendChild(h4);
    var h5=document.createElement("option");
    h5.setAttribute("value","1");
    h3.appendChild(h5);
    var h6=document.createElement("option");
    h6.setAttribute("value","1.5");
    h3.appendChild(h6);
    var h7=document.createElement("option");
    h7.setAttribute("value","2");
    h3.appendChild(h7);
    var h8=document.createElement("option");
    h8.setAttribute("value","3");
    h3.appendChild(h8);
    var h9=document.createElement("option");
    h9.setAttribute("value","4");
    h3.appendChild(h9);
    var h10=document.createElement("option");
    h10.setAttribute("value","6");
    h3.appendChild(h10);
    var h11=document.createElement("option");
    h11.setAttribute("value","12");
    h3.appendChild(h11);
    document.getElementById("tr4"+x).appendChild(h1);

    

}








function sub4(){
    var val=document.getElementById("num").value;
    tot=val;
    if(val==null){
        alert("Cant be empty");
    }
    else if(e!=tot){
      
        var a1=document.getElementById("main");
        var s1=document.createElement("label").innerHTML="TOTAL SUBJECTS:";
        a1.append(s1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","num"+e);
        a1.append(ip1);
        document.getElementById("main").appendChild(document.createElement("br"));
        semcount++;
        var bt1=document.createElement("input");
        bt1.setAttribute("type","button");
        bt1.setAttribute("value","submit");
        bt1.setAttribute("onclick","table4()");
        bt1.innerHTML="submit";
        a1.append(bt1);
        var a=document.getElementById("btn").disabled = true; 
    }
}

var tb=0;
function table4(){
    console.log(e);
    var q1=document.createElement("TABLE");
    q1.setAttribute("id","tb5"+e);
    var q2=document.getElementById("main");
    q2.append(q1);
    var q3=document.getElementById("num"+e).value;
    for(var i=1;i<=q3;i++){
        pos++;
        row4(i);
    }

    var bt2=document.createElement("input");
        bt2.setAttribute("type","button");
        bt2.setAttribute("value","submit");
        bt2.setAttribute("onclick","calculate5()");
        bt2.innerHTML="submit";
        document.getElementById("main").appendChild(bt2);
        tb++;
        //var r=document.getElementById("btn1").disabled = true;
        
}
function calculate5(){
    semester-=1;
    var q3=document.getElementById("num"+e).value;
    pos=0;
    var totgrd=0,totcrd=0;
    for(var i=1;i<=q3;i++){
        pos++;
        var grd2=document.getElementById("grd"+e+pos).value;
        var crd2=parseFloat(document.getElementById("crd"+e+pos).value);
        if (grd2=="O")
        totgrd+=(10*crd2);
        else if (grd2=="A+")
        totgrd+=(9*crd2);
        else if (grd2=="A")
        totgrd+=(8*crd2);
        else if (grd2=="B+")
        totgrd+=(7*crd2);
        else if (grd2=="B")
        totgrd+=(6*crd2);
        totcrd+=crd2;
    }
    document.getElementById("main").appendChild(document.createElement("br"));
    cgpagrd+=totgrd;
    cgpacrd+=totcrd;
    var gpares = document.createElement("h8");
    gpares.innerHTML="Your GPA is: "+(totgrd/totcrd);
    document.getElementById("main").appendChild(gpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    var cgpares = document.createElement("h8");
    cgpares.innerHTML="Your CGPA is: "+(cgpagrd/cgpacrd);
    document.getElementById("main").appendChild(cgpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    if (semester>0)
    {
        e++;
        pos=0;
        sub5();
    }

}

function row4(x){
    var rr1=document.createElement("TR");
    rr1.setAttribute("id","tr5"+x);
    var rr2=document.getElementById("tb5"+e);
    rr2.append(rr1);
    var xx1=document.createElement("TD");
    xx1.setAttribute("id","td17"+e+x);
    var xx2=document.createElement("input");
    xx2.setAttribute("list","grade9");
    xx1.appendChild(xx2);
    var xx3=document.createElement("datalist");
    xx3.setAttribute("id","grade9");
    xx1.appendChild(xx3);
    var xx4=document.createElement("option");
    xx4.setAttribute("value","JAVA PROGRAMMING");
    xx3.appendChild(xx4);
    var xx5=document.createElement("option");
    xx5.setAttribute("value","THEORY OF COMPUTATION");
    xx3.appendChild(xx5);
    var xx6=document.createElement("option");
    xx6.setAttribute("value","PROFESSIONAL ETHICS AND HUMAN VALUES");
    xx3.appendChild(xx6);
    var xx7=document.createElement("option");
    xx7.setAttribute("value","EMBEDDED SYSTEMS");
    xx3.appendChild(xx7);
    var xx8=document.createElement("option");
    xx8.setAttribute("value","CRYPTOGRAPHY AND NETWORK SECURITY");
    xx3.appendChild(xx8);
    var xx9=document.createElement("option");
    xx9.setAttribute("value","JAVA PROGRAMMING LABORATORY"); 
    xx3.appendChild(xx9);
    var xx10=document.createElement("option");
    xx10.setAttribute("value","EMBEDDED SYSTEMS LABORATORY");
    xx3.appendChild(xx10);
    var xx11=document.createElement("option");
    xx11.setAttribute("value","CRYPTOGRAPHY AND NETWORK SECURITY LABORATORY");
    xx3.appendChild(xx11);
    document.getElementById("tr5"+x).appendChild(xx1);



    
    var yy1=document.createElement("TD");
    yy1.setAttribute("id","td18"+e+x);
    var yy2=document.createElement("input");
    yy2.setAttribute("list","rank4");
    yy2.setAttribute("id","grd"+e+pos);
    yy1.appendChild(yy2);
    var yy3=document.createElement("datalist");
    yy3.setAttribute("id","rank4");
    yy1.appendChild(yy3);
    var yy4=document.createElement("option");
    yy4.setAttribute("value","O+");
    yy3.appendChild(yy4);
    var yy5=document.createElement("option");
    yy5.setAttribute("value","A+");
    yy3.appendChild(yy5);
    var yy6=document.createElement("option");
    yy6.setAttribute("value","A");
    yy3.appendChild(yy6);
    var yy7=document.createElement("option");
    yy7.setAttribute("value","B+");
    yy3.appendChild(yy7);
    var yy8=document.createElement("option");
    yy8.setAttribute("value","B");
    yy3.appendChild(yy8);
    document.getElementById("tr5"+x).appendChild(yy1);



    var zz1=document.createElement("TD");
    zz1.setAttribute("id","td19"+e+x);
    var zz2=document.createElement("input");
    zz2.setAttribute("list","grade10");
    zz1.appendChild(zz2);
    var zz3=document.createElement("datalist");
    zz3.setAttribute("id","grade10");
    zz1.appendChild(zz3);
    var zz4=document.createElement("option");
    zz4.setAttribute("value","19CS51C");
    zz3.appendChild(zz4);
    var zz5=document.createElement("option");
    zz5.setAttribute("value","19CS52C");
    zz3.appendChild(zz5);
    var zz6=document.createElement("option");
    zz6.setAttribute("value","19CS53C");
    zz3.appendChild(zz6);
    var zz7=document.createElement("option");
    zz7.setAttribute("value","19CS54C");
    zz3.appendChild(zz7);
    var zz8=document.createElement("option");
    zz8.setAttribute("value","19CS55C");
    zz3.appendChild(zz8);
    var zz9=document.createElement("option");
    zz9.setAttribute("value","19CS56C");
    zz3.appendChild(zz9);
    var zz10=document.createElement("option");
    zz10.setAttribute("value","19CS57C");
    zz3.appendChild(zz10);
    var zz11=document.createElement("option");
    zz11.setAttribute("value","19CS58C");
    zz3.appendChild(zz11);
    document.getElementById("tr5"+x).appendChild(zz1);



    var ww1=document.createElement("TD");
    ww1.setAttribute("id","td20"+e+x);
    var ww2=document.createElement("input");
    ww2.setAttribute("list","credit4");
    ww2.setAttribute("id","crd"+e+pos);
    ww1.appendChild(ww2);
    var ww3=document.createElement("datalist");
    ww3.setAttribute("id","credit4");
    ww1.appendChild(ww3);
    var ww4=document.createElement("option");
    ww4.setAttribute("value","0");
    ww3.appendChild(ww4);
    var ww5=document.createElement("option");
    ww5.setAttribute("value","1");
    ww3.appendChild(ww5);
    var ww6=document.createElement("option");
    ww6.setAttribute("value","1.5");
    ww3.appendChild(ww6);
    var ww7=document.createElement("option");
    ww7.setAttribute("value","2");
    ww3.appendChild(ww7);
    var ww8=document.createElement("option");
    ww8.setAttribute("value","3");
    ww3.appendChild(ww8);
    var ww9=document.createElement("option");
    ww9.setAttribute("value","4");
    ww3.appendChild(ww9);
    var ww10=document.createElement("option");
    ww10.setAttribute("value","6");
    ww3.appendChild(ww10);
    document.getElementById("tr5"+x).appendChild(ww1);


    
}
function sub5(){
    var val=document.getElementById("num").value;
    tot=val;
    if(val==null){
        alert("Cant be empty");
    }
    else if(e!=tot){
      
        var a1=document.getElementById("main");
        var s1=document.createElement("label").innerHTML="TOTAL SUBJECTS:";
        a1.append(s1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","num"+e);
        a1.append(ip1);
        document.getElementById("main").appendChild(document.createElement("br"));
        semcount++;
        var bt1=document.createElement("input");
        bt1.setAttribute("type","button");
        bt1.setAttribute("value","submit");
        bt1.setAttribute("onclick","table5()");
        bt1.innerHTML="submit";
        a1.append(bt1);
        var a=document.getElementById("btn").disabled = true; 
    }
}

var tb=0;
function table5(){
    console.log(e);
    var q1=document.createElement("TABLE");
    q1.setAttribute("id","tb6"+e);
    var q2=document.getElementById("main");
    q2.append(q1);
    var q3=document.getElementById("num"+e).value;
    for(var i=1;i<=q3;i++){
        pos++;
        row5(i);
    }
    var bt2=document.createElement("input");
        bt2.setAttribute("type","button");
        bt2.setAttribute("value","submit");
        bt2.setAttribute("onclick","calculate6()");
        bt2.innerHTML="submit";
        document.getElementById("main").appendChild(bt2);
        tb++;
        //var r=document.getElementById("btn1").disabled = true;
        
}
function calculate6(){
    semester-=1;
    var q3=document.getElementById("num"+e).value;
    pos=0;
    var totgrd=0,totcrd=0;
    for(var i=1;i<=q3;i++){
        pos++;
        var grd2=document.getElementById("grd"+e+pos).value;
        var crd2=parseFloat(document.getElementById("crd"+e+pos).value);
        if (grd2=="O")
        totgrd+=(10*crd2);
        else if (grd2=="A+")
        totgrd+=(9*crd2);
        else if (grd2=="A")
        totgrd+=(8*crd2);
        else if (grd2=="B+")
        totgrd+=(7*crd2);
        else if (grd2=="B")
        totgrd+=(6*crd2);
        totcrd+=crd2;
    }
    document.getElementById("main").appendChild(document.createElement("br"));
    cgpagrd+=totgrd;
    cgpacrd+=totcrd;
    var gpares = document.createElement("h8");
    gpares.innerHTML="Your GPA is: "+(totgrd/totcrd);
    document.getElementById("main").appendChild(gpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    var cgpares = document.createElement("h8");
    cgpares.innerHTML="Your CGPA is: "+(cgpagrd/cgpacrd);
    document.getElementById("main").appendChild(cgpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    if (semester>0)
    {
        e++;
        pos=0;
        sub6();
    }

}

function row5(x){
    var pp1=document.createElement("TR");
    pp1.setAttribute("id","tr6"+x);
    var pp2=document.getElementById("tb6"+e);
    pp2.append(pp1);
    var oo1=document.createElement("TD");
    oo1.setAttribute("id","td21"+e+x);
    var oo2=document.createElement("input");
    oo2.setAttribute("list","grade11");
    oo1.appendChild(oo2);
    var oo3=document.createElement("datalist");
    oo3.setAttribute("id","grade11");
    oo1.appendChild(oo3);
    var oo4=document.createElement("option");
    oo4.setAttribute("value","OBJECT ORIENTED ANALYSIS AND DESIGN");
    oo3.appendChild(oo4);
    var oo5=document.createElement("option");
    oo5.setAttribute("value","PRINCIPLES OF COMPILER DESIGN");
    oo3.appendChild(oo5);
    var oo6=document.createElement("option");
    oo6.setAttribute("value","INTERNET WEB TECHNOLOGY");
    oo3.appendChild(oo6);
    var oo7=document.createElement("option");
    oo7.setAttribute("value","BUSINESS PROCESS MANAGEMENT");
    oo3.appendChild(oo7);
    var oo8=document.createElement("option");
    oo8.setAttribute("value","INTERNET WEB TECHNOLOGY LABORATORY");
    oo3.appendChild(oo8);
    var oo9=document.createElement("option");
    oo9.setAttribute("value","COMPREHENSION"); 
    oo3.appendChild(oo9);
    var oo10=document.createElement("option");
    oo10.setAttribute("value","PRODUCT DEVELOPMENT LABORATORY");
    oo3.appendChild(oo10);
    document.getElementById("tr6"+x).appendChild(oo1);



    
    var ii1=document.createElement("TD");
    ii1.setAttribute("id","td22"+e+x);
    var ii2=document.createElement("input");
    ii2.setAttribute("list","rank5");
    ii2.setAttribute("id","grd"+e+pos);
    ii1.appendChild(ii2);
    var ii3=document.createElement("datalist");
    ii3.setAttribute("id","rank5");
    ii1.appendChild(ii3);
    var ii4=document.createElement("option");
    ii4.setAttribute("value","O+");
    ii3.appendChild(ii4);
    var ii5=document.createElement("option");
    ii5.setAttribute("value","A+");
    ii3.appendChild(ii5);
    var ii6=document.createElement("option");
    ii6.setAttribute("value","A");
    ii3.appendChild(ii6);
    var ii7=document.createElement("option");
    ii7.setAttribute("value","B+");
    ii3.appendChild(ii7);
    var ii8=document.createElement("option");
    ii8.setAttribute("value","B");
    ii3.appendChild(ii8);
    document.getElementById("tr6"+x).appendChild(ii1);



    var uu1=document.createElement("TD");
    uu1.setAttribute("id","td23"+e+x);
    var uu2=document.createElement("input");
    uu2.setAttribute("list","grade12");
    uu1.appendChild(uu2);
    var uu3=document.createElement("datalist");
    uu3.setAttribute("id","grade12");
    uu1.appendChild(uu3);
    var uu4=document.createElement("option");
    uu4.setAttribute("value","19CS61C");
    uu3.appendChild(uu4);
    var uu5=document.createElement("option");
    uu5.setAttribute("value","19CS62C");
    uu3.appendChild(uu5);
    var uu6=document.createElement("option");
    uu6.setAttribute("value","19CS63C");
    uu3.appendChild(uu6);
    var uu7=document.createElement("option");
    uu7.setAttribute("value","19CS64C");
    uu3.appendChild(uu7);
    var uu8=document.createElement("option");
    uu8.setAttribute("value","19CS65C");
    uu3.appendChild(uu8);
    var uu9=document.createElement("option");
    uu9.setAttribute("value","19CS66C");
    uu3.appendChild(uu9);
    var uu10=document.createElement("option");
    uu10.setAttribute("value","19CS67C");
    uu3.appendChild(uu10);
    document.getElementById("tr6"+x).appendChild(uu1);



    var tt1=document.createElement("TD");
    tt1.setAttribute("id","td24"+e+x);
    var tt2=document.createElement("input");
    tt2.setAttribute("list","credit5");
    tt2.setAttribute("id","crd"+e+pos);
    tt1.appendChild(tt2);
    var tt3=document.createElement("datalist");
    tt3.setAttribute("id","credit5");
    tt1.appendChild(tt3);
    var tt4=document.createElement("option");
    tt4.setAttribute("value","0");
    tt3.appendChild(tt4);
    var tt5=document.createElement("option");
    tt5.setAttribute("value","1");
    tt3.appendChild(tt5);
    var tt6=document.createElement("option");
    tt6.setAttribute("value","1.5");
    tt3.appendChild(tt6);
    var tt7=document.createElement("option");
    tt7.setAttribute("value","2");
    tt3.appendChild(tt7);
    var tt8=document.createElement("option");
    tt8.setAttribute("value","3");
    tt3.appendChild(tt8);
    var tt9=document.createElement("option");
    tt9.setAttribute("value","4");
    tt3.appendChild(tt9);
    var tt10=document.createElement("option");
    tt10.setAttribute("value","6");
    tt3.appendChild(tt10);
    document.getElementById("tr6"+x).appendChild(tt1);

    

}
function sub6(){
    var val=document.getElementById("num").value;
    tot=val;
    if(val==null){
        alert("Cant be empty");
    }
    else if(e!=tot){
      
        var a1=document.getElementById("main");
        var s1=document.createElement("label").innerHTML="TOTAL SUBJECTS:";
        a1.append(s1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","num"+e);
        a1.append(ip1);
        document.getElementById("main").appendChild(document.createElement("br"));
        semcount++;
        var bt1=document.createElement("input");
        bt1.setAttribute("type","button");
        bt1.setAttribute("value","submit");
        bt1.setAttribute("onclick","table6()");
        bt1.innerHTML="submit";
        a1.append(bt1);
        var a=document.getElementById("btn").disabled = true; 
    }
}

var tb=0;
function table6(){
    console.log(e);
    var q1=document.createElement("TABLE");
    q1.setAttribute("id","tb7"+e);
    var q2=document.getElementById("main");
    q2.append(q1);
    var q3=document.getElementById("num"+e).value;
    for(var i=1;i<=q3;i++){
        pos++;
        row6(i);
    }
    var bt2=document.createElement("input");
        bt2.setAttribute("type","button");
        bt2.setAttribute("value","submit");
        bt2.setAttribute("onclick","calculate7()");
        bt2.innerHTML="submit";
        document.getElementById("main").appendChild(bt2);
        tb++;
        //var r=document.getElementById("btn1").disabled = true;
        
}
function calculate7(){
    semester-=1;
    var q3=document.getElementById("num"+e).value;
    pos=0;
    var totgrd=0,totcrd=0;
    for(var i=1;i<=q3;i++){
        pos++;
        var grd2=document.getElementById("grd"+e+pos).value;
        var crd2=parseFloat(document.getElementById("crd"+e+pos).value);
        if (grd2=="O")
        totgrd+=(10*crd2);
        else if (grd2=="A+")
        totgrd+=(9*crd2);
        else if (grd2=="A")
        totgrd+=(8*crd2);
        else if (grd2=="B+")
        totgrd+=(7*crd2);
        else if (grd2=="B")
        totgrd+=(6*crd2);
        totcrd+=crd2;
    }
    document.getElementById("main").appendChild(document.createElement("br"));
    cgpagrd+=totgrd;
    cgpacrd+=totcrd;
    var gpares = document.createElement("h8");
    gpares.innerHTML="Your GPA is: "+(totgrd/totcrd);
    document.getElementById("main").appendChild(gpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    var cgpares = document.createElement("h8");
    cgpares.innerHTML="Your CGPA is: "+(cgpagrd/cgpacrd);
    document.getElementById("main").appendChild(cgpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    if (semester>0)
    {
        e++;
        pos=0;
        sub7();
    }

}

function row6(x){
    var k1=document.createElement("TR");
    k1.setAttribute("id","tr7"+x);
    var k2=document.getElementById("tb7"+e);
    k2.append(k1);
    var mm1=document.createElement("TD");
    mm1.setAttribute("id","td25"+e+x);
    var mm2=document.createElement("input");
    mm2.setAttribute("list","grade13");
    mm1.appendChild(mm2);
    var mm3=document.createElement("datalist");
    mm3.setAttribute("id","grade13");
    mm1.appendChild(mm3);
    var mm4=document.createElement("option");
    mm4.setAttribute("value","RESEARCH PAPER AND PATENT REVIEW-SEMINAR");
    mm3.appendChild(mm4);
    var mm5=document.createElement("option");
    mm5.setAttribute("value","PROJECT WORK - I");
    mm3.appendChild(mm5);
    document.getElementById("tr7"+x).appendChild(mm1);



    
    var nn1=document.createElement("TD");
    nn1.setAttribute("id","td26"+e+x);
    var nn2=document.createElement("input");
    nn2.setAttribute("list","rank6");
    nn2.setAttribute("id","grd"+e+pos);
    nn1.appendChild(nn2);
    var nn3=document.createElement("datalist");
    nn3.setAttribute("id","rank6");
    nn1.appendChild(nn3);
    var nn4=document.createElement("option");
    nn4.setAttribute("value","O+");
    nn3.appendChild(nn4);
    var nn5=document.createElement("option");
    nn5.setAttribute("value","A+");
    nn3.appendChild(nn5);
    var nn6=document.createElement("option");
    nn6.setAttribute("value","A");
    nn3.appendChild(nn6);
    var nn7=document.createElement("option");
    nn7.setAttribute("value","B+");
    nn3.appendChild(nn7);
    var nn8=document.createElement("option");
    nn8.setAttribute("value","B");
    nn3.appendChild(nn8);
    document.getElementById("tr7"+x).appendChild(nn1);



    var bb1=document.createElement("TD");
    bb1.setAttribute("id","td27"+e+x);
    var bb2=document.createElement("input");
    bb2.setAttribute("list","grade14");
    bb1.appendChild(bb2);
    var bb3=document.createElement("datalist");
    bb3.setAttribute("id","grade14");
    bb1.appendChild(bb3);
    var bb4=document.createElement("option");
    bb4.setAttribute("value","19CS71C");
    bb3.appendChild(bb4);
    var bb5=document.createElement("option");
    bb5.setAttribute("value","19CS72C");
    bb3.appendChild(bb5);
    document.getElementById("tr7"+x).appendChild(bb1);



    var vv1=document.createElement("TD");
    vv1.setAttribute("id","td28"+e+x);
    var vv2=document.createElement("input");
    vv2.setAttribute("list","credit6");
    vv2.setAttribute("id","crd"+e+pos);
    vv1.appendChild(vv2);
    var vv3=document.createElement("datalist");
    vv3.setAttribute("id","credit6");
    vv1.appendChild(vv3);
    var vv4=document.createElement("option");
    vv4.setAttribute("value","0");
    vv3.appendChild(vv4);
    var vv5=document.createElement("option");
    vv5.setAttribute("value","1");
    vv3.appendChild(vv5);
    var vv6=document.createElement("option");
    vv6.setAttribute("value","1.5");
    vv3.appendChild(vv6);
    var vv7=document.createElement("option");
    vv7.setAttribute("value","2");
    vv3.appendChild(vv7);
    var vv8=document.createElement("option");
    vv8.setAttribute("value","3");
    vv3.appendChild(vv8);
    var vv9=document.createElement("option");
    vv9.setAttribute("value","4");
    vv3.appendChild(vv9);
    var vv10=document.createElement("option");
    vv10.setAttribute("value","6");
    vv3.appendChild(vv10);
    document.getElementById("tr7"+x).appendChild(vv1);

    

}
function sub7(){
    var val=document.getElementById("num").value;
    tot=val;
    if(val==null){
        alert("Cant be empty");
    }
    else if(e!=tot){
      
        var a1=document.getElementById("main");
        var s1=document.createElement("label").innerHTML="TOTAL SUBJECTS:";
        a1.append(s1);
        var ip1=document.createElement("input");
        ip1.setAttribute("type","text");
        ip1.setAttribute("id","num"+e);
        a1.append(ip1);
        document.getElementById("main").appendChild(document.createElement("br"));
        semcount++;
        var bt1=document.createElement("input");
        bt1.setAttribute("type","button");
        bt1.setAttribute("value","submit");
        bt1.setAttribute("onclick","table7()");
        bt1.innerHTML="submit";
        a1.append(bt1);
        var a=document.getElementById("btn").disabled = true; 
    }
}

var tb=0;
function table7(){
    console.log(e);
    var q1=document.createElement("TABLE");
    q1.setAttribute("id","tb8"+e);
    var q2=document.getElementById("main");
    q2.append(q1);
    var q3=document.getElementById("num"+e).value;
    for(var i=1;i<=q3;i++){
        pos++;
        row7(i);
    }
    var bt2=document.createElement("input");
        bt2.setAttribute("type","button");
        bt2.setAttribute("value","submit");
        bt2.setAttribute("onclick","calculate8()");
        bt2.innerHTML="submit";
        document.getElementById("main").appendChild(bt2);
        tb++;
        //var r=document.getElementById("btn1").disabled = true;
        
}
function calculate8(){
    semester-=1;
    var q3=document.getElementById("num"+e).value;
    pos=0;
    var totgrd=0,totcrd=0;
    for(var i=1;i<=q3;i++){
        pos++;
        var grd2=document.getElementById("grd"+e+pos).value;
        var crd2=parseFloat(document.getElementById("crd"+e+pos).value);
        if (grd2=="O")
        totgrd+=(10*crd2);
        else if (grd2=="A+")
        totgrd+=(9*crd2);
        else if (grd2=="A")
        totgrd+=(8*crd2);
        else if (grd2=="B+")
        totgrd+=(7*crd2);
        else if (grd2=="B")
        totgrd+=(6*crd2);
        totcrd+=crd2;
    }
    document.getElementById("main").appendChild(document.createElement("br"));
    cgpagrd+=totgrd;
    cgpacrd+=totcrd;
    var gpares = document.createElement("h8");
    gpares.innerHTML="Your GPA is: "+(totgrd/totcrd);
    document.getElementById("main").appendChild(gpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    var cgpares = document.createElement("h8");
    cgpares.innerHTML="Your CGPA is: "+(cgpagrd/cgpacrd);
    document.getElementById("main").appendChild(cgpares);
    document.getElementById("main").appendChild(document.createElement("br"));
    document.getElementById("main").appendChild(document.createElement("br"));
    if (semester>0)
    {
        e++;
        pos=0;
        sub9();
    }

}

function row7(x){
    var p1=document.createElement("TR");
    p1.setAttribute("id","tr8"+x);
    var p2=document.getElementById("tb8"+e);
    p2.append(p1);
    var ll1=document.createElement("TD");
    ll1.setAttribute("id","td29"+e+x);
    var ll2=document.createElement("input");
    ll2.setAttribute("list","grade15");
    ll1.appendChild(ll2);
    var ll3=document.createElement("datalist");
    ll3.setAttribute("id","grade15");
    ll1.appendChild(ll3);
    var ll4=document.createElement("option");
    ll4.setAttribute("value","PROJECT WORK – II");
    ll3.appendChild(ll4);
    var ll5=document.createElement("option");
    ll5.setAttribute("value","INTERNSHIP / INPLANT TRAINING");
    ll3.appendChild(ll5);
    document.getElementById("tr8"+x).appendChild(ll1);



    
    var kk1=document.createElement("TD");
    kk1.setAttribute("id","td30"+e+x);
    var kk2=document.createElement("input");
    kk2.setAttribute("list","rank7");
    kk2.setAttribute("id","grd"+e+pos);
    kk1.appendChild(kk2);
    var kk3=document.createElement("datalist");
    kk3.setAttribute("id","rank7");
    kk1.appendChild(kk3);
    var kk4=document.createElement("option");
    kk4.setAttribute("value","O+");
    kk3.appendChild(kk4);
    var kk5=document.createElement("option");
    kk5.setAttribute("value","A+");
    kk3.appendChild(kk5);
    var kk6=document.createElement("option");
    kk6.setAttribute("value","A");
    kk3.appendChild(kk6);
    var kk7=document.createElement("option");
    kk7.setAttribute("value","B+");
    kk3.appendChild(kk7);
    var kk8=document.createElement("option");
    kk8.setAttribute("value","B");
    kk3.appendChild(kk8);
    document.getElementById("tr8"+x).appendChild(kk1);



    var jj1=document.createElement("TD");
    jj1.setAttribute("id","td31"+e+x);
    var jj2=document.createElement("input");
    jj2.setAttribute("list","grade16");
    jj1.appendChild(jj2);
    var jj3=document.createElement("datalist");
    jj3.setAttribute("id","grade16");
    jj1.appendChild(jj3);
    var jj4=document.createElement("option");
    jj4.setAttribute("value","19CS81C");
    jj3.appendChild(jj4);
    var jj5=document.createElement("option");
    jj5.setAttribute("value","19CS82C");
    jj3.appendChild(jj5);
    document.getElementById("tr8"+x).appendChild(jj1);



    var hh1=document.createElement("TD");
    hh1.setAttribute("id","td32"+e+x);
    var hh2=document.createElement("input");
    hh2.setAttribute("list","credit7");
    hh2.setAttribute("id","crd"+e+pos);
    hh1.appendChild(hh2);
    var hh3=document.createElement("datalist");
    hh3.setAttribute("id","credit7");
    hh1.appendChild(hh3);
    var hh4=document.createElement("option");
    hh4.setAttribute("value","0");
    hh3.appendChild(hh4);
    var hh5=document.createElement("option");
    hh5.setAttribute("value","1");
    hh3.appendChild(hh5);
    var hh6=document.createElement("option");
    hh6.setAttribute("value","1.5");
    hh3.appendChild(hh6);
    var hh7=document.createElement("option");
    hh7.setAttribute("value","2");
    hh3.appendChild(hh7);
    var hh8=document.createElement("option");
    hh8.setAttribute("value","3");
    hh3.appendChild(hh8);
    var hh9=document.createElement("option");
    hh9.setAttribute("value","4");
    hh3.appendChild(hh9);
    var hh10=document.createElement("option");
    hh10.setAttribute("value","6");
    hh3.appendChild(hh10);
    var hh11=document.createElement("option");
    hh11.setAttribute("value","12");
    hh3.appendChild(hh11);
    document.getElementById("tr8"+x).appendChild(hh1);
}




