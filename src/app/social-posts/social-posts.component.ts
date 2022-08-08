import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showForm:boolean = false;

  PostList:Post[] = [
    {
      Title: "Up",
      Thought: "Up is down and down is up"
    },
  {
    Title: "Dog",
    Thought: "Don't forget to take your dog for a walk"
  },
  {
    Title: "Code",
    Thought: "Code is cool"
  }
];

toggleForm():void{
  this.showForm = !this.showForm;
}

onSubmit(p:Post):void {
this.PostList.unshift(p);
}

}
