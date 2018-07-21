import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
}) => {
  return(
    <div>
      <textarea
        className={classnames('form-control', {'input-invalid': error})}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}/>
        {info && <small className="form-text text-muted">{info}</small>}
      {error && (<div className="invalid-response">{error}</div>)}
    </div>
  );
}

TextAreaFieldGroup.PropTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default TextAreaFieldGroup;
