import React from 'react';

const TagList = ({tag}) => {
    return (
        <div>
         <li style={{ listStyleType: "none"}}> {tag.name},</li> 
        </div>
    );
}

export default TagList;
