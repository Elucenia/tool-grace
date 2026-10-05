<!-- ELUCENIA technical documentation · grace · it · no clinical/professional/rights approval -->

# Punteggio GRACE (mortalità ospedaliera)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/grace)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`idade`

anni · intervallo: 18–110

### Frequenza cardiaca

`fc`

bpm · intervallo: 20–250

### Pressione arteriosa sistolica

`pas`

mmHg · intervallo: 40–300

### Creatinina

`cr`

mg/dL · intervallo: 0,1–20

### Classe di Killip

`killip`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Arresto cardiaco al ricovero

`pcr`

### Deviazione del segmento ST

`st`

### Marcatori di necrosi elevati (troponina/CK-MB)

`enz`

## Edizione del metodo

GRACE/Granger 2003: nomogramma ospedaliero, interpolazione locale; non GRACE 2.0

## Formula documentata

Punti del nomogramma (Granger 2003): età \< 30 = 0, 30–39 = 8, 40–49 = 25, 50–59 = 41, 60–69 = 58, 70–79 = 75, 80–89 = 91, ≥ 90 = 100 · FC \< 50 = 0, 50–69 = 3, 70–89 = 9, 90–109 = 15, 110–149 = 24, 150–199 = 38, ≥ 200 = 46 · PAS \< 80 = 58, 80–99 = 53, 100–119 = 43, 120–139 = 34, 140–159 = 24, 160–199 = 10, ≥ 200 = 0 · creatinina (mg/dL) \< 0,4 = 1, 0,4–0,79 = 4, 0,8–1,19 = 7, 1,2–1,59 = 10, 1,6–1,99 = 13, 2–3,99 = 21, ≥ 4 = 28 · Killip I = 0, II = 20, III = 39, IV = 59 · arresto cardiaco = 39 · deviazione ST = 28 · marcatori elevati = 14.

La probabilità di morte si legge sul nomogramma (interpolata tra i punti tabulati).

## Limiti e popolazione

Il GRACE del 2003 stima la morte durante il ricovero nello spettro della sindrome coronarica acuta. La versione nomografica originale e l’interpolazione locale non sono il modello GRACE 2.0. Le decisioni sulla strategia invasiva, altri orizzonti temporali o tassi di rischio richiedono la linea guida e l’edizione corrispondenti.

## Riferimenti

- [Granger CB et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events. Arch Intern Med, 2003.](https://doi.org/10.1001/archinte.163.19.2345)

- [Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J, 2023.](https://doi.org/10.1093/eurheartj/ehad191)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
