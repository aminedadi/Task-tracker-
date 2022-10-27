import { Component, OnInit } from '@angular/core';
import { UiService } from "../../services/ui.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'task-tracker';
  constructor(private uiservice : UiService, private router : Router) {

   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiservice.toggleAddTask();
  }
 
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
