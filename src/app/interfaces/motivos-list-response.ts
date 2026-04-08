export interface MotivosListResponse {
  success: boolean;
  data: Motivo[];
}

export interface Motivo {
  motivo: string;
  tipo: string;
  descripcion: string;
  tipo_motivo: string;
}
