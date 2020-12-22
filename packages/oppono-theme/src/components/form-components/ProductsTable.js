import React from 'react';
import {styled} from 'frontity';
import Container from '../reusable/Container';
import {size} from '../../functions/size';
import gsap from 'gsap';
import classnames from 'classnames';
import useMedia from '../../hooks/useMedia';


const ProductsTable = ({className, children, dataFilter}) => {
  const tableRef = React.useRef(null);
  const tablePages = React.useRef(0);
  const elements = React.useRef({});
  const [currentTablePage, setCurrentTablePage] = React.useState(0);
  const media = useMedia();
  React.useEffect(() => {
    elements.current.table = tableRef.current.querySelector('table');
    if (elements.current.table) {
      elements.current.columns = [...elements.current.table.querySelector('thead tr').children].map((column, columnIndex) => elements.current.table.querySelectorAll(`tr >:nth-of-type(${columnIndex + 1})`)).slice(1);
      elements.current.prevArrow = elements.current.table.querySelector('.table-arrows .prev');
      elements.current.nextArrow = elements.current.table.querySelector('.table-arrows .next');
      elements.current.currentPage = elements.current.table.querySelector('.table-arrows .current-page');
      elements.current.totalPages = elements.current.table.querySelector('.table-arrows .total-pages');
      tablePages.current = Math.ceil((elements.current.columns.length) / 2);
      const handlePrev = () => elements.current.prevArrow?.classList.contains('disabled') || setCurrentTablePage(prevState => prevState - 1);
      const handleNext = () => elements.current.nextArrow?.classList.contains('disabled') || setCurrentTablePage(prevState => prevState + 1);
  
      elements.current.prevArrow?.addEventListener('click', handlePrev);
      elements.current.nextArrow?.addEventListener('click', handleNext);
  
      elements.current.totalPages?.innerText && (elements.current.totalPages.innerText = tablePages.current);
  
      return () => {
        elements.current.prevArrow?.removeEventListener('click', handlePrev);
        elements.current.nextArrow?.removeEventListener('click', handleNext);
      };
  
    }
  }, []);
  
  React.useEffect(() => {
    if (elements.current.table) {
      if (media === 'tablet') {
        gsap.timeline()
          .set(elements.current.columns.flat(), {display: 'none'})
          .set(elements.current.columns.slice(currentTablePage * 2, currentTablePage * 2 + 2).flat(), {display: 'table-cell'});
        elements.current.prevArrow?.classList.toggle('disabled', currentTablePage <= 0);
        elements.current.nextArrow?.classList.toggle('disabled', currentTablePage >= tablePages.current - 1);
        elements.current.currentPage?.innerText && (elements.current.currentPage.innerText = currentTablePage + 1);
      }
      else {
        gsap.set(elements.current.columns.flat(), {display: 'table-cell'});
      }
    }
  }, [media, currentTablePage]);
  return (
    <div data-filter={dataFilter} ref={tableRef} className={classnames('form-wide-container', className)}>
      <Container>
        <table>
          {children}
        </table>
      </Container>
    </div>
  );
};

export default styled(ProductsTable)`
table{
  max-width: 100%;
  display: table;
  width: 100%;
  border-collapse:collapse;
  margin: 0 auto ${size(120)};
  thead{
    border-bottom: ${size(1)} solid #bfb6b4;
    th{
      text-align: left;
      padding-bottom: ${size(22)};
      vertical-align: bottom;
      &:first-of-type{
        vertical-align: middle;
      }
      p{
        color: #bfb6b4;
        font-size: ${size(16)};
        font-weight: 500;
        line-height: ${size(24)};
        &.circle{
          width: ${size(34)};
          height: ${size(34)};
          border: ${size(1)} solid rgba(191, 182, 180, 0.5);
          border-radius: ${size(34)};
          margin-bottom: ${size(15)};
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: sans-serif;
        }
        &.dark{
          color: rgba(191, 182, 180, 0.5);
        }
        &.number{
          font-size: ${size(56)};
          font-weight: 300;
          line-height: ${size(64)};
          margin-top: ${size(4)};
        }
        &.small{
          color: rgba(181, 210, 255, 0.4);
          font-size: ${size(12)};
          font-weight: 500;
          margin-bottom: ${size(4)};
        }
      }
      button.small{
        margin: 0;
        margin-top: ${size(14)};
      }
    }
  }
  
  tbody{
    tr{
      &.head{
        td{
          padding-top: ${size(13)};
          padding-bottom: ${size(13)};
          border-top: none;
        }
        &:first-of-type{
          td{
            padding-top: ${size(23)};
          }
        }
        &.last-head{
          td{
            padding-bottom: ${size(23)};
          }
        }
      }
      
      td{
        padding-top: ${size(23)};
        padding-bottom: ${size(23)};
        color: #bfb6b4;
        font-size: ${size(14)};
        font-weight: 400;
        line-height: ${size(24)};
        border-top: ${size(1)} solid rgba(191, 182, 180, 0.1);
        max-width: ${size(300)};
        padding-right: ${size(100)};
        &.dark{
          color: rgba(191, 182, 180, 0.5);
          line-height: ${size(16)};
          font-weight: 500;
        }
        &.details{
          font-weight: 500;
          letter-spacing: 0.${size(62)};
          line-height: ${size(16)};
        }
      }
      .table-checkmark{
        width: ${size(18)};
        height: ${size(12)};
      }
    }
  }
  .table-arrows{
    display: none;
  }
  @media(max-width: 991.98px) {
    margin-bottom: ${size(104)};
    thead{
      th{
        min-width: ${size(185)};
        &:first-of-type{
          min-width: ${size(340)};
          vertical-align: bottom;
        }
        p{
          font-size: ${size(14)};
          &.circle{
            width: ${size(27)};
            height: ${size(27)};
            border-radius: ${size(27)};
            margin-bottom: ${size(7)};
          }
          &.number{
            font-size: ${size(40)};
            margin-top: ${size(9)};
          }
          &.small{
            display: none;
          }
        }
        button.small{
          margin-top: ${size(21)};
        }
        
      }
    }
    
    tbody{
      tr{
        .table-checkmark{
          width: ${size(16)};
          height: ${size(11)};
        }
      }
    }
    
    .table-arrows{
      margin-top: ${size(10)};
      display: flex;
      align-items: center;
      .prev,.next{
        cursor: pointer;
        transition: margin .4s ease, width .4s ease,opacity .4s ease;
        overflow: hidden;
        width: ${size(48)};
        position: relative;
        height: ${size(15)};
        display: flex;
        align-items: center;
        svg{
          position:absolute;
          width: ${size(48)};
          height: ${size(15)};
        }
        &.disabled{
          cursor: not-allowed;
          opacity: .4;
        }
      }
      .prev{
        svg{
          left: 0;
        }
      }
      .next{
        svg{
          right: 0;
        }
        &.swiper-button-disabled{
          margin-right: ${size(49)};
        }
      }
      
      
      .slides-numbers{
        color: #bfb6b4;
        font-size: ${size(14)};
        font-weight: 500;
        font-style: normal;
        letter-spacing: normal;
        margin: 0 ${size(20)};
        .slash{
          margin-left: ${size(9)};
          margin-right: ${size(5)};
        }
      }
    }
  }
  @media(max-width: 575.98px) {
    display: none;
  }
}

.mortgage-options-mobile{
  @media(min-width: 576px){
    display: none;
  }
}
`;