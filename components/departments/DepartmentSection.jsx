import React from "react";

const DepartmentSection = ({ title, highlight, id, children, className = "" }) => {
    return (
        <div className={`content-panel message-block mb-40 ${className}`}>
            {title && (
                <h3 id={id} className="mb-4">
                    {title} {highlight && <span className="red">{highlight}</span>}
                </h3>
            )}
            {children}
        </div>
    );
};

export default DepartmentSection;
