<!-- ELUCENIA technical documentation · grace · fr · no clinical/professional/rights approval -->

# Score GRACE (mortalité hospitalière)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/grace)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`idade`

ans · intervalle: 18–110

### Fréquence cardiaque

`fc`

bpm · intervalle: 20–250

### Pression artérielle systolique

`pas`

mmHg · intervalle: 40–300

### Créatinine

`cr`

mg/dL · intervalle: 0,1–20

### Classe de Killip

`killip`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Arrêt cardiaque à l’admission

`pcr`

### Déviation du segment ST

`st`

### Marqueurs de nécrose élevés (troponine/CK-MB)

`enz`

## Édition de la méthode

GRACE/Granger 2003 : nomogramme hospitalier, interpolation locale ; pas GRACE 2.0

## Formule documentée

Points du nomogramme (Granger 2003): âge \< 30 = 0, 30–39 = 8, 40–49 = 25, 50–59 = 41, 60–69 = 58, 70–79 = 75, 80–89 = 91, ≥ 90 = 100 · FC \< 50 = 0, 50–69 = 3, 70–89 = 9, 90–109 = 15, 110–149 = 24, 150–199 = 38, ≥ 200 = 46 · PAS \< 80 = 58, 80–99 = 53, 100–119 = 43, 120–139 = 34, 140–159 = 24, 160–199 = 10, ≥ 200 = 0 · créatinine (mg/dL) \< 0,4 = 1, 0,4–0,79 = 4, 0,8–1,19 = 7, 1,2–1,59 = 10, 1,6–1,99 = 13, 2–3,99 = 21, ≥ 4 = 28 · Killip I = 0, II = 20, III = 39, IV = 59 · arrêt cardiaque = 39 · déviation ST = 28 · marqueurs élevés = 14.

La probabilité de décès est lue sur le nomogramme (interpolée entre les points tabulés).

## Limites et population

Le GRACE de 2003 estime le décès pendant l’hospitalisation dans le spectre du syndrome coronarien aigu. La version nomographique originale et l’interpolation locale ne sont pas le modèle GRACE 2.0. Les décisions sur une stratégie invasive, d’autres horizons temporels ou des taux de risque exigent la recommandation et l’édition correspondantes.

## Références

- [Granger CB et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events. Arch Intern Med, 2003.](https://doi.org/10.1001/archinte.163.19.2345)

- [Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J, 2023.](https://doi.org/10.1093/eurheartj/ehad191)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
