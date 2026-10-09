import { useEffect } from "react";

const SCRIPT_ID = "busuanzi-script";
const SCRIPT_SRC = "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";

/**
 * Visitor counter via Busuanzi. The script fills the busuanzi_value_* nodes and
 * reveals the busuanzi_container_* wrappers; both stay hidden until real data
 * arrives, so a failed lookup shows nothing instead of a broken number.
 */
export default function VisitorStats() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.defer = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="flex items-center gap-3"
      aria-label="Statistik kunjungan website"
    >
      <span id="busuanzi_container_site_uv" className="hidden">
        <span id="busuanzi_value_site_uv">0</span> pengunjung
      </span>
      <span id="busuanzi_container_site_pv" className="hidden">
        <span id="busuanzi_value_site_pv">0</span> kunjungan
      </span>
    </div>
  );
}
