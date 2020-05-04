import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';
import {BlogService} from '../blog.service'

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
categories=['cuentos', 'aventuras', 'ciencia-ficcion'];
  constructor(private service:BlogService) { }

  ngOnInit(): void {

  }
insert(value) {

  this.service.addBlog(value);
  console.log('insertando...');
}
}
