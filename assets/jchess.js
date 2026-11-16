const JC_PIECES={"classic": {"name": "Klasyczne", "files": {"wp": "assets/pieces/classic/wp.png", "wn": "assets/pieces/classic/wn.png", "wb": "assets/pieces/classic/wb.png", "wr": "assets/pieces/classic/wr.png", "wq": "assets/pieces/classic/wq.png", "wk": "assets/pieces/classic/wk.png", "bp": "assets/pieces/classic/bp.png", "bn": "assets/pieces/classic/bn.png", "bb": "assets/pieces/classic/bb.png", "br": "assets/pieces/classic/br.png", "bq": "assets/pieces/classic/bq.png", "bk": "assets/pieces/classic/bk.png"}}, "wood": {"name": "Drewniane", "files": {"wp": "assets/pieces/wood/wp.png", "wn": "assets/pieces/wood/wn.png", "wb": "assets/pieces/wood/wb.png", "wr": "assets/pieces/wood/wr.png", "wq": "assets/pieces/wood/wq.png", "wk": "assets/pieces/wood/wk.png", "bp": "assets/pieces/wood/bp.png", "bn": "assets/pieces/wood/bn.png", "bb": "assets/pieces/wood/bb.png", "br": "assets/pieces/wood/br.png", "bq": "assets/pieces/wood/bq.png", "bk": "assets/pieces/wood/bk.png"}}, "gold": {"name": "Złoto i srebro", "files": {"wp": "assets/pieces/gold/wp.png", "wn": "assets/pieces/gold/wn.png", "wb": "assets/pieces/gold/wb.png", "wr": "assets/pieces/gold/wr.png", "wq": "assets/pieces/gold/wq.png", "wk": "assets/pieces/gold/wk.png", "bp": "assets/pieces/gold/bp.png", "bn": "assets/pieces/gold/bn.png", "bb": "assets/pieces/gold/bb.png", "br": "assets/pieces/gold/br.png", "bq": "assets/pieces/gold/bq.png", "bk": "assets/pieces/gold/bk.png"}}, "color": {"name": "Kolorowe", "files": {"wp": "assets/pieces/color/wp.png", "wn": "assets/pieces/color/wn.png", "wb": "assets/pieces/color/wb.png", "wr": "assets/pieces/color/wr.png", "wq": "assets/pieces/color/wq.png", "wk": "assets/pieces/color/wk.png", "bp": "assets/pieces/color/bp.png", "bn": "assets/pieces/color/bn.png", "bb": "assets/pieces/color/bb.png", "br": "assets/pieces/color/br.png", "bq": "assets/pieces/color/bq.png", "bk": "assets/pieces/color/bk.png"}}, "cburnett": {"name": "Cburnett", "files": {"wp": "assets/pieces/cburnett/wp.svg", "wn": "assets/pieces/cburnett/wn.svg", "wb": "assets/pieces/cburnett/wb.svg", "wr": "assets/pieces/cburnett/wr.svg", "wq": "assets/pieces/cburnett/wq.svg", "wk": "assets/pieces/cburnett/wk.svg", "bp": "assets/pieces/cburnett/bp.svg", "bn": "assets/pieces/cburnett/bn.svg", "bb": "assets/pieces/cburnett/bb.svg", "br": "assets/pieces/cburnett/br.svg", "bq": "assets/pieces/cburnett/bq.svg", "bk": "assets/pieces/cburnett/bk.svg"}}, "merida": {"name": "Merida", "files": {"wp": "assets/pieces/merida/wp.svg", "wn": "assets/pieces/merida/wn.svg", "wb": "assets/pieces/merida/wb.svg", "wr": "assets/pieces/merida/wr.svg", "wq": "assets/pieces/merida/wq.svg", "wk": "assets/pieces/merida/wk.svg", "bp": "assets/pieces/merida/bp.svg", "bn": "assets/pieces/merida/bn.svg", "bb": "assets/pieces/merida/bb.svg", "br": "assets/pieces/merida/br.svg", "bq": "assets/pieces/merida/bq.svg", "bk": "assets/pieces/merida/bk.svg"}}, "california": {"name": "California", "files": {"wp": "assets/pieces/california/wp.svg", "wn": "assets/pieces/california/wn.svg", "wb": "assets/pieces/california/wb.svg", "wr": "assets/pieces/california/wr.svg", "wq": "assets/pieces/california/wq.svg", "wk": "assets/pieces/california/wk.svg", "bp": "assets/pieces/california/bp.svg", "bn": "assets/pieces/california/bn.svg", "bb": "assets/pieces/california/bb.svg", "br": "assets/pieces/california/br.svg", "bq": "assets/pieces/california/bq.svg", "bk": "assets/pieces/california/bk.svg"}}, "maestro": {"name": "Maestro", "files": {"wp": "assets/pieces/maestro/wp.svg", "wn": "assets/pieces/maestro/wn.svg", "wb": "assets/pieces/maestro/wb.svg", "wr": "assets/pieces/maestro/wr.svg", "wq": "assets/pieces/maestro/wq.svg", "wk": "assets/pieces/maestro/wk.svg", "bp": "assets/pieces/maestro/bp.svg", "bn": "assets/pieces/maestro/bn.svg", "bb": "assets/pieces/maestro/bb.svg", "br": "assets/pieces/maestro/br.svg", "bq": "assets/pieces/maestro/bq.svg", "bk": "assets/pieces/maestro/bk.svg"}}, "cardinal": {"name": "Cardinal", "files": {"wp": "assets/pieces/cardinal/wp.svg", "wn": "assets/pieces/cardinal/wn.svg", "wb": "assets/pieces/cardinal/wb.svg", "wr": "assets/pieces/cardinal/wr.svg", "wq": "assets/pieces/cardinal/wq.svg", "wk": "assets/pieces/cardinal/wk.svg", "bp": "assets/pieces/cardinal/bp.svg", "bn": "assets/pieces/cardinal/bn.svg", "bb": "assets/pieces/cardinal/bb.svg", "br": "assets/pieces/cardinal/br.svg", "bq": "assets/pieces/cardinal/bq.svg", "bk": "assets/pieces/cardinal/bk.svg"}}, "staunty": {"name": "Staunty", "files": {"wp": "assets/pieces/staunty/wp.svg", "wn": "assets/pieces/staunty/wn.svg", "wb": "assets/pieces/staunty/wb.svg", "wr": "assets/pieces/staunty/wr.svg", "wq": "assets/pieces/staunty/wq.svg", "wk": "assets/pieces/staunty/wk.svg", "bp": "assets/pieces/staunty/bp.svg", "bn": "assets/pieces/staunty/bn.svg", "bb": "assets/pieces/staunty/bb.svg", "br": "assets/pieces/staunty/br.svg", "bq": "assets/pieces/staunty/bq.svg", "bk": "assets/pieces/staunty/bk.svg"}}, "tatiana": {"name": "Tatiana", "files": {"wp": "assets/pieces/tatiana/wp.svg", "wn": "assets/pieces/tatiana/wn.svg", "wb": "assets/pieces/tatiana/wb.svg", "wr": "assets/pieces/tatiana/wr.svg", "wq": "assets/pieces/tatiana/wq.svg", "wk": "assets/pieces/tatiana/wk.svg", "bp": "assets/pieces/tatiana/bp.svg", "bn": "assets/pieces/tatiana/bn.svg", "bb": "assets/pieces/tatiana/bb.svg", "br": "assets/pieces/tatiana/br.svg", "bq": "assets/pieces/tatiana/bq.svg", "bk": "assets/pieces/tatiana/bk.svg"}}, "fresca": {"name": "Fresca", "files": {"wp": "assets/pieces/fresca/wp.svg", "wn": "assets/pieces/fresca/wn.svg", "wb": "assets/pieces/fresca/wb.svg", "wr": "assets/pieces/fresca/wr.svg", "wq": "assets/pieces/fresca/wq.svg", "wk": "assets/pieces/fresca/wk.svg", "bp": "assets/pieces/fresca/bp.svg", "bn": "assets/pieces/fresca/bn.svg", "bb": "assets/pieces/fresca/bb.svg", "br": "assets/pieces/fresca/br.svg", "bq": "assets/pieces/fresca/bq.svg", "bk": "assets/pieces/fresca/bk.svg"}}, "gioco": {"name": "Gioco", "files": {"wp": "assets/pieces/gioco/wp.svg", "wn": "assets/pieces/gioco/wn.svg", "wb": "assets/pieces/gioco/wb.svg", "wr": "assets/pieces/gioco/wr.svg", "wq": "assets/pieces/gioco/wq.svg", "wk": "assets/pieces/gioco/wk.svg", "bp": "assets/pieces/gioco/bp.svg", "bn": "assets/pieces/gioco/bn.svg", "bb": "assets/pieces/gioco/bb.svg", "br": "assets/pieces/gioco/br.svg", "bq": "assets/pieces/gioco/bq.svg", "bk": "assets/pieces/gioco/bk.svg"}}, "governor": {"name": "Governor", "files": {"wp": "assets/pieces/governor/wp.svg", "wn": "assets/pieces/governor/wn.svg", "wb": "assets/pieces/governor/wb.svg", "wr": "assets/pieces/governor/wr.svg", "wq": "assets/pieces/governor/wq.svg", "wk": "assets/pieces/governor/wk.svg", "bp": "assets/pieces/governor/bp.svg", "bn": "assets/pieces/governor/bn.svg", "bb": "assets/pieces/governor/bb.svg", "br": "assets/pieces/governor/br.svg", "bq": "assets/pieces/governor/bq.svg", "bk": "assets/pieces/governor/bk.svg"}}, "dubrovny": {"name": "Dubrovny", "files": {"wp": "assets/pieces/dubrovny/wp.svg", "wn": "assets/pieces/dubrovny/wn.svg", "wb": "assets/pieces/dubrovny/wb.svg", "wr": "assets/pieces/dubrovny/wr.svg", "wq": "assets/pieces/dubrovny/wq.svg", "wk": "assets/pieces/dubrovny/wk.svg", "bp": "assets/pieces/dubrovny/bp.svg", "bn": "assets/pieces/dubrovny/bn.svg", "bb": "assets/pieces/dubrovny/bb.svg", "br": "assets/pieces/dubrovny/br.svg", "bq": "assets/pieces/dubrovny/bq.svg", "bk": "assets/pieces/dubrovny/bk.svg"}}, "kosal": {"name": "Kosal", "files": {"wp": "assets/pieces/kosal/wp.svg", "wn": "assets/pieces/kosal/wn.svg", "wb": "assets/pieces/kosal/wb.svg", "wr": "assets/pieces/kosal/wr.svg", "wq": "assets/pieces/kosal/wq.svg", "wk": "assets/pieces/kosal/wk.svg", "bp": "assets/pieces/kosal/bp.svg", "bn": "assets/pieces/kosal/bn.svg", "bb": "assets/pieces/kosal/bb.svg", "br": "assets/pieces/kosal/br.svg", "bq": "assets/pieces/kosal/bq.svg", "bk": "assets/pieces/kosal/bk.svg"}}, "chessnut": {"name": "Chessnut", "files": {"wp": "assets/pieces/chessnut/wp.svg", "wn": "assets/pieces/chessnut/wn.svg", "wb": "assets/pieces/chessnut/wb.svg", "wr": "assets/pieces/chessnut/wr.svg", "wq": "assets/pieces/chessnut/wq.svg", "wk": "assets/pieces/chessnut/wk.svg", "bp": "assets/pieces/chessnut/bp.svg", "bn": "assets/pieces/chessnut/bn.svg", "bb": "assets/pieces/chessnut/bb.svg", "br": "assets/pieces/chessnut/br.svg", "bq": "assets/pieces/chessnut/bq.svg", "bk": "assets/pieces/chessnut/bk.svg"}}, "horsey": {"name": "Horsey", "files": {"wp": "assets/pieces/horsey/wp.svg", "wn": "assets/pieces/horsey/wn.svg", "wb": "assets/pieces/horsey/wb.svg", "wr": "assets/pieces/horsey/wr.svg", "wq": "assets/pieces/horsey/wq.svg", "wk": "assets/pieces/horsey/wk.svg", "bp": "assets/pieces/horsey/bp.svg", "bn": "assets/pieces/horsey/bn.svg", "bb": "assets/pieces/horsey/bb.svg", "br": "assets/pieces/horsey/br.svg", "bq": "assets/pieces/horsey/bq.svg", "bk": "assets/pieces/horsey/bk.svg"}}};
// Jchess – zasady gry (port ChessGame.java z aplikacji na Androida).
// Pola: indeks = rząd*8 + kolumna, rząd 0 = pierwszy rząd. Figury: + białe, − czarne.
const EMPTY = 0, PAWN = 1, KNIGHT = 2, BISHOP = 3, ROOK = 4, QUEEN = 5, KING = 6;
const WHITE = 1, BLACK = -1;
const VALUE = [0, 1, 3, 3, 5, 9, 100];
const WK = 1, WQ = 2, BK = 4, BQ = 8;
const KNIGHT_D = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
const KING_D = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
const ROOK_D = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const BISHOP_D = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
const LETTERS = '  SGWHK'; // polska notacja

const onB = (f, r) => f >= 0 && f < 8 && r >= 0 && r < 8;
const sqName = s => String.fromCharCode(97 + (s & 7)) + String.fromCharCode(49 + (s >> 3));
const parseSq = t => {
  if (!t || t.length !== 2) return -1;
  const f = t.charCodeAt(0) - 97, r = t.charCodeAt(1) - 49;
  return onB(f, r) ? r * 8 + f : -1;
};
const mv = (from, to, promo = 0) => ({ from, to, promo });
const toUci = m => sqName(m.from) + sqName(m.to) + (m.promo ? '  nbrq'[m.promo] : '');
function fromUci(u) {
  if (!u || u.length < 4) return null;
  const f = parseSq(u.slice(0, 2)), t = parseSq(u.slice(2, 4));
  if (f < 0 || t < 0) return null;
  let p = 0;
  if (u.length >= 5) { p = '  nbrq'.indexOf(u[4].toLowerCase()); if (p < 2) return null; }
  return mv(f, t, p);
}
const sameMove = (a, b) => a && b && a.from === b.from && a.to === b.to && a.promo === b.promo;

class Chess {
  constructor() { this.reset(); }

  reset() {
    const back = [ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP, KNIGHT, ROOK];
    this.b = new Array(64).fill(0);
    for (let f = 0; f < 8; f++) {
      this.b[f] = back[f]; this.b[8 + f] = PAWN; this.b[48 + f] = -PAWN; this.b[56 + f] = -back[f];
    }
    this.side = WHITE; this.castling = WK | WQ | BK | BQ; this.ep = -1; this.half = 0;
    this.status = 'playing'; this.resigned = 0; this.flagColor = 0; this.lastMove = null;
    this.san = []; this.rep = new Map(); this.rep.set(this.key(), 1);
  }

  static replay(uci, count = Infinity) {
    const g = new Chess();
    for (let i = 0; i < uci.length && i < count; i++) g.move(fromUci(uci[i]));
    return g;
  }

  static sanLine(history, count, line, max = 99) {
    const g = Chess.replay(history, count), out = [];
    for (let i = 0; i < line.length && i < max; i++) {
      if (!g.move(fromUci(line[i]))) break;
      out.push(g.san[g.san.length - 1]);
    }
    return out;
  }

  isOver() { return this.status !== 'playing'; }
  winner() {
    if (this.status === 'checkmate') return -this.side;
    if (this.status === 'resigned') return -this.resigned;
    if (this.status === 'timeout') return -this.flagColor;
    return 0;
  }
  resign(c) { if (this.status === 'playing') { this.status = 'resigned'; this.resigned = c; } }
  agreeDraw() { if (this.status === 'playing') this.status = 'draw-agreed'; }
  flag(c) {
    if (this.status !== 'playing') return;
    this.flagColor = c;
    this.status = this.canMate(-c) ? 'timeout' : 'draw-timeout';
  }
  canMate(c) {
    let minors = 0, oppMore = false;
    for (const p of this.b) {
      if (!p) continue;
      const t = Math.abs(p);
      if (Math.sign(p) === c) {
        if (t === PAWN || t === ROOK || t === QUEEN) return true;
        if (t === KNIGHT || t === BISHOP) minors++;
      } else if (t !== KING) oppMore = true;
    }
    return minors >= 2 || (minors === 1 && oppMore);
  }

  kingSq(c) { return this.b.indexOf(KING * c); }
  inCheck(c = this.side) { const k = this.kingSq(c); return k >= 0 && this.attacked(k, -c); }

  attacked(sq, by) {
    const f = sq & 7, r = sq >> 3, pr = r - by, b = this.b;
    for (const df of [-1, 1]) if (onB(f + df, pr) && b[pr * 8 + f + df] === PAWN * by) return true;
    for (const [x, y] of KNIGHT_D) if (onB(f + x, r + y) && b[(r + y) * 8 + f + x] === KNIGHT * by) return true;
    for (const [x, y] of KING_D) if (onB(f + x, r + y) && b[(r + y) * 8 + f + x] === KING * by) return true;
    for (const [dirs, a, c] of [[ROOK_D, ROOK, QUEEN], [BISHOP_D, BISHOP, QUEEN]]) {
      for (const [x, y] of dirs) {
        let nf = f + x, nr = r + y;
        while (onB(nf, nr)) {
          const p = b[nr * 8 + nf];
          if (p) { if (p === a * by || p === c * by) return true; break; }
          nf += x; nr += y;
        }
      }
    }
    return false;
  }

  minAttacker(sq, by) {
    const f = sq & 7, r = sq >> 3, pr = r - by, b = this.b;
    for (const df of [-1, 1]) if (onB(f + df, pr) && b[pr * 8 + f + df] === PAWN * by) return 1;
    for (const [x, y] of KNIGHT_D) if (onB(f + x, r + y) && b[(r + y) * 8 + f + x] === KNIGHT * by) return 3;
    let best = 0;
    for (const [dirs, kind] of [[BISHOP_D, 'b'], [ROOK_D, 'r']]) {
      for (const [x, y] of dirs) {
        let nf = f + x, nr = r + y;
        while (onB(nf, nr)) {
          const p = b[nr * 8 + nf];
          if (p) {
            const t = Math.abs(p);
            const ok = kind === 'b' ? (t === BISHOP || t === QUEEN) : (t === ROOK || t === QUEEN);
            if (Math.sign(p) === by && ok && (!best || VALUE[t] < best)) best = VALUE[t];
            break;
          }
          nf += x; nr += y;
        }
      }
    }
    for (const [x, y] of KING_D) if (onB(f + x, r + y) && b[(r + y) * 8 + f + x] === KING * by && !best) best = 100;
    return best;
  }

