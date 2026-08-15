const fs=require('fs'), zlib=require('zlib');
function crc32(buf){let c,t=[];for(let n=0;n<256;n++){c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}
  let r=0xFFFFFFFF;for(const b of buf)r=t[(r^b)&0xFF]^(r>>>8);return (r^0xFFFFFFFF)>>>0}
function chunk(type,data){const len=Buffer.alloc(4);len.writeUInt32BE(data.length);
  const td=Buffer.concat([Buffer.from(type,'ascii'),data]);const crc=Buffer.alloc(4);crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len,td,crc])}
function png(size,draw){
  const raw=Buffer.alloc(size*(size*4+1));
  for(let y=0;y<size;y++){raw[y*(size*4+1)]=0;
    for(let x=0;x<size;x++){const[r,g,b,a]=draw(x,y,size);const o=y*(size*4+1)+1+x*4;
      raw[o]=r;raw[o+1]=g;raw[o+2]=b;raw[o+3]=a}}
  const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(size,0);ihdr.writeUInt32BE(size,4);
  ihdr[8]=8;ihdr[9]=6;ihdr[10]=0;ihdr[11]=0;ihdr[12]=0;
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),
    chunk('IHDR',ihdr),chunk('IDAT',zlib.deflateSync(raw,{level:9})),chunk('IEND',Buffer.alloc(0))])}
// dark green ground, pale ring (a plate), warm dot off-centre
const BG=[26,42,30],RING=[134,197,150],DOT=[217,174,78];
function draw(x,y,s){
  const cx=s/2,cy=s/2,d=Math.hypot(x-cx,y-cy);
  const rOut=s*0.34,rIn=s*0.25;
  const dd=Math.hypot(x-s*0.5,y-s*0.5);
  if(d<=rOut&&d>=rIn) return [...RING,255];
  if(dd<=s*0.085) return [...DOT,255];
  return [...BG,255];
}
for(const s of [192,512]) fs.writeFileSync(`docs/icon-${s}.png`,png(s,draw));
// maskable needs 20% safe padding — shrink the art
function drawMask(x,y,s){
  const cx=s/2,cy=s/2,d=Math.hypot(x-cx,y-cy);
  if(d<=s*0.27&&d>=s*0.198) return [...RING,255];
  if(d<=s*0.067) return [...DOT,255];
  return [...BG,255];
}
fs.writeFileSync('docs/icon-maskable-512.png',png(512,drawMask));
console.log('icons written:',fs.readdirSync('docs').filter(f=>f.endsWith('.png')).join(', '));
