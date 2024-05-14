import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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

export const getMeals = async (): Promise<Meal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};

export const getMeal = (slug: string) => {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = stmt.get(slug) as Meal;
  return meal;
};

export const saveMeal = async (meal: any) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage));
};
