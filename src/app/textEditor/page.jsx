"use client"
import React, { useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import { Editor as DraftEditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const DraftToHtmlConverter = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlContent, setHtmlContent] = useState('');

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    updateHtmlContent(newEditorState);
  };

  const updateHtmlContent = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const html = draftToHtml(rawContentState);
    setHtmlContent(html);
    console.log(htmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
    );
  };

  return (
    <div>
      <DraftEditor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default DraftToHtmlConverter;
