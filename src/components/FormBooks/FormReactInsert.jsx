import '../../styles/App.css'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from './Schema';
import axios from 'axios';

function FormReactInsert() {
    let dataBook = {
        id: '',
        title: '',
        description: '',
        publishDate: '',
        pageCount: '',
        excerpt: '',
      };

    const handleSubmit = (data) => {
        handleInsert(data);
    };

    const handleInsert = async (dataBook) => {
        dataBook.id = 0

        try {
            await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${dataBook.id}`, { dataBook });
            console.log(`Registro inserido com sucesso, livro: ${dataBook.title}`);
        } catch (error) {
            console.error('Erro ao inseir:', error);
        }
    };

    return (
        <div className="register-form">
            <Formik
                initialValues={dataBook}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, resetForm }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="title">Titulo:</label>
                            <Field
                                name="title"
                                type="text"
                                className={
                                    'form-control' +
                                    (errors.title && touched.title ? ' is-invalid' : '')
                                }
                            />
                            <ErrorMessage
                                name="title"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"> Descrição: </label>
                            <Field
                                name="description"
                                type="text"
                                className={
                                    'form-control' +
                                    (errors.description && touched.description ? ' is-invalid' : '')
                                }
                            />
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="publishDate"> Data de Publicação: </label>
                            <Field
                                name="publishDate"
                                type="text"
                                className={
                                    'form-control' +
                                    (errors.publishDate && touched.publishDate ? ' is-invalid' : '')
                                }
                            />
                            <ErrorMessage
                                name="publishDate"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pageCount"> Número de Paginas: </label>
                            <Field
                                name="pageCount"
                                type="text"
                                className={
                                    'form-control' +
                                    (errors.pageCount && touched.pageCount ? ' is-invalid' : '')
                                }
                            />
                            <ErrorMessage
                                name="pageCount"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="excerpt"> Resumo: </label>
                            <Field
                                name="excerpt"
                                type="text"
                                className={
                                    'form-control' +
                                    (errors.excerpt && touched.excerpt
                                        ? ' is-invalid'
                                        : '')
                                }
                            />
                            <ErrorMessage
                                name="excerpt"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" className="btn btn-warning"
                                onClick={resetForm}
                            >
                                Limpar
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default FormReactInsert;