import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MainScreen from "../../../MainScreen/MainScreen";
import {
  Accordion,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "react-bootstrap";
import { notes } from "../../../../data/notes";

const MyNotes = () => {

  const handleDeleteNote =()=>{
    
  }
  return (
    <div className="mainContainer">
      <MainScreen title={"Shubham"}>
        <Link to="createnote">
          <Button variant="info" size="lg">
            {" "}
            Create a New Note
          </Button>
        </Link>

        <div className="my-4">
          {notes.map((note) => (
            <>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Card className="my-3">
                    <CardHeader className="d-flex justify-content-between">
                      <Accordion.Header className="acc-title">
                        <div className="text-md acc-title">{note.title}</div>
                      </Accordion.Header>

                      <div className="">
                        <Button variant="success" className="px-2 mx-2" href={`/note/${note._id}`}>
                          Edit
                        </Button>
                        <Button variant="danger" className="px-2 mx-2" onClick={handleDeleteNote}>
                          Delete
                        </Button>
                      </div>
                    </CardHeader>

                    <Accordion.Collapse eventKey="0">
                      <CardBody>
                        <Badge
                          variant="info"
                          className="text-xs px-2 py-1 text-white"
                        >
                          Category : {note.category}
                        </Badge>
                        <blockquote className="blockquote mb-0">
                          <p>{note.content}</p>
                          <footer className="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </CardBody>
                    </Accordion.Collapse>
                  </Card>
                </Accordion.Item>
              </Accordion>
            </>
          ))}
        </div>
      </MainScreen>
    </div>
  );
};

export default MyNotes;
