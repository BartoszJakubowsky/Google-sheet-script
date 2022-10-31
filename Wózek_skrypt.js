//const  personData = Session.getActiveUser();
//const sheetGrafik = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ROBOCZY");
//var scriptProperties = PropertiesService.getScriptProperties();
var scriptProperties = PropertiesService.getUserProperties();
const sheetOsoby = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Administrator");  
//if (SpreadsheetApp.getActiveSpreadsheet().getSheetName() == "ROBOCZY")



function onOpen()
{
      //set global user prop
      scriptProperties.setProperties(getUserData(sheetOsoby));

        var user = scriptProperties.getProperties();
}




function onEdit(e){

if (SpreadsheetApp.getActiveSpreadsheet().getSheetName() != "Administrator")
{
//get global prop
var user = scriptProperties.getProperties();

if (user.isAdmin == "true")
{
  return;
}


  try
  {
       rangeModifed = e.range;
  }
  catch
  {
    return;
  }


  if (e.oldValue == user.userName && rangeModified.getValue() == null ||
      e.oldValue == null && rangeModifed.getValue() == user.userName ||
       e.oldValue == null && user.userName == undefined)
  {
    setValue(user.isAdmin, e.oldValue, user.userName);
  }
  else //if logged, if undefined
  {
    if (user.userName != undefined)
    {
      if (e.oldValue == null)
        SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Nie możesz wpisać ${rangeModifed.getValue()} poniważ nie jesteś tą osobą`, SpreadsheetApp.getUi().ButtonSet.OK));
      else
        SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Nie możesz usunąć ${e.oldValue} z wózka`, SpreadsheetApp.getUi().ButtonSet.OK));
    }
    else
    {
      SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Nie możesz usunąć ${e.oldValue} ponieważ nie jesteś zalogowany`, SpreadsheetApp.getUi().ButtonSet.OK));
    }
      rangeModifed.setValue(e.oldValue);
  }
}
}

function getUserData(sheet) {

const data = sheet.getDataRange().getValues();
const userName = Session.getUser().getUserLoginId();


var user = {
        userName: undefined,
        userMail: undefined,
        isAdmin : undefined
      }

  for (i = 0; i < data.length; i++)
  {
    if(data[i][1] == userName)
    {
       user.userName = data[i][0];
       user.userMail = data[i][1];
       user.isAdmin = data[i][2];
       return user;
    }  
  }
  return user;
}

// function DeleteNewSheets() {
//   var newSheetName = /^Sheet[\d]+$/
//   var ssdoc = SpreadsheetApp.getActiveSpreadsheet();
//   var sheets = ssdoc.getSheets();
  
//   // is the change made by the owner ?
//   if (Session.getActiveUser().getEmail() == ssdoc.getOwner().getEmail()) {
//     return;
//   }
//   // if not the owner, delete all unauthorised sheets
//   for (var i = 0; i < sheets.length; i++) {
//     if (newSheetName.test(sheets[i].getName())) {
//       ssdoc.deleteSheet(sheets[i])
//     }
//   }
// }


// function setValue(flag, data, userName)
// {

//    var cell = SpreadsheetApp.getActiveSpreadsheet().getSelection().getCurrentCell();

//    if (cell.canEdit() == false ^ cell.isPartOfMerge() == true)
//    return;

//    if (SpreadsheetApp.getActiveSpreadsheet().getSheetName() == "ROBOCZY")
//    {
//     SpreadsheetApp.getActiveSpreadsheet().getRange("B12").setValue(flag);
//     SpreadsheetApp.getActiveSpreadsheet().getRange("C12").setValue(data);
//     SpreadsheetApp.getActiveSpreadsheet().getRange("D12").setValue(userName);

//    }
// }




//usefull

    //SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Masz uprawnienia do edycji: ${cell}`, SpreadsheetApp.getUi().ButtonSet.OK));
    //SpreadsheetApp.getActive().toast(SpreadsheetApp.getUi().alert(`Nie masz uprawnień: ${rangeModifed.getValues()}`, SpreadsheetApp.getUi().ButtonSet.OK));
    //sheetData = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ROBOCZY").sheetData.getDataRange().getValues();
