javascript:(function(){function callOrario(e,t,n){var a=new XMLHttpRequest;console.log(e),a.open("POST","https://logistica.unibg.it/PortaleStudenti/rooms_call.php"),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){var e=a.responseText;n(e)}},a.send("form-type=rooms&aula=&sede="+t+"&date="+e+"&_lang=it")}var now=new Date,main_content=document.getElementsByClassName("main-content")[0];main_content.innerHTML="",main_content.innerHTML="<h1>Cerco aule libere dalle "+now.getHours()+":"+now.getMinutes()+" in poi di oggi "+now.getDate()+"/"+(now.getMonth()+1)+"</h1>";var hours=now.setHours(8),minutes=now.setMinutes(0),seconds=now.setSeconds(0),day=now.getDate(),month=now.getMonth()+1,year=now.getFullYear(),oggi=day+"-"+month+"-"+year;for(sedi=["EDA-Dalmine","EDB-Dalmine","EDC-Dalmine","EDD-Dalmine"],k=0;k<sedi.length;k++)callOrario(oggi,sedi[k],function(e){for(key in(e=JSON.parse(e)).table)for(i=1;i<e.table[key].length-1;i++){if(0==e.table[key][i].length&&(1==i||0!=e.table[key][i-1].length))var t=new Date(now.getTime()+6e4*i*30-18e5);if(0==e.table[key][i].length&&(i+1==25||0!=e.table[key][i+1].length)){var n=new Date,a=new Date(now.getTime()+6e4*i*30+18e5);n<t&&(main_content.innerHTML+="<p>Aula "+key+" libera dalle "+t.getHours()+":"+t.getMinutes()+" alle "+a.getHours()+":"+a.getMinutes()+"</p>")}}});})()