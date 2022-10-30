//const  personData = Session.getActiveUser();
//const sheetGrafik = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ROBOCZY");
const sheetOsoby = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Administrator");  

var user = {
        userName: undefined,
        userMail: undefined,
        isAdmin : undefined
      }

function onOpen()
{
  if (SpreadsheetApp.getActiveSpreadsheet().getSheetName() == "ROBOCZY")
  {
      getUserData(sheetOsoby);     

      console.log(user.userName);
      console.log(user.userMail);
      console.log(user.isAdmin);
  }
}



//przed edycją zapisz cały sheet -> po edycji i validacji będzie kopia zapasowa 













function onSelectionChange(){
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell().getValue();
  console.log(cell);
  SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert("działa", SpreadsheetApp.getUi().ButtonSet.OK));
}


function onEdit(e){

if (SpreadsheetApp.getActiveSpreadsheet().getSheetName() == "ROBOCZY")
{
  const rangeModifed = e.range;
  console.log(rangeModifed)
  SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(rangeModifed.getValues(), SpreadsheetApp.getUi().ButtonSet.OK));

  if (rangeModifed.getValues().toString() == user.userName)
  {
    //SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Masz uprawnienia do edycji: ${rangeModifed.getValues()}`, SpreadsheetApp.getUi().ButtonSet.OK));
  }
  else
  {
    //SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Nie masz uprawnień: ${rangeModifed.getValues()}`, SpreadsheetApp.getUi().ButtonSet.OK));
  }

}
}


function getUserData(sheet) {

const data = sheet.getDataRange().getValues();
const userName = Session.getUser().getUserLoginId();

  for (i = 0; i < data.length; i++)
  {
    if(data[i][1] == userName)
    {
       user.userName = data[i][0];
       user.userMail = data[i][1];
       user.isAdmin = data[i][2];
    }  
  }

}