import React from 'react';
import { Card, Table } from 'react-bootstrap';

const FirstQns = () => {
    return (
        <Card className='p-3 border-0 shadow mb-5'>
            <h4 className='brand-text text-center mb-3'>Difference between javascript and node js.</h4>
            <Card.Body>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Javascript</th>
                            <th>NodeJs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript is a programming language run in any web browser.</td>
                            <td>Node js is an interpreter and environment for run javascripts.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript used for client-side.</td>
                            <td>Node js is used for server-side.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Javascript runs any engine like Spider monkey, V8 engine etc.</td>
                            <td>Node js only run in V8 engine (mainly used in google chrome).</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>The javascript frameworks are Vue Js, Angular js, Ember js etc.</td>
                            <td>Node js frameworks are Express js, Koa js, Nest js etc.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Javascript only runs in the browser.</td>
                            <td>Node js help us to run javascript outside of the browser.</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default FirstQns;