  pseudo() {
    const out = [], b = this.b, s = this.side;
    const addPawn = (from, to) => {
      const tr = to >> 3;
      if (tr === 7 || tr === 0) for (const p of [QUEEN, ROOK, BISHOP, KNIGHT]) out.push(mv(from, to, p));
      else out.push(mv(from, to));
    };
    const step = (sq, dirs, slide) => {
      const f = sq & 7, r = sq >> 3;
      for (const [x, y] of dirs) {
        let nf = f + x, nr = r + y;
        while (onB(nf, nr)) {
          const to = nr * 8 + nf;
          if (!b[to]) out.push(mv(sq, to));
          else { if (Math.sign(b[to]) === -s) out.push(mv(sq, to)); break; }
          if (!slide) break;
          nf += x; nr += y;
        }
      }
    };
    for (let sq = 0; sq < 64; sq++) {
      const p = b[sq];
      if (!p || Math.sign(p) !== s) continue;
      const t = Math.abs(p), f = sq & 7, r = sq >> 3;
      if (t === PAWN) {
        const nr = r + s;
        if (onB(f, nr) && !b[nr * 8 + f]) {
          addPawn(sq, nr * 8 + f);
          const r2 = r + 2 * s;
          if (r === (s === WHITE ? 1 : 6) && !b[r2 * 8 + f]) out.push(mv(sq, r2 * 8 + f));
        }
        for (const df of [-1, 1]) {
          if (!onB(f + df, nr)) continue;
          const to = nr * 8 + f + df;
          if (b[to] && Math.sign(b[to]) === -s) addPawn(sq, to);
          else if (to === this.ep) out.push(mv(sq, to));
        }
      } else if (t === KNIGHT) step(sq, KNIGHT_D, false);
      else if (t === BISHOP) step(sq, BISHOP_D, true);
      else if (t === ROOK) step(sq, ROOK_D, true);
      else if (t === QUEEN) { step(sq, BISHOP_D, true); step(sq, ROOK_D, true); }
      else if (t === KING) {
        step(sq, KING_D, false);
        const c = this.castling;
        if (s === WHITE && sq === 4) {
          if ((c & WK) && !b[5] && !b[6] && b[7] === ROOK && !this.attacked(4, BLACK) && !this.attacked(5, BLACK) && !this.attacked(6, BLACK)) out.push(mv(4, 6));
          if ((c & WQ) && !b[3] && !b[2] && !b[1] && b[0] === ROOK && !this.attacked(4, BLACK) && !this.attacked(3, BLACK) && !this.attacked(2, BLACK)) out.push(mv(4, 2));
        } else if (s === BLACK && sq === 60) {
          if ((c & BK) && !b[61] && !b[62] && b[63] === -ROOK && !this.attacked(60, WHITE) && !this.attacked(61, WHITE) && !this.attacked(62, WHITE)) out.push(mv(60, 62));
          if ((c & BQ) && !b[59] && !b[58] && !b[57] && b[56] === -ROOK && !this.attacked(60, WHITE) && !this.attacked(59, WHITE) && !this.attacked(58, WHITE)) out.push(mv(60, 58));
        }
      }
    }
    return out;
  }

  makeRaw(m) {
    const b = this.b, u = { castling: this.castling, ep: this.ep, half: this.half, capSq: m.to, cap: b[m.to] };
    const p = b[m.from], t = Math.abs(p), s = this.side;
    if (t === PAWN && m.to === this.ep && !b[m.to]) { u.capSq = m.to - 8 * s; u.cap = b[u.capSq]; b[u.capSq] = 0; }
    b[m.to] = m.promo ? m.promo * s : p; b[m.from] = 0;
    if (t === KING && Math.abs(m.to - m.from) === 2) {
      if (m.to === 6) { b[5] = b[7]; b[7] = 0; } else if (m.to === 2) { b[3] = b[0]; b[0] = 0; }
      else if (m.to === 62) { b[61] = b[63]; b[63] = 0; } else if (m.to === 58) { b[59] = b[56]; b[56] = 0; }
    }
    const touch = (a, mask) => { if (m.from === a || m.to === a) this.castling &= ~mask; };
    touch(4, WK | WQ); touch(60, BK | BQ); touch(0, WQ); touch(7, WK); touch(56, BQ); touch(63, BK);
    this.ep = t === PAWN && Math.abs(m.to - m.from) === 16 ? (m.from + m.to) / 2 : -1;
    this.half = t === PAWN || u.cap ? 0 : this.half + 1;
    this.side = -s;
    return u;
  }

  unmakeRaw(m, u) {
    const b = this.b;
    this.side = -this.side;
    const p = b[m.to];
    b[m.from] = m.promo ? PAWN * this.side : p; b[m.to] = 0; b[u.capSq] = u.cap;
    if (Math.abs(b[m.from]) === KING && Math.abs(m.to - m.from) === 2) {
      if (m.to === 6) { b[7] = b[5]; b[5] = 0; } else if (m.to === 2) { b[0] = b[3]; b[3] = 0; }
      else if (m.to === 62) { b[63] = b[61]; b[61] = 0; } else if (m.to === 58) { b[56] = b[59]; b[59] = 0; }
    }
    this.castling = u.castling; this.ep = u.ep; this.half = u.half;
  }

  legal() {
    const out = [];
    for (const m of this.pseudo()) {
      const u = this.makeRaw(m);
      if (!this.inCheck(-this.side)) out.push(m);
      this.unmakeRaw(m, u);
    }
    return out;
  }
  legalFrom(sq) { return this.legal().filter(m => m.from === sq); }
  isLegal(m) { return !!m && this.status === 'playing' && this.legal().some(l => sameMove(l, m)); }

  move(m) {
    if (!this.isLegal(m)) return false;
    let n = this.toSan(m);
    this.makeRaw(m);
    this.lastMove = m;
    const k = this.key();
    this.rep.set(k, (this.rep.get(k) || 0) + 1);
    this.updateStatus();
    if (this.status === 'checkmate') n += '#'; else if (this.inCheck()) n += '+';
    this.san.push(n);
    return true;
  }

  updateStatus() {
    if (['resigned', 'draw-agreed', 'timeout', 'draw-timeout'].includes(this.status)) return;
    if (!this.legal().length) this.status = this.inCheck() ? 'checkmate' : 'stalemate';
    else if (this.half >= 100) this.status = 'draw-50';
    else if ((this.rep.get(this.key()) || 0) >= 3) this.status = 'draw-repetition';
    else if (this.insufficient()) this.status = 'draw-material';
    else this.status = 'playing';
  }

  insufficient() {
    let minors = 0, mask = 0, knights = false;
    this.b.forEach((p, i) => {
      const t = Math.abs(p);
      if (t === KNIGHT) { minors++; knights = true; }
      if (t === BISHOP) { minors++; mask |= ((i & 7) + (i >> 3)) % 2 === 0 ? 2 : 1; }
    });
    if (this.b.some(p => [PAWN, ROOK, QUEEN].includes(Math.abs(p)))) return false;
    if (minors <= 1) return true;
    return !knights && (mask === 1 || mask === 2);
  }

  key() {
    let k = this.b.join(',') + '|' + this.side + '|' + this.castling;
    if (this.ep >= 0) {
      const f = this.ep & 7, pr = (this.ep >> 3) - this.side;
      if ([-1, 1].some(df => onB(f + df, pr) && this.b[pr * 8 + f + df] === PAWN * this.side)) k += '|' + this.ep;
    }
    return k;
  }

  toSan(m) {
    const p = this.b[m.from], t = Math.abs(p);
    if (t === KING && Math.abs(m.to - m.from) === 2) return (m.to & 7) === 6 ? 'O-O' : 'O-O-O';
    const cap = !!this.b[m.to] || (t === PAWN && m.to === this.ep);
    let s = '';
    if (t === PAWN) { if (cap) s += sqName(m.from)[0]; }
    else {
      s += LETTERS[t];
      let amb = false, sameF = false, sameR = false;
      for (const o of this.legal()) {
        if (o.to === m.to && o.from !== m.from && this.b[o.from] === p) {
          amb = true;
          if ((o.from & 7) === (m.from & 7)) sameF = true;
          if ((o.from >> 3) === (m.from >> 3)) sameR = true;
        }
      }
      if (amb) s += !sameF ? sqName(m.from)[0] : !sameR ? sqName(m.from)[1] : sqName(m.from);
    }
    if (cap) s += 'x';
    s += sqName(m.to);
    if (m.promo) s += '=' + LETTERS[m.promo];
    return s;
  }

  perft(d) {
    if (!d) return 1;
    let n = 0;
    for (const m of this.pseudo()) {
      const u = this.makeRaw(m);
      if (!this.inCheck(-this.side)) n += d === 1 ? 1 : this.perft(d - 1);
      this.unmakeRaw(m, u);
    }
    return n;
  }

  loadFen(fen) {
    this.reset();
    const p = fen.trim().split(/\s+/);
    this.b = new Array(64).fill(0);
    let r = 7, f = 0;
    for (const c of p[0]) {
      if (c === '/') { r--; f = 0; }
      else if (/\d/.test(c)) f += +c;
      else { const t = 'pnbrqk'.indexOf(c.toLowerCase()) + 1; this.b[r * 8 + f] = c === c.toUpperCase() ? t : -t; f++; }
    }
    this.side = p[1] === 'b' ? BLACK : WHITE;
    this.castling = 0;
    if (p[2]) { if (p[2].includes('K')) this.castling |= WK; if (p[2].includes('Q')) this.castling |= WQ; if (p[2].includes('k')) this.castling |= BK; if (p[2].includes('q')) this.castling |= BQ; }
    this.ep = p[3] && p[3] !== '-' ? parseSq(p[3]) : -1;
    this.half = p[4] ? +p[4] : 0;
    this.rep = new Map([[this.key(), 1]]);
    this.updateStatus();
  }
}

/* node */ if (typeof module !== 'undefined') module.exports = { Chess, fromUci, toUci, sqName, WHITE, BLACK, VALUE, PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING };

{
// ======================================================================= ustawienia
const DB = (() => { try { return localStorage.getItem('jchess.db') || ''; } catch (e) { return ''; } })()
  || 'https://szachy-lan-default-rtdb.europe-west1.firebasedatabase.app';
const BOARDS = [['Klasyczny', '#f0d9b5', '#b58863'], ['Zielony', '#eeeed2', '#769656'], ['Niebieski', '#dee3e6', '#8ca2ad'],
  ['Drewno', '#e8c99b', '#a0703f'], ['Kamień', '#d9d9d9', '#9a9a9a'], ['Fioletowy', '#e9e1f5', '#9c88c2'], ['Różowy', '#f9e1e8', '#d58ba4'],
  ['Lodowy', '#e8f3f8', '#7fafcd'], ['Nocny', '#8a8f9c', '#4b5060'], ['Koralowy', '#fbe4d4', '#e07b65']];
const PRESETS = ['0+0', '60+0', '120+1', '180+0', '180+2', '300+0', '300+3', '600+0', '600+5', '900+10', '1800+0', '1800+20'];
const LEVELS = [['Szybka', 10, 600], ['Normalna', 14, 1500], ['Dokładna', 18, 4000]];
// boty: nazwa, opis, Skill Level Stockfisha, głębokość, czas (ms), szansa na losowy ruch, min. czas „myślenia”
const BOTS = [
  { name: 'Pionek', sub: 'Początkujący', elo: '~400', skill: 0, depth: 1, ms: 60, rnd: 0.4, think: 700, piece: 'p' },
  { name: 'Skoczek', sub: 'Amator', elo: '~800', skill: 2, depth: 2, ms: 120, rnd: 0.14, think: 800, piece: 'n' },
  { name: 'Goniec', sub: 'Średni', elo: '~1200', skill: 6, depth: 5, ms: 300, rnd: 0.03, think: 900, piece: 'b' },
  { name: 'Wieża', sub: 'Ekspert', elo: '~1700', skill: 12, depth: 9, ms: 700, rnd: 0, think: 900, piece: 'r' },
  { name: 'Hetman', sub: 'Mistrz', elo: '2500+', skill: 20, depth: 22, ms: 1500, rnd: 0, think: 600, piece: 'q' }];
const DEF = { name: '', board: 0, custom: ['#f0d9b5', '#b58863'], pieces: 'maestro', bg: 'default', bgColor: '#1d2b22', dim: 35,
  hints: true, coords: true, last: true, animate: true, sound: true, vol: 70, sndset: 'pychess', level: 1, tc: '600+0', color: 0, pub: false, bot: 1, defv: 2 };
let S = Object.assign({}, DEF);
let SAVED = {};
try { SAVED = JSON.parse(localStorage.getItem('jchess.settings') || '{}') || {}; Object.assign(S, SAVED); } catch (e) { }
const save = () => { try { localStorage.setItem('jchess.settings', JSON.stringify(S)); } catch (e) { } };
// nowe domyślne (figury Maestro, dźwięki PyChess) – jednorazowo także dla zapisanych ustawień
if (SAVED.name && (SAVED.defv | 0) < 2) { S.pieces = 'maestro'; S.sndset = 'pychess'; S.defv = 2; save(); }
if (!S.name) { S.name = 'Gracz ' + (100 + Math.floor(Math.random() * 900)); save(); }
let BGIMG = null;
try { BGIMG = localStorage.getItem('jchess.bgimg'); } catch (e) { }
const colors = () => S.board === -1 ? S.custom : BOARDS[S.board] ? [BOARDS[S.board][1], BOARDS[S.board][2]] : [BOARDS[0][1], BOARDS[0][2]];

// ======================================================================= narzędzia
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ICONS = {
  back: '<path d="M15 5l-7 7 7 7"/>', gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
  screen: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>', flip: '<path d="M8 20V5M5 8l3-3 3 3M16 4v15M13 16l3 3 3-3"/>',
  undo: '<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 010 12h-3"/>', flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  draw: '<text x="12" y="17" text-anchor="middle" font-size="15" font-weight="800" fill="currentColor" stroke="none">½</text>',
  chart: '<path d="M3 20h18M5 16l5-5 4 3 6-7"/>', exit: '<path d="M14 4H5v16h9M10 12h11M18 9l3 3-3 3"/>', plus: '<path d="M12 5v14M5 12h14"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 13h.01M15 13h.01M9 17h6"/><circle cx="12" cy="3.5" r="1"/>', hint: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-6 8-6s7 1.5 8 6"/>', rematch: '<path d="M20 12a8 8 0 01-14 5M4 12a8 8 0 0114-5"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 011-1h9"/>', first: '<path d="M6 5v14M18 5l-7 7 7 7"/>',
  last: '<path d="M18 5v14M6 5l7 7-7 7"/>', next: '<path d="M9 5l7 7-7 7"/>', palette: '<path d="M12 3a9 9 0 100 18c1.5 0 2-1 2-2s-1-1.6-1-2.6S14 15 15.5 15H18a3 3 0 003-3c0-5-4-9-9-9z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>'
};
const ic = n => `<svg class="icon" viewBox="0 0 24 24">${ICONS[n]}</svg>`;
let toastT;
function toast(t) {
  document.querySelectorAll('.toast').forEach(e => e.remove());
  const d = document.createElement('div'); d.className = 'toast'; d.textContent = t; document.body.appendChild(d);
  clearTimeout(toastT); toastT = setTimeout(() => d.remove(), 2600);
}
async function copyText(t) {
  try { await navigator.clipboard.writeText(t); toast('Skopiowano'); }
  catch (e) { modal({ title: 'Skopiuj ręcznie', html: `<input value="${esc(t)}" readonly onclick="this.select()">`, buttons: [{ label: 'OK' }] }); }
}

// ======================================================================= adresy podstron
const BASE = (document.querySelector('meta[name=jc-base]') || {}).content || '/';
const CAN_ROUTE = /^https?:$/.test(location.protocol);
const PATHS = { home: '', online: 'online/', wait: 'online/', game: 'gra/', analysis: 'analiza/', settings: 'ustawienia/' };
let routing = false;
function setPath(p, replace) {
  if (!CAN_ROUTE) return;
  const url = BASE + p;
  if (location.pathname + location.search === url) return;
  try { history[replace || routing ? 'replaceState' : 'pushState']({ jc: 1 }, '', url); } catch (e) { }
}
function routeFromUrl(fromPop) {
  let p = CAN_ROUTE ? location.pathname.slice(BASE.length).replace(/index\.html$/, '') : '';
  const kod = CAN_ROUTE ? new URLSearchParams(location.search).get('kod') : null;
  if (fromPop && G.screen === 'game' && inProgress() && !p.startsWith('ustawienia') && !p.startsWith('analiza')) {
    history.pushState({ jc: 1 }, '', BASE + PATHS.game); confirmExit(); return;
  }
  routing = true;
  try {
    if (p.startsWith('ustawienia')) showSettings(G.started ? 'game' : 'home');
    else if (p.startsWith('dolacz')) { showOnline(); if (kod) joinCode(kod); }
    else if (p.startsWith('online')) showOnline();
    else if (p.startsWith('gra') && G.started) showGame();
    else if (p.startsWith('analiza') && G.moves.length) showAnalysis();
    else { showHome(); setPath('', true); }
  } finally { routing = false; }
}
window.addEventListener('popstate', () => { closeModal(); routeFromUrl(true); });
const inviteLink = code => (CAN_ROUTE ? location.origin + BASE : 'https://babuszka123.github.io/') + 'dolacz/?kod=' + code;

// ======================================================================= dźwięki (syntezowane – bez plików)
const SND = { ctx: null, noise: null, lastTick: 0 };
function audio() {
  if (!SND.ctx) {
    try { SND.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
    const n = SND.ctx.sampleRate * 0.3, buf = SND.ctx.createBuffer(1, n, SND.ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    SND.noise = buf;
  }
  if (SND.ctx.state === 'suspended') SND.ctx.resume().catch(() => { });
  return SND.ctx;
}
document.addEventListener('pointerdown', () => { if (S.sound) audio(); }, { capture: true });
function out(ctx, gain) { const g = ctx.createGain(); g.gain.value = gain * (S.vol / 100); g.connect(ctx.destination); return g; }
// drewniane stuknięcie figury o planszę
function knock(t, { freq = 1100, body = 150, len = 0.07, gain = 0.9 } = {}) {
  const c = SND.ctx, o = out(c, gain);
  const ns = c.createBufferSource(); ns.buffer = SND.noise;
  const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 3.5;
  const ng = c.createGain(); ng.gain.setValueAtTime(0.0001, t); ng.gain.exponentialRampToValueAtTime(1, t + 0.002); ng.gain.exponentialRampToValueAtTime(0.0001, t + len);
  ns.connect(bp).connect(ng).connect(o); ns.start(t); ns.stop(t + len + 0.02);
  const os = c.createOscillator(); os.type = 'sine'; os.frequency.setValueAtTime(body * 1.6, t); os.frequency.exponentialRampToValueAtTime(body, t + 0.05);
  const og = c.createGain(); og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.7, t + 0.003); og.gain.exponentialRampToValueAtTime(0.0001, t + len * 1.4);
  os.connect(og).connect(o); os.start(t); os.stop(t + len * 1.5);
}
// miękki dzwonek
function bell(t, f, { len = 0.9, gain = 0.25 } = {}) {
  const c = SND.ctx, o = out(c, gain);
  [[1, 1], [2.01, 0.35], [3.02, 0.12]].forEach(([k, a]) => {
    const os = c.createOscillator(); os.type = 'sine'; os.frequency.value = f * k;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(a, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + len / k);
    os.connect(g).connect(o); os.start(t); os.stop(t + len + 0.05);
  });
}
// zestawy nagranych dźwięków (wolne licencje) – pliki ładowane przy pierwszym użyciu
const SNDSETS = {
  sfx: { name: 'Lichess SFX', files: { move: 'move', capture: 'capture', castle: 'move', check: 'check', promote: 'confirmation', start: 'genericnotify',
    win: 'victory', lose: 'defeat', draw: 'draw', notify: 'genericnotify', lowtime: 'lowtime', illegal: 'error' } },
  pychess: { name: 'Drewno (PyChess)', files: { move: 'move1', capture: 'capture2', castle: 'castle', check: 'check1', promote: 'success', start: 'start1',
    win: 'win1', lose: 'lose1', draw: 'draw1', notify: 'choice', illegal: 'invalid' } },
  synth: { name: 'Syntezowane' }
};
const bufs = {};
const sndUrl = (set, f) => typeof JC_SOUNDS !== 'undefined' ? JC_SOUNDS[set][f] : BASE + 'assets/sounds/' + set + '/' + f + '.mp3';
function loadBuf(set, f) {
  const k = set + '/' + f;
  if (!bufs[k]) bufs[k] = fetch(sndUrl(set, f)).then(r => r.arrayBuffer())
    .then(a => new Promise((res, rej) => audio().decodeAudioData(a, res, rej))).catch(() => null);
  return bufs[k];
}
function preloadSounds() {
  const set = SNDSETS[S.sndset];
  if (set && set.files && audio()) ['move', 'capture', 'check', 'castle'].forEach(k => loadBuf(S.sndset, set.files[k]));
}
document.addEventListener('pointerdown', () => { if (S.sound) preloadSounds(); }, { once: true, capture: true });
function sound(kind) {
  if (!S.sound || !S.vol) return;
  const c = audio(); if (!c) return;
  const set = SNDSETS[S.sndset] || SNDSETS.sfx, f = set.files && set.files[kind];
  if (!f) return synth(kind);
  loadBuf(S.sndset, f).then(b => {
    if (!b) return synth(kind);
    const src = c.createBufferSource(); src.buffer = b;
    const g = c.createGain(); g.gain.value = S.vol / 100;
    src.connect(g).connect(c.destination); src.start();
  });
}
function synth(kind) {
  const c = audio(); if (!c) return;
  const t = c.currentTime + 0.01;
  switch (kind) {
    case 'move': knock(t); break;
    case 'capture': knock(t, { freq: 1700, body: 190, gain: 1 }); knock(t + 0.045, { freq: 1300, body: 140, len: 0.06, gain: 0.7 }); break;
    case 'castle': knock(t); knock(t + 0.11, { freq: 950, body: 130 }); break;
    case 'check': knock(t, { freq: 1500, gain: 0.9 }); bell(t + 0.04, 988, { len: 0.7, gain: 0.18 }); break;
    case 'promote': knock(t); [784, 988, 1175].forEach((f, i) => bell(t + 0.06 + i * 0.07, f, { len: 0.5, gain: 0.14 })); break;
    case 'start': bell(t, 659, { gain: 0.2 }); bell(t + 0.14, 988, { gain: 0.2, len: 1.1 }); break;
    case 'win': [523, 659, 784, 1047].forEach((f, i) => bell(t + i * 0.12, f, { gain: 0.2, len: 1.2 })); break;
    case 'lose': [659, 523, 392].forEach((f, i) => bell(t + i * 0.16, f, { gain: 0.18, len: 1 })); break;
    case 'draw': bell(t, 659, { gain: 0.18 }); bell(t + 0.16, 659, { gain: 0.15, len: 1 }); break;
    case 'notify': bell(t, 784, { gain: 0.2, len: 0.6 }); bell(t + 0.1, 1175, { gain: 0.2, len: 0.9 }); break;
    case 'tick': case 'lowtime': knock(t, { freq: 2600, body: 900, len: 0.03, gain: 0.35 }); break;
    case 'illegal': knock(t, { freq: 400, body: 90, len: 0.09, gain: 0.5 }); break;
  }
}
function moveSound(g) {
  const s = g.san[g.san.length - 1] || '';
  if (g.isOver()) return;
  if (s.includes('+')) sound('check');
  else if (s.includes('=')) sound('promote');
  else if (s.startsWith('O-O')) sound('castle');
  else if (s.includes('x')) sound('capture');
  else sound('move');
}

// okno dialogowe
let openModal = null;
function modal({ title, msg, html, buttons = [], cancelable = true, onOpen }) {
  closeModal();
  const m = document.createElement('div');
  m.className = 'modal';
  m.innerHTML = `<div class="mbox" role="dialog" aria-modal="true"><div class="mbody">${title ? `<h2>${esc(title)}</h2>` : ''}${msg ? `<p class="muted" style="margin:0">${esc(msg)}</p>` : ''}${html || ''}</div><div class="mbtns"></div></div>`;
  const bx = m.querySelector('.mbtns');
  buttons.forEach(b => {
    const el = document.createElement('button');
    el.className = 'btn wide ' + (b.cls || '');
    el.textContent = b.label;
    el.onclick = () => { if (!b.keep) closeModal(); b.fn && b.fn(m); };
    bx.appendChild(el);
  });
  if (!buttons.length) bx.remove();
  if (cancelable) m.addEventListener('click', e => { if (e.target === m) closeModal(); });
  document.body.appendChild(m);
  openModal = m;
  onOpen && onOpen(m);
  return m;
}
function closeModal() { if (openModal) { openModal.remove(); openModal = null; } }
function progress(text, onCancel) {
  modal({ html: `<div class="row"><div class="spin"></div><b>${esc(text)}</b></div>`, cancelable: false,
    buttons: onCancel ? [{ label: 'Anuluj', cls: 'ghost', fn: onCancel }] : [] });
}

// ======================================================================= tło
function applyBg() {
  const b = document.body;
  b.classList.remove('bgimg');
  b.style.background = '';
  const dim = $('#dim');
  if (S.bg === 'image' && BGIMG) {
    b.classList.add('bgimg'); b.style.setProperty('--bgimg', `url("${BGIMG}")`);
    dim.style.opacity = S.dim / 100;
  } else if (S.bg === 'color') {
    b.style.background = S.bgColor; dim.style.opacity = S.dim / 100;
  } else {
    b.style.background = 'linear-gradient(#22201c,#151412 40%,#100f0e) fixed'; dim.style.opacity = 0;
  }
}
function loadBgImage(file) {
  const r = new FileReader();
  r.onload = () => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, 1920 / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      BGIMG = c.toDataURL('image/jpeg', 0.85);
      try { localStorage.setItem('jchess.bgimg', BGIMG); } catch (e) { toast('Zdjęcie jest za duże, by je zapamiętać na stałe'); }
      S.bg = 'image'; save(); applyBg(); showSettings();
    };
    img.src = r.result;
  };
  r.readAsDataURL(file);
}

