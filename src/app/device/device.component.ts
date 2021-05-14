import { Component, OnInit } from '@angular/core';
import { NewapiserviceService } from '../service/newapiservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(private _service:NewapiserviceService) { }

  deviceDisplay:any = [];

  ngOnInit(): void {
    this._service.topHeading().subscribe((result) =>{
      console.log(result);
      this.deviceDisplay = result.features;
    })
  }

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    items: 1,
    margin: 14,
    stagePadding: 1,
    nav: true
  };
}
