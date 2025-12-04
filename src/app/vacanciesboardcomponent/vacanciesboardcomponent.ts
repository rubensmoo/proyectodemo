import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-vacanciesboardcomponent',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule
  ],
  templateUrl: './vacanciesboardcomponent.html',
})
export class Vacanciesboardcomponent {

  todo = JSON.parse(localStorage.getItem('todo') || JSON.stringify([
    { title: 'Vacante A' },
    { title: 'Vacante B' },
    { title: 'Vacante C' },
  ]));

  inprogress = JSON.parse(localStorage.getItem('inprogress') || '[]');
  done = JSON.parse(localStorage.getItem('done') || '[]');

  drop(event: CdkDragDrop<any[]>) {

    const mapListas: any = {
      todo: this.todo,
      inprogress: this.inprogress,
      done: this.done,
    };

    const listaOrigen = mapListas[event.previousContainer.id];
    const listaDestino = mapListas[event.container.id];

    if (event.previousContainer === event.container) {
      moveItemInArray(listaDestino, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        listaOrigen,
        listaDestino,
        event.previousIndex,
        event.currentIndex
      );
    }

    localStorage.setItem('todo', JSON.stringify(this.todo));
    localStorage.setItem('inprogress', JSON.stringify(this.inprogress));
    localStorage.setItem('done', JSON.stringify(this.done));
  }

  clearAll() {
    localStorage.clear();
    location.reload();
  }
}
