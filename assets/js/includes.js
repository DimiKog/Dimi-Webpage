document.addEventListener("DOMContentLoaded", () => {
    (function () {
        const attr = 'data-include';
        const targets = Array.from(document.querySelectorAll('[' + attr + ']'));
        if (!targets.length) {
            document.documentElement.setAttribute('data-partials-ready', 'true');
            document.dispatchEvent(new CustomEvent('partials:ready'));
            return;
        }

        const cache = new Map();

        async function inject(el) {
            const src = el.getAttribute(attr);
            if (!src) return;
            if (!cache.has(src)) {
                const res = await fetch(src, { credentials: 'same-origin' });
                if (!res.ok) {
                    throw new Error('Failed to load partial: ' + src + ' (' + res.status + ')');
                }
                cache.set(src, await res.text());
            }
            const html = cache.get(src);
            if (el.tagName === 'HEAD') {
                el.insertAdjacentHTML('beforeend', html);
            } else {
                const tpl = document.createElement('template');
                tpl.innerHTML = html.trim();
                el.replaceWith(tpl.content.cloneNode(true));
            }
        }

        (async function loadAll() {
            for (const el of targets) {
                try {
                    await inject(el);
                } catch (err) {
                    console.error(err);
                    const fallback = document.createElement('div');
                    fallback.className = 'partial-error';
                    fallback.textContent = 'Failed to load section. Please refresh.';
                    el.replaceWith(fallback);
                }
            }
            document.documentElement.setAttribute('data-partials-ready', 'true');
            document.dispatchEvent(new CustomEvent('partials:ready'));
        })();
    })();
});
