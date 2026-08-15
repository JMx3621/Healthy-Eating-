const fs = require('fs');
const src = fs.readFileSync('app/data.js','utf8');
const ctx = {};
new Function(src + '\n;return {RECIPES,SNACKS,BLOCKS,LIFTS,TRAINING,SCHEDULE};').call(ctx);
const {RECIPES,BLOCKS,LIFTS,TRAINING,SCHEDULE} =
  new Function(src + '\n;return {RECIPES,SNACKS,BLOCKS,LIFTS,TRAINING,SCHEDULE};')();

const START = process.argv[2] || '2026-08-16';
const dec = s => String(s).replace(/&amp;/g,'&');
const p2 = n => String(n).padStart(2,'0');
const stamp = d => d.getFullYear()+p2(d.getMonth()+1)+p2(d.getDate())+'T'+p2(d.getHours())+p2(d.getMinutes())+'00';
const at = (base,t,add=0) => { const [h,m]=t.split(':').map(Number); const d=new Date(base); d.setHours(h,m+add,0,0); return d; };
const escT = s => String(s).replace(/[\;,]/g, c=>'\\'+c).replace(/\n/g,'\\n');
const fold = l => { if (l.length<=74) return l; let o=l.slice(0,74), r=l.slice(74);
  while (r.length>73){ o+='\r\n '+r.slice(0,73); r=r.slice(73);} return o+'\r\n '+r; };

const L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Eight Week Kitchen//EN','CALSCALE:GREGORIAN',
         'METHOD:PUBLISH','X-WR-CALNAME:Eight Week Kitchen'];
let uid=0, count=0;
const NOW = new Date(2026,7,15,12,0,0);
function ev(s,e,title,desc,alarm){
  uid++; count++;
  L.push('BEGIN:VEVENT', 'UID:8wk-'+uid+'-'+stamp(s)+'@eightweekkitchen',
         'DTSTAMP:'+stamp(NOW)+'Z','DTSTART:'+stamp(s),'DTEND:'+stamp(e),
         fold('SUMMARY:'+escT(title)));
  if (desc) L.push(fold('DESCRIPTION:'+escT(desc)));
  if (alarm!=null) L.push('BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:'+escT(title),'TRIGGER:-PT'+alarm+'M','END:VALARM');
  L.push('END:VEVENT');
}
const [sy,sm,sd]=START.split('-').map(Number);
const start=new Date(sy,sm-1,sd);
for (let i=0;i<56;i++){
  const d=new Date(start); d.setDate(d.getDate()+i);
  const week=Math.floor(i/7)+1, dow=i%7, blk=BLOCKS[Math.min(3,Math.floor(Math.floor(i/7)/2))];
  const day=blk.days[dow], tr=TRAINING[week-1], td=tr.days[dow];
  const M=(slot,label,len,alarm)=>{ const r=RECIPES[day[slot]];
    ev(at(d,SCHEDULE[label==='Breakfast'?'breakfast':label==='Lunch'?'lunch':'dinner']),
       at(d,SCHEDULE[label==='Breakfast'?'breakfast':label==='Lunch'?'lunch':'dinner'],len),
       label+' · '+dec(r.n), r.k+' kcal, '+r.p+'g protein', alarm); };
  M('b','Breakfast',25,5); M('l','Lunch',35,10); M('dn','Dinner',40,15);
  if (td.ty==='prep'){
    ev(at(d,SCHEDULE.shop),at(d,SCHEDULE.shop,45),'Shop · block '+blk.id+' list','Two weeks of food in one trip.',30);
    ev(at(d,SCHEDULE.prep),at(d,SCHEDULE.prep,110),'Meal prep · '+blk.name,blk.prep.map(dec).join('\n'),15);
    ev(at(d,'07:00'),at(d,'07:00',5),'Weigh in','Same morning, same conditions, before breakfast.',0);
  } else if (td.ty!=='rest'){
    const slot=(td.ty==='walk'||td.ty==='intervals')?'07:30':SCHEDULE.workout;
    const mins=td.ty==='strength'?40:45;
    let desc=td.d;
    if (td.k) desc+='\n\n'+LIFTS[td.k].ex.map(e=>'• '+e.n+' — '+e.c).join('\n')+'\n\n'+tr.load;
    ev(at(d,slot),at(d,slot,mins),'Week '+week+' · '+td.t,desc,20);
  }
  ev(at(d,'10:30'),at(d,'10:30',5),'Water check',"Roughly a third of the day's water by now.",0);
  ev(at(d,'15:30'),at(d,'15:30',5),'Water check','Two thirds by now. Second snack if you are hungry.',0);
}
L.push('END:VCALENDAR');
fs.writeFileSync('eight-week-kitchen.ics', L.join('\r\n')+'\r\n');
console.log('wrote eight-week-kitchen.ics —', count, 'events,', fs.statSync('eight-week-kitchen.ics').size, 'bytes');
