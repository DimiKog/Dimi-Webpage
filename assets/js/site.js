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
            en: 'Dimitris G. Kogias — Researcher • Blockchain • Cybersecurity',
            gr: 'Dimitris G. Kogias — Ερευνητής • Blockchain • Κυβερνοασφάλεια'
        },
        // hero
        'hero-name': {
            en: 'Dimitris G. Kogias',
            gr: 'Δημήτρης Γ. Κόγιας'
        },
        'hero-intro': {
            en: 'Building safer blockchain systems for education and research.',
            gr: 'Δημιουργώ ασφαλέστερα συστήματα blockchain για την εκπαίδευση και την έρευνα.'
        },
        'hero-title': {
            en: 'Researcher & Educator in Blockchain, Web3 & Cybersecurity',
            gr: 'Ερευνητής & Εκπαιδευτής σε Blockchain, Web3 & Κυβερνοασφάλεια'
        },
        'hero-sub': {
            en: '<span>Blockchain security &amp; DApp assurance</span><span>Hyperledger Besu PoA/QBFT networks</span><span>Applied Web3 &amp; cybersecurity education</span>',
            gr: '<span>Ασφάλεια blockchain &amp; διασφάλιση DApp</span><span>Δίκτυα Hyperledger Besu PoA/QBFT</span><span>Πρακτική εκπαίδευση σε Web3 &amp; κυβερνοασφάλεια</span>'
        },
        'cta-primary': { en: 'See projects', gr: 'Δες έργα' },
        'cta-secondary': { en: 'Get in touch', gr: 'Επικοινωνία' },
        'hero-caption': {
            en: 'Senior Researcher – Blockchain Educator',
            gr: 'Κύριος Ερευνητής – Εκπαιδευτής σε Blockchain, Web3 & Cybersecurity'
        },
        'brand-tag': {
            en: 'Researcher & Educator in Blockchain, Web3 & Cybersecurity',
            gr: 'Ερευνητής & Εκπαιδευτής σε Blockchain, Web3 & Cybersecurity'
        },
        'brand-name': {
            en: 'Dimitris G. Kogias',
            gr: 'Δημήτρης Γ. Κόγιας'
        },
        'nav-research': { en: 'Research', gr: 'Έρευνα' },
        'nav-portfolio': { en: 'Portfolio', gr: 'Portfolio' },
        'nav-about': { en: 'About', gr: 'Σχετικά' },
        'nav-publications': { en: 'Publications', gr: 'Δημοσιεύσεις' },
        'nav-teaching': { en: 'Teaching', gr: 'Διδασκαλία' },
        'nav-contact': { en: 'Contact', gr: 'Επικοινωνία' },
        // stats labels
        'stat-1-lbl': { en: 'Years teaching in academic institutions', gr: 'Χρόνια διδασκαλίας σε ακαδημαϊκά ιδρύματα' },
        'stat-2-lbl': { en: 'Years teaching blockchain', gr: 'Χρόνια διδασκαλίας στο blockchain' },
        'stat-3-lbl': { en: 'Research publications', gr: 'Ερευνητικές δημοσιεύσεις' },
        'stat-4-lbl': { en: 'Academic theses supervised', gr: 'Διπλωματικές εργασίες που επιβλέφθηκαν' },
        'stat-5-lbl': { en: 'DApps developed', gr: 'DApps που αναπτύχθηκαν' },
        // about
        'about-p1': {
            en: 'Researcher and educator specializing in blockchain security, distributed systems, and decentralized applications. I design and develop DApps, build and operate Hyperledger Besu (QBFT) networks with Blockscout and Faucet integration, and transform these systems into hands‑on learning environments for students and professionals.',
            gr: 'Είμαι ερευνητής και διδάσκων με εξειδίκευση στην ασφάλεια blockchain, τα κατανεμημένα συστήματα και τις αποκεντρωμένες εφαρμογές. Σχεδιάζω και αναπτύσσω DApps, στήνω και λειτουργώ δίκτυα Hyperledger Besu (QBFT) με ενσωμάτωση Blockscout και Faucet, και μετατρέπω αυτά τα συστήματα σε πρακτικά, εργαστηριακά περιβάλλοντα για φοιτητές και επαγγελματίες.'
        },
        'about-p2': {
            en: 'I teach at the University of West Attica (UniWA) and the University of Malta, and as a Senior Researcher I contribute to EU and Greek National projects. I am also co‑author of the first open‑access Greek textbook on blockchain (<a href="https://repository.kallipos.gr/handle/11419/9130" target="_blank" rel="noopener noreferrer">Kallipos editions</a>).',
            gr: 'Διδάσκω στο Πανεπιστήμιο Δυτικής Αττικής (ΠαΔΑ) και στο Πανεπιστήμιο Μάλτας και, ως Κύριος Ερευνητής, συμβάλλω σε ευρωπαϊκά και ελληνικά εθνικά έργα. Είμαι επίσης συν‑συγγραφέας του πρώτου ανοικτής πρόσβασης ελληνικού συγγράμματος για το blockchain (<a href="https://repository.kallipos.gr/handle/11419/9130" target="_blank" rel="noopener noreferrer">εκδόσεις Κάλλιπος</a>).'
        },
        'about-li1': {
            en: 'PhD in Computer Networks — focus on distributed systems & security',
            gr: 'Διδακτορικό στα Δίκτυα Υπολογιστών — εστίαση σε κατανεμημένα συστήματα & ασφάλεια'
        },
        'about-li2': {
            en: 'Blockchain infrastructure: Besu QBFT network, Blockscout & Faucet, hardened validator ops',
            gr: 'Υποδομή blockchain: δίκτυο Besu QBFT, Blockscout & Faucet, ενισχυμένες λειτουργίες validators'
        },
        'about-li3': {
            en: 'Teaching & workshops on: Blockchain, P2P Networks, Cybersecurity, DApp security labs',
            gr: 'Διδασκαλία & εργαστήρια σε: Blockchain, Δίκτυα P2P, Κυβερνοασφάλεια, εργαστήρια ασφάλειας DApp'
        },
        'about-li4': {
            en: 'Research interests: zero‑knowledge proofs (ZKPs), oracles, protocol hardening, verifiable credentials',
            gr: 'Ερευνητικά ενδιαφέροντα: αποδείξεις μηδενικής γνώσης (ZKPs), oracles, ενίσχυση πρωτοκόλλων, επαληθεύσιμα διαπιστευτήρια'
        },
        'about-li5': {
            en: 'Professional roles: Member of INATBA\'s Academic Advisory Board, Associate Editor, <a href="https://loop.frontiersin.org/people/1136660/overview" target="_blank" rel="noopener noreferrer">Frontiers in Blockchain <svg class="ext-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M14 3h7v7h-2V7.4l-7.3 7.3-1.4-1.4L17.6 6H14V3ZM5 5h7v2H7v10h10v-5h2v7H5V5Z"/></svg></a> (“Blockchain for Web3 and the Metaverse”)',
            gr: 'Επαγγελματικοί ρόλοι: Μέλος του Academic Advisory Board της INATBA, Associate Editor στο <a href="https://loop.frontiersin.org/people/1136660/overview" target="_blank" rel="noopener noreferrer">Frontiers in Blockchain <svg class="ext-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M14 3h7v7h-2V7.4l-7.3 7.3-1.4-1.4L17.6 6H14V3ZM5 5h7v2H7v10h10v-5h2v7H5V5Z"/></svg></a> («Blockchain for Web3 and the Metaverse»)'
        },
        'about-li6': {
            en: 'Regulatory focus: cybersecurity and blockchain resilience under DORA',
            gr: 'Ρυθμιστική εστίαση: κυβερνοασφάλεια και ανθεκτικότητα blockchain στο πλαίσιο του DORA'
        },
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
            en: 'Besu (v25.6.0) network with 5 validators, Blockscout explorer & Faucet',
            gr: 'Δίκτυο Besu (v.25.6.0) με 5 κόμβους επαλήθευσης, Blockscout explorer και χρήση Faucet'
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
                    id === 'about-p2' ||
                    id === 'about-li5' ||
                    id === 'hero-sub' ||
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
})();
