import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'; 

/**
 Generated class for the GeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geoloc',
  templateUrl: 'geoloc.html',
})
export class GeolocPage {
	lat: any;
	lon: any;
	
	position: Array<string>;
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
	  this.geolocation.getCurrentPosition().then((resp) => {
	   	this.lat = resp.coords.latitude
	   	this.lon = resp.coords.longitude
	  }).catch((error) => {
	  console.log('Error getting location', error);
	  });
	  
	 
	  this.position = new Array();
	  geolocation.watchPosition().subscribe(pos => {
		  this.position.push('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
		  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
	  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocPage');
  }
}