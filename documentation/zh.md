<!-- ELUCENIA technical documentation · grace · zh · no clinical/professional/rights approval -->

# GRACE 评分（院内死亡率）

[条件、来源与许可](https://elucenia.org/zh/tools/grace)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 年龄

`idade`

年 · 范围: 18–110

### 心率

`fc`

次心搏/分钟 · 范围: 20–250

### 收缩压

`pas`

mmHg · 范围: 40–300

### 肌酐

`cr`

mg/dL · 范围: 0.1–20

### Killip 分级

`killip`

- `1` — I
- `2` — II
- `3` — III
- `4` — IV

### 入院时心脏骤停

`pcr`

### ST 段偏移

`st`

### 坏死标志物升高（肌钙蛋白/CK-MB）

`enz`

## 方法版本

GRACE/Granger 2003：院内列线图，本地插值；非GRACE 2.0

## 已记录的公式

列线图分值 (Granger 2003): 年龄 \< 30 = 0, 30–39 = 8, 40–49 = 25, 50–59 = 41, 60–69 = 58, 70–79 = 75, 80–89 = 91, ≥ 90 = 100 · 心率 \< 50 = 0, 50–69 = 3, 70–89 = 9, 90–109 = 15, 110–149 = 24, 150–199 = 38, ≥ 200 = 46 · 收缩压 \< 80 = 58, 80–99 = 53, 100–119 = 43, 120–139 = 34, 140–159 = 24, 160–199 = 10, ≥ 200 = 0 · 肌酐 (mg/dL) \< 0.4 = 1, 0.4–0.79 = 4, 0.8–1.19 = 7, 1.2–1.59 = 10, 1.6–1.99 = 13, 2–3.99 = 21, ≥ 4 = 28 · Killip I = 0, II = 20, III = 39, IV = 59 · 心脏骤停 = 39 · ST偏移 = 28 · 标志物升高 = 14.

死亡概率从列线图读取（在表列分值之间插值）。

## 限制与适用人群

2003年的GRACE估计急性冠脉综合征各类型患者的住院期间死亡风险。原始列线图版本及本地插值并非GRACE 2.0模型。关于侵入性策略、其他时间范围或风险率的决定需要对应指南及版本。

## 参考文献

- [Granger CB et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events. Arch Intern Med, 2003.](https://doi.org/10.1001/archinte.163.19.2345)

- [Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J, 2023.](https://doi.org/10.1093/eurheartj/ehad191)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
