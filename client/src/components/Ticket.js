import React, { useState, useEffect } from 'react';
import './Ticket.css';
import ReactCardFlip from 'react-card-flip'; // comopnent that will flip the ticket

<<<<<<< HEAD
function Ticket({ticket,call,labels,creationTime,handleHide}) {
=======
function Ticket(props) {
>>>>>>> parent of 76de38f... fixed issues
  const [isFlipped, setIsFlipped] = useState(true); // state for flipping animation
  const [contentClass, setContentClass] = useState('content'); // state for changing the content class name
  const [display, setDisplay] = useState('flex'); // state for hidding and displaying the ticket
  const [buttonDisplay, setButtonDisplay] = useState('none'); // state for hidding and displaying the hide button
  const [classTicket, setClassTicket] = useState('ticket'); // state for changing the ticket class name
  // function to add zeros to the date if needed
  function addZero(i) {
    if (i < 10) {
      i = `0${i}`;
    }
    return i;
  }
  // function to generate the current date
  function myFunction() {
    const d = props.creationTime;
    const m = addZero(d.getMinutes());
    const h = addZero(d.getHours());
    const s = addZero(d.getSeconds());
    let today = d;
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`;
    return `${today}  ${h}:${m}:${s}`;
  }
  const see = (e) => { // function that will change the hide button inner text
    if (contentClass === 'content') {
      setContentClass('content2'); // this class not limited in lines
      e.target.innerText = 'show less';
    } else {
      setContentClass('content'); // this class is limited for 4 lines
      e.target.innerText = 'show more...';
    }
  };
  useEffect(() => { // flip animation in the first mount
    setTimeout(() => {
      setIsFlipped(false);
    }, 400);
  },
  []);
<<<<<<< HEAD
=======
  const hide = () => { /* hide function that will increase the hiddin tickets
    counter and do flip animation */
    setClassTicket('hiddenTicket1'); // class just for the animation
    setIsFlipped(false);
    setIsFlipped(true);
    props.addCount();
    setTimeout(() => {
      setClassTicket('hiddenTicket');
      setDisplay('none');
    }, 1000);
  };
>>>>>>> parent of 76de38f... fixed issues
  const showButton = () => {
    setButtonDisplay('block');
  };
  const hideButton = () => {
    setButtonDisplay('none');
  };
<<<<<<< HEAD

=======
  useEffect(() => { /* function that will be called if the restore button pressed and
    will change the ticket to be visible and do flip animation */
    setIsFlipped(false);
    setDisplay('flex');
    setClassTicket('ticket');
  }, [props.call]);
>>>>>>> parent of 76de38f... fixed issues
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div
        style={{ display }}
        className={classTicket}
        onMouseOver={showButton}
        onMouseOut={hideButton}
      >
        <div className="titleAndButton">
          <div>
            <p className="title">{props.title}</p>
          </div>
          <div>
            <button style={{ display: buttonDisplay }} onClick={() => handleHide(ticket.id)} className="hideTicketButton">hide</button>
          </div>
        </div>
<<<<<<< HEAD
        <p className={contentClass}>{ticket.content}</p>
        {ticket.title === "Corvid App Developers Alpha?" && console.log(ticket.content.length+" "+window.innerWidth)}
        <span style={{ display: ticket.content.replace(/(\r\n|\n|\r)/gm, "").length < 308 && window.innerWidth > 780 ? 'none' : 'inline' }} onClick={(e) => changeButtonInnerText(e)} className="see">show more...</span>
=======
        <p className={contentClass}>{props.content}</p>
        <span style={{ display: props.content.length < 380 && window.innerWidth > 780 ? 'none' : 'inline' }} onClick={(e) => see(e)} className="see">show more...</span>
>>>>>>> parent of 76de38f... fixed issues
        <div className="contact">
          <div>
            <p className="email">
              By&nbsp;
              <a href={`mailto:${props.userEmail}`}>{props.userEmail}</a>
              &nbsp;
              |
              &nbsp;
              { myFunction() }
            </p>
          </div>
          <div className="labels">
            {
              props.labels !== null && props.labels.map((label) => <div className="label" key={label}>{label}</div>)
            }
          </div>
        </div>
      </div>
      <div className="flip" style={{ display }} />
    </ReactCardFlip>
  );
}

export default Ticket;
