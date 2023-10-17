import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import { Modal } from '@mui/base/Modal';
import { ChangeCircle } from '@mui/icons-material';
import FormBook from './FormBook';
import axios from 'axios';
import DataApi from './DataApi';
import ShowBook from './ShowBook';

function ModalBook({ dataBook, books, setBooks}) {
    const [show, setShow] = React.useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = (accept, newData) => {
        setShow(false);

        if (accept) {
            handleUpdate(newData)
        }
    };

    const handleUpdate = async (dataBook) => {
        const updatedBooks = books.map(book => {
            if (book.id == dataBook.id) {
                return { ...dataBook };
            }
            return book;
        });
        setBooks(updatedBooks);

        try {
            await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${dataBook.id}`, { dataBook });
            console.log(`Atualização bem-sucedida do livro: ${dataBook.title}`);
        } catch (error) {
            console.error('Erro na atualização:', error);
        }
    };

    return (
        <div>
            <button onClick={handleShow} className="btn btn-primary"> <ChangeCircle /></button>
            <StyledModal
                open={show}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                slots={{ backdrop: StyledBackdrop }}
            >
                <Box sx={style}>
                    <FormBook data={dataBook} handleClose={handleClose} />
                </Box>
            </StyledModal>
        </div>
    );
}

export default ModalBook;

const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    borderRadius: '12px',
    padding: '30px 32px 24px 32px',
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});
