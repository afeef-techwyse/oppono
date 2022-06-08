import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { cookies } from '../functions/cookies';

const ControlledPopup = React.forwardRef(({state, actions}, forwardedRef) => {
  
    const [open, setOpen] = useState(false);
    const closeModal = () => {
        cookies.setItem(
            "opppopup",
            true,
            2147483647,
            "/"
        );
        setOpen(false);
    }

    React.useEffect(() => {
        const ref = cookies.getItem("opppopup");
        setOpen(ref ? false : true);
    }, []);


    return (
        <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
            <a className="close" onClick={closeModal}>
            &times;
            </a>
            <div className={"modal-content"}>
                Please be advised that Oppono has made the following changes to our underwriting policy. <br/><br/>
                Effective June 1, 2022, Oppono’s maximum LTV on most products will be 70% for applicants with a 700+ beacon score. For borrowers that have a 750+ beacon score, we will consider a maximum LTV of 75%. In cases where the borrower has a beacon score of 699 or below, we will consider a maximum LTV of 65%.<br/><br/>
                We appreciate your understanding. If you require further information, please contact your BDM.
            </div>
        </div>
        </StyledPopup>
    )
});

React.useEffect

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    ...;
  }
  // use your custom style for ".popup-content"
  &-content {
    ...;
    background: #10397cee;
    border: 1px solid #B5D2FF;
    max-width: 80%;
    color: #fff;

    .modal-content {
        margin: 5% auto; /* 15% from the top and centered */
        padding: 10px;
        font-size: 1.5em;
        max-width: 85%; /* Could be more or less, depending on screen size */
        position: relative;
      }

    /* The Close Button */
        .close {
            color: #fff;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            right: 10px;
            top: 10px;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
  }
`;

export default ControlledPopup;