import { Table, Button } from "react-bootstrap"
import { apiRequest } from "../services/apiClient";
import { useEffect, useState } from "react";
import DeleteFactory from "./DeleteFactory";
import EditFactory from "./EditFactory";


export default function FactoriesTable() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await apiRequest("GET", "factories")
                setData(result)
                setError(null)
            } catch (err) {
                setError(err.message || "An error occurred")
                setData([])
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [])

    if (loading) {
        return <div>loading ...</div>
    }

    if (error) {
        return <div>error: {error}</div>
    }

    return (
        <div>
            {!data &&
                <p className="alert alert-success">
                    You should start create a factory
                </p>
            }
            {data.length == 0 &&
                <div className="row justify-content-center">
                    <p>There is no factory</p>
                    
                    <button className="btn btn-primary">Create New One</button>
                </div>
            }
            {(data && data.length !== 0) &&
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((factory, index) => (
                            <tr key={index}>
                                <td>{factory.id}</td>
                                <td>{factory.name}</td>
                                <td>{factory.phone || "—"}</td>
                                <td>{factory.is_active ? "Active" : "Inactive"}</td>
                                <td className="d-flex gap-1">
                                    
                                    <DeleteFactory id={factory.id} />
                                    <EditFactory id={factory.id} name={factory.name || ''} phone={factory.phone || "_"}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </div>
    )
}