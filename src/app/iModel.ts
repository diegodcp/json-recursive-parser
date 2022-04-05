export interface modelString {
  nombre: string;
  valor: string;
  tag?: string;
}

export interface modelObjeto {
  nombre: string;
  contenido: modelString[];
  hijo: modelObjeto[];
}

export interface modelResultado {
  context_test_id: string;
  execution_date: string;
  msisdn: string;
  criticity: string;
  result_code: string;
  interpretation: string;
  observation: string;
  resultados: modelObjeto[];
}
