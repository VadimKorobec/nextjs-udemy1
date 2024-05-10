import Image from "next/image";

import styles from "./meal-item.module.css";
import Link from "next/link";

interface MealItemProps {
  title: string;
  slug: string;
  image: string;
  instructions: string;
  creator: string;
  creator_email: string;
  summary: string;
}

const MealItem = ({ title, slug, image, summary, creator }: MealItemProps) => {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
