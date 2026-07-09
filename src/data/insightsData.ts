export type ChartType = 'line' | 'bar';

export interface InsightPost {
  id: string;
  tag: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  chartData?: any[];
  chartConfig?: {
    type: ChartType;
    dataKeyX: string;
    lines?: { key: string; color: string; name: string }[];
    bars?: { key: string; color: string; name: string }[];
  };
}

export const insightsData: InsightPost[] = [
  {
    id: "inflacion-tasas-2026",
    tag: "Macroeconomía",
    title: "El impacto de las tasas de interés en el consumo retail",
    summary: "Un análisis empírico sobre cómo las variaciones de la Tasa de Política Monetaria (TPM) han moldeado las tendencias de compra en el sector retail durante el último trimestre.",
    content: "La relación entre la Tasa de Política Monetaria (TPM) y el consumo en el sector retail es una de las dinámicas macroeconómicas más estudiadas, pero su impacto en tiempo real siempre ofrece nuevos matices. A medida que el banco central ajusta la tasa para contener presiones inflacionarias o estimular la economía, el costo del crédito y el retorno del ahorro varían, alterando la propensión marginal al consumo de los hogares.\n\nEn este análisis, observamos una correlación directa entre el incremento de la TPM y la caída en ventas de bienes durables (electrodomésticos, tecnología). Curiosamente, los bienes no durables (alimentos básicos) mantienen una inelasticidad notable, absorbiendo una mayor proporción del gasto disponible familiar. Este comportamiento refuerza la teoría económica clásica sobre los bienes de primera necesidad en tiempos de contracción monetaria.",
    date: "14 Jul 2026",
    chartData: [
      { month: 'Ene', tpm: 11.25, durables: 85, noDurables: 100 },
      { month: 'Feb', tpm: 10.50, durables: 88, noDurables: 102 },
      { month: 'Mar', tpm: 9.75, durables: 92, noDurables: 101 },
      { month: 'Abr', tpm: 9.25, durables: 96, noDurables: 103 },
      { month: 'May', tpm: 8.50, durables: 105, noDurables: 105 },
      { month: 'Jun', tpm: 8.00, durables: 112, noDurables: 104 },
    ],
    chartConfig: {
      type: 'line',
      dataKeyX: 'month',
      lines: [
        { key: 'tpm', color: '#ec4899', name: 'TPM (%)' },
        { key: 'durables', color: '#06b6d4', name: 'Ventas Durables (Índice)' }
      ]
    }
  },
  {
    id: "optimizacion-etl-pandas",
    tag: "Data Engineering",
    title: "Reduciendo tiempos de ETL en un 70% usando Pandas Vectorizado",
    summary: "Cómo transformar bucles ineficientes (for-loops) en operaciones vectorizadas puede salvar miles de horas de procesamiento en pipelines corporativos de datos.",
    content: "El procesamiento de grandes volúmenes de datos es el núcleo de cualquier sistema analítico corporativo. Un error común al iniciar en Python es iterar sobre DataFrames de Pandas utilizando métodos como iterrows() o simples bucles for. Esto ignora por completo la arquitectura subyacente de C que hace que NumPy (y por extensión, Pandas) sea extremadamente rápido.\n\nAl cambiar a métodos de vectorización, aplicamos operaciones a columnas enteras de forma simultánea. En nuestro último caso de estudio, al refactorizar un script de integración con la API de GA4, logramos reducir el tiempo de ejecución del ETL diario de 45 minutos a escasos 12 minutos. Este gráfico ilustra la comparativa de rendimiento entre distintos métodos de iteración en Pandas con un dataset de 1 millón de registros.",
    date: "02 Jul 2026",
    chartData: [
      { method: 'iterrows()', time: 140 },
      { method: 'itertuples()', time: 80 },
      { method: 'apply()', time: 25 },
      { method: 'Vectorización', time: 2 },
    ],
    chartConfig: {
      type: 'bar',
      dataKeyX: 'method',
      bars: [
        { key: 'time', color: '#8b5cf6', name: 'Tiempo (segundos)' }
      ]
    }
  },
  {
    id: "escalabilidad-startups-2026",
    tag: "Negocios",
    title: "El dilema de la escalabilidad en startups B2B",
    summary: "Por qué el 80% de las startups B2B fallan al intentar escalar sus operaciones durante el primer año post-Serie A.",
    content: "Escalar una startup B2B no es solo multiplicar el presupuesto de marketing; requiere una transformación profunda en las operaciones y la retención de clientes. Analizando datos de 50 empresas que levantaron su Serie A en los últimos 2 años, notamos un patrón alarmante: el crecimiento exponencial de usuarios frecuentemente colapsa la infraestructura de soporte al cliente, llevando a una tasa de abandono (churn) que anula el crecimiento.\n\nLa clave del éxito radica en automatizar el onboarding y construir herramientas de autoservicio antes de acelerar las ventas. En la gráfica se observa cómo la inversión en Customer Success (CS) previene la caída abrupta de retención en los meses críticos 6 al 12.",
    date: "28 Jun 2026",
    chartData: [
      { month: 'Mes 1', sinCS: 100, conCS: 100 },
      { month: 'Mes 3', sinCS: 85, conCS: 95 },
      { month: 'Mes 6', sinCS: 60, conCS: 92 },
      { month: 'Mes 9', sinCS: 45, conCS: 88 },
      { month: 'Mes 12', sinCS: 30, conCS: 85 },
    ],
    chartConfig: {
      type: 'line',
      dataKeyX: 'month',
      lines: [
        { key: 'sinCS', color: '#ef4444', name: 'Retención sin CS (%)' },
        { key: 'conCS', color: '#10b981', name: 'Retención con CS (%)' }
      ]
    }
  }
];
