/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"grace","title":"Escore GRACE (mortalidade hospitalar)","fields":[["idade","Idade","num",{"min":18,"max":110,"unit":"anos","ph":"65"}],["fc","Frequência cardíaca","num",{"min":20,"max":250,"unit":"bpm","ph":"80"}],["pas","PA sistólica","num",{"min":40,"max":300,"unit":"mmHg","ph":"130"}],["cr","Creatinina","num",{"min":0.1,"max":20,"step":0.01,"unit":"mg/dL","ph":"1,0"}],["killip","Classe de Killip","radio",{"opts":{"1":"I","2":"II","3":"III","4":"IV"}}],["pcr","Parada cardíaca na admissão","chk",[]],["st","Desvio do segmento ST","chk",[]],["enz","Marcadores de necrose elevados (troponina/CK-MB)","chk",[]]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var r=e.band;
var i=e.yes;
var n=function(a,e){return o(a,null==e?1:e)+"%"};
a.def("grace",function(a){var e,o,t=r(+a.idade,[[30,0],[40,8],[50,25],[60,41],[70,58],[80,75],[90,91],[1/0,100]])+r(+a.fc,[[50,0],[70,3],[90,9],[110,15],[150,24],[200,38],[1/0,46]])+r(+a.pas,[[80,58],[100,53],[120,43],[140,34],[160,24],[200,10],[1/0,0]])+r(+a.cr,[[.4,1],[.8,4],[1.2,7],[1.6,10],[2,13],[4,21],[1/0,28]])+[0,20,39,59][(+a.killip||1)-1]+(i(a.pcr)?39:0)+(i(a.st)?28:0)+(i(a.enz)?14:0),s=[.2,.3,.4,.6,.8,1.1,1.6,2.1,2.9,3.9,5.4,7.3,9.8,13,18,23,29,36,44,52];if(t<=60)e=.2,o="≤ 0,2%";else if(t>=250)e=52,o="≥ 52%";else{var d=Math.floor((t-60)/10);o="≈ "+n(e=s[d]+(t-60-10*d)/10*(s[d+1]-s[d]))}var l=t<=108?["low","Baixo risco (≤ 108): mortalidade hospitalar &lt; 1%"]:t<=140?["mid","Risco intermediário (109 a 140): mortalidade hospitalar de 1 a 3%"]:["high","Alto risco (&gt; 140): mortalidade hospitalar &gt; 3%"];return{main:[String(t),"pontos"],label:"Escore GRACE (hospitalar)",level:l[0],verdict:l[1],rows:[["Probabilidade de óbito hospitalar (nomograma)",o],["Conduta na SCA sem supra de ST (ESC 2023)",t>140?"Estratégia invasiva precoce (&lt; 24 h)":"Estratégia invasiva na internação, conforme demais critérios"]],note:"As faixas de risco (≤ 108, 109 a 140, &gt; 140) foram definidas para SCA sem supradesnivelamento de ST.",raw:{score:t,prob:e}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
