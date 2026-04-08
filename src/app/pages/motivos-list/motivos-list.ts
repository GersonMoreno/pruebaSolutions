import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Motivo } from '../../interfaces/motivos-list-response';
import { PrimeNgModule } from '../../prime-ng/primeNg.module';
import { MotivoService } from '../../services/motivo.service';

@Component({
  imports: [PrimeNgModule, ReactiveFormsModule],
  templateUrl: './motivos-list.html',
  styleUrl: './motivos-list.css',
})
export default class MotivosList {
  motivoService = inject(MotivoService);
  fb = inject(FormBuilder);

  myForm = this.fb.group({
    motivo: [''],
    descripcion: [''],
  });

  motivo = signal('');
  descripcion = signal('');

  private readonly motivosResource = rxResource({
    params: () => ({
      motivo: this.motivo(),
      descripcion: this.descripcion(),
    }),
    stream: ({ params }) =>
      this.motivoService.getMotivos({
        que: 4,
        tope: '999',
        cmd: '',
        codigo: params.motivo,
        tipo: '',
        descripcion: params.descripcion,
        tipo_motivo: '',
        iIdioma: 0,
      }),
  });

  readonly motivos = computed<Motivo[]>(() => {
    const response = this.motivosResource.value();
    if (!response || !response.success) [];
    console.log(response);
    return response?.data ?? [];
  });

  constructor() {}

  submit() {
    console.log(this.myForm.value);
    const { motivo, descripcion } = this.myForm.value;
    this.motivo.set(motivo ?? '');
    this.descripcion.set(descripcion ?? '');
  }
}
