import { Component } from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber:1,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wifi,Tv,Bathroom,Kitchen',
      price: 500,
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      photos: 'https://unsplash.com/photos/3jctzdjyTas',
    },
    {
      roomNumber:2,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wifi,Tv,Bathroom,Kitchen',
      price: 1000,
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      photos: 'https://unsplash.com/photos/3jctzdjyTas',
    },
    {
      roomNumber:3,
      roomType: 'Private Room',
      amenities:'Air conditioner, Free wifi,Tv,Bathroom,Kitchen',
      price:15000,
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      photos:'https://unsplash.com/photos/3jctzdjyTas'
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
