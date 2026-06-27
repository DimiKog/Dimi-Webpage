(function () {
    const LANG_KEY = 'site_lang';

    const langElems = {
        'proj-faster': {
            en: 'Horizon 2020 project focused on technologies for first responders across the full emergency lifecycle, including planning, logistics, diagnostics, training, management, and resilient communications.',
            gr: 'Έργο Horizon 2020 με εστίαση σε τεχνολογίες για πρώτους ανταποκριτές σε όλο τον κύκλο έκτακτης ανάγκης: σχεδιασμός, logistics, διαγνωστικά, εκπαίδευση, διαχείριση και ανθεκτικές επικοινωνίες.'
        },
        'proj-faster-1': { en: 'Role: Senior Researcher for UniWA', gr: 'Ρόλος: Κύριος Ερευνητής για το ΠαΔΑ' },
        'proj-faster-2': {
            en: 'Technical / Research focus: secure communication, mobile applications, encrypted messaging, and first-responder support tools',
            gr: 'Τεχνική/ερευνητική εστίαση: ασφαλής επικοινωνία, εφαρμογές κινητών, κρυπτογραφημένα μηνύματα και εργαλεία υποστήριξης πρώτων ανταποκριτών'
        },
        'proj-faster-3': {
            en: 'Contribution: technical coordination, reporting, and delivery of tools including MORSE, RESCUE, smart textiles, and K9 collar alerting components',
            gr: 'Συνεισφορά: τεχνικός συντονισμός, αναφορές και παράδοση εργαλείων όπως MORSE, RESCUE, έξυπνα υφάσματα και ειδοποιήσεις περιλαίμιου K9'
        },

        'proj-tardis-desc': {
            en: 'Horizon Europe project focused on trustworthy and resilient decentralized intelligence for edge systems, with emphasis on scalable coordination, heterogeneous swarms, and robust distributed decision-making.',
            gr: 'Έργο Horizon Europe για αξιόπιστη και ανθεκτική αποκεντρωμένη νοημοσύνη σε συστήματα άκρης, με έμφαση στην κλιμακώσιμο συντονισμό, ετερογενή σμήνη και ισχυρή κατανεμημένη λήψη αποφάσεων.'
        },
        'proj-tardis-1': { en: 'Role: Senior Researcher for NKUA', gr: 'Ρόλος: Κύριος Ερευνητής για το ΕΚΠΑ' },
        'proj-tardis-2': {
            en: 'Technical / Research focus: decentralized intelligence, edge systems, trustworthy coordination, and evaluation activities',
            gr: 'Τεχνική/ερευνητική εστίαση: αποκεντρωμένη νοημοσύνη, συστήματα άκρης, αξιόπιστος συντονισμός και δραστηριότητες αξιολόγησης'
        },
        'proj-tardis-3': {
            en: 'Contribution: evaluation support, use-case technical coordination, reporting, and integrating research outputs into prototypes',
            gr: 'Συνεισφορά: υποστήριξη αξιολόγησης, τεχνικός συντονισμός περιπτώσεων χρήσης, αναφορές και ενσωμάτωση ερευνητικών αποτελεσμάτων σε πρωτότυπα'
        },

        'proj-genera': {
            en: 'LIFE EU project supporting energy transition in touristic islands through public engagement, digital tools, and sustainability-oriented behavioral change.',
            gr: 'Έργο LIFE ΕΕ για την ενεργειακή μετάβαση σε τουριστικά νησιά μέσω δημόσιας εμπλοκής, ψηφιακών εργαλείων και βιώσιμης αλλαγής συμπεριφοράς.'
        },
        'proj-genera-1': { en: 'Role: Senior Researcher for UniWA', gr: 'Ρόλος: Κύριος Ερευνητής για το ΠαΔΑ' },
        'proj-genera-2': {
            en: 'Technical / Research focus: digital engagement, gamification, sustainability transition, and Web 3.0 strategy',
            gr: 'Τεχνική/ερευνητική εστίαση: ψηφιακή εμπλοκή, παιχνιδοποίηση, βιώσιμη μετάβαση και στρατηγική Web 3.0'
        },
        'proj-genera-3': {
            en: 'Contribution: web engagement tools, dissemination, and stakeholder coordination',
            gr: 'Συνεισφορά: διαδικτυακά εργαλεία εμπλοκής, διάχυση και συντονισμός ενδιαφερόμενων μερών'
        },

        'proj-artemis': {
            en: 'ESPA (Research – Innovate) project developing a secure distributed software and hardware architecture for supply-chain traceability using blockchain, smart contracts, and embedded security.',
            gr: 'Έργο ΕΣΠΑ (Ερευνώ – Καινοτομώ) για ασφαλή κατανεμημένη αρχιτεκτονική λογισμικού και υλικού για ιχνηλασία εφοδιαστικής αλυσίδας με blockchain, smart contracts και ενσωματωμένη ασφάλεια.'
        },
        'proj-artemis-1': { en: 'Role: Senior Researcher for iTrack Services (SME)', gr: 'Ρόλος: Κύριος Ερευνητής για την iTrack Services (SME)' },
        'proj-artemis-2': {
            en: 'Technical / Research focus: distributed architecture, blockchain-based traceability, smart contracts, and embedded security integration',
            gr: 'Τεχνική/ερευνητική εστίαση: κατανεμημένη αρχιτεκτονική, ιχνηλασία με blockchain, smart contracts και ενσωμάτωση ασφάλειας υλικού'
        },
        'proj-artemis-3': {
            en: 'Contribution: architecture design, platform integration, technical meetings, and applied deliverables',
            gr: 'Συνεισφορά: σχεδιασμός αρχιτεκτονικής, ενσωμάτωση πλατφόρμας, τεχνικές συναντήσεις και εφαρμοσμένα παραδοτέα'
        },

        'doc-title': {
            en: 'Dimitrios G. Kogias — Elected Assistant Professor · Distributed Systems · Edge Computing · Applications',
            gr: 'Δημήτριος Γ. Κόγιας — Εκλεγμένος Επίκουρος Καθηγητής · Κατανεμημένα Συστήματα · Υπολογιστική Άκρου · Εφαρμογές'
        },
        'brand-tag': {
            en: 'Elected Assistant Professor · Distributed Systems · Edge Computing · Applications',
            gr: 'Εκλεγμένος Επίκουρος Καθηγητής · Κατανεμημένα Συστήματα · Υπολογιστική Άκρου · Εφαρμογές'
        },
        'brand-name': {
            en: 'Dimitrios G. Kogias',
            gr: 'Δημήτριος Γ. Κόγιας'
        },
        'nav-focus': { en: 'Current Focus', gr: 'Τρέχουσα Εστίαση' },
        'nav-research': { en: 'Research', gr: 'Έρευνα' },
        'nav-portfolio': { en: 'Portfolio', gr: 'Έργα' },
        'nav-about': { en: 'About', gr: 'Σχετικά' },
        'nav-publications': { en: 'Publications', gr: 'Δημοσιεύσεις' },
        'nav-teaching': { en: 'Teaching', gr: 'Διδασκαλία' },
        'nav-web3edu': { en: 'Web3Edu', gr: 'Web3Edu' },
        'nav-contact': { en: 'Contact', gr: 'Επικοινωνία' },
        'pub-note': {
            en: 'A selection of representative publications is shown below. For the complete list, please visit my Google Scholar profile or consult my CV.',
            gr: 'Παρακάτω εμφανίζεται μια επιλογή ενδεικτικών δημοσιεύσεων. Για την πλήρη λίστα, επισκεφτείτε το προφίλ μου στο Google Scholar ή συμβουλευτείτε το βιογραφικό μου.'
        },

        'proj-poe-desc': {
            en: 'Gamified Web3 learning DApp for blockchain security awareness, smart contract interaction, and challenge-based education.',
            gr: 'Παιχνιδοποιημένη Web3 DApp για ευαισθητοποίηση ασφάλειας blockchain, αλληλεπίδραση με smart contracts και εκπαίδευση βάσει προκλήσεων.'
        },
        'proj-poe-1': {
            en: 'Quiz-based blockchain learning tasks',
            gr: 'Μαθησιακές εργασίες blockchain με κουίζ'
        },
        'proj-poe-2': {
            en: 'Token and NFT-based rewards',
            gr: 'Ανταμοιβές με tokens και NFT'
        },
        'proj-poe-3': {
            en: 'Festival edition for live events and workshops',
            gr: 'Έκδοση φεστιβάλ για ζωντανές εκδηλώσεις και εργαστήρια'
        },
        'proj-ldl-desc': {
            en: 'Experimental fantasy league management DApp exploring identity-linked participation, multi-team trades, voting, and DAO-style decision flows.',
            gr: 'Πειραματική DApp διαχείρισης fantasy league με συμμετοχή συνδεδεμένη με ταυτότητα, ανταλλαγές πολλών ομάδων, ψηφοφορίες και ροές αποφάσεων τύπου DAO.'
        },
        'proj-ldl-1': {
            en: 'Backend: Flask, PostgreSQL, and API-based data handling',
            gr: 'Backend: Flask, PostgreSQL και διαχείριση δεδομένων μέσω API'
        },
        'proj-ldl-2': {
            en: 'On-chain: smart contract logic for trading, voting, and identity-linked profiles',
            gr: 'On-chain: λογική smart contracts για συναλλαγές, ψηφοφορίες και προφίλ συνδεδεμένα με ταυτότητα'
        },
        'proj-ldl-3': {
            en: 'Planned: DAO mechanisms for league decisions and dispute handling',
            gr: 'Προγραμματισμένα: μηχανισμοί DAO για αποφάσεις λίγκας και διαχείριση διαφορών'
        },
        'proj-besu-desc': {
            en: 'Private Hyperledger Besu QBFT network for applied research, Web3Edu labs, consensus experimentation, blockchain monitoring, and operational resilience.',
            gr: 'Ιδιωτικό δίκτυο Hyperledger Besu QBFT για εφαρμοσμένη έρευνα, εργαστήρια Web3Edu, πειραματισμό συναίνεσης, παρακολούθηση blockchain και λειτουργική ανθεκτικότητα.'
        },
        'proj-besu-1': {
            en: 'Seven-validator Besu QBFT network',
            gr: 'Δίκτυο Besu QBFT με επτά validators'
        },
        'proj-besu-2': {
            en: 'Blockscout explorer and faucet services',
            gr: 'Blockscout explorer και υπηρεσίες faucet'
        },
        'proj-besu-3': {
            en: 'Monitoring, logs, alerts, and operational hardening',
            gr: 'Παρακολούθηση, logs, ειδοποιήσεις και ενίσχυση λειτουργίας'
        },
        'proj-labs-desc': {
            en: 'Hands-on blockchain security labs covering consensus behavior, smart contract attack patterns, oracle manipulation, DeFi incident analysis, governance risks, and private testnet experimentation.',
            gr: 'Πρακτικά εργαστήρια ασφάλειας blockchain: συμπεριφορά συναίνεσης, μοτίβα επιθέσεων σε smart contracts, χειραγώγηση oracle, ανάλυση περιστατικών DeFi, κίνδυνοι διακυβέρνησης και πειραματισμός σε ιδιωτικό testnet.'
        },
        'proj-labs-1': {
            en: 'Oracle design and price-feed defense patterns',
            gr: 'Σχεδιασμός oracle και μοτίβα άμυνας σε price feeds'
        },
        'proj-labs-2': {
            en: 'Incident walkthroughs and trace-based analysis',
            gr: 'Αναλυτικές παρουσιάσεις περιστατικών και ανάλυση βάσει ιχνών'
        },
        'proj-web3src-badge': {
            en: 'Open Source',
            gr: 'Ανοικτού Κώδικα'
        },
        'proj-web3src-title': {
            en: 'Curated Web3 Learning Resources',
            gr: 'Επιμελημένοι Πόροι Μάθησης Web3'
        },
        'proj-web3src-desc': {
            en: 'Curated open educational resources, repositories, and references for blockchain, Web3, smart contracts, decentralized identity, and applied cybersecurity learning.',
            gr: 'Επιμελημένοι ανοιχτοί εκπαιδευτικοί πόροι, αποθετήρια και αναφορές για blockchain, Web3, smart contracts, αποκεντρωμένη ταυτότητα και εφαρμοσμένη κυβερνοασφάλεια.'
        },

        'web3edu-intro': {
            en: 'Web3Edu is an applied research and learning ecosystem built on a live Hyperledger Besu network. It connects hands-on technical activity, blockchain interaction, learner identity, and verifiable progress records to support evidence-backed education in Web3 and cybersecurity.',
            gr: 'Το Web3Edu είναι οικοσύστημα εφαρμοσμένης έρευνας και μάθησης πάνω σε ζωντανό δίκτυο Hyperledger Besu. Συνδέει πρακτική τεχνική δραστηριότητα, αλληλεπίδραση με blockchain, ταυτότητα μαθητή και επαληθεύσιμα αρχεία προόδου ώστε να υποστηρίζει τεκμηριωμένη εκπαίδευση σε Web3 και κυβερνοασφάλεια.'
        },
        'web3edu-infra-desc': {
            en: 'Live Hyperledger Besu QBFT network for research and teaching, supporting smart contracts, identity experiments, Web3Edu labs, Blockscout exploration, faucet onboarding, and deployed educational exercises.',
            gr: 'Ζωντανό δίκτυο Hyperledger Besu QBFT για έρευνα και διδασκαλία, με υποστήριξη smart contracts, πειραμάτων ταυτότητας, εργαστηρίων Web3Edu, εξερεύνησης Blockscout, onboarding μέσω faucet και αναπτυγμένων εκπαιδευτικών ασκήσεων.'
        },
        'web3edu-labs-desc': {
            en: 'Structured labs covering wallets, blockchain fundamentals, smart contracts, security, consensus, DeFi, identity, and governance — deployed on live Besu infrastructure.',
            gr: 'Δομημένα εργαστήρια που καλύπτουν πορτοφόλια, βασικές αρχές blockchain, smart contracts, ασφάλεια, συναίνεση, DeFi, ταυτότητα και διακυβέρνηση — αναπτυγμένα σε ζωντανή υποδομή Besu.'
        },
        'web3edu-labs-highlight': {
            en: 'Progressive onboarding with social login and wallet-based interaction',
            gr: 'Προοδευτικό onboarding με social login και αλληλεπίδραση πορτοφολιού'
        },
        'web3edu-community-desc': {
            en: 'Web3Edu is evolving toward a contribution-aware learning community, where participation, technical progress, and governance experiments can be connected to transparent learner identity and verifiable records.',
            gr: 'Το Web3Edu εξελίσσεται προς κοινότητα μάθησης ευαισθητοποιημένη στη συνεισφορά, όπου η συμμετοχή, η τεχνική πρόοδος και τα πειράματα διακυβέρνησης μπορούν να συνδεθούν με διαφανή ταυτότητα μαθητή και επαληθεύσιμα αρχεία.'
        },
        'proj-poe-festival': {
            en: 'Deployed on the Web3Edu / Edu-Net infrastructure',
            gr: 'Αναπτυγμένο στην υποδομή Web3Edu / Edu-Net'
        },

        'teach-1': {
            en: 'Postgraduate course on Blockchain and DLT, using Web3Edu and Besu Edu-Net for hands-on interaction with wallets, smart contracts, block explorers, and live educational infrastructure.',
            gr: 'Μεταπτυχιακό μάθημα σε Blockchain και DLT, με χρήση Web3Edu και Besu Edu-Net για πρακτική αλληλεπίδραση με πορτοφόλια, smart contracts, block explorers και ζωντανή εκπαιδευτική υποδομή.'
        },
        'teach-2': {
            en: 'Postgraduate course on high-performance computing systems for blockchain applications, covering scalable distributed architectures, performance optimization, and applied blockchain infrastructure.',
            gr: 'Μεταπτυχιακό μάθημα για υπολογιστικά συστήματα υψηλών επιδόσεων σε εφαρμογές blockchain, με έμφαση στην κλιμακούμενη κατανεμημένη αρχιτεκτονική, βελτιστοποίηση απόδοσης και εφαρμοσμένη υποδομή blockchain.'
        },
        'teach-3': {
            en: 'Course introducing cybersecurity and assurance concepts for DLT-related systems, including operational resilience, regulatory context, and applied security considerations.',
            gr: 'Εισαγωγικό μάθημα σε έννοιες κυβερνοασφάλειας και διασφάλισης για συστήματα σχετικά με DLT, συμπεριλαμβανομένης λειτουργικής ανθεκτικότητας, ρυθμιστικού πλαισίου και εφαρμοσμένης ασφάλειας.'
        },
        'teach-4': {
            en: 'Design and delivery of Web3 security labs covering DeFi attack simulations, consensus behavior, oracle manipulation, and private testnet experimentation with Besu.',
            gr: 'Σχεδιασμός και παράδοση εργαστηρίων ασφάλειας Web3 με προσομοιώσεις επιθέσεων DeFi, συμπεριφορά συναίνεσης, χειραγώγηση oracle και πειραματισμό σε ιδιωτικό testnet με Besu.'
        },

        'lbl-email': { en: 'Email', gr: 'Ηλ. ταχυδρομείο' },
        'lbl-github': { en: 'GitHub', gr: 'GitHub' },
        'lbl-scholar': { en: 'Google Scholar', gr: 'Google Scholar' },
        'lbl-linkedin': { en: 'LinkedIn', gr: 'LinkedIn' },
    };

    function initPage() {
        updateYear();
        initScrollSpy();
        initLang();
        initTheme();
        initMenu();
        initBackToTop();
        initScrollProgress();
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
                el.textContent = langElems[id][lang];
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
        document.querySelectorAll('[data-en-href][data-gr-href]').forEach(el => {
            const href = lang === 'gr' ? el.getAttribute('data-gr-href') : el.getAttribute('data-en-href');
            if (href) { el.setAttribute('href', href); }
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

        setLang(defaultLang);
        localStorage.setItem(LANG_KEY, defaultLang);
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

})();
