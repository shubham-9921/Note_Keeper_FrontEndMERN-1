/* eslint-disable no-unused-vars */
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainScreen from "../../MainScreen/MainScreen";
import {
  Accordion,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "react-bootstrap";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../../actions/notesAction";
import Loading from "../../Loading/Loading";
import ErrorScreen from "../../ErrorScreen/ErrorScreen";

const MyNotes = () => {
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notesList);
  const notesLIst = notesList.notes;
  const history = useHistory();
  const { loading, error, notes } = notesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const notesCreate = useSelector((state) => state.notesCreate);
  const { success: successCreate } = notesCreate;

  console.log(notesList);
  useEffect(() => {
    // fetchNotes();

    dispatch(getNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, successCreate, userInfo]);

  const handleDeleteNote = () => {};
  return (
    <div className="mainContainer">
      <MainScreen title={`Welcome ${userInfo.name}`}>
        <Link to="createnote">
          <Button variant="info" size="lg">
            {" "}
            Create a New Note
          </Button>
        </Link>

        {loading && <Loading></Loading>}
        {error && (
          <ErrorScreen variant="danger">{"Error to get Notes!"}</ErrorScreen>
        )}

        <div className="my-4">
          {notesLIst?.reverse().map((note) => (
            <>
              <Accordion key={note._id}>
                <Accordion.Item eventKey="0">
                  <Card className="my-3">
                    <CardHeader className="d-flex justify-content-between">
                      <Accordion.Header className="acc-title">
                        <div className="text-md acc-title">{note.title}</div>
                      </Accordion.Header>

                      <div className="">
                        <Button
                          variant="success"
                          className="px-2 mx-2"
                          href={`/updatenote/${note._id}`}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="px-2 mx-2"
                          onClick={handleDeleteNote}
                        >
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
                            created On :
                            <cite title="Source Title">
                              {note.createdAt.substring(0, 10)}
                            </cite>
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
