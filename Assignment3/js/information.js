
function submit()
{
    console.log("submit");
    let inforbox = [];
    if (localStorage.getItem('infors'))
    {
        inforbox = JSON.parse(localStorage.getItem('infors'));
    }
    inforboxinfor = {};
    inforboxinfor.name = document.getElementById("name").value;
    inforboxinfor.email= document.getElementById("email").value
    inforboxinfor.studentid = document.getElementById("studentid").value;

    inforbox.push(inforboxinfor);
    localStorage.setItem('infors',JSON.stringify(inforbox));
    printTable()
}
function printTable()
{
    if(document.getElementById("inforsTable"))
    {
        document.body.removeChild(document.getElementById("inforsTable"))
        document.body.removeChild(document.getElementById("inforsTableHeader"))
    }
    inforTableHeader = document.createElement("h3")
    inforTableHeader.append("Information Table")
    inforTableHeader.id = "inforsTableHeader"

    if (localStorage.getItem('infors'))  {
        
        inforboxinfors = JSON.parse(localStorage.getItem('infors'));

       
        let inforsTable = document.createElement("table");
        inforsTable.id = "inforsTable"
        
       inforboxinfors.forEach(infor => {

            
            inforRow = inforsTable.insertRow();
            
            nameCell = inforRow.insertCell();
            emailCell = inforRow.insertCell();
            idCell = inforRow.insertCell();
            
            nameCell.append(infor.name)
            emailCell.append(infor.email)
            idCell.append(item.studentid)
            
        });

       
        document.body.appendChild(inforTableHeader)
      
    document.body.appendChild(inforsTable)
    }

}

function submit()  {
    console.log("submit")
    let infor = [];
    
    
    if (localStorage.getItem('persons'))    {
        infor = JSON.parse(localStorage.getItem('persons')) ;
    }

  
    inforperson = {};

    inforperson.name = document.getElementById("name").value;
    inforperson.email= document.getElementById("email").value;
    inforperson.id = document.getElementById("id").value;

    
    infor.push(inforperson);

    localStorage.setItem('persons', JSON.stringify(infor));

    printTable()

}

function printTable()   {

    
    if (document.getElementById("personsTable"))  {
        document.body.removeChild(document.getElementById("personsTable"))
        document.body.removeChild(document.getElementById("personsTableHeader"))
    }

    personTableHeader = document.createElement("h2")
    personTableHeader.append("person Table")
    personTableHeader.id = "personsTableHeader"

    if (localStorage.getItem('persons'))  {
        
        inforpersons = JSON.parse(localStorage.getItem('persons'));

        
        let personsTable = document.createElement("table");
        personsTable.id = "personsTable"
        
        inforpersons.forEach(person => {

            
            personRow = personsTable.insertRow();
           
            nameCell = personRow.insertCell();
            emailCell = personRow.insertCell();
            idCell = personRow.insertCell();
            
            nameCell.append(person.name)
            emailCell.append(person.email)
            idCell.append(person.id)
            
        });

        
        document.body.appendChild(personTableHeader)
        
    document.body.appendChild(personsTable)
    }
}

