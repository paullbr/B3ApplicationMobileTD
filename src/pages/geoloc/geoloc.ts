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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocPage');
  }

}

class Geoloc extends Geolocation{
	constructor(private geolocation: Geolocation) {}

	this.geolocation.getCurrentPosition().then((resp) => {
 	// resp.coords.latitude
 	// resp.coords.longitude
	}).catch((error) => {
  	console.log('Error getting location', error);
	});

}