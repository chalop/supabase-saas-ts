import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedNextUrl } from "next/dist/shared/lib/router/utils/parse-next-url";
import { supabase } from "@utils/supabase";
import { Lesson } from "@types";
import { ParsedUrlQuery } from "querystring";

const LessonDetails: NextPage = ({ lesson }) => {
  console.log({ lesson });
  return <div>Lesson details</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: lessons } = await supabase.from<Lesson>("lesson").select("id");

  const paths = lessons?.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data: lesson } = await supabase
    .from<Lesson>("lesson")
    .select("*")
    .eq("id", params?.id)
    .single();

  return {
    props: {
      lesson,
    },
  };
};

export default LessonDetails;
