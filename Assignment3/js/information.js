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