import { render, screen } from "@testing-library/react";

import  {Provider as ReduxProvider}  from "react-redux"
import {store} from "../../Redux/store"
import App from "../../App";
const Mockfunction=()=>{
    return(<ReduxProvider store={store}>
    <App />
    </ReduxProvider>)
}

//resting heading component (unit testing)
describe("App", () => {
  it("Should see the p element", () => {
    render(<Mockfunction />);
    const pElement= screen.getByText("Yes")
    expect(pElement).toBeInTheDocument();
  });
});