let L = 'en';
try { L = localStorage.getItem('lang') || 'en'; } catch (e) {}

const marquee = {
  en: ['Indie games', 'Art', 'Technology', 'Emotion', 'Worlds'],
  ru: ['Инди-игры', 'Арт', 'Технологии', 'Эмоции', 'Миры']
};

function setLang(l) {
  L = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = T[l][el.dataset.i18n]);
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === l));
  const row = marquee[l].map(x => `<span>${x}</span><b>◆</b>`).join('');
  document.getElementById('mq').innerHTML = row.repeat(4);
  try { localStorage.setItem('lang', l); } catch (e) {}
}
document.querySelectorAll('.lang button').forEach(b => b.onclick = () => setLang(b.dataset.l));
setLang(L);

// параллакс шара
const orb = document.getElementById('orb');
addEventListener('mousemove', e => {
  orb.style.translate = `${(e.clientX / innerWidth - .5) * -24}px ${(e.clientY / innerHeight - .5) * -24}px`;
});

// форма → /api/telegram
document.getElementById('f').onsubmit = async e => {
  e.preventDefault();
  const st = document.getElementById('st');
  st.textContent = T[L].sending;
  try {
    const r = await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    });
    if (!r.ok) throw new Error();
    st.textContent = T[L].ok;
    e.target.reset();
  } catch {
    st.textContent = T[L].err;
  }
};