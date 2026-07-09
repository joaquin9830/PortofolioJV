import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  readonly whatsappUrl = 'https://wa.me/5492993298415';
  readonly emailUrl = 'mailto:joaquin9811@gmail.com';
  readonly linkedinUrl = 'https://www.linkedin.com/in/joaquin-vinolo98/';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(event: Event): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      const formData = new FormData();
      formData.append('Nombre', this.contactForm.get('name')?.value);
      formData.append('Email', this.contactForm.get('email')?.value);
      formData.append('Asunto', this.contactForm.get('subject')?.value);
      formData.append('Mensaje', this.contactForm.get('message')?.value);
      formData.append('_subject', 'Nuevo mensaje desde Portfolio — Joaquín Viñolo');
      formData.append('_next', 'https://joaquinvinolo.com/#contact');
      formData.append('_captcha', 'false');

      fetch('https://formspree.io/f/mwpnjvpl', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })
        .then(response => {
          if (response.ok) {
            this.submitSuccess = true;
            this.contactForm.reset();
            setTimeout(() => { this.submitSuccess = false; }, 8000);
          } else {
            throw new Error('Error al enviar');
          }
        })
        .catch(() => {
          this.submitError = true;
          setTimeout(() => { this.submitError = false; }, 5000);
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    } else {
      event.preventDefault();
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return 'Este campo es obligatorio';
      if (field.errors['email']) return 'Ingresá un email válido';
      if (field.errors['minlength']) {
        return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
      }
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field.touched);
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.valid && field.touched);
  }
}
