import { ReactNode, useContext } from "react";

import { tags } from "../../../../data/tags.ts";

import { FiltersContext } from "../../../../context/filters-context.ts";

import styles from "./TagFilter.module.css";

let count = 0;

function TagFilter(): ReactNode {
  console.log("rendering TagFilter");

  if (count <= 4) {
    count++;
    throw new Error("chiz");
  }
  const { filters, toggleTag } = useContext(FiltersContext);

  return (
    <div className={styles["tag-filter"]}>
      <div className={styles.title}>برچسب</div>
      <div className={styles.options}>
        {tags.map((tag) => (
          <label key={tag.id}>
            <input
              name="tag-filter"
              type="checkbox"
              checked={!!filters.tags.find((x) => x.id === tag.id)}
              onChange={() => toggleTag(tag)}
            />
            {tag.title}
          </label>
        ))}
      </div>
    </div>
  );
}

export default TagFilter;
