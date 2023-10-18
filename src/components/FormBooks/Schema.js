import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    title: Yup.string().required('Deve informar o título do Livro'),
    description: Yup.string()
        .required('Deve informar uma Descrição')
        .min(6, 'O usuário deve ter pelo menos 6 caracteres')
        .max(20, 'O usuário não pode ultrapassar 20 caracteres'),
    publishDate: Yup.string()
        .required('Deve informar a data de publicação'),
    pageCount: Yup.string()
        .required('Deve informar de página'),
    excerpt: Yup.string()
        .required('Deve informar algum resumo')
});

export default validationSchema;