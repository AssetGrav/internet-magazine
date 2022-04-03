import React from "react";
import { Stack } from "react-bootstrap";

const Category = (params) => {
    return (
        <div className="shadow rounded w-auto mt-3 mb-3 p-2">
            <div className="fluid mt-2">
                <Stack gap={3}>
                    <div className="bg-light border">Крема</div>
                    <div className="bg-light border">Маски</div>
                    <div className="bg-light border">Шампуни</div>
                </Stack>
            </div>
        </div>
    );
};

export default Category;
