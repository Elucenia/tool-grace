<!-- ELUCENIA technical documentation · grace · de · no clinical/professional/rights approval -->

# GRACE-Score (Krankenhaussterblichkeit)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/grace)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`idade`

Jahre · Bereich: 18–110

### Herzfrequenz

`fc`

bpm · Bereich: 20–250

### Systolischer Blutdruck

`pas`

mmHg · Bereich: 40–300

### Kreatinin

`cr`

mg/dL · Bereich: 0,1–20

### Killip-Klasse

`killip`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Herzstillstand bei Aufnahme

`pcr`

### ST-Streckenabweichung

`st`

### Erhöhte Nekrosemarker (Troponin/CK-MB)

`enz`

## Fassung der Methode

GRACE/Granger 2003: Krankenhaus-Nomogramm, lokale Interpolation; kein GRACE 2.0

## Dokumentierte Formel

Nomogrammpunkte (Granger 2003): Alter \< 30 = 0, 30–39 = 8, 40–49 = 25, 50–59 = 41, 60–69 = 58, 70–79 = 75, 80–89 = 91, ≥ 90 = 100 · Herzfrequenz \< 50 = 0, 50–69 = 3, 70–89 = 9, 90–109 = 15, 110–149 = 24, 150–199 = 38, ≥ 200 = 46 · systolischer Blutdruck \< 80 = 58, 80–99 = 53, 100–119 = 43, 120–139 = 34, 140–159 = 24, 160–199 = 10, ≥ 200 = 0 · Kreatinin (mg/dL) \< 0,4 = 1, 0,4–0,79 = 4, 0,8–1,19 = 7, 1,2–1,59 = 10, 1,6–1,99 = 13, 2–3,99 = 21, ≥ 4 = 28 · Killip I = 0, II = 20, III = 39, IV = 59 · Herzstillstand = 39 · ST-Abweichung = 28 · erhöhte Marker = 14.

Die Sterbewahrscheinlichkeit wird aus dem Nomogramm abgelesen (zwischen den tabellierten Punkten interpoliert).

## Grenzen und Population

GRACE von 2003 schätzt den Tod während des Krankenhausaufenthalts im Spektrum des akuten Koronarsyndroms. Die nomografische Originalversion und lokale Interpolation sind nicht das Modell GRACE 2.0. Entscheidungen zur invasiven Strategie, anderen Zeithorizonten oder Risikoraten erfordern die entsprechende Leitlinie und Ausgabe.

## Referenzen

- [Granger CB et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events. Arch Intern Med, 2003.](https://doi.org/10.1001/archinte.163.19.2345)

- [Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J, 2023.](https://doi.org/10.1093/eurheartj/ehad191)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
