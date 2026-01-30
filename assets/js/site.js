(function () {
    const LANG_KEY = 'site_lang';

    const langElems = {
        // research: FASTER
        'proj-faster': {
            en: 'Horizon EU project examining the impact and role of first responders across the full emergency lifecycle—planning, logistics, maintenance/diagnostics, training, and management—to strengthen the EU’s ability to respond to emergencies.',
            gr: 'Έργο Horizon της ΕΕ που εξετάζει τον ρόλο και τον αντίκτυπο των πρώτων ανταποκριτών σε όλο τον κύκλο ζωής μιας έκτακτης ανάγκης—σχεδιασμός, υποστήριξη, συντήρηση/διάγνωση, εκπαίδευση και διαχείριση—για την ενίσχυση της ικανότητας της ΕΕ να ανταποκρίνεται σε κρίσεις.'
        },
        'proj-faster-1': { en: '<b>Role:</b> Senior Researcher for UniWA', gr: '<b>Ρόλος:</b> Κύριος Ερευνητής για το ΠαΔΑ' },
        'proj-faster-2': {
            en: 'Delivered tools: MORSE (gesture recognition), RESCUE (encrypted BLE messaging when infrastructure is down), Smart Textiles (uniform sensors), K9 collar (rescue alerts)',
            gr: 'Παραδοθέντα εργαλεία: MORSE (αναγνώριση χειρονομιών), RESCUE (κρυπτογραφημένα μηνύματα BLE όταν η υποδομή επικοινωνίας δεν είναι διαθέσιμη), Smart Textiles (αισθητήρες στη στολή), K9 collar (ειδοποιήσεις διάσωσης)'
        },
        'proj-faster-3': {
            en: 'Focus: safe communication, AI, encryption, and mobile applications for first responders',
            gr: 'Εστίαση: ασφαλής επικοινωνία, AI, κρυπτογράφηση και εφαρμογές κινητών για πρώτους ανταποκριτές'
        },

        // research: TARDIS
        'proj-tardis-desc': {
            en: 'Horizon Europe program whose primary goal is to significantly ease the complexity and reduce the effort of building correct and efficient heterogeneous swarms.',
            gr: 'Πρόγραμμα Horizon Europe με κύριο στόχο να μειώσει σημαντικά την πολυπλοκότητα και το κόστος δημιουργίας ορθών και αποδοτικών ετερογενών σμηνών.'
        },
        'proj-tardis-1': { en: '<b>Role:</b> Senior Researcher for NKUA', gr: '<b>Ρόλος:</b> Κύριος Ερευνητής για το ΕΚΠΑ' },
        'proj-tardis-2': { en: 'Responsible for WP7: Implementation and Evaluation', gr: 'Υπεύθυνος για το WP7: Υλοποίηση και Αξιολόγηση' },
        'proj-tardis-3': { en: 'Coordinating the Use Cases and respective Deliverables', gr: 'Συντονισμός των περιπτώσεων χρήσης (Use Cases) και των αντίστοιχων παραδοτέων' },

        // research: GENERA
        'proj-genera': {
            en: 'LIFE EU program that assists public authorities in transforming the energy context of the European regions to facilitate a rapid transition to a decarbonized and sustainable economy.',
            gr: 'Πρόγραμμα LIFE της ΕΕ που βοηθά τις δημόσιες αρχές να μετασχηματίσουν το ενεργειακό πλαίσιο των ευρωπαϊκών περιφερειών, ώστε να διευκολυνθεί η ταχεία μετάβαση σε μια απανθρακοποιημένη και βιώσιμη οικονομία.'
        },
        'proj-genera-1': { en: '<b>Role:</b> Senior Researcher for UniWA', gr: '<b>Ρόλος:</b> Κύριος Ερευνητής για το ΠαΔΑ' },
        'proj-genera-2': { en: 'Responsible for the design and development of a Web 3.0 strategy and a card‑based game to motivate users on the transition to green energy.', gr: 'Υπεύθυνος για τον σχεδιασμό και την ανάπτυξη στρατηγικής Web 3.0 και παιχνιδιού με κάρτες, για την ενθάρρυνση της μετάβασης σε πράσινη ενέργεια.' },
        'proj-genera-3': { en: 'Leading participant in meetings and dissemination actions', gr: 'Κύριος συμμετέχων σε συναντήσεις και δράσεις διάχυσης' },

        // research: ARTEMIS
        'proj-artemis': {
            en: 'ESPA (Research – Innovate) project aiming to develop a distributed architecture, both in software and hardware, to secure supply chain traceability processes and data using blockchain, smart contracts, and embedded security mechanisms.',
            gr: 'Έργο ΕΣΠΑ (Ερευνώ – Καινοτομώ) με στόχο την ανάπτυξη κατανεμημένης αρχιτεκτονικής, σε επίπεδο λογισμικού και υλικού, για την ασφάλεια των διαδικασιών και των δεδομένων ιχνηλάτησης της εφοδιαστικής αλυσίδας με χρήση blockchain, έξυπνων συμβολαίων και ενσωματωμένων μηχανισμών ασφάλειας.'
        },
        'proj-artemis-1': { en: '<b>Role:</b> Senior Researcher for iTrack', gr: '<b>Ρόλος:</b> Κύριος Ερευνητής για την εταιρεία iTrack' },
        'proj-artemis-2': { en: 'Participation in the design of the architecture and integration with the company’s platform', gr: 'Συμμετοχή στον σχεδιασμό της αρχιτεκτονικής και στη διασύνδεση με την πλατφόρμα της εταιρείας' },
        'proj-artemis-3': { en: 'Participation in meetings and preparation of deliverables', gr: 'Συμμετοχή σε συναντήσεις και στη συγγραφή παραδοτέων' },
        // document title
        'doc-title': {
            en: 'Dimitrios G. Kogias — Blockchain, Web3 & Cybersecurity Researcher, Educator & Project Manager',
            gr: 'Δημήτριος Γ. Κόγιας — Ερευνητής, Εκπαιδευτής & Project Manager σε Blockchain, Web3 & Κυβερνοασφάλεια'
        },
        'brand-tag': {
            en: 'Researcher, Educator & Project Manager in Blockchain, Web3 & Cybersecurity',
            gr: 'Ερευνητής & Εκπαιδευτής σε Blockchain, Web3 & Κυβερνοασφάλεια'
        },
        'brand-name': {
            en: 'Dimitrios G. Kogias',
            gr: 'Δημήτριος Γ. Κόγιας'
        },
        'nav-research': { en: 'Research', gr: 'Έρευνα' },
        'nav-portfolio': { en: 'Portfolio', gr: 'Portfolio' },
        'nav-about': { en: 'About', gr: 'Σχετικά' },
        'nav-publications': { en: 'Publications', gr: 'Δημοσιεύσεις' },
        'nav-teaching': { en: 'Teaching', gr: 'Διδασκαλία' },
        'nav-contact': { en: 'Contact', gr: 'Επικοινωνία' },
        'pub-note': {
            en: 'A few popular/representative publications are listed here. For the full list, please see my CV or Google Scholar.',
            gr: 'Παρακάτω παρατίθενται μερικές δημοφιλείς/ενδεικτικές δημοσιεύσεις. Για την πλήρη λίστα, δείτε το Βιογραφικό μου ή το Google Scholar.'
        },
        // projects
        'proj-poe-desc': {
            en: 'Gamified Web3 DApp for blockchain learning with quizzes and token rewards.',
            gr: 'Παιχνιδοποιημένη Web3 DApp για μάθηση blockchain με κουίζ και ανταμοιβές σε tokens.'
        },
        'proj-poe-1': {
            en: 'Quizzes on blockchain topics',
            gr: 'Κουίζ σε θέματα blockchain'
        },
        'proj-poe-2': {
            en: 'Rewards in tokens',
            gr: 'Ανταμοιβές σε tokens'
        },
        'proj-poe-3': {
            en: 'Special reward: an NFT that can unlock the next level (when ready)',
            gr: 'Ειδική ανταμοιβή: ένα NFT που θα ξεκλειδώνει το επόμενο επίπεδο (όταν είναι έτοιμο)'
        },
        'proj-ldl-desc': {
            en: 'Fantasy League management with SBT identity, multi‑team trades, and voting.',
            gr: 'Διαχείριση Fantasy League με ταυτότητα SBT, ανταλλαγές μεταξύ πολλών ομάδων και ψηφοφορία.'
        },
        'proj-ldl-1': {
            en: 'Backend: Flask + Google Sheets API + PostgreSQL',
            gr: 'Backend: Flask + Google Sheets API + PostgreSQL'
        },
        'proj-ldl-2': {
            en: 'On‑chain: trade voting + SBT profiles',
            gr: 'On‑chain: ψηφοφορία ανταλλαγών + προφίλ SBT'
        },
        'proj-ldl-3': {
            en: 'Planned: DAO mechanism for voting on league regulations',
            gr: 'Σε εξέλιξη: μηχανισμός DAO για ψηφοφορίες στους κανονισμούς της λίγκας'
        },
        'proj-besu-desc': {
            en: 'Private Hyperledger Besu (QBFT) Ethereum network for research on consensus, privacy, and operational resilience.',
            gr: 'Ιδιωτικό δίκτυο Hyperledger Besu (QBFT) για έρευνα στη συναίνεση, την ιδιωτικότητα και τη λειτουργική ανθεκτικότητα.'
        },
        'proj-besu-1': {
            en: 'Five‑validator network (v25.8.0) with Blockscout explorer and Faucet',
            gr: 'Δίκτυο Besu (v25.8.0) με 5 validators, Blockscout explorer & Faucet'
        },
        'proj-besu-2': {
            en: 'Hardened nodes & monitoring (metrics, logs, alerts)',
            gr: 'Ενισχυμένη ασφάλεια κόμβων & παρακολούθηση (μετρικές, logs, ειδοποιήσεις)'
        },
        'proj-besu-3': {
            en: 'Applied smart contracts: Soulbound Tokens, NFTs, ZKPs, oracles',
            gr: 'Εφαρμοσμένα smart contracts: Soulbound Tokens, NFTs, ZKPs, oracles'
        },
        'proj-labs-desc': {
            en: 'Hands-on labs on consensus mechanics, common attack patterns, and DeFi incident simulations inspired by the bZx oracle/flash-loan exploits.',
            gr: 'Πρακτικά εργαστήρια για μηχανισμούς συναίνεσης, συνήθη μοτίβα επιθέσεων και προσομοιώσεις περιστατικών DeFi εμπνευσμένες από τα exploits του bZx (oracle/flash-loan).'
        },
        'proj-labs-1': {
            en: 'Oracle design and price‑feed defenses (TWAPs, circuit breakers)',
            gr: 'Σχεδίαση oracle και άμυνες στα price‑feeds (TWAPs, circuit breakers)'
        },
        'proj-labs-2': {
            en: 'Incident walkthroughs & trace analysis (bZx‑style oracle/flash‑loan)',
            gr: 'Ανάλυση περιστατικών & ιχνών (επιθέσεις τύπου bZx – oracle/flash‑loan)'
        },
        // Web3 Sources badge
        'proj-web3src-badge': {
            en: 'Open Source',
            gr: 'Ανοικτού Κώδικα'
        },
        'proj-web3src-title': {
            en: 'Web3 Sources (Curated Repository)',
            gr: 'Πόροι Web3 (Επιμελημένη Συλλογή)'
        },
        'proj-web3src-desc': {
            en: 'Curated collection of resources and learning materials for Web3, blockchain, and distributed systems.',
            gr: 'Επιμελημένη συλλογή από πόρους και εκπαιδευτικό υλικό για το Web3, το blockchain και τα κατανεμημένα συστήματα.'
        },
        // teaching
        'teach-1': {
            en: 'Introductory course focused on cybersecurity threats and blockchain (including DORA regulation), with hands-on lab sessions.',
            gr: 'Εισαγωγικό μάθημα με έμφαση στις απειλές κυβερνοασφάλειας και το blockchain (περιλαμβάνει τον κανονισμό DORA), με εργαστηριακές ασκήσεις.'
        },
        'teach-2': {
            en: 'Development and security of Web 3.0 DApps.',
            gr: 'Ανάπτυξη και ασφάλεια εφαρμογών Web 3.0 (DApps).'
        },
        'teach-3': {
            en: 'A fundamental introduction to cybersecurity and other aspects to instil assurances in DLT-related activities and compatibility with EU regulations (e.g., DORA).',
            gr: 'Βασική εισαγωγή στην κυβερνοασφάλεια και σε άλλα θέματα για την παροχή διασφαλίσεων σε δραστηριότητες που σχετίζονται με DLT και τη συμβατότητα με κανονισμούς της ΕΕ (π.χ. DORA).'
        },
        // contact labels
        'lbl-email': { en: 'Email:', gr: 'Ηλ. ταχυδρομείο:' },
        'lbl-github': { en: 'GitHub:', gr: 'GitHub:' },
        'lbl-scholar': { en: 'Scholar:', gr: 'Scholar:' },
        'lbl-linkedin': { en: 'LinkedIn:', gr: 'LinkedIn:' },
    };

    function initPage() {
        updateYear();
        initScrollSpy();
        initLang();
        initTheme();
        initMenu();
        initBackToTop();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }

    function setLang(lang) {
        for (const id in langElems) {
            const el = document.getElementById(id);
            if (el && langElems[id][lang]) {
                if (
                    id === 'proj-tardis-1' ||
                    id === 'proj-genera-1' ||
                    id === 'proj-faster-1' ||
                    id === 'proj-artemis-1'
                ) {
                    el.innerHTML = langElems[id][lang];
                } else {
                    el.textContent = langElems[id][lang];
                }
            }
        }
        document.querySelectorAll('.section-title').forEach(el => {
            const key = lang === 'gr' ? 'gr' : 'en';
            if (el.dataset[key]) { el.textContent = el.dataset[key]; }
        });
        document.querySelectorAll('[data-en][data-gr]').forEach(el => {
            const key = lang === 'gr' ? 'gr' : 'en';
            el.textContent = el.dataset[key];
        });
        localStorage.setItem(LANG_KEY, lang);
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.setAttribute('lang', lang === 'gr' ? 'el' : 'en');
        if (langElems['doc-title'] && langElems['doc-title'][lang]) {
            document.title = langElems['doc-title'][lang];
        }
        const btnEn = document.getElementById('btn-en');
        const btnGr = document.getElementById('btn-gr');
        if (btnEn && btnGr) {
            btnEn.classList.toggle('active', lang === 'en');
            btnGr.classList.toggle('active', lang === 'gr');
            btnEn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
            btnGr.setAttribute('aria-pressed', lang === 'gr' ? 'true' : 'false');
        }
    }

    function initLang() {
        const btnEn = document.getElementById('btn-en');
        const btnGr = document.getElementById('btn-gr');
        const html = document.documentElement;
        const defaultLang = html.getAttribute('data-default-lang') || 'en';
        const hrefs = {
            en: html.dataset.langHrefEn || '',
            gr: html.dataset.langHrefGr || ''
        };

        function navigateTo(lang, replace) {
            const target = hrefs[lang];
            if (!target) { return false; }
            const url = new URL(target, window.location.href);
            if (url.href === window.location.href) { return false; }
            if (replace) {
                window.location.replace(url.href);
            } else {
                window.location.href = url.href;
            }
            return true;
        }

        function handleLangClick(lang) {
            localStorage.setItem(LANG_KEY, lang);
            if (lang !== defaultLang && navigateTo(lang, false)) { return; }
            setLang(lang);
        }

        btnEn && btnEn.addEventListener('click', () => handleLangClick('en'));
        btnGr && btnGr.addEventListener('click', () => handleLangClick('gr'));

        let lang = localStorage.getItem(LANG_KEY) || defaultLang;
        if (lang !== defaultLang && navigateTo(lang, true)) { return; }
        setLang(lang);
        window.setLang = setLang;
    }

    function updateYear() {
        const target = document.getElementById('y');
        if (target) { target.textContent = new Date().getFullYear(); }

        // Update "Last updated" date (English version)
        const updateDateEl = document.getElementById('update-date');
        if (updateDateEl) {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            updateDateEl.textContent = now.toLocaleDateString('en-US', options);
        }

        // Update "Last updated" date (Greek version)
        const updateDateGrEl = document.getElementById('update-date-gr');
        if (updateDateGrEl) {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            updateDateGrEl.textContent = now.toLocaleDateString('el-GR', options);
        }
    }

    function initScrollSpy() {
        const links = Array.from(document.querySelectorAll('.nav a'));
        if (!links.length) { return; }
        const byId = id => links.find(a => a.getAttribute('href') === '#' + id);
        function setActive(link) {
            links.forEach(a => {
                a.classList.remove('active');
                a.removeAttribute('aria-current');
            });
            if (link) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.id;
                const link = byId(id);
                if (!link) { return; }
                if (entry.isIntersecting) { setActive(link); }
            });
        }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });
        document.querySelectorAll('main section[id]').forEach(sec => observer.observe(sec));
    }

    function initTheme() {
        const key = 'theme';
        const select = document.getElementById('theme-select');
        const applyTheme = (val) => {
            if (val === 'light' || val === 'dark') {
                document.documentElement.setAttribute('data-theme', val);
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        };
        const saved = localStorage.getItem(key) || 'system';
        applyTheme(saved);
        if (select) {
            select.value = saved;
            select.addEventListener('change', () => {
                const val = select.value;
                localStorage.setItem(key, val);
                applyTheme(val);
            });
            if (window.matchMedia) {
                const mq = window.matchMedia('(prefers-color-scheme: dark)');
                mq.addEventListener && mq.addEventListener('change', () => {
                    if ((localStorage.getItem(key) || 'system') === 'system') {
                        applyTheme('system');
                    }
                });
            }
        }
    }

    function initMenu() {
        const btn = document.getElementById('menu-toggle');
        const nav = document.getElementById('site-nav');
        if (!btn || !nav) { return; }
        btn.addEventListener('click', () => {
            const open = nav.classList.toggle('nav--open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            nav.classList.remove('nav--open');
            btn.setAttribute('aria-expanded', 'false');
        }));
    }

    function initBackToTop() {
        const btn = document.getElementById('back-to-top');
        if (!btn) { return; }
        const toggle = () => {
            if (window.scrollY > 300) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        };
        window.addEventListener('scroll', toggle, { passive: true });
        toggle();
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    function initScrollProgress() {
        const progressBar = document.getElementById('scroll-progress');
        if (!progressBar) { return; }
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = progress + '%';
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    // Initialize scroll progress
    initScrollProgress();
})();
