import { Table, Button } from "react-bootstrap"


export default function ListTable({ data }) {
    
  return (
    <div>
      {!data &&
        <p className="alert alert-success">
          You should start create an instance
        </p>
      }
      {data.length == 0 &&
        <div className="row justify-content-center">
          <p className="h6 text-center">Create a new instance now</p>
          <button className="btn btn-primary">Create New One</button>
        </div>
      }
      {(data && data.length !== 0) &&
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </div>
  )
}