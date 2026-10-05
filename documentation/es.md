<!-- ELUCENIA technical documentation · grace · es · no clinical/professional/rights approval -->

# Puntuación GRACE (mortalidad hospitalaria)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/grace)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`idade`

años · intervalo: 18–110

### Frecuencia cardíaca

`fc`

bpm · intervalo: 20–250

### Presión arterial sistólica

`pas`

mmHg · intervalo: 40–300

### Creatinina

`cr`

mg/dL · intervalo: 0,1–20

### Clase de Killip

`killip`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Parada cardíaca al ingreso

`pcr`

### Desviación del segmento ST

`st`

### Marcadores de necrosis elevados (troponina/CK-MB)

`enz`

## Edición del método

GRACE/Granger 2003: nomograma hospitalario, interpolación local; no GRACE 2.0

## Fórmula documentada

Puntos del nomograma (Granger 2003): edad \< 30 = 0, 30–39 = 8, 40–49 = 25, 50–59 = 41, 60–69 = 58, 70–79 = 75, 80–89 = 91, ≥ 90 = 100 · FC \< 50 = 0, 50–69 = 3, 70–89 = 9, 90–109 = 15, 110–149 = 24, 150–199 = 38, ≥ 200 = 46 · PAS \< 80 = 58, 80–99 = 53, 100–119 = 43, 120–139 = 34, 140–159 = 24, 160–199 = 10, ≥ 200 = 0 · creatinina (mg/dL) \< 0,4 = 1, 0,4–0,79 = 4, 0,8–1,19 = 7, 1,2–1,59 = 10, 1,6–1,99 = 13, 2–3,99 = 21, ≥ 4 = 28 · Killip I = 0, II = 20, III = 39, IV = 59 · parada cardíaca = 39 · desviación ST = 28 · marcadores elevados = 14.

La probabilidad de muerte se lee en el nomograma (interpolada entre los puntos tabulados).

## Límites y población

El GRACE de 2003 estima la muerte durante la hospitalización en el espectro del síndrome coronario agudo. La versión nomográfica original y la interpolación local no son el modelo GRACE 2.0. Las decisiones sobre estrategia invasiva, otros horizontes temporales o tasas de riesgo requieren la guía y la edición correspondientes.

## Referencias

- [Granger CB et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events. Arch Intern Med, 2003.](https://doi.org/10.1001/archinte.163.19.2345)

- [Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J, 2023.](https://doi.org/10.1093/eurheartj/ehad191)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
