import { defineCollection, z } from 'astro:content';
// 1. Importamos el nuevo "cargador" que pide Astro
import { glob } from 'astro/loaders';

const propiedadesCollection = defineCollection({
  // 2. Usamos el 'loader' para decirle a Astro dónde están nuestros archivos .md
  loader: glob({ pattern: "**/*.md", base: "./src/content/propiedades" }),
  
  schema: z.object({
    titulo: z.string(),
    imagen_destacada: z.string(),
    direccion: z.string(),
    moneda: z.enum(['USD', 'ARS']),
    operacion: z.enum(['Venta', 'Alquiler']),
    tipo_propiedad: z.enum(['Casa', 'Departamento', 'Duplex', 'PH', 'Local comercial', 'Cochera', 'Terreno', 'Galpón', 'Campo']),
    precio: z.number(),

    galeria: z.array(z.object({ imagen: z.string() })).optional(),
    dormitorios: z.number().optional(),
    banos: z.number().optional(),
    ambientes: z.number().optional(),
    cocheras: z.number().optional(),
    sup_cubierta: z.number().optional(),
    sup_total: z.number().optional(),
  }),
});

export const collections = {
  'propiedades': propiedadesCollection,
};