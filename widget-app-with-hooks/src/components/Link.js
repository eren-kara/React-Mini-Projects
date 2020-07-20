import React from "react";

export default function Link({ className, href, children }) {
  const onLinkClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={(e) => onLinkClick(e)} className={className} href={href}>
      {children}
    </a>
  );
}
