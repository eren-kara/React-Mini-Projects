import React from "react";
import Link from "./Link";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link href="http://localhost:3000" className="item">
        Accordion
      </Link>
      <Link href="http://localhost:3000/search" className="item">
        Wiki Search
      </Link>
      <Link href="http://localhost:3000/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="http://localhost:3000/translate" className="item">
        Google Translate
      </Link>
    </div>
  );
}
