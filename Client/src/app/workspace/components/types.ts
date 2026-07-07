export interface FileNode {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  language?: string;
  modified?: boolean;
}

export interface Commit {
  id: string;
  hash: string;
  message: string;
  author: string;
  authorInitials: string;
  timestamp: string;
  status: "success" | "pending" | "failed";
  branch: string;
}

export interface Dependency {
  name: string;
  version: string;
  type: "runtime" | "dev" | "peer";
  status: "up-to-date" | "outdated" | "critical";
}

export interface TerminalLine {
  id: string;
  type: "command" | "success" | "warning" | "error" | "info" | "link";
  content: string;
}

export interface Workspace {
  id: string;
  name: string;
  plan: "free" | "pro" | "team";
  initials: string;
}

export interface CodeToken {
  t: string;
  c: string;
}

export interface CodeLine {
  n: number;
  tokens: CodeToken[];
}
