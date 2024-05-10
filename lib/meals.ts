import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<
  Array<{
    title: string;
    slug: string;
    image: string;
    instructions: string;
    creator: string;
    creator_email: string;
    summary: string;
  }>
> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as Array<{
    title: string;
    slug: string;
    image: string;
    instructions: string;
    creator: string;
    creator_email: string;
    summary: string;
  }>;
}
