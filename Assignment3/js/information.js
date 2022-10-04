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
