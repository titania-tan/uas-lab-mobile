import { Component} from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {User} from '../services/user/user';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

declare var google: any;
@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.page.html',
  styleUrls: ['./tab-main.page.scss'],
})
export class TabMainPage {
  map: any;
  userMarker: any;
  latitude: number;
  longitude: number;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  user: User;
  uid: string;
  infoWindows: any = [];
  markers: any = [
      {
      title : 'funny',
      latitude: '-6.255224572678183',
      longitude: '106.61510323639976'
      },
    {
      title : 'dindun',
      latitude: '-6.257173577262352',
      longitude: '106.61889088280803'
    },
    {
      title : 'zura',
      latitude: '-6.2564011324532816',
      longitude: '106.61563880553975'
    },
    {
      title : 'vania',
      latitude: '-6.168703330013791',
      longitude: '106.7665439693146'
    }
  ];


  constructor(private userService: UserService,
              private db: AngularFireDatabase,
              public fAauth: AngularFireAuth,
              private router: Router) { }

  ionViewDidEnter() {
    this.fAauth.onAuthStateChanged((user) => {
      if (!user) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.uid = user.uid;
        this.showMap();
        this.userService.storeLoggedUser(user.uid);
      }
    });
  }

  addMarkersToMap(markers){
    for (const marker of markers){
      const position = new google.maps.LatLng(marker.latitude, marker.longitude);
      const mapMarker = new google.maps.Marker({
        position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowsToMarker(mapMarker);
    }
  }

  getCurrLoc(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (this.userMarker){
          this.userMarker.setMap(null);
        }

        const pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };

        this.latitude = pos.latitude;
        this.longitude = pos.longitude;

        this.userMarker = new google.maps.Marker({
          position: new google.maps.LatLng(this.latitude, this.longitude),
          map: this.map,

        });
        this.userMarker.info = new google.maps.InfoWindow({
          content: 'Your Location',
        });
        this.userMarker.info.open(this.map, this.userMarker);
        this.map.setCenter(pos);
      });
    }
  }

  addInfoWindowsToMarker(marker){
    const infoWindowContent = '<div id="content">' +
        '<h2 id="firstHeading" class="firstHeading"> ' + ' marker.title' + '</h2>' +
        '<p> latitude : ' + marker.latitude + ' </p>' +
        '<p> longitude :' + marker.longitude + '</p>' +
        '</div>';

    const infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
     this.closeAllInfoWindows();
     infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for ( const window of this.infoWindows){
      window.close();
    }
  }

  showMap(){
    const location = new google.maps.LatLng(-6.168703330013791, 106.7665439693146);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.userMarker = new google.maps.Marker({
      position: options.center,
      map: this.map,
    });
    this.userMarker.info = new google.maps.InfoWindow({
      content: 'wheein',
    });
    this.userMarker.info.open(this.map, this.userMarker);
    this.map.setCenter(this.userMarker.position);
  }

}
