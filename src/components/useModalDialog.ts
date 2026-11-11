import { useEffect, useRef } from "react";

function focusable(node: HTMLElement) {
  return [...node.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]")].filter(
    (element) => !element.hasAttribute("disabled") && element.tabIndex >= 0 && element.getClientRects().length > 0,
  );
}

export function useModalDialog(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const node = ref.current;
    node?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !node) return;
      const items = focusable(node);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === node)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, []);

  return ref;
}
