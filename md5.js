md5 = {
 cmn: function(q, a, b, x, s, t) {
  a += q + x + t;
  return ((a << s | a >>> 32 - s) + b) & 4294967295;
 },
 hash: function(s) {
  var c16 = "0123456789abcdef",
        r = md5.md51(s),
      res = "";

  for(var i = 0;i < 4;++i) {
   res += c16[r[i] >> 4 & 15];
   res += c16[r[i] & 15];
   res += c16[r[i] >> 12 & 15];
   res += c16[r[i] >> 8 & 15];
   res += c16[r[i] >> 20 & 15];
   res += c16[r[i] >> 16 & 15];
   res += c16[r[i] >> 28 & 15];
   res += c16[r[i] >> 24 & 15];
  }

  return res;
 },
 md5cycle: function(k) {
  var r = md5.md5_rounds(1732584193, -271733879, -1732584194, 271733878, k);

  return [
   (r[0] + 1732584193) & 4294967295,
   (r[1] - 271733879) & 4294967295,
   (r[2] - 1732584194) & 4294967295,
   (r[3] + 271733878) & 4294967295
  ];
 },
 md5cycleAdd: function(x, k) {
  var r = md5.md5_rounds(x[0], x[1], x[2], x[3], k);

  return [
   (r[0] + x[0]) & 4294967295,
   (r[1] + x[1]) & 4294967295,
   (r[2] + x[2]) & 4294967295,
   (r[3] + x[3]) & 4294967295
  ];
 },
 md5_rounds: function(a, b, c, d, k) {
  a = md5.cmn((b & c) | (~b & d), a, b, k[0], 7, -680876936);
  d = md5.cmn((a & b) | (~a & c), d, a, k[1], 12, -389564586);
  c = md5.cmn((d & a) | (~d & b), c, d, k[2], 17, 606105819);
  b = md5.cmn((c & d) | (~c & a), b, c, k[3], 22, -1044525330);
  a = md5.cmn((b & c) | (~b & d), a, b, k[4], 7, -176418897);
  d = md5.cmn((a & b) | (~a & c), d, a, k[5], 12, 1200080426);
  c = md5.cmn((d & a) | (~d & b), c, d, k[6], 17, -1473231341);
  b = md5.cmn((c & d) | (~c & a), b, c, k[7], 22, -45705983);
  a = md5.cmn((b & c) | (~b & d), a, b, k[8], 7, 1770035416);
  d = md5.cmn((a & b) | (~a & c), d, a, k[9], 12, -1958414417);
  c = md5.cmn((d & a) | (~d & b), c, d, k[10], 17, -42063);
  b = md5.cmn((c & d) | (~c & a), b, c, k[11], 22, -1990404162);
  a = md5.cmn((b & c) | (~b & d), a, b, k[12], 7, 1804603682);
  d = md5.cmn((a & b) | (~a & c), d, a, k[13], 12, -40341101);
  c = md5.cmn((d & a) | (~d & b), c, d, k[14], 17, -1502002290);
  b = md5.cmn((c & d) | (~c & a), b, c, k[15], 22, 1236535329);

  a = md5.cmn((b & d) | (c & ~d), a, b, k[1], 5, -165796510);
  d = md5.cmn((a & c) | (b & ~c), d, a, k[6], 9, -1069501632);
  c = md5.cmn((d & b) | (a & ~b), c, d, k[11], 14, 643717713);
  b = md5.cmn((c & a) | (d & ~a), b, c, k[0], 20, -373897302);
  a = md5.cmn((b & d) | (c & ~d), a, b, k[5], 5, -701558691);
  d = md5.cmn((a & c) | (b & ~c), d, a, k[10], 9, 38016083);
  c = md5.cmn((d & b) | (a & ~b), c, d, k[15], 14, -660478335);
  b = md5.cmn((c & a) | (d & ~a), b, c, k[4], 20, -405537848);
  a = md5.cmn((b & d) | (c & ~d), a, b, k[9], 5, 568446438);
  d = md5.cmn((a & c) | (b & ~c), d, a, k[14], 9, -1019803690);
  c = md5.cmn((d & b) | (a & ~b), c, d, k[3], 14, -187363961);
  b = md5.cmn((c & a) | (d & ~a), b, c, k[8], 20, 1163531501);
  a = md5.cmn((b & d) | (c & ~d), a, b, k[13], 5, -1444681467);
  d = md5.cmn((a & c) | (b & ~c), d, a, k[2], 9, -51403784);
  c = md5.cmn((d & b) | (a & ~b), c, d, k[7], 14, 1735328473);
  b = md5.cmn((c & a) | (d & ~a), b, c, k[12], 20, -1926607734);

  a = md5.cmn(b ^ c ^ d, a, b, k[5], 4, -378558);
  d = md5.cmn(a ^ b ^ c, d, a, k[8], 11, -2022574463);
  c = md5.cmn(d ^ a ^ b, c, d, k[11], 16, 1839030562);
  b = md5.cmn(c ^ d ^ a, b, c, k[14], 23, -35309556);
  a = md5.cmn(b ^ c ^ d, a, b, k[1], 4, -1530992060);
  d = md5.cmn(a ^ b ^ c, d, a, k[4], 11, 1272893353);
  c = md5.cmn(d ^ a ^ b, c, d, k[7], 16, -155497632);
  b = md5.cmn(c ^ d ^ a, b, c, k[10], 23, -1094730640);
  a = md5.cmn(b ^ c ^ d, a, b, k[13], 4, 681279174);
  d = md5.cmn(a ^ b ^ c, d, a, k[0], 11, -358537222);
  c = md5.cmn(d ^ a ^ b, c, d, k[3], 16, -722521979);
  b = md5.cmn(c ^ d ^ a, b, c, k[6], 23, 76029189);
  a = md5.cmn(b ^ c ^ d, a, b, k[9], 4, -640364487);
  d = md5.cmn(a ^ b ^ c, d, a, k[12], 11, -421815835);
  c = md5.cmn(d ^ a ^ b, c, d, k[15], 16, 530742520);
  b = md5.cmn(c ^ d ^ a, b, c, k[2], 23, -995338651);

  a = md5.cmn(c ^ (b | ~d), a, b, k[0], 6, -198630844);
  d = md5.cmn(b ^ (a | ~c), d, a, k[7], 10, 1126891415);
  c = md5.cmn(a ^ (d | ~b), c, d, k[14], 15, -1416354905);
  b = md5.cmn(d ^ (c | ~a), b, c, k[5], 21, -57434055);
  a = md5.cmn(c ^ (b | ~d), a, b, k[12], 6, 1700485571);
  d = md5.cmn(b ^ (a | ~c), d, a, k[3], 10, -1894986606);
  c = md5.cmn(a ^ (d | ~b), c, d, k[10], 15, -1051523);
  b = md5.cmn(d ^ (c | ~a), b, c, k[1], 21, -2054922799);
  a = md5.cmn(c ^ (b | ~d), a, b, k[8], 6, 1873313359);
  d = md5.cmn(b ^ (a | ~c), d, a, k[15], 10, -30611744);
  c = md5.cmn(a ^ (d | ~b), c, d, k[6], 15, -1560198380);
  b = md5.cmn(d ^ (c | ~a), b, c, k[13], 21, 1309151649);
  a = md5.cmn(c ^ (b | ~d), a, b, k[4], 6, -145523070);
  d = md5.cmn(b ^ (a | ~c), d, a, k[11], 10, -1120210379);
  c = md5.cmn(a ^ (d | ~b), c, d, k[2], 15, 718787259);
  b = md5.cmn(d ^ (c | ~a), b, c, k[9], 21, -343485551);

  return [a, b, c, d];
 },
 md51: function(s) {
  var n = s.length,
   tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  state = 0;

  for(var i = 64;i <= n;i += 64) {
   if(i == 64) {
    state = md5.md5cycleAdd([1732584193, -271733879, -1732584194, 271733878], md5.md5blk(s.substring(i - 64, i)));
   }else{
    state = md5.md5cycleAdd(state, md5.md5blk(s.substring(i - 64, i)));
   }
  }

  if(i > 64) {
   s = s.substring(i - 64);
  }

  var sl = s.length;

  for(i = 0;i < sl;++i) {
   tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
  }
  tail[i >> 2] |= 128 << ((i % 4) << 3);

  if(i > 55) {
   state = md5.md5cycleAdd(state, tail);
   i = 16;
   while(i--)
    tail[i] = 0;
  }

  tail[14] = n * 8;

  if(state == 0) {
   return md5.md5cycle(tail);
  }else{
   return md5.md5cycleAdd(state, tail);
  }
 },
 md5blk: function(s) {
  var md5blks = [];
  for (var i = 0;i < 64;i += 4) {
   md5blks[i >> 2] = s.charCodeAt(i)
   + (s.charCodeAt(i+1) << 8)
   + (s.charCodeAt(i+2) << 16)
   + (s.charCodeAt(i+3) << 24);
  }
  return md5blks;
 }
};