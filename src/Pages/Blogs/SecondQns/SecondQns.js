import React from 'react';
import { Card, Table } from 'react-bootstrap';

const SecondQns = () => {
    return (
        <Card className='p-3 border-0 shadow mb-5'>
            <h4 className='brand-text text-center mb-3'>Differences between sql and nosql databases.</h4>
            <Card.Body>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SQL databases are basically called Relational Database.</td>
                            <td>NoSQL databases are called Non-relational Database.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>SQL databases are table-based databases.</td>
                            <td>NoSQL databases can be document-based or key-value pairs or graph databases.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Examples of SQL databases are Oracle, Postgres, My-SQL, etc.</td>
                            <td>Examples of SQL databases are MongoDB, Redis, Neo4j, etc.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>SQL was developed in 1970.</td>
                            <td>NoSQL was developed in 2000.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>SQL databases are best when we need complex queries.</td>
                            <td>NoSQL databases are not so good if we need complex quires.</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default SecondQns;