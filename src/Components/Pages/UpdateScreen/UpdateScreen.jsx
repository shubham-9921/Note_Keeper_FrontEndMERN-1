/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Form } from "react-bootstrap"
import MainScreen from "../../MainScreen/MainScreen"
import ErrorScreen from "../../ErrorScreen/ErrorScreen"
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";



const UpdateScreen = () => {
    const {id} = useParams();
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [category,setCategory] = useState("");

    const handleSubmit = ()=>{

    }

    const handleReset = ()=>{
        setTitle("");
        setCategory("");
        setContent("")
    }

    useEffect(async()=>{

        try {
            const config ={
                headers:{
                    "Content-Type":"application/json",
                }
            }
            const {data} = await axios.get(`http://localhost:8081/api/notes/${id}`,config);
            if (data) {
                setTitle(data.note.title);
                setCategory(data.note.title);
                setContent(data.note.title);
                
            }
        } catch (error) {
            console.log(error);
        }   

    },[])
  return (
    <>
     <MainScreen title={"Create A Note"}>
        <Card>
          <Card.Header>Create a Note</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              {/* {error && (
                <ErrorScreen variant={"danger"}>
                  {"Error in create note"}
                </ErrorScreen>
              )} */}
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
              {/* {loading && <Loading></Loading>} */}

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
  )
}

export default UpdateScreen
