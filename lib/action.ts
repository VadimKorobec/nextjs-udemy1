"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

interface Meal {
  title: string;
  summary: string;
  instructions: string;
  image: any;
  creator: string;
  creator_email: string;
}

const isInvalidText = (text: string): boolean => {
  return !text || text.trim() === "";
};

export const shareMeal = async (prevState: any, formData: FormData) => {
  const meal = <Meal>{
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  redirect("/meals");
};
