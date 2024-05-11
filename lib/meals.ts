import sql from "better-sqlite3";

const db = sql("meals.db");

interface Meal {
  title: string;
  slug: string;
  image: string;
  instructions: string;
  creator: string;
  creator_email: string;
  summary: string;
}

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals").all() as Meal[];
}

export function getMeal(slug: string) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = stmt.get(slug) as Meal;
  return meal;
}
