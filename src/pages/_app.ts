import App from "next/App";
import "../styles/globals.css";

interface State {
  isSpinner: boolean;
}

export default class extends App<Record<string, unknown>, Record<string, unknown>, State> {}
