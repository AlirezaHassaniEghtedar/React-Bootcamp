import {ReactNode, useState} from "react";

import {tags} from "../../../../data/tags.ts";

import styles from "./TagFilter.module.css";

function TagFilter(): ReactNode {
    const [selectedTags, setSelectedTags] = useState<number[]>([]);

    const toggleTag = (id: number): void => {
        setSelectedTags(old => {
            const index = old.findIndex(x => x === id);

            if (index === -1) {
                return [...old, id]
            }

            return old.filter(x => x !== id)
        })
    }

    return <div className={styles["tag-filter"]}>
        <div className={styles.title}>برچسب</div>
        <div className={styles.options}>
            {
                tags.map(tag => (
                    <label>
                        <input
                            key={tag.id}
                            name="tag-filter"
                            type="checkbox"
                            checked={selectedTags.includes(tag.id)}
                            onChange={() => toggleTag(tag.id)} />
                        {tag.title}
                    </label>
                ))
            }
        </div>
    </div>
}

export default TagFilter;