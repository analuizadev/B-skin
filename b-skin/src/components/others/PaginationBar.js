import Pagination from 'react-bootstrap/Pagination';

function PaginationBar() {

  return (
    <Pagination>
      <Pagination.Prev />

      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>

      <Pagination.Next />
    </Pagination>
  );
}

export default PaginationBar;