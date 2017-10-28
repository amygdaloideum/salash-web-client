import React from 'react';
let RichTextEditor, RichTextEditorDefault;
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class RecipeEditor extends React.Component {

  constructor() {
    super()
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState });
    if (this.props.input.onChange) {
      this.props.input.onChange(convertToRaw(editorState.getCurrentContent()));
    }
  }

  componentDidMount() {
    this.setState({ shouldRender: true })
  }

  render() {
    const toolbarConfig = {
      options: ['inline', 'blockType', 'list', 'emoji', 'history'],
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