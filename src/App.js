import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  // sidebar State
  const [isOpen, setIsOpen] = useState(false);
  // clock State
  const [clock, setClock] = useState({ hour: 0, minutes: 1, seconds: 20 });
  // timer end
  const [endTime, setEndTime] = useState(false);

  // utils functions

  // sidebar toogle handler
  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  //  for updating and controlling countdown
  useEffect(() => {
    if (clock.hour === 0 && clock.minutes === 0 && clock.seconds === 0) {
      setEndTime(true);
      console.log("Times's Up");
    } else {
      const timer = setInterval(() => {
        if (clock.minutes === 0 && clock.hour > 0 && clock.seconds === 0) {
          const updatedClock = {
            hour: clock.hour - 1,
            minutes: 59,
            seconds: 59,
          };
          setClock(updatedClock);
        } else if (clock.seconds === 0) {
          setClock({ ...clock, minutes: clock.minutes - 1, seconds: 59 });
        } else {
          setClock({ ...clock, seconds: clock.seconds - 1 });
        }
        console.log(clock);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [clock]);

  return (
    <React.Fragment>
      <Header toggleButton={toggleSidebar} clock={clock} endTime={endTime} />
      <Body isOpen={isOpen} clock={clock} endTime={endTime} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
