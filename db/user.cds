namespace app.user;
 
using { cuid, managed,  } from '@sap/cds/common';
 
 
entity User : cuid, managed {
    firstName: String;
    lastName : String;
    MobileNo : String;
}