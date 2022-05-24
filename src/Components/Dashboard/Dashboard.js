import React from "react";
import Charts from "../Charts/Charts";


const Dashboard = () => {
    return (
        <div className="w-auto mx-40 ">
            <h1 className="text-center text-4xl pt-14">
                Four Different Analysis Charts
            </h1>
            <div className="mt-10">
                <Charts></Charts>
            </div>
        </div>
    );
};

export default Dashboard;
