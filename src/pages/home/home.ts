import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
//import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private callsvc: CallNumber) {

  }
  call() {
    this.callsvc.callNumber('8095219495', true).then(()=> {
      console.log("Call worked");
    }).catch((err)=> {
      alert(JSON.stringify(err))
    });
  }

  /*senSMS() {
    var options: {
      replaceLineBreaks:true,
      android: {
        intent: 'INTENT'
      }
    }
    this.callsvc.send('8095219495', 'Message', options).then(()=> {
      console.log("SMS worked");
    }).catch((err)=> {
      alert(JSON.stringify(err))
    });*/
  }

