import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchString = (params) => {
    return (
        <div className="mt-3">
            <InputGroup>
                <Button id="button-addon1" variant="outline-primary">
                найти
                </Button>
                <FormControl
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="поиск по названию"
                />
            </InputGroup>
        </div>
    );
};

export default SearchString;
