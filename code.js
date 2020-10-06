function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200")
        {
            callback(xhr.responseText);
        }

    };
    xhr.send(null);

}


loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    basic(data.details);
    personal(data.objective);
    education(data.education);
    skills(data.technicalskills);

})
var child1=document.querySelector(".child1");
function basic(det){
    var img1=document.createElement("img");
    img1.src=det.image;
    child1.appendChild(img1);

    var nam=document.createElement("h3");
    nam.textContent=det.name;
    child1.appendChild(nam);

    var mail=document.createElement("a");
    mail.textContent=det.email;
    mail.href="mailto:devika@gmail.com";
    child1.appendChild(mail);

    var hr=document.createElement("hr");
    child1.appendChild(hr);

    var num=document.createElement("p");
    num.textContent=det.number;
    child1.appendChild(num);

    var add=document.createElement("p");
    add.textContent=det.Address;
    child1.appendChild(add);

}
var child2=document.querySelector(".child2");
function personal(info){
    var heading=document.createElement("h3");
    heading.textContent="CareerObjective";
    child2.appendChild(heading);

    child2.appendChild(document.createElement("hr"));

    var obj=document.createElement("p");
    obj.textContent=info.info;
    child2.appendChild(obj);




}
function education(edu){
    var heading=document.createElement("h3");
    heading.textContent="Educational details";
    child2.appendChild(heading);

    child2.appendChild(document.createElement("hr"));

    var table=document.createElement("table");
    child2.appendChild(table);
    tabledata="";
    table.border="2";
    for(i=0;i<edu.length;i++){
        tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].yop+"</td><td>"+edu[i].percentage+"</td></tr>";
    }
    table.innerHTML=tabledata;
}

function skills(skill){
    var heading=document.createElement("h3");
    heading.textContent="Technical Skills";
    child2.appendChild(heading);

    child2.appendChild(document.createElement("hr"));

  
    for(i=0;i<skill.length;i++){
        var heading=document.createElement("h4");
        heading.textContent=skill[i].title;
        child2.appendChild(heading);
        
        var ul=document.createElement("ul");
        var li=document.createElement("li");
        li.textContent=skill[i].info;
        ul.appendChild(li);
        child2.appendChild(ul);
    }

}