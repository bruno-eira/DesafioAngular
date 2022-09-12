
import { Component, OnInit } from '@angular/core';
import { Reactive } from '../../interface/reactive';
import { ReactiveService } from '../../service/reactive.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  displayedColumns: string[] = ['id', 'body', 'title', 'author', 'publicationDate', 'actions'];
  reactives: Reactive[] = [];

  reactive!: Reactive;
  isEditing = false;

  form = this.fb.group({
    id: [{ value: '', disabled: true }],
    body: [''],
    title: [''],
    author: [''],
    publicationDate: ['']
  });

  constructor(private fb: FormBuilder, 
    private db: ReactiveService) {}

  ngOnInit(): void {
    this.getReactives();
  }

  getReactives(): void {
    this.db.getAll().subscribe((reactives) => (this.reactives = reactives));
  }

  goBack(): void {
    this.getReactives()
    this.isEditing = false;
    this.form.controls['id'].setValue('');
    this.form.controls['body'].setValue('');
    this.form.controls['author'].setValue('');
    this.form.controls['title'].setValue('');
    this.form.controls['publicationDate'].setValue('');

  }
  create(): void {
    const { valid, value } = this.form;
    if (!valid)
      return;

    const reactive: Reactive = {
      body: value.body,
      title: value.title,
      author: value.author,
      publicationDate: value.publicationDate,
    } as Reactive;

    this.db.create(reactive).subscribe(() => this.goBack());
    
  }
  update(): void {
    const { valid, value } = this.form;
    if (!valid)
      return;

    const reactive: Reactive = {
      id: this.reactive.id,
      body: value.body || '',
      title: value.title || '',
      author: value.author || '',
      publicationDate: value.publicationDate || '',
    };

    this.db.update(reactive).subscribe(() => this.goBack());
    
  }

  delete(reactive: Reactive): void {
    this.db.delete(reactive).subscribe(() => this.goBack());
  }
  toUpdate(reactive: Reactive): void{

    this.isEditing = true;

    this.db.getOne(reactive.id).subscribe((reactive) => {
      this.reactive = reactive;
      this.form.controls['id'].setValue(reactive.id.toString());
      this.form.controls['body'].setValue(reactive.body);
      this.form.controls['author'].setValue(reactive.author);
      this.form.controls['title'].setValue(reactive.title);
      this.form.controls['publicationDate'].setValue(reactive.publicationDate);
    });
  }
}


