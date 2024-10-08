import { Button, Card, Form } from "react-bootstrap";
import MainScreen from "../../MainScreen/MainScreen";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../../../actions/notesAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../../Loading/Loading";
import ErrorScreen from "../../ErrorScreen/ErrorScreen";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const notesCreate = useSelector((state) => state.notesCreate);
  const { loading, error } = notesCreate;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !category) return;

    dispatch(createNote(title, content, category));
    handleReset();
    history.push("/mynotes");
  };

  const handleReset = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };
  return (
    <>
      <MainScreen title={"Create A Note"}>
        <Card>
          <Card.Header>Create a Note</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              {error && (
                <ErrorScreen variant={"danger"}>
                  {"Error in create note"}
                </ErrorScreen>
              )}
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  required
                />
              </Form.Group>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Enter Content"
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  as="textarea"
                  name="content"
                  required
                />
              </Form.Group>
              {content && (
                <Card>
                  <Card.Header> Note Preview</Card.Header>

                  <Card.Body>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </Card.Body>
                </Card>
              )}
              <Form.Group controlId="title">
                <Form.Label>Catergory</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </Form.Group>
              {loading && <Loading></Loading>}

              <br />
              <Button variant="primary" type="submit">
                {" "}
                Create Note
              </Button>
              <Button variant="danger" className="mx-2" onClick={handleReset}>
                {" "}
                Reset Fields
              </Button>
            </Form>
          </Card.Body>
          <Card.Footer>
            Creating On : {new Date().toLocaleDateString()}
          </Card.Footer>
        </Card>
      </MainScreen>
    </>
  );
};

export default CreateNote;
