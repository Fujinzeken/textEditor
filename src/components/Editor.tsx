"use client";
// Import necessary modules
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Menu from "./Menu";
import { Col, Container, Row } from "reactstrap";
import Preview from "../modal/Preview";
import { useState } from "react";

// Your Tiptap editor component
function MyEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  // Use the Tiptap editor hook
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
    },
  });

  return (
    <Container>
      <Row>
        <Col>
          <div className="editor-wrapper mx-auto d-flex flex-column gap-3">
            <h2>Post a Topic</h2>
            <input
              type="text"
              placeholder="post topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="form-control topic-input"
            />
            <Menu editor={editor} />
            <div className="text-editor">
              <EditorContent editor={editor} />
            </div>
            <button
              className="btn btn-primary button"
              onClick={() => setShowPreview(true)}
            >
              Preview
            </button>
          </div>
        </Col>
      </Row>
      {showPreview && (
        <Preview post={content} topic={topic} setShowPreview={setShowPreview} />
      )}
    </Container>
  );
}

export default MyEditor;
