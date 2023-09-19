import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // in case we aren't modifying a data internally
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {

  // we can apply OnChanges when it's only input
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes:SimpleChange):void {
    console.log(changes);
    
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }

}
