export interface HeaderProps {
  courseName: string;
}

// Individual course object
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
  description: string;
}

// Description, Name and Exercise Count
interface CoursePartBasic extends CoursePartDescription {
  kind: "basic"
}

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartRequirement extends CoursePartDescription {
  requirements: string[],
  kind: "special"
}

// No Description
interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartRequirement;

// An Array of Course objects
export interface ContentProps {
  courseParts: CoursePart [];
}

export interface TotalProps {
  totalExercises: number;
}

export interface PartProps {
  coursePart: CoursePart
}
