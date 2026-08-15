const fs = require('fs');
const src = fs.readFileSync('app/data.js','utf8');
const { BLOCKS, LIFTS, TRAINING, SCHEDULE, PHASES, REINTRO } =
  new Function(src + ';return {BLOCKS,LIFTS,TRAINING,SCHEDULE,PHASES,REINTRO};')();

const START = process.argv[2] || '2026-08-16';
const dec  = s => String(s).replace(/&amp;/g,'&');
const p2   = n => String(n).padStart(2,'0');
const st   = d => d.getFullYear()+p2(d.getMonth()+1)+p2(d.getDate())+'T'+p2(d.getHours())+p2(d.getMinutes())+'00';
const at   = (b,t,add=0) => { const [h,m]=t.split(':').map(Number); const d=new Date(b); d.setHours(h,m+add,0,0); return d; };
const esc  = s => String(s).replace(/[\;,]/g, c=>'\\'+c).replace(/\n/g,'\\n');
const fold = l => { if (l.length<=74) return l; let o=l.slice(0,74), r=l.slice(74);
  while (r.length>73){ o+='\r\n '+r.slice(0,73); r=r.slice(73);} return o+'\r\n '+r; };

const L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Eight Week Kitchen//EN','CALSCALE:GREGORIAN',
         'METHOD:PUBLISH','X-WR-CALNAME:Eight Week Kitchen'];
const NOW = new Date(2026,7,15,12,0,0);
let uid=0, n=0;
function ev(s,e,title,desc,alarm,rrule){
  uid++; n++;
  L.push('BEGIN:VEVENT','UID:8wk-'+uid+'-'+st(s)+'@eightweekkitchen',
         'DTSTAMP:'+st(NOW)+'Z','DTSTART:'+st(s),'DTEND:'+st(e));
  if (rrule) L.push(rrule);
  L.push(fold('SUMMARY:'+esc(title)));
  if (desc) L.push(fold('DESCRIPTION:'+esc(desc)));
  if (alarm!=null) L.push('BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:'+esc(title),'TRIGGER:-PT'+alarm+'M','END:VALARM');
  L.push('END:VEVENT');
}
function challengeDay(week,dow){
  const ph = PHASES[week-1];
  if (!ph.ch || dow<1 || dow>3) return null;
  return { key:ph.ch, def:REINTRO[ph.ch], dose:REINTRO[ph.ch].d[dow-1], n:dow };
}

const [sy,sm,sd]=START.split('-').map(Number);
const start=new Date(sy,sm-1,sd);

for (let i=0;i<56;i++){
  const d=new Date(start); d.setDate(d.getDate()+i);
  const week=Math.floor(i/7)+1, dow=i%7;
  const blk=BLOCKS[Math.min(3,Math.floor(Math.floor(i/7)/2))];
  const tr=TRAINING[week-1], td=tr.days[dow];

  if (td.ty==='prep'){
    ev(at(d,'07:00'),at(d,'07:00',5),'Weigh in','Same morning, same conditions, before breakfast.',0);
    ev(at(d,SCHEDULE.shop),at(d,SCHEDULE.shop,45),'Shop · block '+blk.id+' list',
       'Two weeks of food in one trip. Full list is in the app.',30);
    ev(at(d,SCHEDULE.prep),at(d,SCHEDULE.prep,110),'Meal prep · '+blk.name,
       blk.prep.map(dec).join('\n'),15);
  } else if (td.ty!=='rest'){
    const slot=(td.ty==='walk'||td.ty==='intervals')?'07:30':SCHEDULE.workout;
    const mins=td.ty==='strength'?40:45;
    let desc=td.d;
    if (td.k) desc+='\n\n'+LIFTS[td.k].ex.map(e=>'• '+e.n+' — '+e.c).join('\n')+'\n\n'+tr.load;
    ev(at(d,slot),at(d,slot,mins),'Week '+week+' · '+td.t,desc,20);
  }

  const ch=challengeDay(week,dow);
  if (ch) ev(at(d,SCHEDULE.breakfast),at(d,SCHEDULE.breakfast,20),
    'Challenge '+ch.n+'/3 · '+dec(ch.def.n), ch.dose+'\n\nEverything else stays the same as last week.', 10);
}

// one repeating nightly reminder rather than 56 separate entries
ev(at(start,'21:00'),at(start,'21:00',5),'Score bloating and gas',
   'Open the app and log tonight. The pattern across a week is the point, not any single day.',
   0,'RRULE:FREQ=DAILY;COUNT=56');

L.push('END:VCALENDAR');
fs.writeFileSync('eight-week-kitchen.ics', L.join('\r\n')+'\r\n');
console.log('wrote eight-week-kitchen.ics —', n, 'entries ('+(n-1)+' one-off + 1 daily recurring),',
            fs.statSync('eight-week-kitchen.ics').size, 'bytes');
