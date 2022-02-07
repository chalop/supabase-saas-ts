import type { NextPage, GetStaticProps } from "next";
import { supabase } from "@utils/supabase";
import { Lesson } from "@types";
import Link from "next/link";

// NOTE added to the generic the array of lessons type, for auto intellisense
const Home: NextPage<{ lessons: Lesson[] }> = ({ lessons }) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      {/* NOTE thanks to the Lesson type, we have intellisense of the object! */}
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={`/${lesson.id}`}>
          <a className="p-8 h-40 mb-4 rounded shadow text-xl flex">
            {lesson.title}
          </a>
        </Link>
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
