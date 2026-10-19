const T = {
  en: {
    n_ceo: "CEO", n_co: "Company", n_pf: "Projects", n_ga: "Gallery", n_ct: "Contact",
    h1: "We build worlds worth returning to.",
    quote: "“Games are not just entertainment — they are where art, technology and real emotion meet.”",
    cta1: "Book a consultation",
    ceo_h: "A word from the CEO",
    ceo_p1: "Hello! I’m Ayana Osmonalieva, founder and CEO of REILEGH SILVERS.",
    ceo_p2: "My passion for the game industry began with simple ideas and a big wish to create unique virtual worlds. Today REILEGH SILVERS is an ambitious brand and a team united by one goal: making dynamic, gripping and visually striking games.",
    ceo_p3: "As a leader, I’m responsible for the creative vision, the studio’s strategy and the quality of every product we release. Every detail matters to us — from interaction mechanics and code optimization to the atmosphere of the soundtrack and the visual style.",
    ceo_role: "Founder & CEO",
    co_h: "About the company",
    co_p: "REILEGH SILVERS is an independent game studio focused on original game titles.",
    d1h: "Game development", d1p: "From the first idea and prototype to a full release on modern platforms.",
    d2h: "Visual art & design", d2p: "Concept art, 3D/2D modeling and animation that give each game its own atmosphere.",
    d3h: "Innovation & technology", d3p: "Modern engines, smooth mechanics and thoughtful UX/UI design of the player experience.",
    pf_h: "Projects",
    g1n: "Sea Battle", g1p: "A hand-drawn notebook take on the classic naval duel, with sound effects, music and a computer opponent.", g1t: "Strategy",
    g2n: "Last Card", g2p: "A real-time card game with Uno rules for up to 10 players on different devices, with private rooms and bot practice.", g2t: "Multiplayer",
    g3n: "Winnie-the-Pooh", g3p: "A warm conversational character: chat about friendship, happiness and being late, in Pooh’s own voice.", g3t: "Interactive AI",
    ga_h: "Gallery",
    ct_h: "Open to collaboration and new ideas",
    ct_p: "We’re glad to partner with investors, publishers, talented developers and, of course, players. Step into our worlds, try the projects and stay in touch.",
    ct_mail: "Email", ct_tg: "Telegram",
    f_name: "Your name", f_contact: "Telegram or email", f_msg: "What would you like to discuss?", f_send: "Send request",
    ok: "Thank you! Your request was sent — we’ll reply soon.", err: "Could not send the request. Please write to us by email or Telegram.", sending: "Sending…"
  },
  ru: {
    n_ceo: "CEO", n_co: "Компания", n_pf: "Проекты", n_ga: "Галерея", n_ct: "Контакты",
    h1: "Создаем миры, в которые хочется возвращаться.",
    quote: "«Игры — это не просто развлечение, это слияние искусства, технологий и живых эмоций».",
    cta1: "Записаться на консультацию",
    ceo_h: "Слово генерального директора",
    ceo_p1: "Приветствую! Я — Осмоналиева Аяна, основатель и генеральный директор компании REILEGH SILVERS.",
    ceo_p2: "Моя страсть к игровой индустрии началась с простых идей и огромного желания создавать уникальные виртуальные миры. Сегодня REILEGH SILVERS — это амбициозный бренд и команда, объединенная общей целью: разрабатывать динамичные, захватывающие и визуально впечатляющие игры.",
    ceo_p3: "Как руководитель, я отвечаю за концептуальное видение проектов, стратегическое развитие студии и качество каждого продукта, который мы выпускаем. Для нас важна каждая деталь — от механики взаимодействия и оптимизации кода до атмосферного саундтрека и визуального стиля.",
    ceo_role: "Основатель и генеральный директор",
    co_h: "О компании",
    co_p: "REILEGH SILVERS — независимая игровая компания (Indie Game Studio), специализирующаяся на разработке оригинальных игровых тайтлов.",
    d1h: "Разработка игр", d1p: "Создание проектов от идеи и прототипа до полноценного релиза на современных платформах.",
    d2h: "Визуальный арт и дизайн", d2p: "Концепт-арты, 3D/2D-моделирование и анимация — неповторимая атмосфера каждой игры.",
    d3h: "Инновации и технологии", d3p: "Передовые движки, плавная механика и современное проектирование игрового опыта (UX/UI).",
    pf_h: "Проекты",
    g1n: "Морской бой", g1p: "Классическая дуэль флотов в стиле рисунка на тетрадном листе: звуки, музыка и соперник-компьютер.", g1t: "Стратегия",
    g2n: "Последняя карта", g2p: "Карточная игра по правилам Уно для 10 игроков с разных устройств: комнаты по коду и тренировка с ботами.", g2t: "Мультиплеер",
    g3n: "Винни-Пух", g3p: "Тёплый разговорный персонаж: беседа о дружбе, счастье и опозданиях — голосом самого Пуха.", g3t: "Интерактив с ИИ",
    ga_h: "Галерея",
    ct_h: "Открыты к сотрудничеству и новым идеям!",
    ct_p: "Мы всегда рады партнерству с инвесторами, издателями, талантливыми разработчиками и, конечно же, игроками. Погрузитесь в наши миры, оценивайте проекты и оставайтесь на связи!",
    ct_mail: "Почта", ct_tg: "Телеграм",
    f_name: "Ваше имя", f_contact: "Telegram или email", f_msg: "Что хотите обсудить?", f_send: "Отправить заявку",
    ok: "Спасибо! Заявка отправлена — скоро ответим.", err: "Не удалось отправить заявку. Напишите нам на почту или в Телеграм.", sending: "Отправляем…"
  }
};

function setLanguage(lang) {
  const dict = T[lang] || T.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.toggle('on', btn.getAttribute('data-l') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage('ru'); // По умолчанию устанавливаем русский язык

  document.querySelectorAll('.lang button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-l');
      setLanguage(lang);
    });
  });
});