// ======================================================================= figury
const imgCache = {};
function pieceSrc(code, set = S.pieces) {
  const ps = JC_PIECES[set] || JC_PIECES.classic;
  const f = ps.files[code];
  return f.startsWith('data:') ? f : BASE + f;
}
function pieceImgs(set = S.pieces) {
  if (imgCache[set]) return imgCache[set];
  const o = {};
  for (const c of ['wp', 'wn', 'wb', 'wr', 'wq', 'wk', 'bp', 'bn', 'bb', 'br', 'bq', 'bk']) {
    const im = new Image(); im.src = pieceSrc(c, set); im.onload = () => Board.redrawAll(); o[c] = im;
  }
  return imgCache[set] = o;
}
const pcode = p => (p > 0 ? 'w' : 'b') + ' pnbrqk'[Math.abs(p)];

// ======================================================================= plansza (canvas)
class Board {
  constructor(canvas, opts = {}) {
    this.c = canvas; this.g = null; this.flip = false; this.movable = 0; this.onMove = opts.onMove || null;
    this.sel = -1; this.targets = []; this.drag = null; this.anim = null; this.mark = null; this.arrow = null;
    this.ann = { arrows: [], sqs: {} }; this.drawing = null; this.lp = null;
    Board.all.add(this);
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    canvas.addEventListener('pointerdown', e => this.down(e));
    canvas.addEventListener('pointermove', e => this.moveP(e));
    canvas.addEventListener('pointerup', e => this.up(e));
    canvas.addEventListener('pointercancel', () => { clearTimeout(this.lp); this.lpStart = null; this.drag = null; this.drawing = null; this.draw(); });
    new ResizeObserver(() => this.draw()).observe(canvas);
  }
  static redrawAll() { for (const b of Board.all) if (b.c.isConnected) b.draw(); else Board.all.delete(b); }
  set(g) { this.g = g; this.sel = -1; this.targets = []; this.ann = { arrows: [], sqs: {} }; this.draw(); }
  hasAnn() { return this.ann.arrows.length || Object.keys(this.ann.sqs).length; }
  clearAnn() { if (this.hasAnn()) { this.ann = { arrows: [], sqs: {} }; return true; } return false; }
  // zatwierdzenie rysowania: to samo pole = zaznaczenie, inne pole = strzałka (ponownie to samo = usunięcie)
  commitDraw(d) {
    if (d.to < 0) return;
    const col = d.col;
    if (d.from === d.to) {
      if (this.ann.sqs[d.from] === col) delete this.ann.sqs[d.from]; else this.ann.sqs[d.from] = col;
    } else {
      const i = this.ann.arrows.findIndex(a => a.from === d.from && a.to === d.to);
      const same = i >= 0 && this.ann.arrows[i].col === col;
      if (i >= 0) this.ann.arrows.splice(i, 1);
      if (!same) this.ann.arrows.push({ from: d.from, to: d.to, col });
    }
  }
  animate(m) {
    if (!S.animate || !m) return;
    this.anim = { m, t0: performance.now() };
    const step = () => { this.draw(); if (this.anim) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  sq() { return this.c.clientWidth / 8; }
  xy(s) { const f = s & 7, r = s >> 3, q = this.sq(); return [(this.flip ? 7 - f : f) * q, (this.flip ? r : 7 - r) * q]; }
  at(e) {
    const rc = this.c.getBoundingClientRect();
    const c = Math.floor((e.clientX - rc.left) / (rc.width / 8)), r = Math.floor((e.clientY - rc.top) / (rc.height / 8));
    if (c < 0 || c > 7 || r < 0 || r > 7) return -1;
    return (this.flip ? r : 7 - r) * 8 + (this.flip ? 7 - c : c);
  }
  canPick(s) {
    const g = this.g;
    return g && !g.isOver() && this.movable && g.side === this.movable && g.b[s] && Math.sign(g.b[s]) === this.movable;
  }
  pick(s) { this.sel = s; this.targets = this.g.legalFrom(s); }
  emit(from, to) {
    this.sel = -1; this.targets = []; this.drag = null;
    this.onMove && this.onMove(from, to);
    this.draw();
  }
  down(e) {
    if (!this.g) return;
    const s = this.at(e); if (s < 0) return;
    // prawy przycisk myszy: rysowanie (Shift = zielony, Ctrl/⌘ = niebieski, Alt = czerwony)
    if (e.button === 2) {
      e.preventDefault();
      const col = e.altKey ? 3 : (e.ctrlKey || e.metaKey) ? 2 : e.shiftKey ? 1 : 0;
      this.drawing = { from: s, to: s, col };
      this.c.setPointerCapture(e.pointerId); this.draw(); return;
    }
    if (e.button !== 0) return;
    if (e.pointerType === 'mouse') { if (this.clearAnn()) this.draw(); }
    else {
      // dotyk: przytrzymanie palca = rysowanie
      clearTimeout(this.lp);
      this.lpStart = { s, x0: e.clientX, y0: e.clientY };
      this.lp = setTimeout(() => {
        if (!this.lpStart) return;
        this.drag = null; this.sel = -1; this.targets = [];
        this.drawing = { from: s, to: s, col: 0, touch: true };
        try { navigator.vibrate && navigator.vibrate(12); } catch (er) { }
        this.draw();
      }, 420);
      try { this.c.setPointerCapture(e.pointerId); } catch (er) { }
    }
    if (this.sel >= 0 && this.targets.some(m => m.to === s)) { this.emit(this.sel, s); return; }
    if (this.canPick(s)) {
      const was = this.sel === s;
      this.pick(s);
      const rc = this.c.getBoundingClientRect();
      this.drag = { from: s, x: e.clientX - rc.left, y: e.clientY - rc.top, x0: e.clientX, y0: e.clientY, moved: false, was };
      this.c.setPointerCapture(e.pointerId);
    } else { this.sel = -1; this.targets = []; }
    this.draw();
  }
  moveP(e) {
    if (this.drawing) { const s = this.at(e); if (s >= 0 && s !== this.drawing.to) { this.drawing.to = s; this.draw(); } return; }
    if (this.lpStart && Math.hypot(e.clientX - this.lpStart.x0, e.clientY - this.lpStart.y0) > this.sq() * 0.25) { clearTimeout(this.lp); this.lpStart = null; }
    if (!this.drag) return;
    const rc = this.c.getBoundingClientRect();
    this.drag.x = e.clientX - rc.left; this.drag.y = e.clientY - rc.top;
    if (Math.hypot(e.clientX - this.drag.x0, e.clientY - this.drag.y0) > this.sq() * 0.25) this.drag.moved = true;
    this.draw();
  }
  up(e) {
    clearTimeout(this.lp);
    if (this.drawing) { const d = this.drawing; this.drawing = null; this.lpStart = null; this.commitDraw(d); this.draw(); return; }
    if (this.lpStart) { this.lpStart = null; if (this.clearAnn()) this.draw(); } // krótkie stuknięcie czyści rysunki
    if (!this.drag) return;
    const d = this.drag, s = this.at(e);
    this.drag = null;
    if (d.moved) { if (s >= 0 && s !== d.from && this.targets.some(m => m.to === s)) { this.anim = null; this.emit(d.from, s); return; } }
    else if (d.was) { this.sel = -1; this.targets = []; }
    this.draw();
  }
  draw() {
    const c = this.c, W = c.clientWidth;
    if (!W) return;
    const dpr = window.devicePixelRatio || 1;
    if (c.width !== Math.round(W * dpr)) { c.width = c.height = Math.round(W * dpr); }
    const x = c.getContext('2d');
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    const q = W / 8, [L, D] = colors(), g = this.g;
    for (let s = 0; s < 64; s++) {
      const [px, py] = this.xy(s);
      x.fillStyle = ((s & 7) + (s >> 3)) % 2 ? L : D; x.fillRect(px, py, q, q);
    }
    if (!g) return;
    const fill = (s, col) => { const [px, py] = this.xy(s); x.fillStyle = col; x.fillRect(px, py, q, q); };
    const lm = S.last && !this.mark ? g.lastMove : null;
    if (lm) { fill(lm.from, '#cdd26a80'); fill(lm.to, '#cdd26a80'); }
    if (this.mark) { fill(this.mark.from, this.mark.color + '80'); fill(this.mark.to, this.mark.color + '80'); }
    if (this.sel >= 0) fill(this.sel, '#14551e80');
    for (const [sq, col] of Object.entries(this.ann.sqs)) fill(+sq, Board.SQ[col]);
    if (this.drawing && this.drawing.from === this.drawing.to) fill(this.drawing.from, Board.SQ[this.drawing.col].replace(/[\d.]+\)$/, '0.45)'));
    if (g.inCheck() && g.status !== 'resigned') {
      const k = g.kingSq(g.side);
      if (k >= 0) {
        const [px, py] = this.xy(k), gr = x.createRadialGradient(px + q / 2, py + q / 2, 0, px + q / 2, py + q / 2, q * 0.65);
        gr.addColorStop(0, '#ff0000'); gr.addColorStop(0.45, '#e70000aa'); gr.addColorStop(1, '#a9000000');
        x.fillStyle = gr; x.fillRect(px, py, q, q);
      }
    }
    if (S.coords) {
      x.font = `700 ${q * 0.19}px Inter,sans-serif`;
      for (let i = 0; i < 8; i++) {
        const f = this.flip ? 7 - i : i, bs = (this.flip ? 7 : 0) * 8 + f;
        x.fillStyle = ((bs & 7) + (bs >> 3)) % 2 ? D : L; x.textAlign = 'right';
        x.fillText('abcdefgh'[f], i * q + q - q * 0.06, 8 * q - q * 0.07);
        const r = this.flip ? i : 7 - i, ls = r * 8 + (this.flip ? 7 : 0);
        x.fillStyle = ((ls & 7) + (ls >> 3)) % 2 ? D : L; x.textAlign = 'left';
        x.fillText(String(r + 1), q * 0.05, i * q + q * 0.22);
      }
    }
    const imgs = pieceImgs();
    let at = 1;
    if (this.anim) { at = (performance.now() - this.anim.t0) / 170; if (at >= 1) { this.anim = null; at = 1; } }
    const put = (p, px, py, size) => { const im = imgs[pcode(p)]; if (im && im.complete && im.naturalWidth) x.drawImage(im, px + size * 0.03, py + size * 0.03, size * 0.94, size * 0.94); };
    for (let s = 0; s < 64; s++) {
      const p = g.b[s];
      if (!p || (this.drag && this.drag.moved && s === this.drag.from)) continue;
      if (this.anim && s === this.anim.m.to) {
        const e = 1 - (1 - at) * (1 - at), [ax, ay] = this.xy(this.anim.m.from), [bx, by] = this.xy(s);
        put(p, ax + (bx - ax) * e, ay + (by - ay) * e, q);
      } else { const [px, py] = this.xy(s); put(p, px, py, q); }
    }
    if (S.hints) for (const m of this.targets) {
      const [px, py] = this.xy(m.to); x.fillStyle = '#00000040'; x.strokeStyle = '#00000040';
      x.beginPath();
      if (g.b[m.to]) { x.lineWidth = q * 0.08; x.arc(px + q / 2, py + q / 2, q * 0.45, 0, 7); x.stroke(); }
      else { x.arc(px + q / 2, py + q / 2, q * 0.15, 0, 7); x.fill(); }
    }
    if (this.arrow && !this.anim) this.drawArrow(x, this.arrow.from, this.arrow.to, this.arrow.color || '#15781bc0', q);
    for (const a of this.ann.arrows) this.drawArrow(x, a.from, a.to, Board.AR[a.col], q);
    if (this.drawing && this.drawing.to >= 0 && this.drawing.from !== this.drawing.to) this.drawArrow(x, this.drawing.from, this.drawing.to, Board.AR[this.drawing.col].replace(/[\d.]+\)$/, '0.55)'), q);
    if (this.mark && this.mark.symbol && !this.anim) {
      const [px, py] = this.xy(this.mark.to), r = q * 0.2, cx = px + q - r * 0.8, cy = py + r * 0.8;
      x.fillStyle = '#00000055'; x.beginPath(); x.arc(cx, cy + 2, r * 1.05, 0, 7); x.fill();
      x.fillStyle = this.mark.color; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
      x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle';
      x.font = `800 ${r * (this.mark.symbol.length > 1 ? 1 : 1.3)}px Inter,sans-serif`;
      x.fillText(this.mark.symbol, cx, cy + 1); x.textBaseline = 'alphabetic';
    }
    if (this.drag && this.drag.moved) { const p = g.b[this.drag.from]; if (p) put(p, this.drag.x - q * 0.65, this.drag.y - q * 1.1, q * 1.3); }
  }
  drawArrow(x, from, to, col, q) {
    const [ax, ay] = this.xy(from), [bx, by] = this.xy(to);
    const x1 = ax + q / 2, y1 = ay + q / 2, x2 = bx + q / 2, y2 = by + q / 2;
    const df = Math.abs((to & 7) - (from & 7)), dr = Math.abs((to >> 3) - (from >> 3));
    const pts = [[x1, y1]];
    if ((df === 1 && dr === 2) || (df === 2 && dr === 1)) pts.push(Math.abs(y2 - y1) > Math.abs(x2 - x1) ? [x1, y2] : [x2, y1]); // skoczek – strzałka w kształcie L
    pts.push([x2, y2]);
    const [px, py] = pts[pts.length - 2];
    let dx = x2 - px, dy = y2 - py; const len = Math.hypot(dx, dy); if (len < 1) return;
    dx /= len; dy /= len;
    const head = q * 0.42, w = q * 0.2;
    let fx = pts[1][0] - x1, fy = pts[1][1] - y1; const fl = Math.hypot(fx, fy);
    pts[0] = [x1 + fx / fl * q * 0.28, y1 + fy / fl * q * 0.28];
    const ex = x2 - dx * head, ey = y2 - dy * head;
    // całą strzałkę rysujemy jednym kształtem na osobnej warstwie, żeby półprzezroczysty kolor się nie nakładał
    const off = Board.off || (Board.off = document.createElement('canvas'));
    const dpr = window.devicePixelRatio || 1, W = this.c.width;
    if (off.width !== W) { off.width = off.height = W; }
    const o = off.getContext('2d');
    o.setTransform(1, 0, 0, 1, 0, 0); o.clearRect(0, 0, W, W); o.setTransform(dpr, 0, 0, dpr, 0, 0);
    o.strokeStyle = o.fillStyle = '#000'; o.lineWidth = w; o.lineCap = 'butt'; o.lineJoin = 'miter';
    o.beginPath(); o.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length - 1; i++) o.lineTo(pts[i][0], pts[i][1]);
    o.lineTo(ex + dx * 1, ey + dy * 1); o.stroke();
    o.beginPath(); o.moveTo(x2, y2); o.lineTo(ex - dy * head * 0.72, ey + dx * head * 0.72); o.lineTo(ex + dy * head * 0.72, ey - dx * head * 0.72); o.closePath(); o.fill();
    o.setTransform(1, 0, 0, 1, 0, 0); o.globalCompositeOperation = 'source-in'; o.fillStyle = col; o.fillRect(0, 0, W, W); o.globalCompositeOperation = 'source-over';
    x.save(); x.setTransform(1, 0, 0, 1, 0, 0); x.drawImage(off, 0, 0); x.restore();
  }
}
Board.all = new Set();
// kolory rysowania: zwykły, Shift, Ctrl/⌘, Alt
Board.AR = ['rgba(255,170,0,0.8)', 'rgba(21,120,27,0.8)', 'rgba(0,92,190,0.8)', 'rgba(210,40,40,0.8)'];
Board.SQ = ['rgba(235,97,80,0.8)', 'rgba(172,206,89,0.8)', 'rgba(82,176,220,0.8)', 'rgba(255,170,0,0.8)'];

