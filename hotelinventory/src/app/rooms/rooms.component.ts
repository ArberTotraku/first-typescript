import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent {


  hotelName = "Hilton hotel";

  numberOfRooms= 10;

  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms
  }
}
