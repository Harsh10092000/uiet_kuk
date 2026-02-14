import React from "react";

const DepartmentOutcomes = ({ pos, psos }) => {
    return (
        <>
            {pos && pos.length > 0 && (
                <div>
                    <h3 className="mb-3 mt-5">
                        Programme <span className="red">Outcomes</span>
                    </h3>
                    {pos.map((po, index) => (
                        <p key={index}>
                            <strong>{po.id || `PO ${index + 1}`}: {po.title && `${po.title}:`}</strong> {po.description}
                        </p>
                    ))}
                </div>
            )}

            {psos && psos.length > 0 && (
                <div>
                    <h3 className="mb-3 mt-5">
                        Programme Specific <span className="red">Outcomes</span>
                    </h3>
                    {psos.map((pso, index) => (
                        <p key={index}>
                            <strong>{pso.id || `PSO ${index + 1}`}: {pso.title && `${pso.title}:`}</strong> {pso.description}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
};

export default DepartmentOutcomes;
