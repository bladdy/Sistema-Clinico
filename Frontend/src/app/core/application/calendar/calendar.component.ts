import {  Component, ViewEncapsulation } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Calendar, EventClickArg } from '@fullcalendar/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent {
routes=routes
showEventDetailsModal = false;
  eventDetails = { title: '' };
  date: Date[] | undefined;
  dropdownOpen = false;
  selectedTime: Date = new Date();
  addtime2: Date | undefined;
  addtime: Date | undefined;
  time: Date[] | undefined; 
  time2: Date[] | undefined; 
  bsInlineValue = new Date()


  ngOnInit(): void {}
    // Open the dropdown
    openDropdown() {
      this.dropdownOpen = true;
    }

    // Close the dropdown
    closeDropdown() {
      this.dropdownOpen = false;
    }

    // Update displayed time when selection changes
    onTimeChange() {
      this.closeDropdown(); // Close dropdown after time selection
    }
ngAfterViewInit(): void {
  const calendarEl = document.getElementById('calendar');
  const calendar = new Calendar(calendarEl!, {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    editable: true,
    droppable: true,
    events: [
      {
        title: 'Team B',
        imageUrl: 'assets/img/users/user-04.jpg',
        className:'avatar',
        backgroundColor: 'transparent',
        start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
      },
      {
        title: 'Team B',
        imageUrl: 'assets/img/users/user-05.jpg',
        className:'avatar',
        backgroundColor: 'transparent',
        start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
      },
      {
        title: 'Team B',
        imageUrl: 'assets/img/users/user-06.jpg',
        className:'avatar',
        backgroundColor: 'transparent',
        start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
      },
      {
        title: 'Team C',
        imageUrl: 'assets/img/users/user-10.jpg',
        className:'avatar',
        backgroundColor: 'transparent',
        start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
      },
      {
        title: 'Team C',
        imageUrl: 'assets/img/users/user-11.jpg',
        className:'avatar',
        backgroundColor: 'transparent',
        start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
      },
      {
        title: 'Team A',
        imageUrl: 'assets/img/users/user-01.jpg',
         className:'avatar',
        backgroundColor: 'transparent',
        start: new Date(Date.now() - 328000000).toISOString().slice(0, 10),
      },
      {
        title: 'Team A',
        imageUrl: 'assets/img/users/user-02.jpg',
         className:'avatar',
        backgroundColor: 'transparent',
        start: new Date(Date.now() - 328000000).toISOString().slice(0, 10),
      },
      {
        title: 'Team A',
        imageUrl: 'assets/img/users/user-03.jpg',
        className:'avatar',
        backgroundColor: 'transparent',
        start: new Date(Date.now() - 328000000).toISOString().slice(0, 10),
      }
    ],
    eventContent: function (arg) {
      const imageUrl = arg.event.extendedProps['imageUrl'];
      const title = arg.event.title;

      let innerHtml = `<div style="display: flex; align-items: center;">`;

      if (imageUrl) {
        innerHtml += `
          <img src="${imageUrl}" style="width: 30px; height: 30px; border-radius: 50%; margin-right: 5px;" />
        `;
      }

      innerHtml += `<span>${title}</span></div>`;

      return { html: innerHtml };
    },
    headerToolbar: {
      start: 'today prev,next',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    eventClick: this.handleEventClick.bind(this),
    drop: (info) => console.log('Event dropped:', info.draggedEl.innerText.trim()),
    eventReceive: (info) => console.log('Event added:', info.event.title),
  });

  calendar.render();
}

  handleEventClick(info: EventClickArg) {
    console.log('323');
    
    this.eventDetails = {
      title: info.event.title
    };
    this.showEventDetailsModal = true;
  }
  handleEventDetailsClose() {
    this.showEventDetailsModal = false;
  }
}
