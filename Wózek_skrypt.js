  email = Session.getActiveUser().getEmail();
  sheetGrafik = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Wózek Środa Wielkopolska");
  sheetOsoby = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Administrator");  

// function onOpen(){
//   isAdmin(sheetOsoby)
//   dropList(sheetGrafik);
// }

function empty(){
  return;
}

    




function isAdmin(sheet) {

const data = sheet.getDataRange().getValues();

  for (i = 0; i < data.length; i++)
  {
    if(data[i][1] == email)
    {
        if(data[i][2] == true)
          return true;

        else if (data[i][2] == 'special'){
          var alert = SpreadsheetApp.getUi().alert("Na kolana i ładnie proś", SpreadsheetApp.getUi().ButtonSet.OK);
          SpreadsheetApp.getActive().toast(alert);
          return false;
        }

        else
          return false;
    }  
  }
  //if email is not aprovved
  var alert = SpreadsheetApp.getUi().alert("Ups 😬\nWygląda, że Ciebie nie zapisaliśmy 😲\nSkontaktuj się z Ryszardem Jakubowskim 😁", SpreadsheetApp.getUi().ButtonSet.OK);

  SpreadsheetApp.getActive().toast(alert);

}

function getUserName(sheet){

  const data = sheet.getDataRange().getValues();

  for (i = 0; i < data.length; i++)
  {
    if(data[i][1] == email)
        return data[i][0];
  }
}



 function dropList(e, sheetGrafik, sheetOsoby){
   
   
   var cell = SpreadsheetApp.getActiveSpreadsheet().getSelection().getCurrentCell();
   
   if (cell.canEdit() == false)
   return;
   
   cell.setBackground('red');


sheetOsoby = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Administrator");
var lista = sheetOsoby.getRange(1,3);
lista.setValue(getUserName(sheetOsoby));
cell.setDataValidation(lista)



 }
