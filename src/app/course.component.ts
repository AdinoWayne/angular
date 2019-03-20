import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <h2 [textContent]="title"></h2>
    <img [src]="imageUrl"/>
    <ul>
    <li *ngFor="let course of courses"> {{ course }}</li>
    </ul>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <div (click)="onDivClicked($event)">
        <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Save</button>
    </div>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Delete</button>
    {{ content | summary:10 }}
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    `
})
export class CourseComponent {
    title  = "Adino angular";
    email = "me@example.com"
    isActive = true;
    imageUrl = "http://lorempixel.com/400/200";
    courses;
    content = "Lorem Ipsum is simply dummy tesr of the priting and types";
    colSpan = 2;
    // logic for calling an HTTP service
    constructor(service: CoursesService) {
        this.courses = service.getCourse();
    }
    onSave($event) {
        console.log("button was clicked", $event);
    }
    onKeyUp() {
        console.log(this.email)
    }
    onDivClicked($event) {
        console.log("div was clicked", $event);
    }
    getTitle(){
        return this.title;
    }
}