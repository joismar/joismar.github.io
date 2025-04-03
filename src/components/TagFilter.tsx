import React, { useState } from 'react';
import Tag from './Tag';

interface Props {
    tags: string[];
    onFilterChange: (tag: string) => void;
    defaultTag?: string;
}

const TagFilter: React.FC<Props> = ({ tags, onFilterChange, defaultTag }) => {
    const [selectedTag, setSelectedTag] = useState<string>('all');

    React.useEffect(() => {
        if (defaultTag) {
            setSelectedTag(defaultTag);
            onFilterChange(defaultTag);
        }
    }, [defaultTag, onFilterChange]);

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
        onFilterChange(tag);
    };

    return (
        <div className="flex flex-wrap mb-4 gap-1">
            <Tag tag="all" withHref onClick={() => handleTagClick('all')} isSelected={selectedTag === 'all'} />
            {tags.map((tag) => (
                <Tag key={tag} tag={tag} withHref onClick={() => handleTagClick(tag)} isSelected={selectedTag === tag} />
            ))}
        </div>
    );
};

export default TagFilter;