// ======================================================================= zegar
const tcParse = s => { const [a, b] = String(s).split('+').map(Number); return { base: a || 0, inc: b || 0 }; };
const tcLabel = s => {
  const { base, inc } = tcParse(s);
  if (!base) return 'Bez limitu';
  const m = base % 60 === 0 ? base / 60 : (base / 60).toFixed(1);
  return inc ? `${m} | ${inc}` : `${m} min`;
};
class Clock {
  constructor(tc) { const t = tcParse(tc); this.inc = t.inc * 1000; this.on = t.base > 0; this.rem = { 1: t.base * 1000, '-1': t.base * 1000 }; this.run = 0; this.t0 = 0; }
  left(c, now = performance.now()) { return this.rem[c] - (this.run === c ? now - this.t0 : 0); }
  onMove(mover, now = performance.now()) {
    if (!this.on) return 0;
    if (this.run === mover) this.rem[mover] += this.inc - (now - this.t0);
    this.run = -mover; this.t0 = now;
    return Math.round(this.rem[mover]);
  }
  set(c, ms) { this.rem[c] = ms; }
  stop(now = performance.now()) { if (this.run) this.rem[this.run] -= now - this.t0; this.run = 0; }
  switchTo(c, now = performance.now()) { if (!this.on) return; this.stop(now); this.run = c; this.t0 = now; }
  flagged(now, grace) { return this.on && this.run && this.left(this.run, now) <= -grace ? this.run : 0; }
  static fmt(ms) {
    ms = Math.max(0, ms);
    if (ms < 10000) return `0:${String(Math.floor(ms / 1000)).padStart(2, '0')}.${Math.floor(ms % 1000 / 100)}`;
    const s = Math.ceil(ms / 1000);
    return s >= 3600 ? `${Math.floor(s / 3600)}:${String(Math.floor(s % 3600 / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
      : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }
}

// ======================================================================= internet (Firebase REST – zgodne z aplikacją)
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newCode = () => Array.from({ length: 5 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
const SV = { '.sv': 'timestamp' };
async function api(method, path, body, headers) {
  const r = await fetch(DB + path + '.json', { method, headers: Object.assign({ 'Content-Type': 'application/json' }, headers || {}), body: body === undefined ? undefined : JSON.stringify(body) });
  if (!r.ok) { const e = new Error('HTTP ' + r.status); e.status = r.status; throw e; }
  return r.json();
}
function explain(e) {
  if (e && e.status) {
    if (e.status === 401 || e.status === 403) return 'Baza odmówiła dostępu (reguły bazy).';
    if (e.status === 404) return 'Nie znaleziono bazy gier.';
    return 'Błąd serwera (' + e.status + ').';
  }
  return 'Brak połączenia z internetem.';
}
async function serverTime() { await api('PUT', '/games/CLOCK/t', SV); return +(await api('GET', '/games/CLOCK/t')); }
async function listPublic() {
  const now = await serverTime(), all = await api('GET', '/games/PUBLIC') || {}, out = [];
  for (const [code, m] of Object.entries(all)) {
    if (!m || typeof m !== 'object') continue;
    const seen = +m.seen || 0;
    if (now - seen > 180000 || !m.name) {
      api('DELETE', '/games/PUBLIC/' + code).catch(() => { });
      if (now - seen > 180000) api('DELETE', '/games/' + code).catch(() => { });
      continue;
    }
    if (now - seen <= 45000) out.push({ code, name: m.name, hostColor: m.color || 'w', tc: m.tc || '0+0', created: +m.created || 0 });
  }
  return out.sort((a, b) => a.created - b.created || a.code.localeCompare(b.code));
}
async function claim(code, name) {
  const meta = await api('GET', `/games/${code}/meta`);
  if (!meta || typeof meta !== 'object') return false;
  const url = `/games/${code}/meta/guest`;
  let etag = null, val;
  try {
    const r = await fetch(DB + url + '.json', { headers: { 'X-Firebase-ETag': 'true' } });
    if (!r.ok) throw 0;
    etag = r.headers.get('ETag'); val = await r.json();
  } catch (e) { val = await api('GET', url); }
  if (val !== null) return false;
  if (!etag) { await api('PUT', url, name); return true; }
  try {
    const w = await fetch(DB + url + '.json', { method: 'PUT', headers: { 'if-match': etag }, body: JSON.stringify(name) });
    if (w.status === 412) return false;
    if (!w.ok) throw 0;
    return true;
  } catch (e) { await api('PUT', url, name); return true; }
}
class Online {
  constructor({ code, host, name, hostColor, tc, isPublic, claimed, L }) {
    Object.assign(this, { code, host, name, hostColor, tc, isPublic, claimed, L });
    this.me = host ? 'h' : 'g'; this.other = host ? 'g' : 'h';
    this.seen = new Set(); this.closed = false; this.connected = false; this.listed = false;
    this.q = Promise.resolve(); this.fails = 0; this.peerBeat = null; this.peerT = Date.now(); this.peerSeen = false; this.peerOff = false;
    this.start();
  }
  async start() {
    try {
      if (this.host) {
        await api('DELETE', '/games/' + this.code);
        await api('PUT', `/games/${this.code}/meta`, { host: this.name, hostColor: this.hostColor, created: SV, v: 1 });
        if (this.isPublic) {
          await api('PUT', '/games/PUBLIC/' + this.code, { name: this.name, color: this.hostColor, tc: this.tc, created: SV, seen: SV });
          this.listed = true;
        }
      } else if (!this.claimed) {
        const meta = await api('GET', `/games/${this.code}/meta`);
        if (!meta || typeof meta !== 'object') return this.fail(`Nie ma gry o kodzie ${this.code}. Sprawdź kod.`);
        if (!await claim(this.code, this.name)) return this.fail('Do tej gry dołączył już ktoś inny.');
      }
      if (this.closed) return;
      this.stream();
      this.beat(); this.hb = setInterval(() => this.beat(), 12000);
    } catch (e) { this.fail((this.host ? 'Nie udało się utworzyć gry. ' : 'Nie udało się dołączyć. ') + explain(e)); }
  }
  stream() {
    const es = this.es = new EventSource(`${DB}/games/${this.code}/msgs.json`);
    const handle = (ev, data) => {
      let o; try { o = JSON.parse(data); } catch (e) { return; }
      if (!o) return;
      if (o.path === '/') {
        if (o.data === null) { if (this.seen.size && ev === 'put') this.fail('Przeciwnik zakończył grę.'); }
        else if (typeof o.data === 'object') Object.keys(o.data).sort().forEach(k => this.process(k, o.data[k]));
      } else {
        const id = o.path.slice(1);
        if (!id.includes('/')) this.process(id, o.data);
      }
      if (!this.connected && ev === 'put') {
        this.connected = true;
        this.L.onConnected && this.L.onConnected();
        if (!this.host) this.send('HELLO 1 ' + this.name);
      }
    };
    es.addEventListener('put', e => { this.fails = 0; handle('put', e.data); });
    es.addEventListener('patch', e => handle('patch', e.data));
    es.addEventListener('cancel', () => this.fail('Baza zamknęła połączenie (reguły bazy?).'));
    es.addEventListener('auth_revoked', () => this.fail('Baza zamknęła połączenie.'));
    es.onerror = () => {
      if (this.closed) return;
      this.fails++;
      if (es.readyState === 2 || (!this.connected && this.fails >= 4)) this.fail('Brak połączenia z serwerem gry.');
    };
  }
  process(id, v) {
    if (!v || typeof v !== 'object' || this.seen.has(id)) return;
    this.seen.add(id);
    if (v.f === this.me || typeof v.m !== 'string') return;
    !this.closed && this.L.onLine(v.m);
  }
  async beat() {
    if (this.closed) return;
    try {
      await api('PUT', `/games/${this.code}/hb/${this.me}`, SV);
      if (this.listed) await api('PUT', `/games/PUBLIC/${this.code}/seen`, SV);
      const v = JSON.stringify(await api('GET', `/games/${this.code}/hb/${this.other}`)), now = Date.now();
      if (v !== 'null' && v !== this.peerBeat) {
        this.peerBeat = v; this.peerT = now; this.peerSeen = true;
        if (this.peerOff) { this.peerOff = false; this.L.onPeer && this.L.onPeer(true); }
      } else if (this.peerSeen && !this.peerOff && now - this.peerT > 45000) { this.peerOff = true; this.L.onPeer && this.L.onPeer(false); }
    } catch (e) { }
  }
  send(line) {
    if (this.closed) return;
    this.q = this.q.then(async () => {
      for (let i = 0; i < 5; i++) {
        try { await api('POST', `/games/${this.code}/msgs`, { f: this.me, m: line, t: SV }); return; }
        catch (e) { if (e.status === 401 || e.status === 403) return this.fail('Baza odmówiła zapisu.'); }
        if (this.closed) return;
        await new Promise(r => setTimeout(r, 1000 * (i + 1)));
      }
      this.fail('Nie udało się wysłać ruchu — brak internetu.');
    });
  }
  unlist() { if (this.listed) { this.listed = false; api('DELETE', '/games/PUBLIC/' + this.code).catch(() => { }); } }
  shutdown() { clearInterval(this.hb); if (this.es) this.es.close(); }
  fail(reason) {
    if (this.closed) return;
    this.closed = true; this.shutdown(); this.unlist();
    this.L.onClosed(reason);
  }
  close(bye) {
    if (this.closed) return;
    const wasListed = this.listed, connected = this.connected;
    this.closed = true; this.shutdown(); this.listed = false;
    this.q = this.q.then(async () => {
      try {
        if (wasListed) await api('DELETE', '/games/PUBLIC/' + this.code);
        if (bye && connected) await api('POST', `/games/${this.code}/msgs`, { f: this.me, m: 'BYE' });
        if (this.host) { await new Promise(r => setTimeout(r, 2500)); await api('DELETE', '/games/' + this.code); }
      } catch (e) { }
    });
  }
}

// ======================================================================= stan gry
const G = {
  screen: 'home', mode: 'local', game: new Chess(), moves: [], my: WHITE, opp: 'Przeciwnik', tc: S.tc, clock: new Clock('0+0'),
  net: null, started: false, lost: false, pendingDraw: false, pendingRematch: false, peerOff: false, code: '', isPublic: false, quick: false,
  board: null, attempt: 0, botLevel: 1, botTok: 0, botEngine: null, botBusy: null, botNew: true, hint: null
};
const isBot = () => G.mode === 'bot';
const inProgress = () => G.mode === 'local' || isBot() ? G.moves.length && !G.game.isOver() : G.net && !G.lost;

function cleanupNet(bye) {
  if (G.net) G.net.close(bye);
  G.net = null; G.started = false; G.pendingDraw = G.pendingRematch = false; G.peerOff = false; G.quick = false;
}
function startGame(mode, tc) {
  G.mode = mode; G.tc = tc; G.game = new Chess(); G.moves = []; G.clock = new Clock(tc);
  G.started = true; G.lost = false; G.pendingDraw = G.pendingRematch = false; G.lowWarned = 0;
  G.botTok++; G.botNew = true; G.hint = null;
  closeModal(); stopAnalysis(); showGame(); sound('start');
  if (isBot()) botThink();
}
function playMove(m, remote, remoteMs = -1) {
  const g = G.game, mover = g.side;
  if (!m || !g.move(m)) return false;
  G.moves.push(toUci(m)); G.hint = null;
  const now = performance.now(), left = G.clock.onMove(mover, now);
  if (remote && remoteMs >= 0 && G.clock.on) G.clock.set(mover, remoteMs);
  if (g.isOver()) G.clock.stop(now);
  if (!remote && G.mode === 'online' && G.net) G.net.send('MOVE ' + toUci(m) + (G.clock.on ? ' ' + left : ''));
  if (G.screen === 'game' && G.board) {
    G.board.set(g); G.board.animate(m);
  }
  moveSound(g);
  updateGame();
  if (g.isOver()) setTimeout(showResult, 450);
  else if (isBot() && g.side !== G.my) botThink();
  return true;
}
function onFlag(color, broadcast) {
  if (G.game.isOver()) return;
  G.game.flag(color);
  G.clock.stop(); if (color === G.my || G.mode !== 'online') G.clock.set(color, 0);
  if (broadcast && G.net) G.net.send('TIMEOUT ' + (color === WHITE ? 'w' : 'b'));
  updateGame(); showResult();
}
setInterval(() => {
  if (!G.started || G.game.isOver() || !G.clock.on) return;
  const now = performance.now();
  if (G.screen === 'game') updateClocks(now);
  const mine = G.mode === 'local' ? G.game.side : G.my;
  if (G.clock.run === mine && G.clock.left(mine, now) < 10000 && G.clock.left(mine, now) > 0) {
    const set = SNDSETS[S.sndset];
    if (set && set.files && set.files.lowtime) { if (G.lowWarned !== mine) { G.lowWarned = mine; sound('lowtime'); } }
    else if (now - SND.lastTick > 1000) { SND.lastTick = now; sound('tick'); }
  }
  if (G.mode !== 'online') { const f = G.clock.flagged(now, 0); if (f) onFlag(f, false); }
  else if (!G.lost) {
    if (G.clock.flagged(now, 0) === G.my) onFlag(G.my, true);
    else if (G.clock.flagged(now, 3000) === -G.my) onFlag(-G.my, true);
  }
}, 100);

// zdarzenia połączenia
const NET = {
  onConnected() { },
  onPeer(on) { G.peerOff = !on; if (G.started && !G.game.isOver()) toast(on ? `${G.opp} znów jest online` : `${G.opp} stracił połączenie…`); updateGame(); },
  onClosed(reason) {
    G.net = null;
    if (G.started && ['game', 'analysis', 'settings'].includes(G.screen)) return lostConnection(reason);
    if (G.screen === 'wait') { showOnline(); }
    modal({ title: 'Nie udało się', msg: reason, buttons: [{ label: 'OK' }] });
  },
  onLine(line) {
    const sp = line.indexOf(' '), cmd = sp > 0 ? line.slice(0, sp) : line, arg = sp > 0 ? line.slice(sp + 1).trim() : '';
    const g = G.game;
    switch (cmd) {
      case 'HELLO': {
        if (!G.host || G.started || !G.net) return;
        const p = arg.split(' '); p.shift();
        G.opp = p.join(' ') || 'Przeciwnik';
        G.net.unlist(); G.quick = false; sound('notify');
        G.net.send(`WELCOME ${G.my === WHITE ? 'b' : 'w'} ${G.tc} ${S.name}`);
        startGame('online', G.tc); toast('Połączono z: ' + G.opp);
        break;
      }
      case 'WELCOME': {
        if (G.host || G.started) return;
        const p = arg.split(' ');
        G.my = p[0] === 'w' ? WHITE : BLACK;
        const tc = p[1] && p[1].includes('+') ? p[1] : '0+0';
        G.opp = p.slice(2).join(' ') || 'Przeciwnik';
        sound('notify'); startGame('online', tc); toast('Połączono z: ' + G.opp + (tcParse(tc).base ? ' · ' + tcLabel(tc) : ''));
        break;
      }
      case 'MOVE': {
        if (!G.started) return;
        const p = arg.split(' '), ms = p[1] !== undefined ? +p[1] : -1;
        if (g.side === G.my || !playMove(fromUci(p[0]), true, isNaN(ms) ? -1 : ms)) toast('Nieprawidłowy ruch: ' + p[0]);
        break;
      }
      case 'TIMEOUT': if (G.started && !g.isOver()) onFlag(arg[0] === 'w' ? WHITE : BLACK, false); break;
      case 'RESIGN': if (G.started && !g.isOver()) { g.resign(-G.my); G.clock.stop(); updateGame(); showResult(); } break;
      case 'DRAW?':
        if (!G.started || g.isOver()) return;
        modal({ title: 'Propozycja remisu', msg: `${G.opp} proponuje remis.`, cancelable: false, buttons: [
          { label: 'Przyjmij', cls: 'primary', fn: () => { if (g.isOver()) return; g.agreeDraw(); G.net && G.net.send('DRAW_OK'); updateGame(); showResult(); } },
          { label: 'Odrzuć', cls: 'ghost', fn: () => G.net && G.net.send('DRAW_NO') }] });
        break;
      case 'DRAW_OK': if (G.pendingDraw && !g.isOver()) { g.agreeDraw(); updateGame(); showResult(); } G.pendingDraw = false; break;
      case 'DRAW_NO': G.pendingDraw = false; toast(G.opp + ' odrzuca remis.'); break;
      case 'REMATCH?':
        if (!G.started) return;
        if (G.pendingRematch) return rematch();
        modal({ title: 'Rewanż?', msg: `${G.opp} chce zagrać jeszcze raz. Kolory zostaną zamienione.`, cancelable: false, buttons: [
          { label: 'Gramy!', cls: 'primary', fn: () => { if (!G.net) return; G.net.send('REMATCH_OK'); rematch(); } },
          { label: 'Nie teraz', cls: 'ghost', fn: () => G.net && G.net.send('REMATCH_NO') }] });
        break;
      case 'REMATCH_OK': if (G.pendingRematch) rematch(); break;
      case 'REMATCH_NO': G.pendingRematch = false; toast(G.opp + ' nie chce rewanżu.'); break;
      case 'BYE': if (G.net) G.net.close(false); G.net = null; lostConnection(G.opp + ' opuszcza grę.'); break;
    }
  }
};
function lostConnection(reason) {
  G.lost = true; G.pendingDraw = G.pendingRematch = false;
  updateGame();
  if (G.screen !== 'game') return toast(reason);
  modal({ title: 'Koniec połączenia', msg: reason, buttons: [{ label: 'Zostań i przejrzyj partię' }, { label: 'Menu główne', cls: 'ghost', fn: showHome }] });
}
function rematch() {
  G.pendingRematch = G.pendingDraw = false;
  G.my = -G.my;
  startGame('online', G.tc);
  toast('Rewanż! Grasz ' + (G.my === WHITE ? 'białymi.' : 'czarnymi.'));
}

// ======================================================================= arkusz nowej gry
function newGameSheet(title, withColor, withVis, cb, button, withBot) {
  let color = S.color, tc = S.tc, pub = S.pub, bot = Math.max(0, Math.min(4, S.bot | 0));
  const custom = !PRESETS.includes(tc);
  const html = `${withBot ? `<div><b class="small muted">Przeciwnik</b><div class="bots" style="margin-top:8px">${BOTS.map((b, i) => `<button class="botb" data-b="${i}"><img src="${pieceSrc('w' + b.piece)}" alt="" width="40" height="40"><b>${b.name}</b><span>${b.sub}</span><em>${b.elo}</em></button>`).join('')}</div></div>` : ''}
    ${withVis ? `<div><b class="small muted">Kto może dołączyć</b><div class="row" style="margin-top:8px"><button class="chip vis" data-v="0">Tylko z kodem</button><button class="chip vis" data-v="1">Każdy (publiczna)</button></div>
      <p class="tiny" style="margin:6px 0 0">Gra publiczna pojawi się na liście wolnych gier — dołączy pierwsza chętna osoba.</p></div>` : ''}
    ${withColor ? `<div><b class="small muted">Grasz</b><div class="chips3" style="margin-top:8px">${['Białe', 'Losowo', 'Czarne'].map((n, i) => `<button class="chip col" data-c="${i}">${n}</button>`).join('')}</div></div>` : ''}
    <div><b class="small muted">Tempo gry</b><div class="chips3" style="margin-top:8px">${PRESETS.map(p => `<button class="chip tcb" data-tc="${p}">${tcLabel(p)}</button>`).join('')}<button class="chip tcb" data-tc="custom">Własne…</button></div></div>
    <div id="cust" ${custom ? '' : 'hidden'}><b id="custl"></b><label class="small muted">Minuty na grę<input type="range" id="cmin" min="1" max="90"></label>
      <label class="small muted">Sekundy dodawane po każdym ruchu<input type="range" id="cinc" min="0" max="60"></label></div>
    <p class="tiny" style="margin:0">„5 | 3” = 5 minut na całą grę + 3 sekundy po każdym ruchu.</p>`;
  const m = modal({ title, html, buttons: [
    { label: button || (withColor ? 'Utwórz grę' : 'Zagraj'), cls: 'primary', fn: () => {
      S.tc = tc; if (withColor) S.color = color; if (withVis) S.pub = pub; if (withBot) S.bot = bot; save();
      const c = color === 0 ? WHITE : color === 2 ? BLACK : (Math.random() < 0.5 ? WHITE : BLACK);
      cb(c, tc, pub, bot);
    } }, { label: 'Anuluj', cls: 'ghost' }] });
  const t0 = tcParse(tc), cmin = m.querySelector('#cmin'), cinc = m.querySelector('#cinc');
  cmin.value = Math.max(1, Math.round(t0.base / 60) || 10); cinc.value = t0.inc;
  const upd = () => {
    m.querySelectorAll('.col').forEach(b => b.classList.toggle('on', +b.dataset.c === color));
    m.querySelectorAll('.vis').forEach(b => b.classList.toggle('on', (b.dataset.v === '1') === pub));
    m.querySelectorAll('.botb').forEach(b => b.classList.toggle('on', +b.dataset.b === bot));
    const isCustom = !PRESETS.includes(tc);
    m.querySelectorAll('.tcb').forEach(b => b.classList.toggle('on', b.dataset.tc === tc || (isCustom && b.dataset.tc === 'custom')));
    m.querySelector('#cust').hidden = !isCustom;
    m.querySelector('#custl').textContent = `Własne: ${cmin.value} min + ${cinc.value} s na ruch`;
  };
  const setCustom = () => { tc = `${cmin.value * 60}+${cinc.value}`; upd(); };
  m.querySelectorAll('.col').forEach(b => b.onclick = () => { color = +b.dataset.c; upd(); });
  m.querySelectorAll('.vis').forEach(b => b.onclick = () => { pub = b.dataset.v === '1'; upd(); });
  m.querySelectorAll('.botb').forEach(b => b.onclick = () => { bot = +b.dataset.b; upd(); });
  m.querySelectorAll('.tcb').forEach(b => b.onclick = () => {
    if (b.dataset.tc === 'custom') { tc = `${cmin.value * 60}+${cinc.value}`; if (PRESETS.includes(tc)) { cmin.value = 7; tc = `420+${cinc.value}`; } }
    else tc = b.dataset.tc;
    upd();
  });
  cmin.oninput = cinc.oninput = setCustom;
  upd();
}

// ======================================================================= ekrany
function render(html, screen) {
  G.screen = screen;
  setPath(PATHS[screen] || '');
  const app = $('#app');
  app.innerHTML = `<div class="wrap screen">${html}</div>`;
  window.scrollTo(0, 0);
}
const appBar = (title, back, right = '') => `<div class="bar">${back ? `<button class="ibtn" id="back" aria-label="Wstecz">${ic('back')}</button>` : ''}<h2 class="grow shadow">${esc(title)}</h2>${right}</div>`;

// ---------------------------------------------------------------- start
function showHome() {
  cleanupNet(true); stopAnalysis(); stopBot(); closeModal();
  render(`<div class="bar"><img src="${pieceSrc('wn')}" alt="" width="44" height="44"><h1 class="grow shadow" style="font-size:30px">Jchess</h1>
      <button class="ibtn" id="set" aria-label="Ustawienia">${ic('gear')}</button></div>
    <section class="hero">
      <div>
        <h1 class="shadow">Szachy z przyjaciółmi — na telefonie i na komputerze</h1>
        <p class="muted shadow" style="font-size:17px;max-width:46ch">Graj przez internet z kimś, kto ma aplikację Jchess na telefonie, z botem na jednym z 5 poziomów albo we dwoje na jednym urządzeniu. Po każdej partii darmowa analiza silnikiem Stockfish.</p>
        <label class="name-in"><span class="muted small" style="white-space:nowrap">Twoje imię</span><input id="name" maxlength="24" value="${esc(S.name)}"></label>
        <div class="tiles">
          <button class="tile" id="t-online"><span class="dot" style="background:var(--green-d)">${ic('globe')}</span><span><b>Przez internet</b><span>Szybka gra, gry publiczne albo kod od znajomego</span></span><span class="chev">${ic('next')}</span></button>
          <button class="tile" id="t-bot"><span class="dot" style="background:#7a4fb5">${ic('bot')}</span><span><b>Z komputerem</b><span>5 botów — od początkującego do mistrza</span></span><span class="chev">${ic('next')}</span></button>
          <button class="tile" id="t-local"><span class="dot" style="background:#b0721c">${ic('screen')}</span><span><b>Na jednym urządzeniu</b><span>Dwie osoby przy jednym ekranie</span></span><span class="chev">${ic('next')}</span></button>
          <button class="tile" id="t-set"><span class="dot" style="background:#5e5a54">${ic('palette')}</span><span><b>Wygląd i ustawienia</b><span>Plansza, figury, tło, analiza</span></span><span class="chev">${ic('next')}</span></button>
        </div>
      </div>
      <canvas class="preview" id="pv" aria-label="Podgląd planszy"></canvas>
    </section>`, 'home');
  const b = new Board($('#pv')); b.set(Chess.replay(['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6']));
  $('#name').onchange = e => { S.name = e.target.value.trim().slice(0, 24) || 'Gracz'; save(); };
  $('#t-online').onclick = showOnline;
  $('#t-local').onclick = () => newGameSheet('Gra na jednym urządzeniu', false, false, (c, tc) => { G.my = WHITE; G.flip = false; startGame('local', tc); });
  $('#t-bot').onclick = botSheet;
  $('#t-set').onclick = $('#set').onclick = () => showSettings('home');
}
function botSheet() {
  newGameSheet('Gra z komputerem', true, false, (c, tc, p, lv) => startBot(c, tc, lv), 'Zagraj', true);
}
function startBot(color, tc, lv) {
  G.my = color; G.botLevel = lv; G.opp = 'Bot ' + BOTS[lv].name; G.code = '';
  startGame('bot', tc);
}

// ---------------------------------------------------------------- online
let lobbyTimer = null, lobbyBusy = false;
function showOnline() {
  cleanupNet(true); closeModal();
  render(`${appBar('Gra przez internet', true)}
    <div class="grid2">
      <div class="stack">
        <div class="card stack"><div class="row"><span class="tile" style="padding:0;border:0;background:none"><span class="dot" style="background:var(--green-d)">${ic('user')}</span></span>
          <div><h3>Szybka gra</h3><div class="muted small">Zagraj z losową osobą w wybranym tempie.</div></div></div>
          <button class="btn primary wide" id="quick">Szukaj przeciwnika</button></div>
        <div class="card stack"><h3>Utwórz grę</h3><div class="muted small">Prywatna — tylko z kodem. Publiczna — widoczna na liście dla wszystkich.</div>
          <button class="btn wide" id="create">Utwórz grę</button></div>
        <div class="card stack"><h3>Dołącz kodem</h3><input class="code-in" id="code" maxlength="8" placeholder="KOD" autocomplete="off">
          <button class="btn info wide" id="join">Dołącz</button></div>
      </div>
      <div class="card"><div class="row" style="justify-content:space-between"><h3>Wolne gry publiczne</h3><div class="spin" style="width:16px;height:16px"></div></div>
        <div id="lobby" style="margin-top:8px"><p class="muted">Wczytuję…</p></div>
        <p class="tiny" style="margin:10px 0 0">Grasz z tymi samymi osobami co w aplikacji Jchess na telefonie.</p></div>
    </div>`, 'online');
  $('#back').onclick = showHome;
  $('#quick').onclick = () => newGameSheet('Szybka gra', false, false, (c, tc) => quickMatch(tc), 'Szukaj przeciwnika');
  $('#create').onclick = () => newGameSheet('Nowa gra online', true, true, (c, tc, pub) => hostOnline(c, tc, pub, false));
  $('#join').onclick = () => joinCode($('#code').value);
  $('#code').onkeydown = e => { if (e.key === 'Enter') joinCode(e.target.value); };
  clearInterval(lobbyTimer); fetchLobby(); lobbyTimer = setInterval(fetchLobby, 4000);
}
async function fetchLobby() {
  if (G.screen !== 'online') return clearInterval(lobbyTimer);
  if (lobbyBusy) return;
  lobbyBusy = true;
  let games, err;
  try { games = await listPublic(); } catch (e) { err = explain(e); }
  lobbyBusy = false;
  const el = $('#lobby'); if (!el || G.screen !== 'online') return;
  if (err) { el.innerHTML = `<p style="color:#ff8a80">${esc(err)}</p>`; return; }
  if (!games.length) { el.innerHTML = '<p class="muted">Nikt teraz nie czeka. Utwórz grę publiczną albo użyj Szybkiej gry — inni zobaczą cię tutaj.</p>'; return; }
  el.innerHTML = games.map(g => `<div class="lob"><span class="ava ${g.hostColor === 'w' ? 'w' : 'b'}">${esc((g.name.trim()[0] || '?').toUpperCase())}</span>
      <div class="pinfo"><b>${esc(g.name)}</b><span class="muted small">${tcLabel(g.tc)} · grasz ${g.hostColor === 'w' ? 'czarnymi' : 'białymi'}</span></div>
      <button class="chip on" data-code="${esc(g.code)}">Graj</button></div>`).join('');
  el.querySelectorAll('[data-code]').forEach(b => b.onclick = () => joinCode(b.dataset.code));
}
const cleanCode = s => String(s).toUpperCase().replace(/[^A-Z0-9]/g, '');
function joinCode(raw, claimed) {
  const code = cleanCode(raw);
  if (code.length < 4) return toast('Wpisz kod gry');
  cleanupNet(true);
  Object.assign(G, { mode: 'online', host: false, code, started: false, lost: false, peerOff: false });
  progress(claimed ? 'Znaleziono przeciwnika! Łączenie…' : `Łączenie z grą ${code}…`, () => { cleanupNet(false); });
  G.net = new Online({ code, host: false, name: S.name, claimed: !!claimed, L: NET });
}
function hostOnline(color, tc, pub, quick) {
  cleanupNet(true);
  Object.assign(G, { mode: 'online', host: true, my: color, tc, isPublic: pub, quick, code: newCode(), started: false, lost: false, peerOff: false });
  G.net = new Online({ code: G.code, host: true, name: S.name, hostColor: color === WHITE ? 'w' : 'b', tc, isPublic: pub, L: NET });
  showWait();
  if (quick) setTimeout(quickPoll, 3000);
}
function showWait() {
  closeModal();
  render(`${appBar(G.quick ? 'Szybka gra' : G.isPublic ? 'Gra publiczna' : 'Nowa gra', true)}
    <div class="card stack" style="max-width:560px;margin:0 auto;text-align:center">
      <b class="muted small">Kod gry</b><div class="codebox">${G.code.split('').map(c => `<b>${c}</b>`).join('')}</div>
      <p class="muted" style="margin:0">${G.quick ? 'Szukam kogoś, kto też wybrał Szybką grę w tym tempie. Twoja gra jest też na liście publicznej.'
        : G.isPublic ? 'Gra jest na liście wolnych gier publicznych — dołączy pierwsza chętna osoba. Możesz też wysłać kod znajomemu.'
        : 'Wyślij ten kod znajomemu. Wpisze go w „Przez internet → Dołącz kodem” (na telefonie lub komputerze).'}</p>
      <button class="btn primary" id="cp">${ic('copy')} Kopiuj zaproszenie z linkiem</button>
      <div class="tiny" style="word-break:break-all">${esc(inviteLink(G.code))}</div>
      <div class="row" style="justify-content:center;margin-top:8px"><div class="spin"></div><b>${G.quick ? 'Szukam przeciwnika…' : 'Czekam na przeciwnika…'}</b></div>
      <div class="muted small">Grasz ${G.my === WHITE ? 'białymi' : 'czarnymi'} · tempo: ${tcLabel(G.tc)}</div>
      <button class="btn ghost" id="cancel">Anuluj</button></div>`, 'wait');
  $('#back').onclick = $('#cancel').onclick = showOnline;
  $('#cp').onclick = () => copyText(`Zagrajmy w szachy w Jchess! Kliknij: ${inviteLink(G.code)} — albo w aplikacji na telefonie wybierz Przez internet → Dołącz kodem i wpisz: ${G.code}`);
}
async function quickMatch(tc) {
  cleanupNet(true);
  const id = ++G.attempt;
  progress(`Szukam przeciwnika (${tcLabel(tc)})…`, () => { G.attempt++; });
  try {
    for (const g of await listPublic()) {
      if (id !== G.attempt) return;
      if (g.tc !== tc) continue;
      if (await claim(g.code, S.name)) { if (id === G.attempt) joinCode(g.code, true); return; }
    }
    if (id !== G.attempt) return;
    closeModal();
    hostOnline(Math.random() < 0.5 ? WHITE : BLACK, tc, true, true);
  } catch (e) { if (id === G.attempt) modal({ title: 'Nie udało się', msg: explain(e), buttons: [{ label: 'OK' }] }); }
}
async function quickPoll() {
  if (G.screen !== 'wait' || !G.quick || G.started) return;
  const mine = G.code;
  let target = null;
  try {
    const list = await listPublic(), me = list.find(g => g.code === mine);
    if (me) for (const g of list) {
      if (g.code === mine || g.tc !== G.tc) continue;
      const older = g.created < me.created || (g.created === me.created && g.code < mine);
      if (older && await claim(g.code, S.name)) { target = g.code; break; }
    }
  } catch (e) { }
  if (G.screen !== 'wait' || G.started || mine !== G.code) return;
  if (target) joinCode(target, true); else setTimeout(quickPoll, 4000);
}

// ---------------------------------------------------------------- gra
// rozmiar planszy liczony od faktycznej szerokości treści (strona ma max 1240 px), żeby plansza zawsze była kwadratowa
const BS_GAME = 340, BS_ANA = 400;
function boardSize(extra = BS_GAME) {
  const w = window.innerWidth, h = window.innerHeight;
  if (w <= 900) return Math.min(w - 28, 640);
  const content = Math.min(w, 1240) - 2 * Math.max(w * 0.02, 14);
  return Math.floor(Math.max(280, Math.min(h - (extra === BS_ANA ? 170 : 120), content - extra, 780)));
}
function showGame() {
  closeModal();
  const title = G.mode === 'local' ? 'Na jednym urządzeniu' : isBot() ? `Bot ${BOTS[G.botLevel].name} · poziom ${G.botLevel + 1}` : 'Online · ' + G.code;
  render(`${appBar(title + (tcParse(G.tc).base ? ' · ' + tcLabel(G.tc) : ''), true, `<button class="ibtn" id="set" aria-label="Ustawienia">${ic('gear')}</button>`)}
    <div class="game">
      <div class="boardbox" style="--bs:${boardSize()}px"><canvas id="board" aria-label="Szachownica"></canvas></div>
      <div class="side">
        <div class="player" id="pTop"></div>
        <div class="status" id="status"></div>
        <div class="card moves" id="moves"></div>
        <div class="player" id="pBot"></div>
        <div class="actions" id="acts"></div>
      </div>
    </div>`, 'game');
  G.board = new Board($('#board'), { onMove: userMove });
  G.board.flip = G.mode === 'local' ? !!G.flip : isBot() ? (G.my === BLACK) !== !!G.flip : G.my === BLACK;
  G.board.set(G.game);
  $('#back').onclick = confirmExit;
  $('#set').onclick = () => showSettings('game');
  updateGame();
}
window.addEventListener('resize', () => {
  const bb = document.querySelector('.boardbox');
  if (bb) bb.style.setProperty('--bs', boardSize(G.screen === 'analysis' ? BS_ANA : BS_GAME) + 'px');
  Board.redrawAll(); if (G.screen === 'analysis') drawGraph();
});
function userMove(from, to) {
  const opts = G.game.legalFrom(from).filter(m => m.to === to);
  if (!opts.length) return;
  if (opts.length === 1) playMove(opts[0], false);
  else askPromotion(from, to, G.game.side, m => playMove(m, false));
}
function askPromotion(from, to, color, cb) {
  const [L, D] = colors();
  const m = modal({ title: 'Promocja pionka', msg: 'Na jaką figurę zamienić pionka?',
    html: `<div class="row" style="justify-content:center">${[QUEEN, ROOK, BISHOP, KNIGHT].map((t, i) =>
      `<button data-t="${t}" style="width:72px;height:72px;border-radius:12px;background:${i % 2 ? D : L}"><img src="${pieceSrc((color > 0 ? 'w' : 'b') + ' pnbrqk'[t])}" alt="" width="64" height="64"></button>`).join('')}</div>`,
    buttons: [{ label: 'Anuluj', cls: 'ghost' }] });
  m.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { closeModal(); cb({ from, to, promo: +b.dataset.t }); });
}
function playerHtml(name, color, active, label) {
  const g = G.game, cnt = {};
  g.b.forEach(p => cnt[p] = (cnt[p] || 0) + 1);
  const init = [0, 8, 2, 2, 2, 1, 1], opp = -color;
  let caps = '', mat = 0;
  for (const t of [QUEEN, ROOK, BISHOP, KNIGHT, PAWN]) {
    const miss = Math.max(0, init[t] - (cnt[opp * t] || 0));
    for (let i = 0; i < miss; i++) caps += `<img src="${pieceSrc((opp > 0 ? 'w' : 'b') + ' pnbrqk'[t])}" alt="">`;
  }
  for (let t = 1; t <= 5; t++) mat += VALUE[t] * ((cnt[color * t] || 0) - (cnt[-color * t] || 0));
  return `<span class="ava ${color > 0 ? 'w' : 'b'}">${esc((name.trim()[0] || '?').toUpperCase())}</span>
    <div class="pinfo"><b>${esc(name)}</b><div class="caps">${caps}${mat > 0 ? `<em>+${mat}</em>` : ''}</div></div>
    ${label ? `<span class="tag ${label === 'offline' ? 'off' : ''}">${label}</span>` : ''}
    ${G.clock.on ? `<span class="clock" data-c="${color}"></span>` : ''}`;
}
function updateGame() {
  if (G.game.isOver()) G.clock.stop();
  if (G.screen !== 'game' || !G.board) return;
  const g = G.game, local = G.mode === 'local', over = g.isOver(), turn = g.side;
  G.board.movable = local ? (over ? 0 : turn) : isBot() ? (over ? 0 : G.my) : (!over && !G.lost && G.net ? G.my : 0);
  G.board.arrow = G.hint && !over ? { from: G.hint.from, to: G.hint.to, color: '#2f7fd0c8' } : null;
  G.board.draw();
  const top = local ? (G.board.flip ? WHITE : BLACK) : -G.my;
  const nm = c => local ? (c === WHITE ? 'Białe' : 'Czarne') : c === G.my ? S.name + ' (Ty)' : G.opp;
  for (const [id, c] of [['#pTop', top], ['#pBot', -top]]) {
    const act = !over && turn === c;
    let label = null;
    if (!G.clock.on && act) label = local ? 'Ruch' : c === G.my ? 'Twój ruch' : 'Myśli…';
    if (!local && c !== G.my && G.peerOff && !over) label = 'offline';
    const el = $(id); el.className = 'player' + (act ? ' active' : ''); el.innerHTML = playerHtml(nm(c), c, act, label);
  }
  updateClocks();
  const st = $('#status');
  let txt, cls = '';
  if (over) { txt = resultTitle() + ' · ' + resultReason(); cls = 'over'; }
  else if (!local && G.lost) { txt = 'Brak połączenia'; cls = 'check'; }
  else if (g.inCheck()) { txt = local ? 'Szach! ' + (turn === WHITE ? 'Ruch białych' : 'Ruch czarnych') : turn === G.my ? 'Szach! Twój ruch' : 'Szach!'; cls = 'check'; }
  else if (local) txt = turn === WHITE ? 'Ruch białych' : 'Ruch czarnych';
  else if (turn === G.my) { txt = 'Twój ruch'; cls = 'me'; }
  else txt = isBot() ? G.opp + ' myśli…' : G.peerOff ? 'Przeciwnik offline — czekam…' : 'Ruch przeciwnika…';
  st.className = 'status ' + cls; st.textContent = txt;
  const mv = $('#moves');
  mv.innerHTML = g.san.length ? g.san.map((s, i) => (i % 2 ? '' : `<span class="n">${i / 2 + 1}.</span>`) + `<button class="${i === g.san.length - 1 ? 'cur' : ''}" tabindex="-1">${esc(s)}</button>`).join('')
    + (g.san.length % 2 ? '<span></span>' : '') : '<span class="n" style="grid-column:1/-1">Białe zaczynają</span>';
  mv.scrollTop = mv.scrollHeight;
  const acts = [];
  if (local) {
    acts.push(['undo', 'Cofnij', undoLocal], ['flip', 'Obróć', () => { G.flip = G.board.flip = !G.board.flip; updateGame(); }]);
    if (over && G.moves.length >= 2) acts.push(['chart', 'Analiza', showAnalysis, 1]);
    acts.push(['plus', 'Nowa gra', () => newGameSheet(G.moves.length && !over ? 'Nowa partia? (obecna przepadnie)' : 'Nowa partia', false, false, (c, tc) => startGame('local', tc))]);
  } else if (isBot()) {
    if (!over) acts.push(['undo', 'Cofnij', undoBot], ['hint', 'Podpowiedź', botHint], ['flag', 'Poddaj się', resign]);
    else {
      if (G.moves.length >= 2) acts.push(['chart', 'Analiza', showAnalysis, 1]);
      acts.push(['rematch', 'Jeszcze raz', () => startBot(G.my, G.tc, G.botLevel)], ['plus', 'Nowa gra', botSheet]);
    }
    if (!over) acts.push(['flip', 'Obróć', () => { G.flip = !G.flip; G.board.flip = !G.board.flip; updateGame(); }]);
  } else if (!over && !G.lost && G.net) {
    acts.push(['draw', 'Remis', offerDraw], ['flag', 'Poddaj się', resign]);
  } else {
    if (!G.lost && G.net) acts.push(['rematch', 'Rewanż', requestRematch, 1]);
    if (G.moves.length >= 2) acts.push(['chart', 'Analiza', showAnalysis, 1]);
  }
  acts.push(['exit', 'Wyjdź', confirmExit]);
  const ab = $('#acts'); ab.innerHTML = '';
  acts.forEach(([i, l, fn, hi]) => { const b = document.createElement('button'); b.className = 'act' + (hi ? ' hi' : ''); b.innerHTML = ic(i) + l; b.onclick = fn; ab.appendChild(b); });
}
function updateClocks(now = performance.now()) {
  document.querySelectorAll('.clock[data-c]').forEach(el => {
    const c = +el.dataset.c, ms = G.clock.left(c, now), run = G.clock.run === c && !G.game.isOver();
    el.textContent = Clock.fmt(ms);
    el.className = 'clock' + (run ? (ms < 20000 ? ' low' : ' run') : '');
  });
}
function undoLocal() {
  if (!G.moves.length) return;
  stopAnalysis();
  G.moves.pop(); G.game = Chess.replay(G.moves);
  if (G.moves.length) G.clock.switchTo(G.game.side); else G.clock.stop();
  G.board.set(G.game); updateGame();
}
function resultTitle() {
  const w = G.game.winner();
  if (!w) return 'Remis';
  if (G.mode === 'local') return w === WHITE ? 'Wygrywają białe' : 'Wygrywają czarne';
  return w === G.my ? 'Wygrana! 🎉' : 'Porażka';
}
function resultReason() {
  const g = G.game;
  switch (g.status) {
    case 'checkmate': return 'Szach-mat';
    case 'resigned': return G.mode === 'local' ? (g.resigned === WHITE ? 'Białe' : 'Czarne') + ' poddają partię' : g.resigned === G.my ? 'Poddajesz partię' : G.opp + ' poddaje partię';
    case 'timeout': return G.mode === 'local' ? 'Koniec czasu ' + (g.flagColor === WHITE ? 'białych' : 'czarnych') : g.flagColor === G.my ? 'Skończył ci się czas' : 'Przeciwnikowi skończył się czas';
    case 'draw-timeout': return 'Koniec czasu, ale przeciwnik nie ma czym zamatować';
    case 'stalemate': return 'Pat';
    case 'draw-50': return 'Zasada 50 ruchów';
    case 'draw-repetition': return 'Trzykrotne powtórzenie pozycji';
    case 'draw-material': return 'Za mało materiału do mata';
    case 'draw-agreed': return 'Remis za porozumieniem';
  }
  return '';
}
function showResult() {
  if (G.screen !== 'game' || !G.game.isOver()) return;
  const w = G.game.winner(), win = w && (G.mode === 'local' || w === G.my);
  sound(!w ? 'draw' : win ? 'win' : 'lose');
  const kings = w ? `<img src="${pieceSrc(w > 0 ? 'wk' : 'bk')}" width="84" height="84" alt="">` : `<img src="${pieceSrc('wk')}" width="68" height="68" alt=""><img src="${pieceSrc('bk')}" width="68" height="68" alt="">`;
  const btns = [];
  if (G.moves.length >= 2) btns.push({ label: 'Analiza partii (za darmo)', cls: 'primary', fn: showAnalysis });
  if (G.mode === 'local') btns.push({ label: 'Nowa gra', fn: () => startGame('local', G.tc) });
  else if (isBot()) { btns.push({ label: 'Zagraj jeszcze raz', fn: () => startBot(G.my, G.tc, G.botLevel) }, { label: 'Inny bot', fn: botSheet }); }
  else if (!G.lost && G.net) btns.push({ label: 'Rewanż', fn: requestRematch });
  btns.push({ label: 'Zamknij', cls: 'ghost' });
  modal({ html: `<div style="text-align:center">${kings}<h2 style="font-size:28px;margin-top:6px;color:${win ? 'var(--gold)' : 'var(--ink)'}">${esc(resultTitle())}</h2><p class="muted" style="margin:4px 0 0">${esc(resultReason())}</p></div>`, buttons: btns });
}
function requestRematch() { if (!G.net || G.lost) return; G.pendingRematch = true; G.net.send('REMATCH?'); toast('Wysłano propozycję rewanżu…'); }
function offerDraw() {
  if (!G.net || G.game.isOver()) return;
  if (G.pendingDraw) return toast('Czekam na odpowiedź przeciwnika…');
  modal({ title: 'Zaproponować remis?', buttons: [{ label: 'Tak, zaproponuj', cls: 'primary', fn: () => { if (!G.net) return; G.pendingDraw = true; G.net.send('DRAW?'); toast('Zaproponowano remis.'); } }, { label: 'Anuluj', cls: 'ghost' }] });
}
function resign() {
  modal({ title: 'Poddać partię?', msg: (isBot() ? G.opp : 'Przeciwnik') + ' wygra tę partię.', buttons: [{ label: 'Poddaję się', cls: 'danger', fn: () => {
    if (G.game.isOver()) return; G.game.resign(G.my); G.net && G.net.send('RESIGN'); updateGame(); showResult(); } }, { label: 'Gram dalej', cls: 'ghost' }] });
}
function confirmExit() {
  if (!inProgress()) return showHome();
  modal({ title: 'Wyjść z gry?', msg: G.mode !== 'online' ? 'Partia nie zostanie zapisana.' : 'Połączenie z przeciwnikiem zostanie zakończone.',
    buttons: [{ label: 'Wyjdź', cls: 'danger', fn: showHome }, { label: 'Zostań', cls: 'ghost' }] });
}
window.addEventListener('beforeunload', () => { if (G.net) G.net.close(true); });

// ======================================================================= silnik Stockfish (WebAssembly w przeglądarce)
let sfUrl = null;
function sfWorker() {
  if (typeof SF_JS === 'undefined') return new Worker(BASE + 'assets/stockfish.js#' + encodeURIComponent(BASE + 'assets/stockfish.wasm'));
  if (!sfUrl) {
    const bytes = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
    const wasm = URL.createObjectURL(new Blob([bytes(SF_WASM)], { type: 'application/wasm' }));
    const js = URL.createObjectURL(new Blob([bytes(SF_JS)], { type: 'text/javascript' }));
    sfUrl = js + '#' + encodeURIComponent(wasm);
  }
  return new Worker(sfUrl);
}
class Uci {
  constructor(multipv) {
    this.w = sfWorker(); this.h = new Set();
    this.w.onmessage = e => { const l = typeof e.data === 'string' ? e.data : ''; for (const f of [...this.h]) f(l); };
    this.ready = (async () => {
      this.send('uci'); await this.wait('uciok');
      this.send('setoption name Hash value 32'); this.send('setoption name MultiPV value ' + multipv);
      this.send('isready'); await this.wait('readyok');
    })();
  }
  send(c) { this.w.postMessage(c); }
  wait(prefix) { return new Promise(res => { const f = l => { if (l.startsWith(prefix)) { this.h.delete(f); res(l); } }; this.h.add(f); }); }
  quit() { try { this.w.terminate(); } catch (e) { } }
}
// ---------------------------------------------------------------- bot
const sleep = ms => new Promise(r => setTimeout(r, ms));
function stopBot() {
  G.botTok++; G.botBusy = null; G.hint = null;
  if (G.botEngine) G.botEngine.quit(); G.botEngine = null;
}
function botEngine() {
  if (!G.botEngine) {
    try { G.botEngine = new Uci(1); G.botEngine.w.onerror = () => { toast('Nie udało się uruchomić silnika bota'); G.botEngine = null; }; }
    catch (e) { toast('Nie udało się uruchomić silnika bota'); return null; }
    G.botNew = true;
  }
  return G.botEngine;
}
// jedno zapytanie do silnika naraz; poprzednie jest przerywane
async function engineBest(skill, depth, ms) {
  const e = botEngine(); if (!e) return null;
  if (G.botBusy) { e.send('stop'); try { await G.botBusy; } catch (x) { } }
  const moves = G.moves.slice();
  const p = (async () => {
    await e.ready;
    if (G.botNew) { e.send('ucinewgame'); G.botNew = false; }
    e.send('setoption name Skill Level value ' + skill);
    e.send('position startpos' + (moves.length ? ' moves ' + moves.join(' ') : ''));
    e.send(`go depth ${depth} movetime ${ms}`);
    const l = await e.wait('bestmove');
    const b = l.split(' ')[1];
    return b && b !== '(none)' ? b : null;
  })();
  G.botBusy = p;
  const r = await p;
  if (G.botBusy === p) G.botBusy = null;
  return r;
}
async function botThink() {
  const g = G.game;
  if (!isBot() || g.isOver() || g.side === G.my) return;
  const tok = ++G.botTok, lv = BOTS[G.botLevel], t0 = performance.now(), key = G.moves.join(' ');
  let uci = null;
  const legal = g.legal();
  if (legal.length === 1) uci = toUci(legal[0]);
  else if (Math.random() < lv.rnd) {
    // słabsze boty czasem grają „ludzki” przypadkowy ruch (chętniej bicia)
    const caps = legal.filter(m => g.b[m.to]);
    const pool = caps.length && Math.random() < 0.5 ? caps : legal;
    uci = toUci(pool[Math.floor(Math.random() * pool.length)]);
  } else {
    let ms = lv.ms;
    if (G.clock.on) ms = Math.max(30, Math.min(ms, G.clock.left(-G.my, performance.now()) / 25));
    uci = await engineBest(lv.skill, lv.depth, Math.round(ms));
    if (!uci) { const m = legal[Math.floor(Math.random() * legal.length)]; uci = m && toUci(m); }
  }
  // naturalne tempo: bot „myśli” chwilę, ale nie marnuje czasu przy szybkim tempie
  let think = lv.think * (0.6 + Math.random() * 0.8);
  if (G.clock.on) think = Math.min(think, G.clock.left(-G.my, performance.now()) / 40);
  const wait = think - (performance.now() - t0);
  if (wait > 0) await sleep(wait);
  if (tok !== G.botTok || !isBot() || G.game !== g || g.isOver() || G.moves.join(' ') !== key || !uci) return;
  playMove(fromUci(uci), true);
}
function undoBot() {
  if (!G.moves.length) return;
  G.botTok++; G.hint = null;
  if (G.botBusy && G.botEngine) G.botEngine.send('stop');
  // cofnij do ostatniego własnego ruchu (twój ruch + odpowiedź bota)
  do G.moves.pop(); while (G.moves.length && Chess.replay(G.moves).side !== G.my);
  G.game = Chess.replay(G.moves);
  if (G.game.side !== G.my) { G.board.set(G.game); updateGame(); return botThink(); }
  if (G.moves.length) G.clock.switchTo(G.game.side); else G.clock.stop();
  G.board.set(G.game); updateGame();
}
async function botHint() {
  const g = G.game;
  if (g.isOver() || g.side !== G.my) return toast('Poczekaj na swój ruch');
  toast('Szukam najlepszego ruchu…');
  const key = G.moves.join(' ');
  const best = await engineBest(20, 16, 900);
  if (!best || G.moves.join(' ') !== key || !isBot()) return;
  G.hint = fromUci(best); updateGame();
}

function parseInfo(line, white) {
  if (!line.startsWith('info') || !line.includes(' pv ') || !line.includes(' score ') || /lowerbound|upperbound/.test(line)) return null;
  const t = line.split(' '), o = { multipv: 1, depth: 0 };
  for (let i = 0; i < t.length; i++) {
    if (t[i] === 'depth') o.depth = +t[i + 1];
    else if (t[i] === 'multipv') o.multipv = +t[i + 1];
    else if (t[i] === 'score') { o.mate = t[i + 1] === 'mate'; const v = +t[i + 2] * (white ? 1 : -1); if (o.mate) o.m = v; else o.cp = v; }
    else if (t[i] === 'pv') { o.pv = t.slice(i + 1); break; }
  }
  return o.pv && o.pv.length ? o : null;
}
const winFromCp = cp => 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * Math.max(-1000, Math.min(1000, cp)))) - 1);
const whiteWin = e => e.mate ? (e.m > 0 ? 100 : 0) : winFromCp(e.cp || 0);
const evalTxt = e => e.mate ? (e.m > 0 ? 'M' : '-M') + Math.abs(e.m) : ((e.cp > 0 ? '+' : '') + ((e.cp || 0) / 100).toFixed(1));
const moveAcc = loss => Math.max(0, Math.min(100, 103.1668 * Math.exp(-0.04354 * Math.max(0, loss)) - 3.1669));
const CLS = {
  brilliant: ['!!', 'Genialny ruch', 'to genialny ruch', '#1BACA6'], great: ['!', 'Świetny ruch', 'to świetny ruch', '#5C8BB0'],
  best: ['★', 'Najlepszy', 'to najlepszy ruch', '#81B64C'], excellent: ['✓', 'Doskonały', 'to doskonały ruch', '#81B64C'],
  good: ['✓', 'Dobry', 'to dobry ruch', '#95B776'], forced: ['→', 'Wymuszony', 'to jedyny możliwy ruch', '#97AF8B'],
  inaccuracy: ['?!', 'Niedokładność', 'to niedokładność', '#F7C631'], mistake: ['?', 'Błąd', 'to błąd', '#FFA459'],
  miss: ['✗', 'Przeoczenie', 'to przeoczona okazja', '#FF7769'], blunder: ['??', 'Gruby błąd', 'to gruby błąd', '#FA412D']
};
const NOTABLE = ['brilliant', 'great', 'inaccuracy', 'mistake', 'miss', 'blunder'];

const A = { run: null, pos: 0, varBase: -1, varPos: 0, varMoves: [], live: null, liveKey: '', liveLines: [], liveDepth: 0, liveTok: 0, anim: null, board: null };

class Review {
  constructor(moves, level) {
    this.moves = moves.slice(); this.level = level; this.evals = []; this.ww = moves.map(() => 50).concat([50]);
    this.plies = []; this.done = 0; this.finished = false; this.cancelled = false; this.error = null;
    this.engine = new Uci(2);
    this.go();
  }
  analyse(i, white) {
    const [, depth, time] = LEVELS[this.level], e = this.engine;
    return new Promise(res => {
      const ev = { cp: 0, pv: [] };
      const f = l => {
        if (l.startsWith('bestmove')) { e.h.delete(f); const b = l.split(' ')[1]; if (!ev.best && b && b !== '(none)') ev.best = b; res(ev); return; }
        const o = parseInfo(l, white); if (!o) return;
        if (o.multipv === 1) { Object.assign(ev, { mate: o.mate, cp: o.cp, m: o.m, best: o.pv[0], pv: o.pv, depth: o.depth }); ev.second = null; }
        else if (o.multipv === 2) ev.second = { mate: o.mate, cp: o.cp, m: o.m };
      };
      e.h.add(f);
      e.send('position startpos' + (i ? ' moves ' + this.moves.slice(0, i).join(' ') : ''));
      e.send(`go depth ${depth} movetime ${time}`);
    });
  }
  async go() {
    try {
      await this.engine.ready;
      for (let i = 0; i <= this.moves.length && !this.cancelled; i++) {
        const g = Chess.replay(this.moves, i);
        let ev;
        if (g.status === 'checkmate') { ev = { mate: true, m: g.side === WHITE ? -1 : 1 }; this.ww[i] = g.side === WHITE ? 0 : 100; }
        else if (g.isOver()) { ev = { cp: 0, over: true }; this.ww[i] = 50; }
        else { ev = await this.analyse(i, g.side === WHITE); this.ww[i] = whiteWin(ev); }
        if (this.cancelled) return;
        this.evals[i] = ev;
        if (i > 0) this.classify(i - 1);
        this.done = i + 1;
        refreshAnalysis();
      }
      this.finished = true;
    } catch (e) { this.error = 'Analiza przerwana: ' + (e.message || e); }
    this.engine.quit();
    if (!this.cancelled) refreshAnalysis();
  }
  classify(i) {
    const before = Chess.replay(this.moves, i), uci = this.moves[i], eb = this.evals[i], mover = before.side;
    const p = { uci, mover };
    p.winBefore = mover === WHITE ? this.ww[i] : 100 - this.ww[i];
    p.winAfter = mover === WHITE ? this.ww[i + 1] : 100 - this.ww[i + 1];
    const loss = Math.max(0, p.winBefore - p.winAfter);
    p.acc = moveAcc(loss);
    p.san = Chess.sanLine(this.moves, i, [uci], 1)[0] || uci;
    p.best = eb.best;
    if (eb.best) { p.bestLine = Chess.sanLine(this.moves, i, eb.pv && eb.pv.length ? eb.pv : [eb.best], 8); p.bestSan = p.bestLine[0] || eb.best; }
    const isBest = eb.best === uci;
    let c = before.legal().length === 1 ? 'forced' : isBest ? 'best' : loss <= 2 ? 'excellent' : loss <= 5 ? 'good' : loss <= 10 ? 'inaccuracy' : loss <= 20 ? 'mistake' : 'blunder';
    const prev = this.plies[i - 1];
    if ((c === 'inaccuracy' || c === 'mistake') && prev && (prev.cls === 'mistake' || prev.cls === 'blunder') && p.winBefore >= 60) c = 'miss';
    if (c === 'best' || c === 'excellent') {
      if (this.sacrifice(before, uci) && p.winAfter >= 45 && p.winBefore < 97 && loss <= 2) c = 'brilliant';
      else if (isBest && eb.second && p.winBefore < 97) {
        let sw = whiteWin(eb.second); if (mover === BLACK) sw = 100 - sw;
        let recapture = false;
        if (i > 0) { const pm = fromUci(this.moves[i - 1]), cm = fromUci(uci); recapture = cm.to === pm.to && Chess.replay(this.moves, i - 1).b[pm.to] !== 0; }
        if (p.winBefore - sw >= 15 && p.winAfter >= 40 && !recapture) c = 'great';
      }
    }
    p.cls = c;
    this.plies[i] = p;
  }
  sacrifice(before, uci) {
    const m = fromUci(uci), piece = Math.abs(before.b[m.from]), cap = Math.abs(before.b[m.to]);
    if (piece === PAWN || piece === KING || m.promo) return false;
    const color = Math.sign(before.b[m.from]);
    const g = new Chess(); g.b = before.b.slice(); g.side = before.side; g.castling = before.castling; g.ep = before.ep; g.half = before.half; g.rep = new Map();
    if (!g.move(m)) return false;
    if (cap && VALUE[cap] >= VALUE[piece]) return false;
    const att = g.minAttacker(m.to, -color);
    return att > 0 && (att < VALUE[piece] || !g.attacked(m.to, color));
  }
  acc(c) { const ps = this.plies.filter(p => p && p.mover === c); return ps.length ? ps.reduce((s, p) => s + p.acc, 0) / ps.length : 0; }
  count(c, k) { return this.plies.filter(p => p && p.mover === c && p.cls === k).length; }
}

function stopLive() { if (A.live) A.live.quit(); A.live = null; A.liveKey = ''; A.liveLines = []; }
function stopAnalysis() { if (A.run) { A.run.cancelled = true; A.run.engine.quit(); } A.run = null; stopLive(); }
function startLive() {
  if (A.live) return;
  const u = A.live = new Uci(3);
  u.searching = false; u.ignore = false;
  u.h.add(l => {
    if (A.live !== u) return;
    if (l.startsWith('bestmove')) { if (u.ignore) u.ignore = false; else { u.searching = false; pushLive(true); } return; }
    if (u.ignore) return;
    const o = parseInfo(l, u.white); if (!o || o.multipv > 3) return;
    if (o.multipv === 1) u.lines = [];
    u.lines[o.multipv - 1] = o; A.liveDepth = o.depth;
    if (o.multipv >= u.expected) pushLive(false);
  });
  u.ready.then(() => { if (A.live === u) refreshAnalysis(); });
}
let liveT = 0;
function pushLive(force) {
  const now = performance.now();
  if (!force && now - liveT < 250) return;
  liveT = now;
  const u = A.live; if (!u || !u.lines) return;
  A.liveLines = u.lines.filter(Boolean);
  refreshLines();
}
async function liveAnalyse(moves, g) {
  const u = A.live; if (!u) return;
  await u.ready;
  if (A.live !== u) return;
  if (u.searching) { u.send('stop'); u.ignore = true; }
  u.lines = []; u.white = g.side === WHITE; u.expected = Math.max(1, Math.min(3, g.legal().length));
  u.send('position startpos' + (moves.length ? ' moves ' + moves.join(' ') : ''));
  u.send('go depth 22 movetime 15000');
  u.searching = true;
}

const shown = () => A.varBase >= 0 ? G.moves.slice(0, A.varBase).concat(A.varMoves.slice(0, A.varPos)) : G.moves.slice(0, A.pos);
function exitVar() { if (A.varBase < 0) return; A.pos = A.varBase; A.varBase = -1; A.varMoves = []; A.varPos = 0; }

function showAnalysis() {
  if (!G.moves.length) return;
  closeModal();
  const same = A.run && A.run.moves.join() === G.moves.join() && A.run.level === S.level && !A.run.error;
  if (!same) { stopAnalysis(); A.run = new Review(G.moves, S.level); A.pos = 0; A.varBase = -1; A.varMoves = []; }
  A.boardKey = null;
  render(`${appBar('Analiza partii', true, `<button class="ibtn" id="set" aria-label="Ustawienia">${ic('gear')}</button>`)}
    <div class="ana">
      <div><div class="anaboard"><div class="evalbar" id="ebar"><i></i><b></b></div>
        <div class="boardbox" style="--bs:${boardSize(BS_ANA)}px"><canvas id="aboard" aria-label="Plansza analizy"></canvas></div></div>
        <div class="actions" style="margin-top:10px" id="nav"></div></div>
      <div class="side">
        <div><div class="prog" id="prog"><i></i></div><div class="tiny" id="progt" style="margin-top:4px"></div></div>
        <div class="card stack" style="padding:14px"><div class="row" style="flex-wrap:nowrap"><span class="badge" id="badge"></span><h3 class="grow" id="atitle"></h3><span class="evalpill" id="aeval"></span></div>
          <div class="muted small" id="adetail" style="white-space:pre-line"></div><button class="btn wide" id="backgame" hidden>Wróć do partii</button></div>
        <div class="card" style="padding:14px"><div class="row" style="justify-content:space-between"><h3>Najlepsze ruchy</h3><span class="tiny" id="ldepth"></span></div>
          <div id="lines" style="margin-top:6px"></div><p class="tiny" style="margin:6px 0 0">Kliknij linię, żeby ją zagrać, albo przesuwaj figury na planszy. Prawy przycisk (na telefonie: przytrzymaj palec) rysuje strzałki i zaznacza pola. Strzałki ← → przechodzą przez ruchy.</p></div>
        <div class="card" style="padding:10px"><canvas class="graph" id="graph" aria-label="Wykres przewagi"></canvas></div>
        <div class="card" id="summary"></div>
        <div class="card moves" id="amoves" style="max-height:340px"></div>
      </div>
    </div>`, 'analysis');
  $('#back').onclick = showGame;
  $('#set').onclick = () => showSettings('analysis');
  $('#backgame').onclick = () => { exitVar(); refreshAnalysis(); };
  A.board = new Board($('#aboard'), { onMove: analysisMove });
  A.board.flip = G.mode !== 'local' && G.my === BLACK;
  const nav = $('#nav');
  [['first', 'Początek', 0], ['back', 'Wstecz', 1], ['next', 'Dalej', 2], ['last', 'Koniec', 3]].forEach(([i, l, k]) => {
    const b = document.createElement('button'); b.className = 'act'; b.innerHTML = ic(i) + l; b.onclick = () => navigate(k); nav.appendChild(b);
  });
  $('#graph').onpointerdown = e => {
    const r = e.target.getBoundingClientRect(), n = G.moves.length;
    exitVar(); A.pos = Math.max(0, Math.min(n, Math.round((e.clientX - r.left) / r.width * n))); refreshAnalysis();
  };
  startLive();
  refreshAnalysis();
}
document.addEventListener('keydown', e => {
  if (G.screen !== 'analysis' || openModal || e.target.tagName === 'INPUT') return;
  const k = { ArrowLeft: 1, ArrowRight: 2, Home: 0, End: 3 }[e.key];
  if (k !== undefined) { e.preventDefault(); navigate(k); }
});
function navigate(k) {
  const n = G.moves.length;
  if (A.varBase >= 0) {
    if (k === 0) { exitVar(); A.pos = 0; }
    else if (k === 1) { if (A.varPos > 0) A.varPos--; if (!A.varPos) exitVar(); }
    else if (k === 2) { if (A.varPos < A.varMoves.length) { A.anim = fromUci(A.varMoves[A.varPos]); A.varPos++; } }
    else A.varPos = A.varMoves.length;
  } else {
    if (k === 0) A.pos = 0; else if (k === 1) A.pos = Math.max(0, A.pos - 1);
    else if (k === 2 && A.pos < n) { A.anim = fromUci(G.moves[A.pos]); A.pos++; } else if (k === 3) A.pos = n;
  }
  refreshAnalysis();
}
function analysisMove(from, to) {
  const g = Chess.replay(shown()), opts = g.legalFrom(from).filter(m => m.to === to);
  if (!opts.length) return;
  if (opts.length === 1) playAnalysis(toUci(opts[0])); else askPromotion(from, to, g.side, m => playAnalysis(toUci(m)));
}
function playAnalysis(uci) {
  const g = Chess.replay(shown()), m = fromUci(uci);
  if (!g.isLegal(m)) return;
  A.anim = m;
  if (A.varBase < 0) {
    if (A.pos < G.moves.length && G.moves[A.pos] === uci) { A.pos++; return refreshAnalysis(); }
    A.varBase = A.pos; A.varMoves = []; A.varPos = 0;
  }
  A.varMoves.length = A.varPos; A.varMoves.push(uci); A.varPos++;
  refreshAnalysis();
}
function setEval(label, ww) {
  const bar = $('#ebar'); if (!bar) return;
  bar.classList.toggle('flip', A.board.flip);
  bar.querySelector('i').style.height = ww + '%';
  const b = bar.querySelector('b'), whiteAhead = ww >= 50;
  b.textContent = label.replace(/[+-]/g, '');
  b.style.color = whiteAhead ? '#403d39' : '#f2f2f2';
  b.style[whiteAhead !== A.board.flip ? 'bottom' : 'top'] = '6px'; b.style[whiteAhead !== A.board.flip ? 'top' : 'bottom'] = 'auto';
  const p = $('#aeval'); p.hidden = !label; p.textContent = label; p.className = 'evalpill ' + (whiteAhead ? 'w' : 'b');
}
function refreshAnalysis() {
  if (G.screen !== 'analysis' || !A.board) return;
  const R = A.run, n = G.moves.length, inVar = A.varBase >= 0;
  A.pos = Math.max(0, Math.min(A.pos, n));
  const pr = $('#prog'), pt = $('#progt');
  if (R && R.error) { pr.hidden = true; pt.textContent = R.error; pt.style.color = '#ff8a80'; }
  else if (R && !R.finished) { pr.hidden = false; pr.querySelector('i').style.width = (R.done / (n + 1) * 100) + '%'; pt.textContent = R.done ? `Analizuję partię… ${R.done} / ${n + 1}` : 'Uruchamiam silnik Stockfish…'; }
  else { pr.hidden = true; pt.textContent = `Stockfish 19 · analiza ${LEVELS[S.level][0].toLowerCase()}`; }
  const mv = shown(), bkey = mv.join(' ') + '|' + inVar;
  const ply = !inVar && R && A.pos > 0 ? R.plies[A.pos - 1] : null;
  // znaczniki ustawiamy ZANIM narysujemy planszę – inaczej przez chwilę widać stare oznaczenia
  A.board.mark = null; A.board.arrow = null;
  if (ply) {
    const m = fromUci(ply.uci), c = CLS[ply.cls];
    A.board.mark = { from: m.from, to: m.to, color: c[3], symbol: c[0] };
    if (ply.best && ply.best !== ply.uci && ply.acc < 90) { const b = fromUci(ply.best); A.board.arrow = { from: b.from, to: b.to }; }
  }
  if (inVar && A.liveKey === mv.join(' ') && A.liveLines.length) { const b = fromUci(A.liveLines[0].pv[0]); A.board.arrow = { from: b.from, to: b.to }; }
  let g;
  if (bkey !== A.boardKey) {
    // nowa pozycja: ustaw planszę (zaznaczenie figury znika tylko wtedy)
    A.boardKey = bkey; g = Chess.replay(mv); A.g = g;
    A.board.anim = null;
    A.board.set(g);
    if (A.anim) { A.board.animate(A.anim); sound('move'); }
  } else { g = A.g; A.board.draw(); }
  A.anim = null;
  A.board.movable = g.isOver() ? 0 : g.side;
  // ocena
  let label = '', ww = 50;
  if (!inVar && R && R.evals[A.pos]) { const e = R.evals[A.pos]; label = e.over ? '½' : evalTxt(e); ww = R.ww[A.pos]; }
  if (g.status === 'checkmate') { label = '#'; ww = g.side === WHITE ? 0 : 100; } else if (g.isOver()) { label = '½'; ww = 50; }
  setEval(label, ww);
  // opis
  const badge = $('#badge'), title = $('#atitle'), det = $('#adetail');
  $('#backgame').hidden = !inVar; title.style.color = '';
  if (inVar) {
    badge.hidden = false; badge.textContent = '✎'; badge.style.background = 'var(--blue-d)';
    title.textContent = 'Twój wariant';
    const vs = Chess.sanLine(G.moves, A.varBase, A.varMoves, 99);
    det.textContent = `Od ruchu ${Math.floor(A.varBase / 2) + 1} partii: ` + vs.map((s, i) => { const p = A.varBase + i; return (p % 2 === 0 ? `${p / 2 + 1}. ` : i === 0 ? `${(p + 1) / 2}… ` : '') + (i === A.varPos - 1 ? `[${s}]` : s); }).join(' ') + '\nSilnik ocenia każdy twój ruch na bieżąco.';
  } else if (A.pos === 0) {
    badge.hidden = true; title.textContent = 'Pozycja początkowa';
    det.textContent = 'Przechodź przez ruchy przyciskami lub strzałkami, kliknij ruch na liście albo na wykresie. Możesz też sam przesuwać figury.';
  } else if (!ply) {
    badge.hidden = true; title.textContent = `${Math.ceil(A.pos / 2)}${A.pos % 2 ? '.' : '…'} ${g.san[g.san.length - 1]}`;
    det.textContent = R && R.error ? '' : 'Ten ruch jest jeszcze analizowany…';
  } else {
    const c = CLS[ply.cls];
    badge.hidden = false; badge.textContent = c[0]; badge.style.background = c[3];
    title.textContent = `${ply.san} ${c[2]}`; title.style.color = c[3];
    let d = `${ply.mover === WHITE ? nameOf(WHITE) : nameOf(BLACK)} · szansa wygranej ${Math.round(ply.winBefore)}% → ${Math.round(ply.winAfter)}%`;
    if (ply.bestSan && ply.best !== ply.uci) { d += `\nLepsze było: ${ply.bestSan}` + (ply.acc < 90 ? ' (zielona strzałka)' : ''); if (ply.bestLine.length > 1) d += `\nNp.: ${ply.bestLine.join(' ')}`; }
    det.textContent = d;
  }
  drawGraph();
  // lista ruchów
  const san = Chess.replay(G.moves).san, cur = inVar ? A.varBase : A.pos;
  $('#amoves').innerHTML = san.map((s, i) => {
    const p = R && R.plies[i], nt = p && NOTABLE.includes(p.cls);
    return (i % 2 ? '' : `<span class="n">${i / 2 + 1}.</span>`) + `<button data-i="${i + 1}" class="${i + 1 === cur ? 'cur' : ''}" style="${nt ? 'color:' + CLS[p.cls][3] : ''}">${esc(s)}${nt ? ' ' + CLS[p.cls][0] : ''}</button>`;
  }).join('') + (san.length % 2 ? '<span></span>' : '');
  $('#amoves').querySelectorAll('[data-i]').forEach(b => b.onclick = () => { exitVar(); A.pos = +b.dataset.i; refreshAnalysis(); });
  // podsumowanie
  const sm = $('#summary');
  if (!R || R.done <= 1) sm.innerHTML = `<p class="muted" style="margin:0">${R && R.error ? 'Brak wyników.' : 'Podsumowanie pojawi się w trakcie analizy.'}</p>`;
  else sm.innerHTML = `<h3>Podsumowanie</h3><div class="sum" style="margin-top:10px"><span></span><span class="c small muted">${esc(nameOf(WHITE))}</span><span class="c small muted">${esc(nameOf(BLACK))}</span>
    <span class="tiny">Celność (%)</span><span class="acc" style="background:#f2f2f2;color:#262421">${R.acc(WHITE).toFixed(1)}</span><span class="acc" style="background:#403d39">${R.acc(BLACK).toFixed(1)}</span>
    ${Object.entries(CLS).map(([k, c]) => `<span>${c[1]}</span>` + [WHITE, BLACK].map(col => { const v = R.count(col, k); return `<span class="c" style="color:${v ? c[3] : '#5e5a55'}">${v} ${c[0]}</span>`; }).join('')).join('')}</div>`;
  // silnik na żywo
  const key = mv.join(' ');
  if (A.live && key !== A.liveKey) {
    A.liveKey = key; A.liveLines = []; A.liveDepth = 0;
    if (!g.isOver()) liveAnalyse(mv, g);
  }
  refreshLines();
}
function nameOf(c) { return G.mode === 'local' ? (c === WHITE ? 'Białe' : 'Czarne') : c === G.my ? S.name : G.opp; }
function refreshLines() {
  const el = $('#lines'); if (G.screen !== 'analysis' || !el) return;
  const mv = shown(), g = Chess.replay(mv);
  if (g.isOver()) { el.innerHTML = '<p class="muted" style="margin:0">Koniec partii — brak ruchów.</p>'; $('#ldepth').textContent = ''; return; }
  if (!A.live || !A.liveLines.length || A.liveKey !== mv.join(' ')) { el.innerHTML = '<div class="row"><div class="spin" style="width:16px;height:16px"></div><span class="muted">Silnik liczy…</span></div>'; $('#ldepth').textContent = ''; return; }
  $('#ldepth').textContent = 'głębokość ' + A.liveDepth;
  el.innerHTML = A.liveLines.map((l, i) => {
    const san = Chess.sanLine(mv, mv.length, l.pv, 7), ww = whiteWin(l);
    const txt = san.map((s, j) => { const p = mv.length + j; return (p % 2 === 0 ? `${p / 2 + 1}. ` : j === 0 ? `${(p + 1) / 2}… ` : '') + s; }).join(' ');
    return `<button class="line" data-l="${i}"><span class="evalpill ${ww >= 50 ? 'w' : 'b'}">${evalTxt(l)}</span><span>${esc(txt)}</span></button>`;
  }).join('');
  el.querySelectorAll('[data-l]').forEach(b => b.onclick = () => playAnalysis(A.liveLines[+b.dataset.l].pv[0]));
  if (A.varBase >= 0 || !A.run || !A.run.evals[A.pos]) {
    const l = A.liveLines[0];
    setEval(evalTxt(l), whiteWin(l));
    if (A.varBase >= 0) { const b = fromUci(l.pv[0]); if (!A.board.arrow || A.board.arrow.from !== b.from || A.board.arrow.to !== b.to) { A.board.arrow = { from: b.from, to: b.to }; A.board.draw(); } }
  }
}
function drawGraph() {
  const c = $('#graph'); if (!c || !c.clientWidth) return;
  const R = A.run, dpr = devicePixelRatio || 1, W = c.clientWidth, H = c.clientHeight;
  c.width = W * dpr; c.height = H * dpr;
  const x = c.getContext('2d'); x.setTransform(dpr, 0, 0, dpr, 0, 0);
  x.fillStyle = '#403d39'; x.fillRect(0, 0, W, H);
  const n = G.moves.length, X = i => W * i / Math.max(1, n), Y = v => H * (1 - v / 100);
  if (R && R.done) {
    x.fillStyle = '#f2f2f2'; x.beginPath(); x.moveTo(0, H);
    for (let i = 0; i < R.done; i++) x.lineTo(X(i), Y(R.ww[i]));
    x.lineTo(X(R.done - 1), H); x.fill();
    x.fillStyle = '#88888855'; x.fillRect(0, H / 2 - 1, W, 2);
    R.plies.forEach((p, i) => { if (p && NOTABLE.includes(p.cls)) { x.fillStyle = CLS[p.cls][3]; x.beginPath(); x.arc(X(i + 1), Y(R.ww[i + 1]), 4.5, 0, 7); x.fill(); } });
  }
  const cur = A.varBase >= 0 ? A.varBase : A.pos;
  x.fillStyle = '#81b64c'; x.fillRect(X(cur) - 1.5, 0, 3, H);
}

// ======================================================================= ustawienia
let setFrom = 'home';
function showSettings(from) {
  if (from) setFrom = from;
  if (setFrom === 'analysis') stopLive();
  const y = G.screen === 'settings' ? window.scrollY : 0;
  const [L, D] = colors();
  render(`${appBar('Wygląd i ustawienia', true)}
    <div class="grid2">
      <div class="stack">
        <div class="card stack"><h3>Plansza</h3><div class="swatches">${BOARDS.map((b, i) => `<button class="sw ${S.board === i ? 'on' : ''}" data-b="${i}"><span class="mini"><i style="background:${b[1]}"></i><i style="background:${b[2]}"></i><i style="background:${b[2]}"></i><i style="background:${b[1]}"></i></span>${b[0]}</button>`).join('')}</div>
          <div class="row"><label class="row small">Własne kolory: <input type="color" id="cl" value="${S.custom[0]}"> <input type="color" id="cd" value="${S.custom[1]}"></label><button class="chip ${S.board === -1 ? 'on' : ''}" id="usecustom">Użyj własnych</button></div></div>
        <div class="card stack"><h3>Figury</h3><div class="swatches">${Object.entries(JC_PIECES).map(([id, s]) => `<button class="sw ${S.pieces === id ? 'on' : ''}" data-p="${id}"><span class="pcs"><img src="${pieceSrc('wk', id)}" style="background:${D}" alt="" loading="lazy"><img src="${pieceSrc('bn', id)}" style="background:${L}" alt="" loading="lazy"></span>${esc(s.name)}</button>`).join('')}</div></div>
        <div class="card stack"><h3>Tło strony</h3><div class="chips3">${[['default', 'Domyślne'], ['color', 'Kolor'], ['image', 'Zdjęcie']].map(([k, n]) => `<button class="chip ${S.bg === k ? 'on' : ''}" data-bg="${k}">${n}</button>`).join('')}</div>
          <div class="row"><label class="row small">Kolor tła: <input type="color" id="bgc" value="${S.bgColor}"></label><label class="btn" style="min-height:40px;padding:8px 14px 11px">Wybierz zdjęcie…<input type="file" id="bgf" accept="image/*" hidden></label></div>
          <label class="small">Przyciemnienie tła: <b id="dimv">${S.dim}%</b><input type="range" id="dim" min="0" max="85" value="${S.dim}"></label></div>
      </div>
      <div class="stack">
        <div class="card stack"><h3>Dźwięki</h3><label class="toggle" style="padding-top:0"><span>Dźwięki gry</span><input type="checkbox" data-t="sound" ${S.sound ? 'checked' : ''}></label>
          <div><b class="small muted">Zestaw dźwięków</b><div class="chips3" style="margin-top:8px">${Object.entries(SNDSETS).map(([k, v]) => `<button class="chip ${S.sndset === k ? 'on' : ''}" data-ss="${k}">${v.name}</button>`).join('')}</div></div>
          <label class="small">Głośność: <b id="volv">${S.vol}%</b><input type="range" id="vol" min="0" max="100" value="${S.vol}"></label>
          <div class="row">${[['move', 'Ruch'], ['capture', 'Bicie'], ['check', 'Szach'], ['win', 'Wygrana'], ['notify', 'Przeciwnik']].map(([k, n]) => `<button class="chip" data-snd="${k}">${n}</button>`).join('')}</div></div>
        <div class="card"><h3>Gra</h3>${[['hints', 'Pokazuj możliwe ruchy'], ['coords', 'Współrzędne na planszy'], ['last', 'Podświetlaj ostatni ruch'], ['animate', 'Animacja ruchów']].map(([k, n]) => `<label class="toggle"><span>${n}</span><input type="checkbox" data-t="${k}" ${S[k] ? 'checked' : ''}></label>`).join('')}</div>
        <div class="card stack"><h3>Analiza partii</h3><div class="chips3">${LEVELS.map((l, i) => `<button class="chip ${S.level === i ? 'on' : ''}" data-lv="${i}">${l[0]}</button>`).join('')}</div>
          <p class="tiny" style="margin:0">Szybka trwa kilkanaście sekund, dokładna kilka minut — ale lepiej ocenia trudne pozycje.</p></div>
        <div class="card stack"><h3>Podgląd</h3><canvas id="spv" style="width:100%;max-width:300px;aspect-ratio:1;border-radius:8px"></canvas></div>
        <div class="card"><h3>O stronie</h3><p class="tiny" style="margin:8px 0 0">Jchess · analiza: Stockfish 19 w wersji WebAssembly (stockfish.js, GNU GPL v3, github.com/nmrugg/stockfish.js) działa w twojej przeglądarce.
          Zestawy figur z projektu lichess.org: Cburnett i Merida — GPL; California, Maestro, Cardinal, Staunty, Tatiana, Fresca, Gioco, Dubrovny, Horsey — CC BY-NC-SA 4.0; pozostałe wg licencji autorów. Dźwięki: zestaw SFX z lichess.org (Enigmahack, AGPLv3+) i dźwięki z programu PyChess (GPL). Dlatego Jchess jest darmowy i nie może być sprzedawany.</p></div>
      </div>
    </div>`, 'settings');
  window.scrollTo(0, y);
  new Board($('#spv')).set(Chess.replay(['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'g8f6']));
  $('#back').onclick = () => setFrom === 'game' && G.started ? showGame() : setFrom === 'analysis' && A.run ? showAnalysis() : showHome();
  const upd = () => { save(); showSettings(); };
  document.querySelectorAll('[data-b]').forEach(b => b.onclick = () => { S.board = +b.dataset.b; upd(); });
  document.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { S.pieces = b.dataset.p; upd(); });
  document.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => { S.level = +b.dataset.lv; upd(); });
  document.querySelectorAll('[data-t]').forEach(b => b.onchange = () => { S[b.dataset.t] = b.checked; save(); Board.redrawAll(); });
  $('#cl').oninput = $('#cd').oninput = () => { S.custom = [$('#cl').value, $('#cd').value]; S.board = -1; save(); Board.redrawAll(); };
  $('#cl').onchange = $('#cd').onchange = upd;
  $('#usecustom').onclick = () => { S.board = -1; upd(); };
  document.querySelectorAll('[data-bg]').forEach(b => b.onclick = () => {
    if (b.dataset.bg === 'image' && !BGIMG) return $('#bgf').click();
    S.bg = b.dataset.bg; save(); applyBg(); showSettings();
  });
  $('#bgc').oninput = e => { S.bgColor = e.target.value; S.bg = 'color'; save(); applyBg(); };
  $('#bgc').onchange = upd;
  $('#bgf').onchange = e => e.target.files[0] && loadBgImage(e.target.files[0]);
  document.querySelectorAll('[data-ss]').forEach(b => b.onclick = () => { S.sndset = b.dataset.ss; save(); const was = S.sound; S.sound = true; sound('move'); S.sound = was; showSettings(); });
  $('#vol').oninput = e => { S.vol = +e.target.value; $('#volv').textContent = S.vol + '%'; save(); };
  $('#vol').onchange = () => sound('move');
  document.querySelectorAll('[data-snd]').forEach(b => b.onclick = () => { const was = S.sound; S.sound = true; sound(b.dataset.snd); S.sound = was; });
  $('#dim').oninput = e => { S.dim = +e.target.value; $('#dimv').textContent = S.dim + '%'; save(); applyBg(); };
}

// ======================================================================= start
applyBg();
routeFromUrl(false);
window.JCHESS = { G, A, S, NET, playMove, listPublic, Online, showAnalysis };
}
