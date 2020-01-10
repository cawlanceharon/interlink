import React from 'react';
import {Table, Pagination, Button} from 'react-bootstrap';
import {CommonDeleteModal} from "./modal/common-delete-modal";
import {CommonUpdateModal} from "./modal/common-update-modal";

// data contains, object with key and value
// keys are converted to table header/column
// id field are hidden and are used for deleting data and editing

export const CommonTableView = ({
                                id, // id field to be used for editing and deleting data
                                title, // title of the table
                                data, // initial data
                                modal,
                                currentPage, // current page
                                totalPages, // total pages
                                handlePageView, // pagination handler
                                handleModalView, // pagination handler
                                handleModalMethod
                              }) => {

  const DataList = ({data}) => {
    return (data.map((data, i) =>
      <tr key={i}>
        {Object.keys(data).map((key) => {
          if (key.indexOf(id) === -1) {
            return (<td key={key + data}>{data[key]}</td>)
          } else {
            return (<td key={key + data}>
              <Button variant="outline-primary" onClick={() => handleModalView('update', true, data[key])}>Edit</Button> &nbsp;
              <Button variant="outline-danger" onClick={() => handleModalView('delete', true, data[key])}>Delete</Button>
            </td>);
          }
        })}
      </tr>
    ));
  };

  const DataColumn = ({data}) => {
    return ([data[0]].map((data, i) =>
      <tr key={i}>
        {Object.keys(data).map((key) => {
          if (key.indexOf(id) === -1) {
            return (<td key={key + i}>{key.replace("_", " ")}</td>)
          } else {
            return (<td key={key + i}>
              Action
            </td>);
          }
        })}
      </tr>
    ));
  };

  const TablePages = ({totalPages, currentPage}) => {
    let active = currentPage;
    let items = [];

    if (totalPages <= 10) {
      for (let number = 1; number <= totalPages; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active} onClick={() => handlePageView(number)}>
            {number}
          </Pagination.Item>,
        );
      }

      return <Pagination>{items}</Pagination>;
    }

    if (currentPage >= 4) {
      items.push(<Pagination.First key={totalPages + 1} onClick={() => handlePageView(1)}/>);
      items.push(<Pagination.Prev key={totalPages + 2} onClick={() => handlePageView(currentPage - 1)} />);
      items.push(<Pagination.Item key={totalPages + 3} onClick={() => handlePageView(1)}>{1}</Pagination.Item>);
      items.push(<Pagination.Ellipsis key={totalPages + 4} />);
    }

    if ((currentPage - 2) >= 1) {
      items.push(<Pagination.Item key={totalPages + 5} onClick={() => handlePageView(currentPage - 2)}>{currentPage - 2}</Pagination.Item>);
    }

    if ((currentPage - 1) >= 1) {
      items.push(<Pagination.Item key={totalPages + 6} onClick={() => handlePageView(currentPage - 1)}>{currentPage - 1}</Pagination.Item>);
    }

    items.push(<Pagination.Item key={currentPage} active={currentPage === active} onClick={() => handlePageView(currentPage)}>
      {currentPage}
    </Pagination.Item>);

    if (currentPage <= (totalPages - 1)) {
      items.push(<Pagination.Item key={totalPages + 7} onClick={() => handlePageView(currentPage + 1)}>{currentPage + 1}</Pagination.Item>);
    }

    if (currentPage <= (totalPages - 2)) {
      items.push(<Pagination.Item key={totalPages + 8} onClick={() => handlePageView(currentPage + 2)}>{currentPage + 2}</Pagination.Item>);
    }

    if (currentPage <= (totalPages - 3)) {
      items.push(<Pagination.Ellipsis key={totalPages + 9} />);
      items.push(<Pagination.Item key={totalPages + 10} onClick={() => handlePageView(totalPages)}>{totalPages}</Pagination.Item>);
      items.push(<Pagination.Next key={totalPages + 11} onClick={() => handlePageView(currentPage + 1)} />);
      items.push(<Pagination.Last key={totalPages + 12} onClick={() => handlePageView(totalPages)} />);
    }

    return <Pagination>{items}</Pagination>;
  };

  return (
    <>
      <CommonDeleteModal
        modal={modal}
        handleModalView={handleModalView}
        handleModalMethod={handleModalMethod} />

      <CommonUpdateModal
        data={data}
        modal={modal}
        handleModalView={handleModalView}
        handleModalMethod={handleModalMethod} />

      <h1>{title}</h1>
      <Table striped bordered hover>
        <thead>
          <DataColumn data={data} />
        </thead>
        <tbody>
          <DataList data={data} />
        </tbody>
      </Table>
      <TablePages totalPages={totalPages} currentPage={currentPage} />
    </>
  )
};
