export interface SocialProfile {
  platform: "GitHub" | "LinkedIn" | "LeetCode" | "Codeforces" | "CodeChef" | "Email";
  handle: string;
  url: string;
  category: "professional" | "competitive" | "contact";
}

export interface SecondaryMetric {
  value: string;
  label: string;
}

export interface ImpactWorkload {
  id: string;
  workloadTag: string;
  roleContext: string;
  timeframe: string;
  primaryMetric: {
    value: string;
    unit: string;
    label: string;
    ariaDescription: string;
  };
  secondaryMetrics: SecondaryMetric[];
  beforeState: {
    label: string;
    relativePercent: number;
    displayValue: string;
  };
  afterState: {
    label: string;
    relativePercent: number;
    displayValue: string;
  };
  technicalMechanism: string;
  experienceAnchorId: string;
  technologies: string[];
}

export interface ExperienceContribution {
  id: string;
  title: string;
  category: "Optimization" | "Infrastructure" | "Tooling" | "Migration";
  problemContext: string;
  engineeringAction: string;
  verifiedOutcome: string;
  architecturalNotes: string[];
  metricsHighlight?: string[];
}

export interface ExperienceRole {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  contributions: ExperienceContribution[];
  technologies: string[];
}

export interface ArchitectureFlowNode {
  id: string;
  layer: string;
  title: string;
  subtitle: string;
  technologies: string[];
  description: string;
}

export interface FeaturedProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  status: "Live in Production" | "In Development";
  problemStatement: string;
  solutionSummary: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  keyFeatures: {
    title: string;
    description: string;
    techUsed: string;
  }[];
  architectureNodes: ArchitectureFlowNode[];
}

export interface SkillItem {
  name: string;
  usedIn: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}