
import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const CreateAndUpdatePosts = ({ initialValue, limit, callback }) => {
    const sizeLimit = limit ?? 50;
    const [value, setValue] = useState(initialValue ?? '');
    const [length, setLength] = useState(0);

    const handleInit = (evt, editor) => {
        setLength(editor.getContent({ format: 'text' }).length);
    };

    const handleUpdate = (value, editor) => {
        callback(editor.getContent())
        const length = editor.getContent({ format: 'text' }).length;
        if (length <= sizeLimit) {
            setValue(value);
            setLength(length);
        }
    };

    const handleBeforeAddUndo = (evt, editor) => {
        const length = editor.getContent({ format: 'text' }).length;
        // note that this is the opposite test as in handleUpdate
        // because we are determining when to deny adding an undo level
        if (length > sizeLimit) {
            evt.preventDefault();
        }
    };

    return (
        <>
            <Editor
                initialValue={initialValue}
                value={value}
                onInit={handleInit}
                onEditorChange={handleUpdate}
                onBeforeAddUndo={handleBeforeAddUndo}
            />
            <p>Remaining: {sizeLimit - length}</p>
        </>
    );
};

export default CreateAndUpdatePosts