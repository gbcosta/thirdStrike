import { ReactNode } from "react";
import "./markdownStyle.css";

export const MarkdownStyle = (props: { children: ReactNode }) => {
  return (
    <div className="markdown-body min-h-screen pl-4 pt-4 pr-32">
      {props.children}
    </div>
  );
};
