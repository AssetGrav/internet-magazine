import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup } from "react-bootstrap";

const TextField = ({ name, onChange, value, placeholder }) => {
    return (
        <div className="mb-4">
            <div className="input-group has-validation">
                <InputGroup >
                    <FormControl
                        type={name}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                </InputGroup>
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "number"
};

TextField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.number,
    placeholder: PropTypes.string
};

export default TextField;
