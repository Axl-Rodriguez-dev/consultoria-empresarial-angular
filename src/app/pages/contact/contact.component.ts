import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ContactInfo } from '../../models/models';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactInfo = signal<ContactInfo | null>(null);
  submitted = signal(false);
  error = signal('');

  form = { nombre: '', email: '', telefono: '', mensaje: '' };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getContactInfo().subscribe({
      next: (data) => this.contactInfo.set(data),
      error: () => {}
    });
  }

  onSubmit(): void {
    this.error.set('');
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) {
      this.error.set('Por favor completa todos los campos obligatorios.');
      return;
    }
    if (!this.form.email.includes('@')) {
      this.error.set('Por favor ingresa un correo electrónico válido.');
      return;
    }
    this.submitted.set(true);
  }

  resetForm(): void {
    this.form = { nombre: '', email: '', telefono: '', mensaje: '' };
    this.submitted.set(false);
    this.error.set('');
  }
}
