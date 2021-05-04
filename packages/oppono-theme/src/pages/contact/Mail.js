export default styled(connect(Mail))`
  width: 100%;
  height: 100%;
  padding-top: ${size(200)};
  @media (max-width: 575.98px) {
    padding-top: ${size(150)};
  }

  // .contact-obj {
  //   max-width: ${size(205)};
  //   display: none;
  //   margin: ${size(30)} auto 0;
  // }
  //
  .contact-row {
    display: flex;
    align-items: flex-start;
    @media (max-width: 991.98px) {
      flex-direction: column;
      margin-top: ${size(25)};
      max-width: 90%;
    }
    @media (max-width: 575.98px) {
      max-width: ${size(400)};
      //margin: 0 auto;
      margin-top: 0;
    }

    .col-4 {
      flex-basis: ${size(460)};
      width: ${size(460)};
      margin-right: ${size(100)};
      flex-shrink: 0;
      @media (max-width: 991.98px) {
        width: 100%;
        flex-basis: 100%;
        margin-right: 0;
      }
    }

    .col-auto {
      flex: 1 1 100%;
      @media (max-width: 991.98px) {
        width: 100%;
        flex-basis: 100%;
      }
    }
  }

  ${Input} {
    //&:first-of-type{
    //  margin-top: 0;
    //}
    .normal-input {
      font-size: ${size(28)};
      height: ${size(36)};

      &::placeholder {
        font-size: ${size(28)};
      }

      @media (max-width: 575.98px) {
        height: 3.3rem;
        font-size: 2rem;

        &::placeholder {
          font-size: 2rem;
        }
      }
    }
  }

  textarea {
    font-size: ${size(28)};
    @media (max-width: 575.98px) {
      font-size: 2rem;

      &::placeholder {
        font-size: 2rem;
      }
    }
  }

  ${Button} {
    margin-top: ${size(78)};
    @media (max-width: 991.98px) {
      padding: ${size(20)};
    }
    @media (max-width: 575.98px) {
      width: 100%;
    }
  }

  .d-flex {
    display: flex;
    align-items: center;
    @media (max-width: 991.98px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .contact-info-wrapper {
    position: relative;
    left: ${size(50)};
    @media (max-width: 991.98px) {
      bottom: 0;
      left: 0;
      margin-top: ${size(20)};
    }

    .item-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: ${size(15)};
      background: #10397c;
      padding: ${size(10)} ${size(40)} ${size(10)} ${size(30)};
      border-top: 4px solid transparent;
      transition: border-color 500ms;
      @media (max-width: 991.98px) {
        padding: ${size(10)} ${size(20)} ${size(10)} ${size(15)};
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #2c3d90;
        width: ${size(90)};
        height: ${size(90)};
        border-radius: 50%;
        object-fit: contain;
        margin-right: ${size(30)};
        @media (max-width: 991.98px) {
          width: ${size(50)};
          height: ${size(50)};
        }

        svg {
          width: 50%;
          height: 50%;
          transition: color 500ms;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        div {
          font-size: ${size(22)};
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: ${size(3)};
          display: block;
          transition: color 500ms;
          @media (max-width: 991.98px) {
            font-size: ${size(18)};
          }
          @media (max-width: 575.98px) {
            font-size: ${size(14)};
          }
        }

        p {
          font-size: ${size(16)};
          color: rgba(255, 255, 255, 0.8);
          transition: color 500ms;

          @media (max-width: 575.98px) {
            font-size: ${size(14)};
          }
        }
      }

      &:hover {
        border-color: #fff;

        .icon {
          svg {
            color: rgba(255, 255, 255, 1);
          }
        }

        .text {
          div,
          p {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }

  .desktop-only {
    @media (max-width: 991.98px) {
      display: none;
    }
  }

  .mobile-only {
    @media (min-width: 992px) {
      display: none;
    }
  }

  .floating-obj {
    position: relative;
    width: 25%;
    height: 200px;

    @media (max-width: 991.98px) {
      position: absolute;
      width: 25%;
      height: 25%;
      right: 10%;
      top: 25%;
    }

    .flying-objs-container {
      top: 0 !important;
      > div {
        width: 100% !important;
        left: 15% !important;
        top: 0 !important;
      }
    }
  }

  ${Select} {
    .oppono-select {
      &__option,
      &__single-value,
      &__input,
      &__control {
        font-size: ${size(24)};

        @media (max-width: 575.98px) {
          font-size: 2rem;
        }
      }
    }
  }
`;
