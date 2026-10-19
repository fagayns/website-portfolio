require('dotenv').config();
const express = require('express');
const path = require('path');

const { BOT_TOKEN, CHAT_ID, PORT = 3000 } = process.env;
const app = express();
app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public')));

const hits = new Map(); // простая защита: 5 заявок / 10 минут с одного IP
const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

app.post('/api/telegram', async (req, res) => {
  try {
    const { name, contact, message, website } = req.body || {};
    if (website) return res.json({ ok: true });            // honeypot
    if (!name || !contact || !message) return res.status(400).json({ ok: false });

    const now = Date.now();
    const list = (hits.get(req.ip) || []).filter(t => now - t < 600000);
    if (list.length >= 5) return res.status(429).json({ ok: false });
    hits.set(req.ip, [...list, now]);

    const text =
      `🎮 <b>Новая заявка — REILEGH SILVERS</b>\n\n` +
      `<b>Имя:</b> ${esc(name).slice(0, 80)}\n` +
      `<b>Контакт:</b> ${esc(contact).slice(0, 120)}\n` +
      `<b>Сообщение:</b> ${esc(message).slice(0, 1500)}`;

    const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' })
    });
    if (!r.ok) throw new Error('telegram ' + r.status);
    res.json({ ok: true });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ ok: false });
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));