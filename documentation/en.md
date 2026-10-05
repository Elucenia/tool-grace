<!-- ELUCENIA technical documentation · grace · en · no clinical/professional/rights approval -->

# GRACE score (in-hospital mortality)

[conditions, sources and permissions](https://elucenia.org/en/tools/grace)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`idade`

years · range: 18–110

### Heart rate

`fc`

bpm · range: 20–250

### Systolic blood pressure

`pas`

mmHg · range: 40–300

### Creatinine

`cr`

mg/dL · range: 0.1–20

### Killip class

`killip`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Cardiac arrest at admission

`pcr`

### ST-segment deviation

`st`

### Elevated necrosis markers (troponin/CK-MB)

`enz`

## Method edition

GRACE/Granger 2003: in-hospital nomogram, local interpolation; not GRACE 2.0

## Documented formula

Nomogram points (Granger 2003): age \< 30 = 0, 30–39 = 8, 40–49 = 25, 50–59 = 41, 60–69 = 58, 70–79 = 75, 80–89 = 91, ≥ 90 = 100 · HR \< 50 = 0, 50–69 = 3, 70–89 = 9, 90–109 = 15, 110–149 = 24, 150–199 = 38, ≥ 200 = 46 · SBP \< 80 = 58, 80–99 = 53, 100–119 = 43, 120–139 = 34, 140–159 = 24, 160–199 = 10, ≥ 200 = 0 · creatinine (mg/dL) \< 0.4 = 1, 0.4–0.79 = 4, 0.8–1.19 = 7, 1.2–1.59 = 10, 1.6–1.99 = 13, 2–3.99 = 21, ≥ 4 = 28 · Killip I = 0, II = 20, III = 39, IV = 59 · cardiac arrest = 39 · ST deviation = 28 · elevated markers = 14.

The probability of death is read from the nomogram (interpolated between the tabulated points).

## Limits and population

The 2003 GRACE estimates death during hospitalization across the spectrum of acute coronary syndrome. The original nomographic version and local interpolation are not the GRACE 2.0 model. Decisions on invasive strategy, other time horizons or risk rates require the corresponding guideline and edition.

## References

- [Granger CB et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events. Arch Intern Med, 2003.](https://doi.org/10.1001/archinte.163.19.2345)

- [Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J, 2023.](https://doi.org/10.1093/eurheartj/ehad191)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
