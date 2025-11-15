document.addEventListener("DOMContentLoaded", () => {

    console.log("[includes.js] DOM loaded — starting partial loader");

    const ATTR = "data-include";
    const MAX_RETRIES = 20;
    const RETRY_DELAY = 120; // ms
    const cache = new Map();

    async function inject(el) {
        const src = el.getAttribute(ATTR);
        if (!src) return;

        console.log("[includes.js] Loading partial:", src);

        if (!cache.has(src)) {
            const res = await fetch(src, { credentials: "same-origin" });
            if (!res.ok) {
                throw new Error("Failed to load partial: " + src + " (" + res.status + ")");
            }
            cache.set(src, await res.text());
        }

        const html = cache.get(src);

        // HEAD partials
        if (el.tagName === "HEAD") {
            el.insertAdjacentHTML("beforeend", html);
        } else {
            el.innerHTML = html;
        }
    }

    async function tryLoad(attempt = 1) {
        const targets = Array.from(document.querySelectorAll("[" + ATTR + "]"));

        if (!targets.length) {
            if (attempt <= MAX_RETRIES) {
                console.log(`[includes.js] No partial targets found — retry ${attempt}/${MAX_RETRIES}`);
                return setTimeout(() => tryLoad(attempt + 1), RETRY_DELAY);
            }
            console.warn("[includes.js] WARNING: No partials were ever found.");
            document.documentElement.setAttribute("data-partials-ready", "true");
            document.dispatchEvent(new CustomEvent("partials:ready"));
            return;
        }

        console.log("[includes.js] Found partials:", targets);

        for (const el of targets) {
            try {
                await inject(el);
            } catch (err) {
                console.error("[includes.js] Partial load error:", err);
                const fallback = document.createElement("div");
                fallback.className = "partial-error";
                fallback.textContent = "Failed to load section. Please refresh.";
                el.replaceWith(fallback);
            }
        }

        console.log("[includes.js] All partials loaded successfully");
        document.documentElement.setAttribute("data-partials-ready", "true");
        document.dispatchEvent(new CustomEvent("partials:ready"));
    }

    // Start loader
    tryLoad();

});
