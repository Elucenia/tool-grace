<!-- ELUCENIA technical documentation · grace · pt-BR · no clinical/professional/rights approval -->

# Escore GRACE (mortalidade hospitalar)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/grace)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`idade`

anos · intervalo: 18–110

### Frequência cardíaca

`fc`

bpm · intervalo: 20–250

### PA sistólica

`pas`

mmHg · intervalo: 40–300

### Creatinina

`cr`

mg/dL · intervalo: 0,1–20

### Classe de Killip

`killip`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### Parada cardíaca na admissão

`pcr`

### Desvio do segmento ST

`st`

### Marcadores de necrose elevados (troponina/CK-MB)

`enz`

## Edição do método

GRACE/Granger 2003:nomograma hospitalar, interpolação local; sem GRACE 2.0

## Fórmula documentada

Pontos do nomograma (Granger 2003): idade \< 30 = 0, 30–39 = 8, 40–49 = 25, 50–59 = 41, 60–69 = 58, 70–79 = 75, 80–89 = 91, ≥ 90 = 100 · FC \< 50 = 0, 50–69 = 3, 70–89 = 9, 90–109 = 15, 110–149 = 24, 150–199 = 38, ≥ 200 = 46 · PAS \< 80 = 58, 80–99 = 53, 100–119 = 43, 120–139 = 34, 140–159 = 24, 160–199 = 10, ≥ 200 = 0 · creatinina (mg/dL) \< 0,4 = 1, 0,4–0,79 = 4, 0,8–1,19 = 7, 1,2–1,59 = 10, 1,6–1,99 = 13, 2–3,99 = 21, ≥ 4 = 28 · Killip I = 0, II = 20, III = 39, IV = 59 · parada cardíaca = 39 · desvio de ST = 28 · marcadores elevados = 14.

A probabilidade de óbito é lida no nomograma (interpolada entre os pontos tabelados).

## Limites e população

O GRACE de 2003 estima morte durante a internação no espectro da síndrome coronariana aguda. A versão nomográfica original e a interpolação local não são o modelo GRACE 2.0. Decisões sobre estratégia invasiva, outros horizontes temporais ou taxas de risco exigem a diretriz e a edição correspondentes.

## Referências

- [Granger CB et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events. Arch Intern Med, 2003.](https://doi.org/10.1001/archinte.163.19.2345)

- [Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J, 2023.](https://doi.org/10.1093/eurheartj/ehad191)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
