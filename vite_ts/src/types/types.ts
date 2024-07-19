export interface HeaderProps {
  courseName: string;
}

// Individual course object
export type Course = {
  name: string;
  exerciseCount: number;
};

// An Array of Course objects
export interface ContentProps {
  courseParts: Course [];
}

export interface TotalProps {
  totalExercises: number;
}
