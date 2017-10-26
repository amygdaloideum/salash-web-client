import React from 'react';
let RichTextEditor, RichTextEditorDefault;
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class RecipeEditor extends React.Component {

  constructor() {
    super()
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => this.setState({ editorState });

  componentDidMount() {
    this.setState({ shouldRender: true })
  }

  onChange = (value) => {
    this.setState({ value });
    if (this.props.input.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.input.onChange(
        value.toString('html')
      );
    }
  };

  render() {
    const toolbarConfig = {
      options: ['inline', 'blockType', 'list', 'link', 'emoji', 'history'],
      inline: { options: ['bold', 'italic', 'underline', 'strikethrough'] },
      list: { options: ['unordered'] },
    };
    return (
      <Editor
        editorState={this.state.editorState}
        onEditorStateChange={this.onEditorStateChange}
        toolbar={toolbarConfig}
      />
    );
  }
}