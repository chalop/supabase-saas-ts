import type { NextPage, GetStaticProps } from "next";
import { supabase } from "@utils/supabase";
import { Lesson } from "@types";

// NOTE added to the generic the array of lessons type, for auto intellisense
const Home: NextPage<{ lessons: Lesson[] }> = ({ lessons }) => {
  console.log("lessons", lessons);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* NOTE thanks to the Lesson type, we have intellisense of the object! */}
      {lessons.map((lesson) => (
        <p key={lesson.id}>{lesson.title}</p>
      ))}
    </div>
  );
};

// NOTE GetStaticProps is recommended for intellisense in the props
// aka destructuring will give params, preview, etc.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: lessons } = await supabase.from("lesson").select("*");
  return { props: { lessons } };
};
export default Home;
