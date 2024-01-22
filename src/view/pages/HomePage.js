import { Component } from "react";
import { CircularProgress } from "@mui/material";   
import { Form } from "../../nonview/core";
import { FormView } from "../molecules";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const firstForm = Form.list()[0];
    this.state = { activeForm: firstForm, isLoaded: false };
  }

  async componentDidMount() {
    const pdfjs = await import('pdfjs-dist/build/pdf');
const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    this.setState({ isLoaded: true });
  }

  render() {
    const {activeForm, isLoaded} = this.state;
    if (!isLoaded) {
        return <CircularProgress />;
    }
    return <FormView form={activeForm} />;
  }
}
