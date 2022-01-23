// export interface GetLessons {
//   lessons: Lesson[];
// }

// NOTE made folder for types across the project

// NOTE used the "Paste as JSON" extension or "https://app.quicktype.io/" for
// auto interface generation base on the json object props

// NOTE pro tip: stringify the object from an API to get the json
export interface Lesson {
  id: number;
  created_at: string;
  title: string;
  description: string;
}
