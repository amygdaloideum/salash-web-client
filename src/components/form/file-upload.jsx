import React from 'react';

export default class FileUpload extends React.Component {

  constructor() {
    super()
  }

  onChange = e => {
    this.props.input.onChange({
      name: e.target.files[0].name,
      file: e.target.files[0],
    })
  }

  render() {
    const value = this.props.input.value;
    return (
      <div className="file has-name">
        <label className="file-label">
          <input
            className="file-input"
            accept="image/*;capture=camera"
            type="file"
            onChange={this.onChange} />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fa fa-upload"></i>
            </span>
            <span className="file-label">
              Choose a file…
            </span>
          </span>
          <span className="file-name">
            {value.name || null}
          </span>
        </label>
      </div>
    );
  }
}