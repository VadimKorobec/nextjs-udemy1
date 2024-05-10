import MealItem from "./meal-Item";
import styles from "./meals-grid.module.css";

interface MealsGridProps {
  meals: {
    title: string;
    slug: string;
    image: string;
    instructions: string;
    creator: string;
    creator_email: string;
    summary: string;
  }[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal, i) => (
        <li key={i}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
