import { connect, styled } from 'frontity';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const ControlledPopup = React.forwardRef(({className}) => {
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  return (
    <div className={className}>
      <Popup className={"opp-popup"} open={open} closeOnDocumentClick onClose={closeModal} >
        <div className="modal">
        <a className="close" onClick={closeModal}>
            &times;
        </a>
            <p>Please be advised that Oppono has made the following changes to our underwriting policy.
                <br/>
                Effective May 25, 2022, Oppono’s maximum LTV on all products will be 75% for applicants with a 700+ beacon score. In cases where the borrower has a beacon score of 699 or below, we will consider a max of 65%.
                <br/>
                We appreciate your understanding. If you require further information, please contact your BDM.
            </p>
        </div>
      </Popup>
    </div>
  )
});

export default styled(Popup)`
background: #fff;
`;