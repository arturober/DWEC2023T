import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SwalComponent, SwalPortalTargets, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SweetAlert2Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('confirmDialog') confirm!: SwalComponent;

  swalTargets = inject(SwalPortalTargets);

  sayHello(name: string) {
    console.log("Hello " + name);
  }

  cancelHello() {
    console.log("Cancelled!");
  }

  async showConfirm() {
    const resp = await this.confirm.fire();
    if(resp.isConfirmed) {
      console.log("YESSSS");
    }
  }
}
