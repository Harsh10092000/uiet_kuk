import React from "react";

const DepartmentVisionMission = ({ vision, mission }) => {
    return (
        <>
            {vision && (
                <div>
                    <h3 className="mb-3 mt-5">
                        Vision
                    </h3>
                    <p>{vision}</p>
                </div>
            )}

            {mission && (
                <div>
                    <h3 className="mb-3 mt-5">
                        Mission
                    </h3>
                    {Array.isArray(mission) ? (
                        <ol>
                            {mission.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    ) : (
                        <p>{mission}</p>
                    )}
                </div>
            )}
        </>
    );
};

export default DepartmentVisionMission;
